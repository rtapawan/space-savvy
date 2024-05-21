import { Launches, Launchpads } from "../constants";
import { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Chip,
  Button,
  Select,
  MenuItem,
  Divider,
  InputLabel,
  FormControl,
  useMediaQuery,
  useTheme,
  TextField,
} from "@mui/material";
import Mission from "./Mission";

export type BodyProps = {
  launches: Launches[];
  launchpads: Launchpads[];
};

const Body = (props: BodyProps) => {
  const [currentData, setCurrentData] = useState(props.launches);

  useEffect(() => {
    if (props.launches) {
      setCurrentData(props.launches);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-row flex-wrap h-auto bg-gray-50 text-black px-6 py-4">
        <div className="flex-auto flex flex-col p-4">
          <TextField
            id="keywords"
            label="Keywords"
            variant="outlined"
            placeholder="eg Falcon"
          />
        </div>

        <div className="flex-auto flex flex-col p-4">
          <FormControl fullWidth>
            <InputLabel id="launch-pad-select-label">Launch Pad</InputLabel>
            <Select
              labelId="launch-pad-select-label"
              id="launch-pad-select"
              value={0}
              label="Launch Pad"
            >
              <MenuItem value={0}>Any</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="flex-auto flex flex-col p-4">
          <FormControl fullWidth>
            <InputLabel id="min-year-select-label">Min Year</InputLabel>
            <Select
              labelId="min-year-select-label"
              id="min-year-select"
              value={0}
              label="Min Year"
            >
              <MenuItem value={0}>Any</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="flex-auto flex flex-col p-4">
          <FormControl fullWidth>
            <InputLabel id="max-year-select-label">Max Year</InputLabel>
            <Select
              labelId="max-year-select-label"
              id="max-year-select"
              value={0}
              label="Max Year"
            >
              <MenuItem value={0}>Any</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="flex-initial flex flex-col p-4">
          <Button
            variant="contained"
            id="apply"
            onClick={() => {
              console.log("CLICKED");
            }}
            sx={{
              minWidth: "150px",
              height: "56px",
              marginTop: "auto",
            }}
          >
            Apply
          </Button>
        </div>
      </div>

      <div id="missions-list" className="w-full min-h-[500px] bg-white">
        <Divider />

        {currentData.length > 0 && (
          <>
            <p className="w-full text-center text-gray-500 mt-12">
              {`Showing ${currentData.length} Missions`}
            </p>
            {currentData.map((item, index) => (
              <>
                {index > 0 && <Divider sx={{ mx: 6 }} />}
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
        )}
      </div>
    </div>
  );
};

export default Body;
