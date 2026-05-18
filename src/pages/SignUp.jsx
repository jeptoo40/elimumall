import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

import logo from "../assets/Elimu logo.PNG";

export default function SignUp() {

  const navigate = useNavigate();

  const handleSubmit = async (event) => {

    event.preventDefault();

    const form = event.currentTarget;

    const formData = new FormData(form);

    try {

    const response = await fetch(
  "https://elimumall.loveslife.biz/signup.php",
  {
    method: "POST",
    mode: "cors",
    body: formData,
  }
);

      const data = await response.json();

      console.log(data);

      if (data.message) {

        alert("Registered successfully");

        navigate("/signin");

      } else {

        alert(data.error || "Signup failed");
      }

    } catch (error) {

      console.error("ERROR:", error);

      alert("Server connection failed");
    }
  };

  return (
    <Grid
      container
      component="main"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <CssBaseline />

      <Grid
        item
        xs={11}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
      >

        <Box
          sx={{
            my: 4,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >

          <Avatar
            src={logo}
            alt="Elimu Logo"
            sx={{
              width: 90,
              height: 90,
              m: 1,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />

          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >

            <Grid container spacing={2}>

              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  label="First Name"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  name="lastName"
                  required
                  fullWidth
                  label="Last Name"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name="email"
                  type="email"
                  required
                  fullWidth
                  label="Email Address"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name="password"
                  type="password"
                  required
                  fullWidth
                  label="Password"
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label={
                    <span>
                      I want to receive updates via email or{" "}
                      <Link href="/signin" variant="body2">
                        Sign in
                      </Link>
                    </span>
                  }
                />
              </Grid>

            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

          </Box>

        </Box>
      </Grid>
    </Grid>
  );
}
