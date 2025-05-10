// import EmailIcon from '@mui/icons-material/Email';
// import LockIcon from '@mui/icons-material/Lock';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import {
//   Box,
//   Button,
//   CircularProgress,
//   Container,
//   createTheme,
//   CssBaseline,
//   Divider,
//   FormHelperText,
//   IconButton,
//   InputAdornment,
//   Link,
//   Paper,
//   TextField,
//   ThemeProvider,
//   Typography,
//   useMediaQuery,
// } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import bbLogo from '../Images/bb_logo_bgless.png';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#4361ee',
//       light: '#6b85f2',
//       dark: '#2f44aa',
//       contrastText: '#ffffff',
//     },
//     secondary: {
//       main: '#3a0ca3',
//       light: '#5c34c4',
//       dark: '#290872',
//       contrastText: '#ffffff',
//     },
//     text: {
//       primary: '#1f293a',
//       secondary: '#4a5568',
//     },
//   },
//   typography: {
//     fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
//     button: {
//       textTransform: 'none',
//       fontWeight: 500,
//     },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 8,
//           padding: '10px 16px',
//           fontWeight: 500,
//           boxShadow: 'none',
//           '&:hover': {
//             boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//             transform: 'translateY(-2px)',
//             transition: 'all 0.3s ease',
//           },
//         },
//       },
//     },
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           '& .MuiOutlinedInput-root': {
//             borderRadius: 8,
//             transition: 'all 0.3s ease',
//             '&:hover': {
//               boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
//             },
//             '&.Mui-focused': {
//               boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
//             },
//           },
//         },
//       },
//     },
//   },
// });

// const Logo = ({ size = 'large' }) => {
//   const theme = useTheme();
//   const navigate = useNavigate();

//   const sizes = {
//     small: { logoWidth: 25, fontSize: '1.1rem', spacing: 1 },
//     medium: { logoWidth: 40, fontSize: '1.4rem', spacing: 1.5 },
//     large: { logoWidth: 60, fontSize: '2rem', spacing: 2 },
//   };

//   const currentSize = sizes[size];

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         alignItems: 'center',
//         cursor: 'pointer',
//         gap: currentSize.spacing,
//         transition: 'transform 0.3s ease',
//         '&:hover': {
//           transform: 'scale(1.1)',
//         },
//       }}
//       onClick={() => navigate('/home')}
//     >
//       <img
//         src={bbLogo}
//         alt="BlogBuilder Logo"
//         style={{
//           width: `${currentSize.logoWidth}px`,
//           height: 'auto',
//         }}
//       />
//       <Typography
//         variant="h5"
//         sx={{
//           fontWeight: 700,
//           fontSize: currentSize.fontSize,
//           background: `linear-gradient(90deg, #3a7bd5 0%, #6a11cb 100%)`, // Blue to Purple
//           backgroundClip: 'text',
//           WebkitBackgroundClip: 'text',
//           WebkitTextFillColor: 'transparent',
//           letterSpacing: '0.5px',
//         }}
//       >
//         BlogBuilder
//       </Typography>
//     </Box>
//   );
// };

// function LoginPage() {
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const [isLoading, setIsLoading] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');


// const navigate = useNavigate();

// const handleSignup = () => {
// navigate("/signup");
// };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 100);
//     return () => clearTimeout(timer);
//   }, []);

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email) {
//       setEmailError('Email is required');
//       return false;
//     } else if (!emailRegex.test(email)) {
//       setEmailError('Please enter a valid email address');
//       return false;
//     }
//     setEmailError('');
//     return true;
//   };

//   const validatePassword = (password) => {
//     if (!password) {
//       setPasswordError('Password is required');
//       return false;
//     } else if (password.length < 6) {
//       setPasswordError('Password must be at least 6 characters');
//       return false;
//     }
//     setPasswordError('');
//     return true;
//   };

//   const handleLogin = (e) => {
//     navigate("/home")
//   };
  

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Box
//         sx={{
//           minHeight: '100vh',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           background: 'linear-gradient(120deg, #f5f7ff 0%, #e6eeff 100%)',
//           py: 3,
//         }}
//       >
//         <Container maxWidth="sm">
//           <Paper
//             elevation={4}
//             sx={{
//               p: { xs: 3, sm: 4 },
//               borderRadius: 3,
//               opacity: isVisible ? 1 : 0,
//               transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//               transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
//               overflow: 'hidden',
//               position: 'relative',
//             }}
//           >
//             <Box
//               sx={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 height: '4px',
//                 background: 'linear-gradient(90deg, #4361ee 0%, #3a0ca3 100%)',
//               }}
//             />

//             <Box
//               sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 mb: 3,
//                 opacity: isVisible ? 1 : 0,
//                 transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
//                 transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
//                 transitionDelay: '0.1s',
//               }}
//             >
//               <Logo size={isMobile ? 'medium' : 'large'} />
//               <Typography
//                 variant="h4"
//                 component="h1"
//                 align="center"
//                 sx={{
//                   mt: 3,
//                   mb: 1,
//                   fontWeight: 600,
//                   color: 'text.primary',
//                 }}
//               >
//                 Welcome back
//               </Typography>
//               <Typography
//                 variant="body1"
//                 align="center"
//                 sx={{
//                   color: 'text.secondary',
//                   maxWidth: '80%',
//                   mx: 'auto',
//                 }}
//               >
//                 Log in to continue to your BlogBuilder account
//               </Typography>
//             </Box>

//             <Box
//               sx={{
//                 opacity: isVisible ? 1 : 0,
//                 transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
//                 transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
//                 transitionDelay: '0.2s',
//               }}
//             >
//               <Divider sx={{ my: 3 }}>
//                 <Typography variant="body2" sx={{ color: 'text.secondary', px: 1 }}>
//                   Sign in with email
//                 </Typography>
//               </Divider>
//             </Box>

//             <Box
//               component="form"
//               sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: 3,
//                 opacity: isVisible ? 1 : 0,
//                 transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
//                 transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
//                 transitionDelay: '0.3s',
//               }}
//             >
//               <Box>
//                 <TextField
//                   fullWidth
//                   id="email"
//                   label="Email address"
//                   variant="outlined"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   onBlur={() => validateEmail(email)}
//                   error={!!emailError}
//                   placeholder="yourname@example.com"
//                   autoComplete="email"
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <EmailIcon />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//                 {emailError && <FormHelperText error>{emailError}</FormHelperText>}
//               </Box>

//               <Box>
//                 <TextField
//                   fullWidth
//                   id="password"
//                   label="Password"
//                   type={showPassword ? 'text' : 'password'}
//                   variant="outlined"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   onBlur={() => validatePassword(password)}
//                   error={!!passwordError}
//                   autoComplete="current-password"
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <LockIcon />
//                       </InputAdornment>
//                     ),
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton
//                           onClick={() => setShowPassword(!showPassword)}
//                           edge="end"
//                         >
//                           {showPassword ? <VisibilityOff /> : <Visibility />}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//                 {passwordError && <FormHelperText error>{passwordError}</FormHelperText>}
//               </Box>

//               <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//                 <Link
//                   href="#"
//                   variant="body2"
//                   sx={{
//                     color: 'text.secondary',
//                     '&:hover': {
//                       color: 'primary.main',
//                     },
//                   }}
//                 >
//                   Forgot password?
//                 </Link>
//               </Box>

//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 size="large"
//                 disabled={isLoading}
//                 onClick={handleLogin}
//                 sx={{
//                   mt: 1,
//                   py: 1.5,
//                   position: 'relative',
//                   transition: 'all 0.3s',
//                   '&:hover': {
//                     transform: 'translateY(-2px)',
//                     boxShadow: '0 6px 20px rgba(67, 97, 238, 0.3)',
//                   },
//                 }}
//               >
//                 {isLoading ? (
//                   <CircularProgress size={24} color="inherit" />
//                 ) : (
//                   'Log in to your account'
//                 )}
//               </Button>

//               <Typography
//                 variant="body2"
//                 align="center"
//                 sx={{ mt: 2, color: 'text.secondary' }}
//               >
//                 Don't have an account?{' '}
//                 <Link
//                 onClick = {handleSignup}
//                   href="#"
//                   variant="body2"
//                   sx={{
//                     fontWeight: 600,
//                     color: 'primary.main',
//                     '&:hover': {
//                       textDecoration: 'underline',
//                     },
//                   }}
//                 >
//                   Sign up
//                 </Link>
//               </Typography>
//             </Box>
//           </Paper>

//           <Typography
//             variant="body2"
//             align="center"
//             sx={{
//               mt: 4,
//               color: 'text.secondary',
//               opacity: isVisible ? 1 : 0,
//               transition: 'opacity 0.6s ease-out',
//               transitionDelay: '0.4s',
//             }}
//           >
//             © {new Date().getFullYear()} BlogBuilder. All rights reserved.
//           </Typography>
//         </Container>
//       </Box>
//     </ThemeProvider>
//   );
// }

// export default LoginPage;



//==================================================================



// import EmailIcon from '@mui/icons-material/Email';
// import LockIcon from '@mui/icons-material/Lock';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import {
//   Alert,
//   Box,
//   Button,
//   CircularProgress,
//   Container,
//   createTheme,
//   CssBaseline,
//   Divider,
//   FormHelperText,
//   IconButton,
//   InputAdornment,
//   Link,
//   Paper,
//   Snackbar,
//   TextField,
//   ThemeProvider,
//   Typography,
//   useMediaQuery,
// } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import bbLogo from '../Images/bb_logo_bgless.png';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#4361ee',
//       light: '#6b85f2',
//       dark: '#2f44aa',
//       contrastText: '#ffffff',
//     },
//     secondary: {
//       main: '#3a0ca3',
//       light: '#5c34c4',
//       dark: '#290872',
//       contrastText: '#ffffff',
//     },
//     text: {
//       primary: '#1f293a',
//       secondary: '#4a5568',
//     },
//   },
//   typography: {
//     fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
//     button: {
//       textTransform: 'none',
//       fontWeight: 500,
//     },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 8,
//           padding: '10px 16px',
//           fontWeight: 500,
//           boxShadow: 'none',
//           '&:hover': {
//             boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//             transform: 'translateY(-2px)',
//             transition: 'all 0.3s ease',
//           },
//         },
//       },
//     },
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           '& .MuiOutlinedInput-root': {
//             borderRadius: 8,
//             transition: 'all 0.3s ease',
//             '&:hover': {
//               boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
//             },
//             '&.Mui-focused': {
//               boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
//             },
//           },
//         },
//       },
//     },
//   },
// });

// const Logo = ({ size = 'large' }) => {
//   const theme = useTheme();
//   const navigate = useNavigate();

//   const sizes = {
//     small: { logoWidth: 25, fontSize: '1.1rem', spacing: 1 },
//     medium: { logoWidth: 40, fontSize: '1.4rem', spacing: 1.5 },
//     large: { logoWidth: 60, fontSize: '2rem', spacing: 2 },
//   };

//   const currentSize = sizes[size];

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         alignItems: 'center',
//         cursor: 'pointer',
//         gap: currentSize.spacing,
//         transition: 'transform 0.3s ease',
//         '&:hover': {
//           transform: 'scale(1.1)',
//         },
//       }}
//       onClick={() => navigate('/home')}
//     >
//       <img
//         src={bbLogo}
//         alt="BlogBuilder Logo"
//         style={{
//           width: `${currentSize.logoWidth}px`,
//           height: 'auto',
//         }}
//       />
//       <Typography
//         variant="h5"
//         sx={{
//           fontWeight: 700,
//           fontSize: currentSize.fontSize,
//           background: `linear-gradient(90deg, #3a7bd5 0%, #6a11cb 100%)`,
//           backgroundClip: 'text',
//           WebkitBackgroundClip: 'text',
//           WebkitTextFillColor: 'transparent',
//           letterSpacing: '0.5px',
//         }}
//       >
//         BlogBuilder
//       </Typography>
//     </Box>
//   );
// };

// function LoginPage() {
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const [isLoading, setIsLoading] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [alertOpen, setAlertOpen] = useState(false);
//   const [alertMessage, setAlertMessage] = useState('');
//   const [alertSeverity, setAlertSeverity] = useState('error');

//   const navigate = useNavigate();

//   const handleSignup = () => {
//     navigate("/signup");
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 100);
//     return () => clearTimeout(timer);
//   }, []);

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email) {
//       setEmailError('Email is required');
//       return false;
//     } else if (!emailRegex.test(email)) {
//       setEmailError('Please enter a valid email address');
//       return false;
//     }
//     setEmailError('');
//     return true;
//   };

//   const validatePassword = (password) => {
//     if (!password) {
//       setPasswordError('Password is required');
//       return false;
//     } else if (password.length < 6) {
//       setPasswordError('Password must be at least 6 characters');
//       return false;
//     }
//     setPasswordError('');
//     return true;
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
    
//     const isEmailValid = validateEmail(email);
//     const isPasswordValid = validatePassword(password);
    
//     if (!isEmailValid || !isPasswordValid) {
//       return;
//     }

//     setIsLoading(true);
    
//     try {
//       const response = await axios.post('https://localhost:7163/api/Users/login', {
//         Email: email,
//         PasswordHash: password
//       });
      
//       if (response.data) {
//         setAlertMessage('Login successful!');
//         setAlertSeverity('success');
//         setAlertOpen(true);
        
//         setTimeout(() => {
//           navigate('/home');
//         }, 1000);
//       }
//     } catch (error) {
//       let errorMessage = 'Login failed. Please try again.';
      
//       if (error.response) {
//         console.log('Error response data:', error.response.data);
//         if (typeof error.response.data === 'string') {
//           errorMessage = error.response.data;
//         } else if (error.response.data?.message) {
//           errorMessage = error.response.data.message;
//         } else if (error.response.data?.title) {
//           errorMessage = error.response.data.title;
//         } else {
//           // Fallback in case the response data is an object
//           errorMessage = JSON.stringify(error.response.data);
//         }
//       }
      

      
//       setAlertMessage(errorMessage);
//       setAlertSeverity('error');
//       setAlertOpen(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleAlertClose = () => {
//     setAlertOpen(false);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Box
//         sx={{
//           minHeight: '100vh',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           background: 'linear-gradient(120deg, #f5f7ff 0%, #e6eeff 100%)',
//           py: 3,
//         }}
//       >
//         <Container maxWidth="sm">
//           <Paper
//             elevation={4}
//             sx={{
//               p: { xs: 3, sm: 4 },
//               borderRadius: 3,
//               opacity: isVisible ? 1 : 0,
//               transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//               transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
//               overflow: 'hidden',
//               position: 'relative',
//             }}
//           >
//             <Box
//               sx={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 height: '4px',
//                 background: 'linear-gradient(90deg, #4361ee 0%, #3a0ca3 100%)',
//               }}
//             />

//             <Box
//               sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 mb: 3,
//                 opacity: isVisible ? 1 : 0,
//                 transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
//                 transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
//                 transitionDelay: '0.1s',
//               }}
//             >
//               <Logo size={isMobile ? 'medium' : 'large'} />
//               <Typography
//                 variant="h4"
//                 component="h1"
//                 align="center"
//                 sx={{
//                   mt: 3,
//                   mb: 1,
//                   fontWeight: 600,
//                   color: 'text.primary',
//                 }}
//               >
//                 Welcome back
//               </Typography>
//               <Typography
//                 variant="body1"
//                 align="center"
//                 sx={{
//                   color: 'text.secondary',
//                   maxWidth: '80%',
//                   mx: 'auto',
//                 }}
//               >
//                 Log in to continue to your BlogBuilder account
//               </Typography>
//             </Box>

//             <Box
//               sx={{
//                 opacity: isVisible ? 1 : 0,
//                 transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
//                 transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
//                 transitionDelay: '0.2s',
//               }}
//             >
//               <Divider sx={{ my: 3 }}>
//                 <Typography variant="body2" sx={{ color: 'text.secondary', px: 1 }}>
//                   Sign in with email
//                 </Typography>
//               </Divider>
//             </Box>

//             <Box
//               component="form"
//               onSubmit={handleLogin}
//               sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: 3,
//                 opacity: isVisible ? 1 : 0,
//                 transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
//                 transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
//                 transitionDelay: '0.3s',
//               }}
//             >
//               <Box>
//                 <TextField
//                   fullWidth
//                   id="email"
//                   label="Email address"
//                   variant="outlined"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   onBlur={() => validateEmail(email)}
//                   error={!!emailError}
//                   placeholder="yourname@example.com"
//                   autoComplete="email"
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <EmailIcon />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//                 {emailError && <FormHelperText error>{emailError}</FormHelperText>}
//               </Box>

//               <Box>
//                 <TextField
//                   fullWidth
//                   id="password"
//                   label="Password"
//                   type={showPassword ? 'text' : 'password'}
//                   variant="outlined"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   onBlur={() => validatePassword(password)}
//                   error={!!passwordError}
//                   autoComplete="current-password"
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <LockIcon />
//                       </InputAdornment>
//                     ),
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton
//                           onClick={() => setShowPassword(!showPassword)}
//                           edge="end"
//                         >
//                           {showPassword ? <VisibilityOff /> : <Visibility />}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//                 {passwordError && <FormHelperText error>{passwordError}</FormHelperText>}
//               </Box>

//               <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//                 <Link
//                   href="#"
//                   variant="body2"
//                   sx={{
//                     color: 'text.secondary',
//                     '&:hover': {
//                       color: 'primary.main',
//                     },
//                   }}
//                 >
//                   Forgot password?
//                 </Link>
//               </Box>

//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 size="large"
//                 disabled={isLoading}
//                 sx={{
//                   mt: 1,
//                   py: 1.5,
//                   position: 'relative',
//                   transition: 'all 0.3s',
//                   '&:hover': {
//                     transform: 'translateY(-2px)',
//                     boxShadow: '0 6px 20px rgba(67, 97, 238, 0.3)',
//                   },
//                 }}
//               >
//                 {isLoading ? (
//                   <CircularProgress size={24} color="inherit" />
//                 ) : (
//                   'Log in to your account'
//                 )}
//               </Button>

//               <Typography
//                 variant="body2"
//                 align="center"
//                 sx={{ mt: 2, color: 'text.secondary' }}
//               >
//                 Don't have an account?{' '}
//                 <Link
//                   onClick={handleSignup}
//                   href="#"
//                   variant="body2"
//                   sx={{
//                     fontWeight: 600,
//                     color: 'primary.main',
//                     '&:hover': {
//                       textDecoration: 'underline',
//                     },
//                   }}
//                 >
//                   Sign up
//                 </Link>
//               </Typography>
//             </Box>
//           </Paper>

//           <Typography
//             variant="body2"
//             align="center"
//             sx={{
//               mt: 4,
//               color: 'text.secondary',
//               opacity: isVisible ? 1 : 0,
//               transition: 'opacity 0.6s ease-out',
//               transitionDelay: '0.4s',
//             }}
//           >
//             © {new Date().getFullYear()} BlogBuilder. All rights reserved.
//           </Typography>
//         </Container>
//       </Box>

//       <Snackbar
//         open={alertOpen}
//         autoHideDuration={6000}
//         onClose={handleAlertClose}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//       >
//         <Alert 
//           onClose={handleAlertClose} 
//           severity={alertSeverity}
//           variant="filled"
//           sx={{ width: '100%' }}
//         >
//           {alertMessage}
//         </Alert>
//       </Snackbar>
//     </ThemeProvider>
//   );
// }

// export default LoginPage;


//=======================================================================



// import EmailIcon from '@mui/icons-material/Email';
// import LockIcon from '@mui/icons-material/Lock';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import {
//   Alert,
//   Box,
//   Button,
//   CircularProgress,
//   Container,
//   createTheme,
//   CssBaseline,
//   Divider,
//   FormHelperText,
//   IconButton,
//   InputAdornment,
//   Link,
//   Paper,
//   Snackbar,
//   TextField,
//   ThemeProvider,
//   Typography,
//   useMediaQuery,
// } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import bbLogo from '../Images/bb_logo_bgless.png';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#4361ee',
//       light: '#6b85f2',
//       dark: '#2f44aa',
//       contrastText: '#ffffff',
//     },
//     secondary: {
//       main: '#3a0ca3',
//       light: '#5c34c4',
//       dark: '#290872',
//       contrastText: '#ffffff',
//     },
//     text: {
//       primary: '#1f293a',
//       secondary: '#4a5568',
//     },
//   },
//   typography: {
//     fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
//     button: {
//       textTransform: 'none',
//       fontWeight: 500,
//     },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 8,
//           padding: '10px 16px',
//           fontWeight: 500,
//           boxShadow: 'none',
//           '&:hover': {
//             boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//             transform: 'translateY(-2px)',
//             transition: 'all 0.3s ease',
//           },
//         },
//       },
//     },
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           '& .MuiOutlinedInput-root': {
//             borderRadius: 8,
//             transition: 'all 0.3s ease',
//             '&:hover': {
//               boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
//             },
//             '&.Mui-focused': {
//               boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
//             },
//           },
//         },
//       },
//     },
//   },
// });

// const Logo = ({ size = 'large' }) => {
//   const theme = useTheme();
//   const navigate = useNavigate();

//   const sizes = {
//     small: { logoWidth: 25, fontSize: '1.1rem', spacing: 1 },
//     medium: { logoWidth: 40, fontSize: '1.4rem', spacing: 1.5 },
//     large: { logoWidth: 60, fontSize: '2rem', spacing: 2 },
//   };

//   const currentSize = sizes[size];

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         alignItems: 'center',
//         cursor: 'pointer',
//         gap: currentSize.spacing,
//         transition: 'transform 0.3s ease',
//         '&:hover': {
//           transform: 'scale(1.1)',
//         },
//       }}
//       onClick={() => navigate('/home')}
//     >
//       <img
//         src={bbLogo}
//         alt="BlogBuilder Logo"
//         style={{
//           width: `${currentSize.logoWidth}px`,
//           height: 'auto',
//         }}
//       />
//       <Typography
//         variant="h5"
//         sx={{
//           fontWeight: 700,
//           fontSize: currentSize.fontSize,
//           background: `linear-gradient(90deg, #3a7bd5 0%, #6a11cb 100%)`,
//           backgroundClip: 'text',
//           WebkitBackgroundClip: 'text',
//           WebkitTextFillColor: 'transparent',
//           letterSpacing: '0.5px',
//         }}
//       >
//         BlogBuilder
//       </Typography>
//     </Box>
//   );
// };

// function LoginPage() {
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const [isLoading, setIsLoading] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [alertOpen, setAlertOpen] = useState(false);
//   const [alertMessage, setAlertMessage] = useState('');
//   const [alertSeverity, setAlertSeverity] = useState('error');

//   const navigate = useNavigate();

//   const handleSignup = () => {
//     navigate("/signup");
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 100);
//     return () => clearTimeout(timer);
//   }, []);

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email) {
//       setEmailError('Email is required');
//       return false;
//     } else if (!emailRegex.test(email)) {
//       setEmailError('Please enter a valid email address');
//       return false;
//     }
//     setEmailError('');
//     return true;
//   };

//   const validatePassword = (password) => {
//     if (!password) {
//       setPasswordError('Password is required');
//       return false;
//     } else if (password.length < 6) {
//       setPasswordError('Password must be at least 6 characters');
//       return false;
//     }
//     setPasswordError('');
//     return true;
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
    
//     const isEmailValid = validateEmail(email);
//     const isPasswordValid = validatePassword(password);
    
//     if (!isEmailValid || !isPasswordValid) {
//       return;
//     }

//     setIsLoading(true);
    
//     try {
//       // Updated API endpoint and request body format
//       const response = await axios.post('https://localhost:7163/api/user/login', {
//         email: email,
//         password_hash: password
//       });
      
//       if (response.data) {
//         // Store user data or token if needed
//         // For example: localStorage.setItem('token', response.data.token);
        
//         setAlertMessage('Login successful!');
//         setAlertSeverity('success');
//         setAlertOpen(true);
        
//         // Navigate to home after a short delay
//         setTimeout(() => {
//           navigate('/home');
//         }, 1000);
//       }
//     } catch (error) {
//       console.error('Login error:', error);
      
//       let errorMessage = 'Login failed. Please try again.';
      
//       if (error.response) {
//         console.log('Error response:', error.response);
        
//         // Extract error message from response if available
//         if (typeof error.response.data === 'string') {
//           errorMessage = error.response.data;
//         } else if (error.response.data?.message) {
//           errorMessage = error.response.data.message;
//         } else if (error.response.data?.title) {
//           errorMessage = error.response.data.title;
//         } else if (error.response.data?.error) {
//           errorMessage = error.response.data.error;
//         } else if (error.response.status === 401) {
//           errorMessage = 'Invalid email or password';
//         } else if (error.response.status === 404) {
//           errorMessage = 'Account not found';
//         }
//       } else if (error.request) {
//         // The request was made but no response was received
//         errorMessage = 'Server is not responding. Please try again later.';
//       } else {
//         // Something happened in setting up the request
//         errorMessage = 'An error occurred while logging in. Please try again.';
//       }
      
//       setAlertMessage(errorMessage);
//       setAlertSeverity('error');
//       setAlertOpen(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleAlertClose = () => {
//     setAlertOpen(false);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Box
//         sx={{
//           minHeight: '100vh',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           background: 'linear-gradient(120deg, #f5f7ff 0%, #e6eeff 100%)',
//           py: 3,
//         }}
//       >
//         <Container maxWidth="sm">
//           <Paper
//             elevation={4}
//             sx={{
//               p: { xs: 3, sm: 4 },
//               borderRadius: 3,
//               opacity: isVisible ? 1 : 0,
//               transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//               transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
//               overflow: 'hidden',
//               position: 'relative',
//             }}
//           >
//             <Box
//               sx={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 height: '4px',
//                 background: 'linear-gradient(90deg, #4361ee 0%, #3a0ca3 100%)',
//               }}
//             />

//             <Box
//               sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 mb: 3,
//                 opacity: isVisible ? 1 : 0,
//                 transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
//                 transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
//                 transitionDelay: '0.1s',
//               }}
//             >
//               <Logo size={isMobile ? 'medium' : 'large'} />
//               <Typography
//                 variant="h4"
//                 component="h1"
//                 align="center"
//                 sx={{
//                   mt: 3,
//                   mb: 1,
//                   fontWeight: 600,
//                   color: 'text.primary',
//                 }}
//               >
//                 Welcome back
//               </Typography>
//               <Typography
//                 variant="body1"
//                 align="center"
//                 sx={{
//                   color: 'text.secondary',
//                   maxWidth: '80%',
//                   mx: 'auto',
//                 }}
//               >
//                 Log in to continue to your BlogBuilder account
//               </Typography>
//             </Box>

//             <Box
//               sx={{
//                 opacity: isVisible ? 1 : 0,
//                 transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
//                 transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
//                 transitionDelay: '0.2s',
//               }}
//             >
//               <Divider sx={{ my: 3 }}>
//                 <Typography variant="body2" sx={{ color: 'text.secondary', px: 1 }}>
//                   Sign in with email
//                 </Typography>
//               </Divider>
//             </Box>

//             <Box
//               component="form"
//               onSubmit={handleLogin}
//               sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: 3,
//                 opacity: isVisible ? 1 : 0,
//                 transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
//                 transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
//                 transitionDelay: '0.3s',
//               }}
//             >
//               <Box>
//                 <TextField
//                   fullWidth
//                   id="email"
//                   label="Email address"
//                   variant="outlined"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   onBlur={() => validateEmail(email)}
//                   error={!!emailError}
//                   placeholder="yourname@example.com"
//                   autoComplete="email"
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <EmailIcon />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//                 {emailError && <FormHelperText error>{emailError}</FormHelperText>}
//               </Box>

//               <Box>
//                 <TextField
//                   fullWidth
//                   id="password"
//                   label="Password"
//                   type={showPassword ? 'text' : 'password'}
//                   variant="outlined"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   onBlur={() => validatePassword(password)}
//                   error={!!passwordError}
//                   autoComplete="current-password"
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <LockIcon />
//                       </InputAdornment>
//                     ),
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton
//                           onClick={() => setShowPassword(!showPassword)}
//                           edge="end"
//                         >
//                           {showPassword ? <VisibilityOff /> : <Visibility />}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//                 {passwordError && <FormHelperText error>{passwordError}</FormHelperText>}
//               </Box>

//               <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//                 <Link
//                   href="#"
//                   variant="body2"
//                   sx={{
//                     color: 'text.secondary',
//                     '&:hover': {
//                       color: 'primary.main',
//                     },
//                   }}
//                 >
//                   Forgot password?
//                 </Link>
//               </Box>

//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 size="large"
//                 disabled={isLoading}
//                 sx={{
//                   mt: 1,
//                   py: 1.5,
//                   position: 'relative',
//                   transition: 'all 0.3s',
//                   '&:hover': {
//                     transform: 'translateY(-2px)',
//                     boxShadow: '0 6px 20px rgba(67, 97, 238, 0.3)',
//                   },
//                 }}
//               >
//                 {isLoading ? (
//                   <CircularProgress size={24} color="inherit" />
//                 ) : (
//                   'Log in to your account'
//                 )}
//               </Button>

//               <Typography
//                 variant="body2"
//                 align="center"
//                 sx={{ mt: 2, color: 'text.secondary' }}
//               >
//                 Don't have an account?{' '}
//                 <Link
//                   onClick={handleSignup}
//                   href="#"
//                   variant="body2"
//                   sx={{
//                     fontWeight: 600,
//                     color: 'primary.main',
//                     '&:hover': {
//                       textDecoration: 'underline',
//                     },
//                   }}
//                 >
//                   Sign up
//                 </Link>
//               </Typography>
//             </Box>
//           </Paper>

//           <Typography
//             variant="body2"
//             align="center"
//             sx={{
//               mt: 4,
//               color: 'text.secondary',
//               opacity: isVisible ? 1 : 0,
//               transition: 'opacity 0.6s ease-out',
//               transitionDelay: '0.4s',
//             }}
//           >
//             © {new Date().getFullYear()} BlogBuilder. All rights reserved.
//           </Typography>
//         </Container>
//       </Box>

//       <Snackbar
//         open={alertOpen}
//         autoHideDuration={6000}
//         onClose={handleAlertClose}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//       >
//         <Alert 
//           onClose={handleAlertClose} 
//           severity={alertSeverity}
//           variant="filled"
//           sx={{ width: '100%' }}
//         >
//           {alertMessage}
//         </Alert>
//       </Snackbar>
//     </ThemeProvider>
//   );
// }

// export default LoginPage;


//==========================================================================



import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  createTheme,
  CssBaseline,
  Divider,
  FormHelperText,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  Snackbar,
  TextField,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bbLogo from '../Images/bb_logo_bgless.png';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4361ee',
      light: '#6b85f2',
      dark: '#2f44aa',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#3a0ca3',
      light: '#5c34c4',
      dark: '#290872',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#1f293a',
      secondary: '#4a5568',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 16px',
          fontWeight: 500,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            transform: 'translateY(-2px)',
            transition: 'all 0.3s ease',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
            },
            '&.Mui-focused': {
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
            },
          },
        },
      },
    },
  },
});

const Logo = ({ size = 'large' }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const sizes = {
    small: { logoWidth: 25, fontSize: '1.1rem', spacing: 1 },
    medium: { logoWidth: 40, fontSize: '1.4rem', spacing: 1.5 },
    large: { logoWidth: 60, fontSize: '2rem', spacing: 2 },
  };

  const currentSize = sizes[size];

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        gap: currentSize.spacing,
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.1)',
        },
      }}
      onClick={() => navigate('/home')}
    >
      <img
        src={bbLogo}
        alt="BlogBuilder Logo"
        style={{
          width: `${currentSize.logoWidth}px`,
          height: 'auto',
        }}
      />
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          fontSize: currentSize.fontSize,
          background: `linear-gradient(90deg, #3a7bd5 0%, #6a11cb 100%)`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '0.5px',
        }}
      >
        BlogBuilder
      </Typography>
    </Box>
  );
};

function LoginPage() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('error');

  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

const handlePasswordReset = () => {
    navigate("/password-reset-form");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('Email is required');
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = (password) => {
    if (!password) {
      setPasswordError('Password is required');
      return false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    
    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Updated API endpoint and request body format
      const response = await axios.post('https://localhost:7163/api/user/login', {
        email: email,
        password_hash: password
      });
      
      if (response.data) {
        // Store email in session storage
        sessionStorage.setItem('userEmail', email);
        
        setAlertMessage('Login successful!');
        setAlertSeverity('success');
        setAlertOpen(true);
        
        // Navigate to home after a short delay
        setTimeout(() => {
          navigate('/home');
        }, 1000);
      }
    } catch (error) {
      console.error('Login error:', error);
      
      let errorMessage = 'Login failed. Please try again.';
      
      if (error.response) {
        console.log('Error response:', error.response);
        
        // Extract error message from response if available
        if (typeof error.response.data === 'string') {
          errorMessage = error.response.data;
        } else if (error.response.data?.message) {
          errorMessage = error.response.data.message;
        } else if (error.response.data?.title) {
          errorMessage = error.response.data.title;
        } else if (error.response.data?.error) {
          errorMessage = error.response.data.error;
        } else if (error.response.status === 401) {
          errorMessage = 'Invalid email or password';
        } else if (error.response.status === 404) {
          errorMessage = 'Account not found';
        }
      } else if (error.request) {
        // The request was made but no response was received
        errorMessage = 'Server is not responding. Please try again later.';
      } else {
        // Something happened in setting up the request
        errorMessage = 'An error occurred while logging in. Please try again.';
      }
      
      setAlertMessage(errorMessage);
      setAlertSeverity('error');
      setAlertOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(120deg, #f5f7ff 0%, #e6eeff 100%)',
          py: 3,
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={4}
            sx={{
              p: { xs: 3, sm: 4 },
              borderRadius: 3,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #4361ee 0%, #3a0ca3 100%)',
              }}
            />

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mb: 3,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                transitionDelay: '0.1s',
              }}
            >
              <Logo size={isMobile ? 'medium' : 'large'} />
              <Typography
                variant="h4"
                component="h1"
                align="center"
                sx={{
                  mt: 3,
                  mb: 1,
                  fontWeight: 600,
                  color: 'text.primary',
                }}
              >
                Welcome back
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{
                  color: 'text.secondary',
                  maxWidth: '80%',
                  mx: 'auto',
                }}
              >
                Log in to continue to your BlogBuilder account
              </Typography>
            </Box>

            <Box
              sx={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                transitionDelay: '0.2s',
              }}
            >
              <Divider sx={{ my: 3 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', px: 1 }}>
                  Sign in with email
                </Typography>
              </Divider>
            </Box>

            <Box
              component="form"
              onSubmit={handleLogin}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                transitionDelay: '0.3s',
              }}
            >
              <Box>
                <TextField
                  fullWidth
                  id="email"
                  label="Email address"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => validateEmail(email)}
                  error={!!emailError}
                  placeholder="yourname@example.com"
                  autoComplete="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {emailError && <FormHelperText error>{emailError}</FormHelperText>}
              </Box>

              <Box>
                <TextField
                  fullWidth
                  id="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => validatePassword(password)}
                  error={!!passwordError}
                  autoComplete="current-password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {passwordError && <FormHelperText error>{passwordError}</FormHelperText>}
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link
                onClick={handlePasswordReset}
                  href="#"
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  Forgot password?
                </Link>
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                disabled={isLoading}
                sx={{
                  mt: 1,
                  py: 1.5,
                  position: 'relative',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(67, 97, 238, 0.3)',
                  },
                }}
              >
                {isLoading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  'Log in to your account'
                )}
              </Button>

              <Typography
                variant="body2"
                align="center"
                sx={{ mt: 2, color: 'text.secondary' }}
              >
                Don't have an account?{' '}
                <Link
                  onClick={handleSignup}
                  href="#"
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    color: 'primary.main',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Paper>

          <Typography
            variant="body2"
            align="center"
            sx={{
              mt: 4,
              color: 'text.secondary',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.6s ease-out',
              transitionDelay: '0.4s',
            }}
          >
            © {new Date().getFullYear()} BlogBuilder. All rights reserved.
          </Typography>
        </Container>
      </Box>

      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleAlertClose} 
          severity={alertSeverity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default LoginPage;