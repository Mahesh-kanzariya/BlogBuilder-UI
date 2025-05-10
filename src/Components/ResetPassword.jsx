import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import {
  Lock,
  LockOpen,
  Visibility,
  VisibilityOff,
  CheckCircle,
  ChevronLeft,
} from "@mui/icons-material";

const ResetPasswordComponent = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Extract token from URL parameters on component mount
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    
    if (token) {
      setResetToken(token);
    } else {
      setError("Invalid or missing reset token. Please request a new password reset link.");
    }
  }, [location]);

  const goToLogin = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setIsLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await axios.post(
        "https://localhost:7163/api/password/reset",
        { 
          newPassword,
          token: resetToken // Add token from URL to the request
        }
      );

      setMessage(response.data.message || "Password reset successful!");
      setResetSuccess(true);
      setNewPassword("");
      setConfirmPassword("");
      
      // Redirect to login after successful reset (with delay)
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Failed to reset password. The link may have expired."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Card
          elevation={6}
          sx={{
            borderRadius: 3,
            overflow: "hidden",
            background: "linear-gradient(145deg, #ffffff 0%, #f5f7fa 100%)",
          }}
        >
          <Box
            sx={{
              p: 1,
              bgcolor: "primary.main",
              color: "primary.contrastText",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <IconButton
              size="small"
              sx={{
                position: "absolute",
                left: 8,
                color: "primary.contrastText",
              }}
              onClick={goToLogin}
            >
              <ChevronLeft />
            </IconButton>
            <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
              Set New Password
            </Typography>
          </Box>

          <CardContent sx={{ p: 4 }}>
            {resetSuccess ? (
              <Box sx={{ textAlign: "center", py: 4 }}>
                <CheckCircle
                  color="success"
                  sx={{ fontSize: 64, mb: 2 }}
                />
                <Typography variant="h5" component="h1" gutterBottom>
                  Password Reset Successful!
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  Your password has been updated. You will be redirected to the login page in a moment.
                </Typography>
                <Button
                  variant="contained"
                  onClick={goToLogin}
                  sx={{
                    mt: 2,
                    textTransform: "none",
                    borderRadius: 2,
                    fontWeight: "bold",
                  }}
                >
                  Go to Login
                </Button>
              </Box>
            ) : (
              <>
                <Box sx={{ textAlign: "center", mb: 3 }}>
                  <Box
                    sx={{
                      display: "inline-block",
                      bgcolor: "primary.light",
                      color: "primary.dark",
                      p: 1.5,
                      borderRadius: "50%",
                      mb: 2,
                    }}
                  >
                    {isLoading ? (
                      <CircularProgress size={28} color="primary" />
                    ) : (
                      <LockOpen fontSize="large" />
                    )}
                  </Box>
                  <Typography
                    variant="h5"
                    component="h1"
                    sx={{ fontWeight: "bold", mb: 1 }}
                  >
                    Create New Password
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Enter a new password for your account
                  </Typography>
                </Box>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Alert severity="error" sx={{ mb: 3 }}>
                      <Typography variant="body2">{error}</Typography>
                    </Alert>
                  </motion.div>
                )}

                {message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Alert severity="success" sx={{ mb: 3 }}>
                      <Typography variant="body2">{message}</Typography>
                    </Alert>
                  </motion.div>
                )}

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <TextField
                    label="New Password"
                    type={showPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock color="action" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={togglePasswordVisibility}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{ mb: 2 }}
                  />

                  <TextField
                    label="Confirm Password"
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock color="action" />
                        </InputAdornment>
                      ),
                    }}
                    sx={{ mb: 3 }}
                    error={confirmPassword !== "" && newPassword !== confirmPassword}
                    helperText={
                      confirmPassword !== "" && newPassword !== confirmPassword
                        ? "Passwords do not match"
                        : ""
                    }
                  />

                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      size="large"
                      disabled={isLoading || !resetToken}
                      sx={{
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: "none",
                        fontWeight: "bold",
                      }}
                    >
                      {isLoading ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        "Reset Password"
                      )}
                    </Button>
                  </motion.div>

                  <Box sx={{ mt: 3, textAlign: "center" }}>
                    <Button
                      onClick={goToLogin}
                      sx={{
                        textTransform: "none",
                        color: "text.secondary",
                      }}
                    >
                      Cancel and return to login
                    </Button>
                  </Box>
                </Box>
              </>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </Container>
  );
};

export default ResetPasswordComponent;