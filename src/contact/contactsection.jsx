import * as React from "react";
import emailjs from "emailjs-com";
import { useRef, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function Contact() {
  const formRef = useRef();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bihur5e",
        "template_67dluvw",
        formRef.current,
        "TJQrTHj8YbQMKH9xb"
      )
      .then(
        (result) => {
          setOpenSnackbar(true);
        },
        (error) => {
          console.error("An error occurred while sending!", error.text);
        }
      );
  };
  useEffect(() => {
    console.log("تم تحميل مكون الاتصال");
  }, []);
  return (
    <section
      id="contact"
      style={{
        height: "700px",
        justifyContent: "center",
        display: "flex",
        textAlign: "center",
      }}
    >
      <Grid container justifyContent="center" sx={{ mt: 3, mb: 4 }}>
        <Card
          style={{
            boxShadow: "0px 4px 10px rgba(25, 118, 210, 0.37)",
            width: "600px",
            background: "#36384d48",
            border: "1px solid #1976d2",
            borderRadius: "10px",
          }}
        >
          <CardContent>
            <Typography variant="h3" color="primary" sx={{ fontWeight: "700" }}>
              Let's work together
            </Typography>
            <Typography variant="body1" sx={{ mt: 4, color: "#222222" }}>
              You can send your inquiries and we will respond to you as soon as
              possible.
            </Typography>
            <form ref={formRef} onSubmit={sendEmail}>
              <Box flexDirection={"column"} display={"flex"}>
                <TextField
                  name="name"
                  label="Name"
                  variant="outlined"
                  required
                  sx={{ mt: 2, "& .MuiInputBase-input": { color: "white" } }}
                />
                <TextField
                  name="email"
                  label="Email"
                  variant="outlined"
                  required
                  sx={{ mt: 2, "& .MuiInputBase-input": { color: "white" } }}
                />
                <TextField
                  name="message"
                  label="Your message ..."
                  variant="outlined"
                  required
                  multiline
                  rows={4}
                  sx={{ mt: 2, "& .MuiInputBase-input": { color: "white" } }}
                />
              </Box>
              <CardActions sx={{ justifyContent: "center", display: "flex" }}>
                <Button
                  type="submit"
                  size="large"
                  variant="contained"
                  sx={{
                    boxShadow: "0px 8px 13px rgba(0,0,0,0.3)",
                    marginBottom: "20px",
                    marginTop: "10px",
                  }}
                >
                  Submit
                </Button>
              </CardActions>
            </form>
          </CardContent>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
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
        </Card>
      </Grid>

      {/*  إضافة رسالة النجاح */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert severity="success" onClose={() => setOpenSnackbar(false)}>
          The message was sent successfully.!✅
        </Alert>
      </Snackbar>
    </section>
  );
}
