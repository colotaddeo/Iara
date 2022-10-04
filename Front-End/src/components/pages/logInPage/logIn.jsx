import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Imagen from '../../../assets/Doctora1.png'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: '../../../assets/Doctora1.png',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

// import React, {useState, useEffect, useRef} from 'react';
// import {Link} from 'react-router-dom';
// import Home from '../home/Home';
// import {Formik, useFormik} from 'formik';
// import './logIn.css';
// import Media from '../../../assets/video4.mp4'
// import axios from 'axios';
// import Imagen from '../../../assets/Doctora1.png'

// const URI = "https://localhost:4000/signin"

// const LogIn = () => {

//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password:''
//     },
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//       fetch(values);
//     },
//   });

//   const fetch = (JSON) => {
//     fetch({URI},{
//       method: "POST",
//       body: JSON.stringify(JSON),
//       headers: {"Content-Type" : "application/json" }
//     })

//     .then(res => res.json())
//     .catch(error => console.log("Error", error))
//     .then(response => console.log("Éxito", response))
//   }




//   return (
//     <div className='login-container'>
//       <div className='form-login'>
//       <h2 className="titulo__login">Iniciar sesion</h2>
//         <Formik
//           initialValues={{
//             email:'',
//             password:'',
//           }}
//         >
//           <form onSubmit={formik.handleSubmit}>
//             <label htmlFor="email">Email Address</label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               placeholder="Enter your Email"
//               onChange={formik.handleChange}
//               value={formik.values.email}
//               className="input__login"
//             />
//             <input
//               id="password"
//               name="password"
//               type="password"
//               placeholder="Enter your password"
//               onChange={formik.handleChange}
//               value={formik.values.password}
//               className="input__login"
//             />
//             <button className="button__login" type="submit">Submit</button>
//           </form>
//         </Formik>

//       </div>
//       <div className='imagen' id='imagen__login'>
//         <img src={Imagen} alt="Imagen" />
//       </div>

//     </div>
//   )
// }

// export default LogIn

