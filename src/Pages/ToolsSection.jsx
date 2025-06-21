import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Divider from "@mui/material/Divider";

const cards = [
  {
    id: 1,
    title: "HTML",
    icon: (
      <img
        src="https://tse1.mm.bing.net/th/id/OIP.bdIC5rv3xZPGzD8Md7erOgHaHa?w=500&h=500&rs=1&pid=ImgDetMain"
        style={{ width: "60px", height: "60px", borderRadius: "80%" }}
      />
    ),
  },
  {
    id: 2,
    title: "CSS",
    icon: (
      <img
        src="https://logospng.org/download/css-3/logo-css-3-1536.png"
        style={{ width: "60px", height: "60px", borderRadius: "80%" }}
      />
    ),
  },
  {
    id: 3,
    title: "tailwind",
    icon: (
      <img
        src="https://bradlc.gallerycdn.vsassets.io/extensions/bradlc/vscode-tailwindcss/0.6.6/1621527312375/Microsoft.VisualStudio.Services.Icons.Default"
        style={{ width: "60px", height: "60px", borderRadius: "80%" }}
      />
    ),
  },
  {
    id: 4,
    title: "Bootstrap",
    icon: (
      <img
        src="https://tse1.mm.bing.net/th/id/OIP.dphNSJAWu3jIw0fmYbuOlAHaHa?rs=1&pid=ImgDetMain"
        style={{ width: "60px", height: "60px", borderRadius: "50%" }}
      />
    ),
  },
  {
    id: 5,
    title: "react hoot",
    icon: (
      <img
        src="https://i.ytimg.com/vi/nF4vw3efUwY/maxresdefault.jpg"
        style={{ width: "60px", height: "60px", borderRadius: "50%" }}
      />
    ),
  },
  {
    id: 6,
    title: "React.js",
    icon: (
      <img
        src="https://tse3.mm.bing.net/th/id/OIP.tHYR-6oYpduV1jPgI4QPVgHaHa?rs=1&pid=ImgDetMain"
        style={{ width: "60px", height: "60px", borderRadius: "50%" }}
      />
    ),
  },
  
  {
    id: 8,
    title: "redux",
    icon: (
      <img
        src="https://parentmentor.osu.edu/wp-content/uploads/2023/10/Untitled-design-18.png"
        style={{ width: "60px", height: "60px", borderRadius: "50%" }}
      />
    ),
  },
  {
    id: 9,
    title: "Javascribt",
    icon: (
      <img
        src="https://th.bing.com/th/id/R.970ea0c9d5d94816a50710bbc417e145?rik=%2bCwGvjUMC1%2bQAw&pid=ImgRaw&r=0"
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "80%",
          background: "#444",
        }}
      />
    ),
  },
  {
    id: 10,
    title: "MUI",
    icon: (
      <img
        src="https://tse2.mm.bing.net/th/id/OIP.L0NzIbVS-dLMmaypxXZ_BwAAAA?pid=ImgDet&w=150&h=150&c=7"
        style={{ width: "60px", height: "60px", borderRadius: "80%" }}
      />
    ),
  },
  {
    id: 11,
    title: "react-router",
    icon: (
      <img
        src="https://studio.uxpincdn.com/studio/wp-content/uploads/2024/07/react-router.webp"
        style={{ width: "60px", height: "60px", borderRadius: "50%" }}
      />
    ),
  },
  {
    id: 12,
    title: "Githup",
    icon: (
      <img
        src="https://th.bing.com/th/id/R.3480db5eabd3ef35cf349caa44c5171e?rik=APb6t5LHhv7J3Q&pid=ImgRaw&r=0"
        style={{ width: "60px", height: "60px", borderRadius: "35px" }}
      />
    ),
  },
  {
    id: 13,
    title: "axios",
    icon: (
      <img
        src="https://logowik.com/content/uploads/images/axios3626.jpg"
        style={{ width: "60px", height: "60px", borderRadius: "35px" }}
      />
    ),
  },
];

export default function ToolsSection() {
  return (
    <>
      <section id="skills">
        <Divider sx={{ backgroundColor: "#ddd", marginTop: "230px" }} />

        <Typography
          variant="h3"
          className="tools-skils"
          gutterBottom
          sx={{ textAlign: "center", color: "#5c6bc0", marginTop: "50px" }}
        >
          Tools & Skills
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ textAlign: "center", color: "#aaa" }}
        >
          I Work Hard To Improve My Skills Regularly
        </Typography>

        <Grid
          container
          spacing={1.5}
          justifyContent="center"
          sx={{ marginTop: "50px" }}
        >
          {cards.map((card) => (
            <Grid xs={6} sm={4} lg={2} key={card.id}>
              <Card
                sx={{
                  boxShadow: "0px 4px 10px rgba(13, 21, 29, 0.37)",
                  textAlign: "center",
                  width: "150px",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              >
                <CardActionArea>
                  <CardContent
                    className="card-tools"
                    sx={{ textAlign: "center" }}
                  >
                    {card.icon}
                    <Typography
                      className="title-card"
                      variant="body1"
                      sx={{ color: "#5c6bc0", marginTop: "10px" }}
                    >
                      {card.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>
      <Divider sx={{ backgroundColor: "#ddd", marginTop: "50px" }} />
    </>
  );
}
