import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import { TypeAnimation } from "react-type-animation";
import AppsIcon from "@mui/icons-material/Apps";
export default function MainSection() {
  return (
    <>
      <section id="home">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            height: { xs: "20vh", sm: "17vh", md: "32vh" },
            padding: { xs: "20px", sm: "30px", md: "50px" },
            textAlign: "left",
            maxWidth: { xs: "100%", sm: "80%", md: "60%" },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1.1rem", sm: "1.2rem", md: "2rem" },
              lineHeight: { xs: "1.4", sm: "1.6", md: "1.8" },
              maxWidth: "90%",
              minHeight: "120px",
              fontWeight: "bold",
            }}
          >
            <TypeAnimation
              sequence={[
                "Hello there, I'm Islam, a Passionate Front End Developer",
                2000,
                "Passionate about creating beautiful web experiences",
                2000,
                "Specialized in React ",
                1700,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: "inline-block", width: "100%" }}
            />
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: ".8rem", sm: "1rem", md: "1.1rem" },
            }}
          >
            I'm Islam Hedaya, an 18-year-old front-end web developer based in
            Aleppo, Syria. I'm currently a high school student majoring in
            information technology and am seeking to pursue a career in
            information engineering. I'm passionate about clean programming and
            user-friendly design, and I leverage technology to bring digital
            ideas to life and enhance user experiences.
          </Typography>
          <div style={{ display: "flex", gap: "25px" }}>
            <Button
              variant="Outline"
              sx={{
                marginTop: "25px",
                fontSize: { xs: "0.8rem", md: "1rem" },
                padding: { xs: "8px 16px", md: "10px 20px" },
                borderRadius: "25px",
                border: "1px solid #3f51b5",
              }}
              endIcon={<DownloadIcon />}
            >
              Download my CV
            </Button>
            <Button
              variant="contained"
              sx={{
                marginTop: "25px",
                fontSize: { xs: "0.8rem", md: "1rem" },
                padding: { xs: "8px 16px", md: "10px 20px" },
                borderRadius: "25px",
              }}
              onClick={() => {
                window.location.href = "#project"; 
              }}
              endIcon={<AppsIcon />}
            >
              Veiw Projects
            </Button>
          </div>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Link href="mailto:hdayaaslam34@gmail.com" target="_blank">
              <EmailIcon />
            </Link>
            <Link
              href="https://www.facebook.com/islam.hadaya.2025?mibextid=ZbWKwL"
              target="_blank"
            >
              <FacebookIcon sx={{ mr: 2, ml: 2, color: "#3f51b5" }} />
            </Link>
            <Link href="https://github.com/eslam-cmd" target="_blank">
              <GitHubIcon sx={{ color: "currentcolor" }} />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/eslam-hd-60a056357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            >
              <LinkedInIcon sx={{ ml: 2, color: "#6573c3" }} />
            </Link>
          </Box>
        </Box>
      </section>
    </>
  );
}
