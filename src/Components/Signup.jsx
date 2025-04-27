// import { useTheme } from '@emotion/react';
// import EmailIcon from '@mui/icons-material/Email';
// import LockIcon from '@mui/icons-material/Lock';
// import PersonIcon from '@mui/icons-material/Person';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import {
//     Box,
//     Button,
//     CircularProgress,
//     Container,
//     createTheme,
//     CssBaseline,
//     Divider,
//     FormHelperText,
//     IconButton,
//     InputAdornment,
//     LinearProgress,
//     Link,
//     Paper,
//     TextField,
//     ThemeProvider,
//     Typography,
//     useMediaQuery,
// } from '@mui/material';
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
//     success: {
//       main: '#10b981',
//       light: '#34d399',
//       dark: '#059669',
//     },
//     warning: {
//       main: '#f59e0b',
//       light: '#fbbf24',
//       dark: '#d97706',
//     },
//     error: {
//       main: '#ef4444',
//       light: '#f87171',
//       dark: '#dc2626',
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
//     const theme = useTheme();
//     const navigate = useNavigate();
  
//     const sizes = {
//       small: { logoWidth: 25, fontSize: '1.1rem', spacing: 1 },
//       medium: { logoWidth: 40, fontSize: '1.4rem', spacing: 1.5 },
//       large: { logoWidth: 60, fontSize: '2rem', spacing: 2 },
//     };
  
//     const currentSize = sizes[size];
  
//     return (
//       <Box
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           cursor: 'pointer',
//           gap: currentSize.spacing,
//           transition: 'transform 0.3s ease',
//           '&:hover': {
//             transform: 'scale(1.1)',
//           },
//         }}
//         onClick={() => navigate('/home')}
//       >
//         <img
//           src={bbLogo}
//           alt="BlogBuilder Logo"
//           style={{
//             width: `${currentSize.logoWidth}px`,
//             height: 'auto',
//           }}
//         />
//         <Typography
//           variant="h5"
//           sx={{
//             fontWeight: 700,
//             fontSize: currentSize.fontSize,
//             background: `linear-gradient(90deg, #3a7bd5 0%, #6a11cb 100%)`, // Blue to Purple
//             backgroundClip: 'text',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             letterSpacing: '0.5px',
//           }}
//         >
//           BlogBuilder
//         </Typography>
//       </Box>
//     );
//   };




// function SignupPage() {
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const [isLoading, setIsLoading] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [nameError, setNameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [confirmPasswordError, setConfirmPasswordError] = useState('');
//   const [passwordStrength, setPasswordStrength] = useState(0);
//   const navigate = useNavigate();



//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 100);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (password) {
//       // Calculate password strength
//       let strength = 0;
      
//       // Length check
//       if (password.length >= 8) strength += 25;
//       else if (password.length >= 6) strength += 15;
      
//       // Complexity checks
//       if (/[A-Z]/.test(password)) strength += 25; // Has uppercase
//       if (/[0-9]/.test(password)) strength += 25; // Has number
//       if (/[^A-Za-z0-9]/.test(password)) strength += 25; // Has special char
      
//       setPasswordStrength(strength);
//     } else {
//       setPasswordStrength(0);
//     }
//   }, [password]);

//   const getPasswordStrengthColor = () => {
//     if (passwordStrength < 30) return theme.palette.error.main;
//     if (passwordStrength < 70) return theme.palette.warning.main;
//     return theme.palette.success.main;
//   };

//   const getPasswordStrengthLabel = () => {
//     if (passwordStrength < 30) return 'Weak';
//     if (passwordStrength < 70) return 'Medium';
//     return 'Strong';
//   };

//   const validateName = (name) => {
//     if (!name.trim()) {
//       setNameError('Full name is required');
//       return false;
//     }
//     setNameError('');
//     return true;
//   };

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

//   const validateConfirmPassword = (confirmPassword) => {
//     if (!confirmPassword) {
//       setConfirmPasswordError('Please confirm your password');
//       return false;
//     } else if (confirmPassword !== password) {
//       setConfirmPasswordError('Passwords do not match');
//       return false;
//     }
//     setConfirmPasswordError('');
//     return true;
//   };

//   const handleSignup = (e) => {
//     e.preventDefault();
    
//     const isNameValid = validateName(name);
//     const isEmailValid = validateEmail(email);
//     const isPasswordValid = validatePassword(password);
//     const isConfirmPasswordValid = validateConfirmPassword(confirmPassword);
    
//     if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
//       setIsLoading(true);
      
//       // Simulate API call
//       setTimeout(() => {
//         setIsLoading(false);
//         navigate('/home');
//       }, 1500);
//     }
//   };
  
//   const goToLogin = () => {
//     navigate('/');
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
//                 Create your account
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
//                 Join BlogBuilder and start creating amazing content
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
//                   Sign up with email
//                 </Typography>
//               </Divider>
//             </Box>

//             <Box
//               component="form"
//               onSubmit={handleSignup}
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
//                   id="name"
//                   label="Full Name"
//                   variant="outlined"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   onBlur={() => validateName(name)}
//                   error={!!nameError}
//                   placeholder="John Doe"
//                   autoComplete="name"
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <PersonIcon />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//                 {nameError && <FormHelperText error>{nameError}</FormHelperText>}
//               </Box>

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
//                   autoComplete="new-password"
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
                
//                 {password && (
//                   <Box sx={{ mt: 1 }}>
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
//                       <Typography variant="caption" sx={{ color: 'text.secondary' }}>
//                         Password strength
//                       </Typography>
//                       <Typography 
//                         variant="caption" 
//                         sx={{ 
//                           color: getPasswordStrengthColor(), 
//                           fontWeight: 600 
//                         }}
//                       >
//                         {getPasswordStrengthLabel()}
//                       </Typography>
//                     </Box>
//                     <LinearProgress 
//                       variant="determinate" 
//                       value={passwordStrength} 
//                       sx={{ 
//                         height: 6, 
//                         borderRadius: 3,
//                         backgroundColor: theme.palette.grey[200],
//                         '& .MuiLinearProgress-bar': {
//                           backgroundColor: getPasswordStrengthColor(),
//                           transition: 'transform 0.4s ease'
//                         }
//                       }}
//                     />
//                     <FormHelperText sx={{ mt: 0.5 }}>
//                       Use 8+ characters with a mix of letters, numbers & symbols
//                     </FormHelperText>
//                   </Box>
//                 )}
//               </Box>

//               <Box>
//                 <TextField
//                   fullWidth
//                   id="confirmPassword"
//                   label="Confirm Password"
//                   type={showConfirmPassword ? 'text' : 'password'}
//                   variant="outlined"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   onBlur={() => validateConfirmPassword(confirmPassword)}
//                   error={!!confirmPasswordError}
//                   autoComplete="new-password"
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <LockIcon />
//                       </InputAdornment>
//                     ),
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton
//                           onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                           edge="end"
//                         >
//                           {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//                 {confirmPasswordError && <FormHelperText error>{confirmPasswordError}</FormHelperText>}
//               </Box>

//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 size="large"
//                 disabled={isLoading}
//                 sx={{
//                   mt: 2,
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
//                   'Create account'
//                 )}
//               </Button>

//               <Typography
//                 variant="body2"
//                 align="center"
//                 sx={{ mt: 1, color: 'text.secondary' }}
//               >
//                 By signing up, you agree to our{' '}
//                 <Link
//                   href="#"
//                   sx={{
//                     color: 'primary.main',
//                     '&:hover': { textDecoration: 'underline' },
//                   }}
//                 >
//                   Terms of Service
//                 </Link>{' '}
//                 and{' '}
//                 <Link
//                   href="#"
//                   sx={{
//                     color: 'primary.main',
//                     '&:hover': { textDecoration: 'underline' },
//                   }}
//                 >
//                   Privacy Policy
//                 </Link>
//               </Typography>

//               <Typography
//                 variant="body2"
//                 align="center"
//                 sx={{ mt: 2, color: 'text.secondary' }}
//               >
//                 Already have an account?{' '}
//                 <Link
//                   onClick={goToLogin}
//                   variant="body2"
//                   sx={{
//                     fontWeight: 600,
//                     color: 'primary.main',
//                     cursor: 'pointer',
//                     '&:hover': {
//                       textDecoration: 'underline',
//                     },
//                   }}
//                 >
//                   Log in
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

// export default SignupPage;


//==========================================


// import { useTheme } from '@emotion/react';
// import EmailIcon from '@mui/icons-material/Email';
// import LockIcon from '@mui/icons-material/Lock';
// import PersonIcon from '@mui/icons-material/Person';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import {
//     Alert,
//     Box,
//     Button,
//     CircularProgress,
//     Container,
//     createTheme,
//     CssBaseline,
//     Divider,
//     FormHelperText,
//     IconButton,
//     InputAdornment,
//     LinearProgress,
//     Link,
//     Paper,
//     Snackbar,
//     TextField,
//     ThemeProvider,
//     Typography,
//     useMediaQuery,
// } from '@mui/material';
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
//     success: {
//       main: '#10b981',
//       light: '#34d399',
//       dark: '#059669',
//     },
//     warning: {
//       main: '#f59e0b',
//       light: '#fbbf24',
//       dark: '#d97706',
//     },
//     error: {
//       main: '#ef4444',
//       light: '#f87171',
//       dark: '#dc2626',
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

// function SignupPage() {
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const [isLoading, setIsLoading] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [nameError, setNameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [confirmPasswordError, setConfirmPasswordError] = useState('');
//   const [passwordStrength, setPasswordStrength] = useState(0);
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 100);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (password) {
//       let strength = 0;
      
//       if (password.length >= 8) strength += 25;
//       else if (password.length >= 6) strength += 15;
      
//       if (/[A-Z]/.test(password)) strength += 25;
//       if (/[0-9]/.test(password)) strength += 25;
//       if (/[^A-Za-z0-9]/.test(password)) strength += 25;
      
//       setPasswordStrength(strength);
//     } else {
//       setPasswordStrength(0);
//     }
//   }, [password]);

//   const getPasswordStrengthColor = () => {
//     if (passwordStrength < 30) return theme.palette.error.main;
//     if (passwordStrength < 70) return theme.palette.warning.main;
//     return theme.palette.success.main;
//   };

//   const getPasswordStrengthLabel = () => {
//     if (passwordStrength < 30) return 'Weak';
//     if (passwordStrength < 70) return 'Medium';
//     return 'Strong';
//   };

//   const validateName = (name) => {
//     if (!name.trim()) {
//       setNameError('Full name is required');
//       return false;
//     }
//     setNameError('');
//     return true;
//   };

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

//   const validateConfirmPassword = (confirmPassword) => {
//     if (!confirmPassword) {
//       setConfirmPasswordError('Please confirm your password');
//       return false;
//     } else if (confirmPassword !== password) {
//       setConfirmPasswordError('Passwords do not match');
//       return false;
//     }
//     setConfirmPasswordError('');
//     return true;
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
    
//     const isNameValid = validateName(name);
//     const isEmailValid = validateEmail(email);
//     const isPasswordValid = validatePassword(password);
//     const isConfirmPasswordValid = validateConfirmPassword(confirmPassword);
    
//     if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
//       setIsLoading(true);
      
//       try {
//         const response = await axios.post('https://localhost:7163/api/Users/register', {
//           username: email.split('@')[0],
//           email: email,
//           passwordHash: password,
//           fullName: name,
//         });

//         setSnackbar({
//           open: true,
//           message: 'Registration successful! Redirecting to login...',
//           severity: 'success'
//         });

//         setTimeout(() => {
//           navigate('/');
//         }, 2000);
//       } catch (error) {
//         setSnackbar({
//           open: true,
//           message: error.response?.data || 'Registration failed. Please try again.',
//           severity: 'error'
//         });
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };
  
//   const handleSnackbarClose = () => {
//     setSnackbar({ ...snackbar, open: false });
//   };
  
//   const goToLogin = () => {
//     navigate('/');
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
//                 Create your account
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
//                 Join BlogBuilder and start creating amazing content
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
//                   Sign up with email
//                 </Typography>
//               </Divider>
//             </Box>

//             <Box
//               component="form"
//               onSubmit={handleSignup}
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
//                   id="name"
//                   label="Full Name"
//                   variant="outlined"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   onBlur={() => validateName(name)}
//                   error={!!nameError}
//                   placeholder="John Doe"
//                   autoComplete="name"
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <PersonIcon />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//                 {nameError && <FormHelperText error>{nameError}</FormHelperText>}
//               </Box>

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
//                   autoComplete="new-password"
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
                
//                 {password && (
//                   <Box sx={{ mt: 1 }}>
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
//                       <Typography variant="caption" sx={{ color: 'text.secondary' }}>
//                         Password strength
//                       </Typography>
//                       <Typography 
//                         variant="caption" 
//                         sx={{ 
//                           color: getPasswordStrengthColor(), 
//                           fontWeight: 600 
//                         }}
//                       >
//                         {getPasswordStrengthLabel()}
//                       </Typography>
//                     </Box>
//                     <LinearProgress 
//                       variant="determinate" 
//                       value={passwordStrength} 
//                       sx={{ 
//                         height: 6, 
//                         borderRadius: 3,
//                         backgroundColor: theme.palette.grey[200],
//                         '& .MuiLinearProgress-bar': {
//                           backgroundColor: getPasswordStrengthColor(),
//                           transition: 'transform 0.4s ease'
//                         }
//                       }}
//                     />
//                     <FormHelperText sx={{ mt: 0.5 }}>
//                       Use 8+ characters with a mix of letters, numbers & symbols
//                     </FormHelperText>
//                   </Box>
//                 )}
//               </Box>

//               <Box>
//                 <TextField
//                   fullWidth
//                   id="confirmPassword"
//                   label="Confirm Password"
//                   type={showConfirmPassword ? 'text' : 'password'}
//                   variant="outlined"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   onBlur={() => validateConfirmPassword(confirmPassword)}
//                   error={!!confirmPasswordError}
//                   autoComplete="new-password"
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <LockIcon />
//                       </InputAdornment>
//                     ),
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton
//                           onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                           edge="end"
//                         >
//                           {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//                 {confirmPasswordError && <FormHelperText error>{confirmPasswordError}</FormHelperText>}
//               </Box>

//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 size="large"
//                 disabled={isLoading}
//                 sx={{
//                   mt: 2,
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
//                   'Create account'
//                 )}
//               </Button>

//               <Typography
//                 variant="body2"
//                 align="center"
//                 sx={{ mt: 1, color: 'text.secondary' }}
//               >
//                 By signing up, you agree to our{' '}
//                 <Link
//                   href="#"
//                   sx={{
//                     color: 'primary.main',
//                     '&:hover': { textDecoration: 'underline' },
//                   }}
//                 >
//                   Terms of Service
//                 </Link>{' '}
//                 and{' '}
//                 <Link
//                   href="#"
//                   sx={{
//                     color: 'primary.main',
//                     '&:hover': { textDecoration: 'underline' },
//                   }}
//                 >
//                   Privacy Policy
//                 </Link>
//               </Typography>

//               <Typography
//                 variant="body2"
//                 align="center"
//                 sx={{ mt: 2, color: 'text.secondary' }}
//               >
//                 Already have an account?{' '}
//                 <Link
//                   onClick={goToLogin}
//                   variant="body2"
//                   sx={{
//                     fontWeight: 600,
//                     color: 'primary.main',
//                     cursor: 'pointer',
//                     '&:hover': {
//                       textDecoration: 'underline',
//                     },
//                   }}
//                 >
//                   Log in
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
//         open={snackbar.open}
//         autoHideDuration={6000}
//         onClose={handleSnackbarClose}
//         anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
//       >
//         <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
//           {snackbar.message}
//         </Alert>
//       </Snackbar>
//     </ThemeProvider>
//   );
// }

// export default SignupPage;


//========================================


import { useTheme } from '@emotion/react';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
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
    LinearProgress,
    Link,
    Paper,
    Snackbar,
    TextField,
    ThemeProvider,
    Typography,
    useMediaQuery,
} from '@mui/material';
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
    success: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669',
    },
    warning: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#d97706',
    },
    error: {
      main: '#ef4444',
      light: '#f87171',
      dark: '#dc2626',
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

function SignupPage() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (password) {
      let strength = 0;
      
      if (password.length >= 8) strength += 25;
      else if (password.length >= 6) strength += 15;
      
      if (/[A-Z]/.test(password)) strength += 25;
      if (/[0-9]/.test(password)) strength += 25;
      if (/[^A-Za-z0-9]/.test(password)) strength += 25;
      
      setPasswordStrength(strength);
    } else {
      setPasswordStrength(0);
    }
  }, [password]);

  const getPasswordStrengthColor = () => {
    if (passwordStrength < 30) return theme.palette.error.main;
    if (passwordStrength < 70) return theme.palette.warning.main;
    return theme.palette.success.main;
  };

  const getPasswordStrengthLabel = () => {
    if (passwordStrength < 30) return 'Weak';
    if (passwordStrength < 70) return 'Medium';
    return 'Strong';
  };

  const validateUsername = (username) => {
    if (!username.trim()) {
      setUsernameError('Username is required');
      return false;
    }
    // Additional username validation if needed (e.g., no spaces, certain length, etc.)
    if (username.includes(' ')) {
      setUsernameError('Username cannot contain spaces');
      return false;
    }
    if (username.length < 3) {
      setUsernameError('Username must be at least 3 characters');
      return false;
    }
    setUsernameError('');
    return true;
  };

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

  const validateConfirmPassword = (confirmPassword) => {
    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your password');
      return false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
      return false;
    }
    setConfirmPasswordError('');
    return true;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    
    const isUsernameValid = validateUsername(username);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword(confirmPassword);
    
    if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      setIsLoading(true);
      
      try {
        // Use the correct API endpoint and request structure with exactly the parameters needed
        const response = await axios.post('https://localhost:7163/api/user/signup', {
          username: username,
          email: email,
          password_hash: password
        });

        setSnackbar({
          open: true,
          message: 'Registration successful! Redirecting to login...',
          severity: 'success'
        });

        setTimeout(() => {
          navigate('/');
        }, 2000);
      } catch (error) {
        // Enhanced error handling
        let errorMessage = 'Registration failed. Please try again.';
        
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          if (error.response.data && typeof error.response.data === 'string') {
            errorMessage = error.response.data;
          } else if (error.response.data && error.response.data.message) {
            errorMessage = error.response.data.message;
          } else if (error.response.data && error.response.data.errors) {
            // Handle validation errors
            const validationErrors = Object.values(error.response.data.errors).flat();
            if (validationErrors.length > 0) {
              errorMessage = validationErrors.join('. ');
            }
          }
          
          // Handle specific HTTP error codes
          if (error.response.status === 409) {
            errorMessage = 'Username or email already exists. Please use different credentials.';
          } else if (error.response.status === 400) {
            errorMessage = 'Invalid registration data. Please check your information.';
          }
        } else if (error.request) {
          // The request was made but no response was received
          errorMessage = 'No response from server. Please check your connection and try again.';
        } else {
          // Something happened in setting up the request that triggered an Error
          errorMessage = 'Error setting up request. Please try again.';
        }
        
        setSnackbar({
          open: true,
          message: errorMessage,
          severity: 'error'
        });
      } finally {
        setIsLoading(false);
      }
    }
  };
  
  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };
  
  const goToLogin = () => {
    navigate('/');
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
                Create your account
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
                Join BlogBuilder and start creating amazing content
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
                  Sign up with email
                </Typography>
              </Divider>
            </Box>

            <Box
              component="form"
              onSubmit={handleSignup}
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
                  id="username"
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onBlur={() => validateUsername(username)}
                  error={!!usernameError}
                  placeholder="johndoe123"
                  autoComplete="username"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {usernameError && <FormHelperText error>{usernameError}</FormHelperText>}
              </Box>

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
                  autoComplete="new-password"
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
                
                {password && (
                  <Box sx={{ mt: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Password strength
                      </Typography>
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: getPasswordStrengthColor(), 
                          fontWeight: 600 
                        }}
                      >
                        {getPasswordStrengthLabel()}
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={passwordStrength} 
                      sx={{ 
                        height: 6, 
                        borderRadius: 3,
                        backgroundColor: theme.palette.grey[200],
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: getPasswordStrengthColor(),
                          transition: 'transform 0.4s ease'
                        }
                      }}
                    />
                    <FormHelperText sx={{ mt: 0.5 }}>
                      Use 8+ characters with a mix of letters, numbers & symbols
                    </FormHelperText>
                  </Box>
                )}
              </Box>

              <Box>
                <TextField
                  fullWidth
                  id="confirmPassword"
                  label="Confirm Password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  variant="outlined"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onBlur={() => validateConfirmPassword(confirmPassword)}
                  error={!!confirmPasswordError}
                  autoComplete="new-password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          edge="end"
                        >
                          {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {confirmPasswordError && <FormHelperText error>{confirmPasswordError}</FormHelperText>}
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                disabled={isLoading}
                sx={{
                  mt: 2,
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
                  'Create account'
                )}
              </Button>

              <Typography
                variant="body2"
                align="center"
                sx={{ mt: 1, color: 'text.secondary' }}
              >
                By signing up, you agree to our{' '}
                <Link
                  href="#"
                  sx={{
                    color: 'primary.main',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link
                  href="#"
                  sx={{
                    color: 'primary.main',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  Privacy Policy
                </Link>
              </Typography>

              <Typography
                variant="body2"
                align="center"
                sx={{ mt: 2, color: 'text.secondary' }}
              >
                Already have an account?{' '}
                <Link
                  onClick={goToLogin}
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    color: 'primary.main',
                    cursor: 'pointer',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Log in
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
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default SignupPage;