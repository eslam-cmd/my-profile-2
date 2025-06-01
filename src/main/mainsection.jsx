import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
// import icon
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";

// install pdf
// function handleDownload() {
//   fetch("/my-profile-2/Islamcv.pdf")
//     .then((response) => response.blob())
//     .then((blob) => {
//       const url = URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.download = "Islamcv.pdf";
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     })
//     .catch((error) => console.error("حدث خطأ أثناء التنزيل:", error));
// }
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
            height: { xs: "13vh", sm: "13vh", md: "30vh" },
            padding: { xs: "20px", sm: "30px", md: "50px" },
            marginTop: { xs: "10px", sm: "20px", md: "30px" },
            textAlign: "left",
            maxWidth: { xs: "100%", sm: "80%", md: "60%" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
              fontWeight: "bold",
            }}
          >
            Hi, I'm Islam
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
              lineHeight: { xs: "1.4", sm: "1.6", md: "1.8" },
              maxWidth: "90%",
            }}
          >
            Islam Hadiya, 18 years old, is a front-end developer from Aleppo,
            Syria, specializing in React.js with one year of experience in
            building interactive and smooth web applications. I work well within
            teams, and my goal is to develop innovative web solutions with a
            focus on user experience.
          </Typography>

          <Button
            // onClick={handleDownload}
            variant="contained"
            sx={{
              marginTop: "25px",
              fontSize: { xs: "0.8rem", md: "1rem" },
              padding: { xs: "8px 16px", md: "10px 20px" },
            }}
            endIcon={<DownloadIcon />}
          >
            Download my CV
          </Button>
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
              <LinkedInIcon sx={{ ml: 2, color: "rgb(101, 115, 195)" }} />
            </Link>
          </Box>
        </Box>
      </section>
    </>
  );
}
