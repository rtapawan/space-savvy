import {
  Box,
  Stack,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { Launches, Launchpads } from "../constants";
import { memo, useState } from "react";
import styles from "../styles/Mission.module.css";

export type MissionProps = {
  launch: Launches;
  launchpad: Launchpads;
};

const Mission = (props: MissionProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [patchImg, setPatchImg] = useState(
    props.launch.links?.mission_patch ?? ""
  );
  const handlePatchImgError = () => {
    setPatchImg("/space-photo.jpeg");
  };

  const isMissionSuccessful =
    props.launch.launch_success && props.launch.land_success;

  const date = new Date(props.launch.launch_date_local ?? "");
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();

  const links = Object.entries(props.launch.links ?? {});

  return (
    <Stack
      direction={isSmallScreen ? "column" : "row"}
      className={styles.container}
      sx={{ width: "100%", p: 6 }}
    >
      <Box className={styles.imageBox}>
        <Image
          src={patchImg}
          onError={handlePatchImgError}
          alt="Logo"
          width={128}
          height={128}
        />
      </Box>
      <Stack direction="column" spacing={2} className={styles.columnStack}>
        <Stack
          direction={isSmallScreen ? "column" : "row"}
          className={styles.rowStack}
        >
          <Box
            className={`${styles.flexItem} ${
              isSmallScreen ? styles.flexItemSmallScreen : ""
            }`}
          >
            <Stack
              direction="column"
              className={isSmallScreen ? styles.alignCenter : styles.alignLeft}
            >
              <Stack direction={isSmallScreen ? "column" : "row"}>
                <Typography
                  variant="h5"
                  className={styles.typographyBlack}
                  align={isSmallScreen ? "center" : "left"}
                >
                  {`${props.launch.rocket?.rocket_name} - ${props.launch.payloads?.[0]?.payload_id}`}
                  {!isMissionSuccessful && <>&nbsp;-&nbsp;</>}
                </Typography>
                {!isMissionSuccessful && (
                  <Typography
                    variant="h5"
                    className={styles.typographyRed}
                    align={isSmallScreen ? "center" : "left"}
                  >
                    Failed Mission
                  </Typography>
                )}
              </Stack>

              <Typography
                variant="subtitle1"
                className={styles.typographyGray}
                align={isSmallScreen ? "center" : "left"}
              >
                {`Launched on ${formattedDate} at ${formattedTime} from ${props.launchpad.full_name}`}
              </Typography>
            </Stack>
          </Box>
          <Box
            className={styles.flexItem}
            sx={{ flex: "0 1 auto", pt: isSmallScreen ? "20px" : "0px" }}
          >
            <Stack direction="column" className={styles.alignCenter}>
              <Typography variant="h5" className={styles.typographyBlack}>
                {`#${props.launch.flight_number}`}
              </Typography>
              <Typography variant="subtitle1" className={styles.typographyGray}>
                Flight Number
              </Typography>
            </Stack>
          </Box>
        </Stack>
        <Stack
          direction="row"
          className={`${styles.buttonGroup} ${
            isSmallScreen ? styles.buttonGroupCenter : ""
          }`}
        >
          {links
            .filter(([key, value]) => key !== "mission_patch" && value)
            .map(([key, value]) => (
              <Button
                key={key}
                variant="outlined"
                href={value}
                target="_blank"
                className={styles.buttonOutlined}
                sx={{
                  color: "gray",
                  borderColor: "gray",
                  px: "24px",
                  "&:hover": {
                    color: "white",
                    borderColor: "darkgray",
                    backgroundColor: "darkgray",
                  },
                }}
              >
                {getButtonTitle(key)}
              </Button>
            ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

const getButtonTitle = (fromTitle: string) => {
  switch (fromTitle) {
    case "article_link":
      return "Article";
    case "video_link":
      return "Watch Video";
    case "presskit":
      return "Press";
    case "reddit_campaign":
      return "Reddit Campaign";
    case "reddit_launch":
      return "Reddit Launch";
    case "reddit_recovery":
      return "Reddit Recovery";
    case "reddit_media":
      return "Reddit Media";
    default:
      return "Link";
  }
};

export default memo(Mission);
