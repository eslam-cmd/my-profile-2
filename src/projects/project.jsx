import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import "./project.css";
// import icons
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function ProjectSection() {
  const projects = [
    {
      id: 1,
      title: "login page",
      description:
        "This website is a login interface programmed with HTML, CSS.",
      photo:
        "https://tse2.mm.bing.net/th/id/OIP.IUvHf9Rhi_-PWdZ2j0j4IgHaHa?rs=1&pid=ImgDetMain",
      linkview: "https://eslam-cmd.github.io/login-page/",
      linkgithub: "https://github.com/eslam-cmd/login-page",
      tech: "htmlcss",
    },
    {
      id: 2,
      title: "Travel and tourism",
      description:
        "This website is for showcasing travel and tourism destinations around the world, programmed with HTML, CSS",
      photo:
        "https://tse2.mm.bing.net/th/id/OIP.IUvHf9Rhi_-PWdZ2j0j4IgHaHa?rs=1&pid=ImgDetMain",
      linkview: "https://eslam-cmd.github.io/A-site-for-tourism-and-travel/",
      linkgithub: "https://github.com/eslam-cmd/A-site-for-tourism-and-travel",
      tech: "htmlcss",
    },
    {
      id: 3,
      title: "Photography page",
      description:
        "This site displays photographs with a simple interface. programmed with HTML, CSS",
      photo:
        "https://tse2.mm.bing.net/th/id/OIP.IUvHf9Rhi_-PWdZ2j0j4IgHaHa?rs=1&pid=ImgDetMain",
      linkview: "https://eslam-cmd.github.io/Photography-page/",
      linkgithub: "https://github.com/eslam-cmd/Photography-page",
      tech: "htmlcss",
    },
    {
      id: 4,
      title: "Weather wep",
      description:
        "This site displays the temperature in any country entered, programmed with HTML, CSS, JavaScript",
      photo:
        "https://tse2.mm.bing.net/th/id/OIP.IUvHf9Rhi_-PWdZ2j0j4IgHaHa?rs=1&pid=ImgDetMain",
      linkview: "https://eslam-cmd.github.io/weather-wep/",
      linkgithub: "https://github.com/eslam-cmd/weather-wep",
      tech: "htmlcssjs",
    },
    // {
    //   id: 5,
    //   title: "Not available now",
    //   description: "Projects will be uploaded soon..",
    //   photo:
    //     "https://tse1.mm.bing.net/th/id/OIP.IWJekDakNkIP_AOfgQxEWgAAAA?rs=1&pid=ImgDetMain",
    // },
    // {
    //   id: 6,
    //   title: "Not available now",
    //   description: "Projects will be uploaded soon..",
    //   photo:
    //     "https://tse1.mm.bing.net/th/id/OIP.IWJekDakNkIP_AOfgQxEWgAAAA?rs=1&pid=ImgDetMain",
    // },
    // {
    //   id: 7,
    //   title: "Not available now",
    //   description: "Projects will be uploaded soon..",
    //   photo:
    //     "https://tse1.mm.bing.net/th/id/OIP.IWJekDakNkIP_AOfgQxEWgAAAA?rs=1&pid=ImgDetMain",
    // },
    // {
    //   id: 8,
    //   title: "Not available now",
    //   description: "Projects will be uploaded soon..",
    //   photo:
    //     "https://tse1.mm.bing.net/th/id/OIP.IWJekDakNkIP_AOfgQxEWgAAAA?rs=1&pid=ImgDetMain",
    // },
  ];

  const [selectedTech, setSelectedTech] = React.useState("all");

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
        {/* toggle button */}
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
                onClick={() => setSelectedTech(category)}
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
                      : "HTML, CSS, JS"}
              </Button>
            </Grid>
          ))}
        </Grid>
        {/*== toggle button ==*/}

        {/* card */}
        <Grid container spacing={2} justifyContent="center">
          {projects.filter(
            (project) => selectedTech === "all" || project.tech === selectedTech
          ).length === 0 ? (
            <Typography
              variant="h6"
              sx={{ color: "#ff5555", textAlign: "center", marginTop: "20px" }}
            >
              There are no projects for this section. Projects will be uploaded
              soon.
            </Typography>
          ) : (
            projects
              .filter(
                (project) =>
                  selectedTech === "all" || project.tech === selectedTech
              )
              .map((project) => (
                <Grid item xs={12} sm={6} md={3} key={project.id}>
                  <Card
                    className="card-project"
                    sx={{
                      maxWidth: 345,
                      width: 250,
                      transition: ".5s",
                      background: "#28307248",
                      borderRadius: "10px",
                      boxShadow: "0px 4px 10px rgba(25, 118, 210, 0.37)",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="160"
                        image={project.photo}
                        alt="Project Image"
                      />
                      <Divider
                        sx={{ backgroundColor: "#1976d2", marginTop: "5px" }}
                      />
                      <CardContent sx={{ textAlign: "left" }}>
                        <Typography gutterBottom variant="h5">
                          {project.title}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: "12px" }}>
                          {project.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions
                      sx={{ justifyContent: "center", paddingBottom: "10px" }}
                    >
                      <Link href={project.linkgithub}>
                        <GitHubIcon
                          className="github-btn"
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
                        sx={{ background: "#ddd" }}
                      />
                      <Link href={project.linkview}>
                        <VisibilityIcon
                          className="eye-btn"
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
                </Grid>
              ))
          )}
        </Grid>
        <Divider
          sx={{
            backgroundColor: "#ddd",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        />
        {/*== card ==*/}
      </section>
    </>
  );
}
