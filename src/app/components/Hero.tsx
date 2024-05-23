import Image from "next/image";
import { Typography, Box } from "@mui/material";
import styles from "../styles/HeroSection.module.css";

const Hero = () => {
  const handleScrollDown = () => {
    document
      .getElementById("body-start")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box className={styles.heroSection}>
      <Box className={styles.overlay} />
      <Typography variant="h6" className={styles.title}>
        SPACE SAVVY
      </Typography>
      <Typography variant="h2" className={styles.mainText}>
        Discover Space Missions
      </Typography>
      <Image
        src="/down-chevron.svg"
        alt="Down Chevron"
        width={32}
        height={32}
        className={styles.chevronImage}
        onClick={handleScrollDown}
      />
    </Box>
  );
};

export default Hero;
