import React from "react";
import { 
  Avatar, 
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  makeStyles,
  Container} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    backgroundColor: "white",
    margin: "20px 150px 0px 0px",
  },
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "black",
    color: "white",
    '&:hover': {
      backgroundColor: '#a01217',
      color: 'black',
  },
  },
}));

function RegisterForm() {
  const classes = useStyles();

  return <div>
    <Container component="main" maxWidth="xs" className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="userName"
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="User Name"
                // value={userName}
                // onChange={(e) => setUserName(e.target.value)}
                // error={err.name ? true : false}
                // helperText={err.name ? err.name.message : "" }
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                // error={err.password ? true : false}
                // helperText={err.password ? err.password.message : "" }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirm password"
                label="Confirm Password"
                type="password"
                id="confirm password"
                // value={confirmPassword}
                // onChange={(e) => setConfirmPassword(e.target.value)}
                // error={err.confirmPassword ? true : false}
                // helperText={err.confirmPassword ? err.confirmPassword.message : "" }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="age"
                label="Age"
                name="age"
                autoComplete="Age"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                // error={err.email ? true : false}
                // helperText={err.email ? err.email.message : "" }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="height"
                label="Height"
                name="height"
                placeholder="Enter your height in feet/inches"
                autoComplete="Age"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                // error={err.email ? true : false}
                // helperText={err.email ? err.email.message : "" }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="weight"
                label="Weight"
                name="weight"
                placeholder="Enter your weight in pounds(lbs)"
                autoComplete="wight"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                // error={err.email ? true : false}
                // helperText={err.email ? err.email.message : "" }
              />
            </Grid>
           
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // onClick = {handleSubmit}
          >
            Sign Up
          </Button>
        </form>
      </div>
      {/* <Box mt={5}>
        <MadeWithLove />
      </Box> */}
    </Container>
  </div>;
}

export default RegisterForm;
