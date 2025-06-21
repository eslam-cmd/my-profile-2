import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import { Typography, IconButton, Box, useMediaQuery } from "@mui/material";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function ProjectSection() {
  const projects = [
    {
      id: 1,
      title: "Weather App React",
      description:
        "An interactive weather application built with React that provides real-time climate data for cities around the world.",
      photo: "imgweatherreact.png",
      linkview: "https://eslam-cmd.github.io/Weather-App-React/",
      linkgithub: "https://github.com/eslam-cmd/Weather-App-React",
      tech: "react",
    },
    {
      id: 2,
      title: "Travel and Tourism",
      description:
        "A visually engaging website that highlights famous travel destinations across the globe with smooth and simple navigation.",
      photo: "imgtravel.png",
      linkview: "https://eslam-cmd.github.io/A-site-for-tourism-and-travel/",
      linkgithub: "https://github.com/eslam-cmd/A-site-for-tourism-and-travel",
      tech: "htmlcss",
    },
    {
      id: 3,
      title: "Prays Times",
      description:
        "A straightforward site that displays accurate prayer times across Syrian governorates, updated automatically.",
      photo: "prays-times.png",
      linkview: "https://eslam-cmd.github.io/Prays-Times/",
      linkgithub: "https://github.com/eslam-cmd/Prays-Times",
      tech: "react",
    },
    {
      id: 4,
      title: "Weather Wep",
      description:
        "A simple weather tool that shows the temperature in any selected country using vanilla HTML, CSS, and JavaScript.",
      photo: "imgweather.jpg",
      linkview: "https://eslam-cmd.github.io/weather-wep/",
      linkgithub: "https://github.com/eslam-cmd/weather-wep",
      tech: "htmlcssjs",
    },
    {
      id: 5,
      title: "Hospital Wep",
      description:
        "A hospital portal that provides information about departments, doctors, and allows users to book medical appointments easily.",
      photo: "imghospital.jpg",
      linkview: "https://eslam-cmd.github.io/hospital/",
      linkgithub: "https://github.com/eslam-cmd/hospital/tree/master",
      tech: "htmlcssjs",
    },
    {
      id: 6,
      title: "E-Commerce",
      description:
        "A full-featured e-commerce site built with React, including product browsing, shopping cart, and secure checkout features.",
      photo: "imgecommerce.png",
      linkview: "https://eslam-cmd.github.io/E-Commerce/",
      linkgithub: "https://github.com/eslam-cmd/E-Commerce",
      tech: "react",
    },
    {
      id: 7,
      title: "E-Learning",
      description:
        "A modern educational platform showcasing courses or learning content, designed using React.",
      photo: "imgelearining.png",
      linkview: "https://eslam-cmd.github.io/hospital/",
      linkgithub: "https://github.com/eslam-cmd/hospital/tree/master",
      tech: "react",
    },
    {
      id: 8,
      title: "Tea-Project",
      description:
        "A charming website dedicated to tea lovers, featuring different types of tea, pricing, and an aesthetic layout.",
      photo: "imgtea.png",
      linkview: "https://eslam-cmd.github.io/Tea-Project/",
      linkgithub: "https://github.com/eslam-cmd/Tea-Project",
      tech: "htmlcss",
    },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [selectedTech, setSelectedTech] = React.useState("all");

  const filteredProjects = projects.filter(
    (project) => selectedTech === "all" || project.tech === selectedTech
  );

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <section id="project">
        <Typography
          variant="h3"
          className="tools-skils"
          gutterBottom
          sx={{ textAlign: "center", color: "#5c6bc0", marginTop: "50px" }}
        >
          My Project
        </Typography>

        <Grid
          container
          justifyContent="center"
          spacing={2}
          sx={{ marginBottom: "20px" }}
        >
          {["all", "htmlcss", "react", "htmlcssjs"].map((category) => (
            <Grid item key={category}>
              <Button
                variant={selectedTech === category ? "contained" : "outlined"}
                color="primary"
                onClick={() => {
                  setSelectedTech(category);
                  setCurrentIndex(0);
                }}
                sx={{
                  textTransform: "none",
                  padding: "10px 20px",
                  color: "#fffff",
                  borderRadius: "10px",
                  marginBottom: "20px",
                  marginTop: "10px",
                }}
              >
                {category === "all"
                  ? "All Projects"
                  : category === "htmlcss"
                    ? "HTML & CSS"
                    : category === "react"
                      ? "React.js"
                      : "JavaScript"}
              </Button>
            </Grid>
          ))}
        </Grid>

        {filteredProjects.length === 0 ? (
          <Typography
            variant="h6"
            sx={{ color: "#ff5555", textAlign: "center", marginTop: "20px" }}
          >
            There are no projects for this section. Projects will be uploaded
            soon.
          </Typography>
        ) : isMobile ? (
          <Box
            sx={{ position: "relative", width: "100%", textAlign: "center" }}
          >
            <IconButton
              onClick={handlePrev}
              sx={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>

            <Box sx={{ display: "inline-block", mx: "auto" }}>
              <ProjectCard project={filteredProjects[currentIndex]} />
            </Box>

            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        ) : (
          <Grid container spacing={2} justifyContent="center">
            {filteredProjects.map((project) => (
              <Grid item xs={12} sm={6} md={3} key={project.id}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        )}

        <Divider
          sx={{
            backgroundColor: "#ddd",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        />
      </section>
    </>
  );
}

function ProjectCard({ project }) {
  return (
    <Card
      className="card-project"
      sx={{
        maxWidth: "441px",
        width: 250,
        minWidth: "310px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: ".5s",
        padding: "5px",
        background: "#28307248",
        borderRadius: "24px",
        boxShadow: "0px 4px 10px rgba(25, 118, 210, 0.37)",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="230"
          image={project.photo}
          alt="Project Image"
        />
        <Divider sx={{ backgroundColor: "#1976d2", marginTop: "5px" }} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5">
            {project.title}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "12px" }}>
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Link href={project.linkgithub} target="_blank" rel="noopener">
          <GitHubIcon
            sx={{
              transition: ".5s",
              background: "#444",
              borderRadius: "50px",
              width: "60px",
              height: "25px",
              color: "#1976d2",
            }}
          />
        </Link>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ background: "#ddd", mx: 1 }}
        />
        <Link href={project.linkview} target="_blank" rel="noopener">
          <VisibilityIcon
            sx={{
              transition: ".5s",
              background: "#444",
              borderRadius: "50px",
              width: "60px",
              height: "25px",
              color: "#39aa3e",
            }}
          />
        </Link>
      </CardActions>
    </Card>
  );
}
