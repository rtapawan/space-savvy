import { Launches, Launchpads } from "../constants";
import { useCallback, useEffect, useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  Select,
  MenuItem,
  Divider,
  InputLabel,
  FormControl,
  Alert,
  Snackbar,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Mission from "./Mission";
import styles from "../styles/Body.module.css";

export type BodyProps = {
  launches: Launches[];
  launchpads: Launchpads[];
};

const Body = (props: BodyProps) => {
  const [currentData, setCurrentData] = useState(props.launches);
  const [currentKeywords, setCurrentKeywords] = useState("");
  const [currentLaunchPad, setCurrentLaunchPad] = useState("Any");
  const [currentMinYear, setCurrentMinYear] = useState(-1);
  const [currentMaxYear, setCurrentMaxYear] = useState(9999);
  const [isInvalidYearRange, setIsInvalidYearRange] = useState(false);

  const getYears = useCallback(() => {
    if (props.launches) {
      return Array.from(
        new Set(
          props.launches
            .map((item) => new Date(item.launch_date_local ?? "").getFullYear())
            .reverse()
        )
      );
    } else {
      return [];
    }
  }, [props.launches]);

  const getLinks = useCallback(() => {
    let missionsLabel = "";
    if (currentData.length === 0) {
      missionsLabel = "No Mission Found";
    } else if (currentData.length === 1) {
      missionsLabel = "Showing 1 Mission";
    } else {
      missionsLabel = `Showing ${currentData.length} Missions`;
    }
    return (
      <>
        <Typography
          variant="subtitle1"
          color={"gray"}
          className={styles.missionsLabel}
          sx={{ mt: "48px" }}
        >
          {missionsLabel}
        </Typography>
        {currentData.map((item, index) => (
          <>
            {index > 0 && <Divider className={styles.divider} sx={{ mx: 6 }} />}
            <Mission
              key={index}
              launch={item}
              launchpad={
                props.launchpads.find(
                  (value) => value.id === item.launch_site?.site_id
                ) ?? {}
              }
            />
          </>
        ))}
      </>
    );
  }, [currentData]);

  useEffect(() => {
    if (props.launches) {
      setCurrentData(props.launches);
    }
  }, [props.launches]);

  return (
    <Stack className={styles.container}>
      <Snackbar
        open={isInvalidYearRange}
        autoHideDuration={2000}
        onClose={() => setIsInvalidYearRange(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        className={styles.snackbar}
      >
        <Alert variant="filled" severity="error">
          Invalid year range
        </Alert>
      </Snackbar>

      <Grid
        container
        spacing={2}
        columns={{ xs: 4, sm: 8, md: 20 }}
        className={styles.gridContainer}
        sx={{ m: 0 }}
      >
        <Grid xs={4} sm={4} md>
          <TextField
            id="keywords"
            label="Keywords"
            variant="outlined"
            placeholder="eg Falcon"
            onChange={(event) => {
              setCurrentKeywords(event.target.value);
            }}
            className={styles.textField}
          />
        </Grid>
        <Grid xs={4} sm={4} md>
          <FormControl fullWidth>
            <InputLabel id="launch-pad-select-label">Launch Pad</InputLabel>
            <Select
              labelId="launch-pad-select-label"
              id="launch-pad-select"
              value={currentLaunchPad}
              label="Launch Pad"
              onChange={(event) => {
                setCurrentLaunchPad(event.target.value);
              }}
            >
              <MenuItem value={"Any"}>Any</MenuItem>
              {props.launchpads.map((item, index) => (
                <MenuItem key={index} value={item.id ?? index}>
                  {item.full_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={2} sm={4} md={3}>
          <FormControl fullWidth>
            <InputLabel id="min-year-select-label">Min Year</InputLabel>
            <Select
              labelId="min-year-select-label"
              id="min-year-select"
              value={currentMinYear}
              label="Min Year"
              onChange={(event) => {
                setCurrentMinYear(Number(event.target.value));
              }}
            >
              <MenuItem value={-1}>Any</MenuItem>
              {getYears().map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={2} sm={4} md={3}>
          <FormControl fullWidth>
            <InputLabel id="max-year-select-label">Max Year</InputLabel>
            <Select
              labelId="max-year-select-label"
              id="max-year-select"
              value={currentMaxYear}
              label="Max Year"
              onChange={(event) => {
                setCurrentMaxYear(Number(event.target.value));
              }}
            >
              <MenuItem value={9999}>Any</MenuItem>
              {getYears().map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={4} sm={8} md={"auto"}>
          <Button
            variant="contained"
            id="apply"
            onClick={() => {
              if (currentMinYear > currentMaxYear) {
                setIsInvalidYearRange(true);
                return;
              }

              let filteredList = props.launches;
              if (currentKeywords.length > 0) {
                filteredList = filteredList.filter((item) => {
                  const payloadIds =
                    props.launches
                      .find(
                        (inner) => inner.flight_number === item.flight_number
                      )
                      ?.payloads?.map((launch) => launch.payload_id ?? "") ??
                    [];
                  const isMatchingPayloadIds = payloadIds.find((inner) =>
                    inner.toLowerCase().includes(currentKeywords.toLowerCase())
                  );
                  return (
                    item.flight_number?.toString() === currentKeywords ||
                    item.rocket?.rocket_name
                      ?.toLowerCase()
                      .includes(currentKeywords.toLowerCase()) ||
                    isMatchingPayloadIds
                  );
                });
              }
              if (currentLaunchPad !== "Any") {
                filteredList = filteredList.filter(
                  (item) => item.launch_site?.site_id === currentLaunchPad
                );
              }
              filteredList = filteredList.filter((item) => {
                const date = new Date(
                  item.launch_date_local ?? ""
                ).getFullYear();
                if (currentMinYear !== -1 && currentMaxYear !== 9999) {
                  return date >= currentMinYear && date <= currentMaxYear;
                } else if (currentMinYear !== -1) {
                  return date >= currentMinYear;
                } else if (currentMaxYear !== 9999) {
                  return date <= currentMaxYear;
                }
                return true;
              });

              setCurrentData(filteredList);
            }}
            className={styles.button}
            sx={{
              minWidth: "150px",
            }}
          >
            Apply
          </Button>
        </Grid>
      </Grid>
      <Box id="missions-list" className={styles.missionsList}>
        <Divider />
        {getLinks()}
      </Box>
    </Stack>
  );
};

export default Body;
