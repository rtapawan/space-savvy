import {
  Box,
  Stack,
  Typography,
  Chip,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { Launches, Launchpads } from "../constants";
import { useState } from "react";

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
      sx={{ width: "100%", p: 6 }}
    >
      <Box
        sx={{
          flex: isSmallScreen ? "1 1 auto" : "0 1 auto",
          display: "flex",
          alignItems: "top",
          justifyContent: "center",
        }}
      >
        <Image
          src={patchImg}
          onError={handlePatchImgError}
          alt="Logo"
          width={128}
          height={128}
        />
      </Box>
      <Stack
        direction="column"
        spacing={2}
        sx={{
          flex: isSmallScreen ? "1 1 auto" : "1 1 0%",
          display: "flex",
        }}
      >
        <Stack
          direction={isSmallScreen ? "column" : "row"}
          sx={{
            display: "flex",
            alignItems: "center",
            py: "12px",
          }}
        >
          <Box
            sx={{
              flex: "1 1 0%",
              pt: isSmallScreen ? "20px" : "0px",
              px: "32px",
            }}
          >
            <Stack
              direction="column"
              sx={{
                display: "flex",
                alignItems: isSmallScreen ? "center" : "flex-start",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Stack direction={isSmallScreen ? "column" : "row"}>
                <Typography
                  variant="h5"
                  color={"black"}
                  align={isSmallScreen ? "center" : "left"}
                >
                  {`${props.launch.rocket?.rocket_name} - ${props.launch.payloads?.[0]?.payload_id}`}
                  {!isMissionSuccessful && <>&nbsp;-&nbsp;</>}
                </Typography>
                {!isMissionSuccessful && (
                  <Typography
                    variant="h5"
                    color={"red"}
                    align={isSmallScreen ? "center" : "left"}
                  >
                    Failed Mission
                  </Typography>
                )}
              </Stack>

              <Typography
                variant="subtitle1"
                color={"gray"}
                align={isSmallScreen ? "center" : "left"}
              >
                {`Launched on ${formattedDate} at ${formattedTime} from ${props.launchpad.full_name}`}
              </Typography>
            </Stack>
          </Box>
          <Box sx={{ flex: "0 1 auto", pt: isSmallScreen ? "20px" : "0px" }}>
            <Stack
              direction="column"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Typography variant="h5" color={"black"}>
                {`#${props.launch.flight_number}`}
              </Typography>
              <Typography variant="subtitle1" color={"gray"}>
                Flight Number
              </Typography>
            </Stack>
          </Box>
        </Stack>
        <Stack
          direction="row"
          sx={{
            flexWrap: "wrap",
            justifyContent: isSmallScreen ? "center" : "flex-start",
            gap: "12px",
            width: "100%",
            pt: "12px",
            px: isSmallScreen ? "0px" : "32px",
          }}
        >
          {links
            .filter(([key, value]) => key !== "mission_patch" && value)
            .map(([key, value]) => (
              <Button
                key={key}
                variant="outlined"
                href={value}
                target="_blank"
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

export default Mission;
