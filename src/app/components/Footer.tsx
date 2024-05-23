import { Stack, Typography } from "@mui/material";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const handleBackToTop = () => {
    document
      .getElementById("missions-list")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Stack direction="row" className={styles.container}>
      <Typography className={styles.copyright}>
        Copyright &copy; 2018 Space Savvy
      </Typography>
      <Typography className={styles.backToTop} onClick={handleBackToTop}>
        Back to top
      </Typography>
    </Stack>
  );
};

export default Footer;
