import {
    Check,
    ChevronLeft,
    ContentCopy,
    Email,
    LockReset,
} from "@mui/icons-material";
import {
    Alert,
    Box,
    Button,
    Card,
    CardContent,
    CircularProgress,
    Container,
    Divider,
    IconButton,
    Snackbar,
    TextField,
    Typography
} from "@mui/material";
import axios from "axios";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PasswordResetForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [resetLink, setResetLink] = useState("");
  const [copied, setCopied] = useState(false);

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    setError("");
    setResetLink("");

    try {
      // Example response handling based on your provided format
      const response = await axios.post(
        "https://localhost:7163/api/password/request-reset",
        { email }
      );

      setMessage(response.data.message);
      setResetLink(response.data.link);
      console.log("Password Reset Link:"+response.data.link);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to send reset request. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (resetLink) {
      navigator.clipboard.writeText(resetLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
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
      transition: {
        duration: 0.2,
      },
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
              position: "relative"
            }}
          >
            <IconButton 
              size="small" 
              sx={{ 
                position: "absolute", 
                left: 8, 
                color: "primary.contrastText" 
              }}
              onClick={goToLogin}
            >
              <ChevronLeft />
            </IconButton>
            <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
              Account Recovery
            </Typography>
          </Box>

          <CardContent sx={{ p: 4 }}>
            <Box sx={{ textAlign: "center", mb: 3 }}>
              <Box 
                sx={{ 
                  display: "inline-block", 
                  bgcolor: "primary.light", 
                  color: "primary.dark",
                  p: 1.5,
                  borderRadius: "50%",
                  mb: 2
                }}
              >
                <LockReset fontSize="large" />
              </Box>
              <Typography 
                variant="h5" 
                component="h1" 
                sx={{ fontWeight: "bold", mb: 1 }}
              >
                Reset Your Password
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Enter your email address and we'll send you a link to reset your password
              </Typography>
            </Box>

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <TextField
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
                margin="normal"
                variant="outlined"
                InputProps={{
                  startAdornment: <Email color="action" sx={{ mr: 1 }} />,
                }}
                sx={{ mb: 3 }}
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
                  disabled={isLoading}
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
                    "Send Reset Link"
                  )}
                </Button>
              </motion.div>

              {message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Alert 
                    severity="success" 
                    sx={{ mt: 3, alignItems: "flex-start" }}
                  >
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {message}
                      </Typography>
                      
                      {resetLink && (
                        <Box 
                          sx={{ 
                            mt: 1,
                            p: 1.5, 
                            bgcolor: "success.light", 
                            borderRadius: 1,
                            position: "relative",
                            pr: 5
                          }}
                        >
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              wordBreak: "break-all",
                              color: "success.dark", 
                              fontSize: "0.8rem",
                              fontFamily: "monospace"
                            }}
                          >
                            {resetLink}
                          </Typography>
                          <IconButton
                            size="small"
                            onClick={copyToClipboard}
                            sx={{ 
                              position: "absolute",
                              right: 8,
                              top: "50%",
                              transform: "translateY(-50%)",
                              color: "success.dark"
                            }}
                          >
                            {copied ? <Check fontSize="small" /> : <ContentCopy fontSize="small" />}
                          </IconButton>
                        </Box>
                      )}
                    </Box>
                  </Alert>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Alert severity="error" sx={{ mt: 3 }}>
                    <Typography variant="body2">{error}</Typography>
                  </Alert>
                </motion.div>
              )}
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Remember your password?
              </Typography>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  onClick={goToLogin}
                  variant="outlined"
                  size="large"
                  sx={{
                    textTransform: "none",
                    borderRadius: 2,
                    px: 4
                  }}
                >
                  Back to Login
                </Button>
              </motion.div>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
      
      <Snackbar
        open={copied}
        autoHideDuration={2000}
        message="Link copied to clipboard"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Container>
  );
};

export default PasswordResetForm;