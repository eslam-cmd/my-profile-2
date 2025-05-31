import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

export default function MainSection() {
  return (
    <>
      <section id="home">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start", // يحرك النصوص إلى اليسار
            justifyContent: "flex-start", // يجعل المحتوى يأخذ الزاوية العلوية
            height: { xs: "10vh", md: "10vh" }, // متجاوب حسب حجم الشاشة
            padding: { xs: "40px", md: "75px" },
            marginTop: { xs: "40px", md: "75px" }, // لضبط المسافات
            textAlign: "left", // يجعل النصوص تبدأ من اليسار
          }}
        >
          <Typography
            variant="h2"
            sx={{ color: "#fff", fontSize: { xs: "2rem", md: "3rem" } }}
          >
            Hi, I'm Islam
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "#aaa",
              letterSpacing: "1px",
              fontSize: { xs: "1.2rem", md: "1.8rem" },
            }}
          >
            I'm a front-end developer
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#aaa", fontSize: { xs: "1rem", md: "1.2rem" } }}
          >
            I'm a front-end developer erg okjpeorjg pe
          </Typography>
          <Button
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
        </Box>
      </section>
    </>
  );
}
