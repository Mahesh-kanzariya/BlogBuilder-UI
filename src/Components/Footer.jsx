import {
    ExpandLess,
    ExpandMore,
    Facebook,
    Instagram,
    KeyboardArrowUp,
    LinkedIn,
    Send,
    Twitter,
    YouTube
} from '@mui/icons-material';
import {
    Alert,
    Box,
    Button,
    Collapse,
    Container,
    Divider,
    Fab,
    Grid,
    IconButton,
    Link,
    List,
    ListItem,
    Snackbar,
    TextField,
    Typography,
    useMediaQuery,
    Zoom
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';

const FooterContainer = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
  color: theme.palette.common.white,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(90deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`,
  }
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  margin: theme.spacing(0, 1),
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px) scale(1.1)',
    background: 'rgba(255, 255, 255, 0.1)',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.secondary.light,
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '& .MuiInputBase-input': {
    color: theme.palette.common.white,
  },
}));

const SubscribeButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.light})`,
  color: theme.palette.common.white,
  transition: 'all 0.3s ease',
  '&:hover': {
    background: `linear-gradient(90deg, ${theme.palette.secondary.dark}, ${theme.palette.primary.main})`,
    transform: 'scale(1.05)',
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(0.5, 0),
  transition: 'all 0.2s ease',
  '&:hover': {
    transform: 'translateX(4px)',
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.8)',
  textDecoration: 'none',
  transition: 'all 0.2s ease',
  '&:hover': {
    color: theme.palette.common.white,
    textDecoration: 'none',
  },
}));

const ScrollTopButton = styled(Fab)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  background: theme.palette.secondary.main,
  color: theme.palette.common.white,
  '&:hover': {
    background: theme.palette.secondary.dark,
  },
  '@keyframes pulse': {
    '0%': {
      boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.7)',
    },
    '70%': {
      boxShadow: '0 0 0 10px rgba(255, 255, 255, 0)',
    },
    '100%': {
      boxShadow: '0 0 0 0 rgba(255, 255, 255, 0)',
    },
  },
  animation: '$pulse 2s infinite',
}));

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    connect: !isMobile,
    discover: !isMobile,
    safety: !isMobile
  });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(true);
      return;
    }
    setOpenSnackbar(true);
    setEmail('');
  };

  const handleSectionToggle = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <FooterContainer component="footer">
      <Container maxWidth="lg" sx={{ pt: 6, pb: 4, position: 'relative' }}>
        <Grid container spacing={4}>
          {/* Logo and About */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 'bold',
                  background: 'linear-gradient(90deg, #f06292 0%, #7c4dff 100%)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}
              >
                BlogBuilder
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.7)' }}>
              Connect, share, and inspire. Join our growing community of creators and storytellers. Share your journey, engage with like-minded individuals, and build meaningful connections.
            </Typography>
            
            {/* Social Media Icons */}
            <Box sx={{ mb: 3 }}>
              <SocialIcon aria-label="Facebook" size="small">
                <Facebook />
              </SocialIcon>
              <SocialIcon aria-label="Twitter" size="small">
                <Twitter />
              </SocialIcon>
              <SocialIcon aria-label="Instagram" size="small">
                <Instagram />
              </SocialIcon>
              <SocialIcon aria-label="LinkedIn" size="small">
                <LinkedIn />
              </SocialIcon>
              <SocialIcon aria-label="YouTube" size="small">
                <YouTube />
              </SocialIcon>
            </Box>
            
            {/* Newsletter */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
                Get trending stories in your inbox
              </Typography>
              <Box component="form" onSubmit={handleSubscribe} sx={{ display: 'flex' }}>
                <StyledTextField
                  label="Email"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={email}
                  onChange={handleEmailChange}
                  error={emailError}
                  helperText={emailError ? "Please enter a valid email" : ""}
                  sx={{ mr: 1 }}
                />
                <SubscribeButton 
                  type="submit" 
                  variant="contained" 
                  endIcon={<Send />}
                >
                  Join
                </SubscribeButton>
              </Box>
            </Box>
          </Grid>

          {/* Connect */}
          <Grid item xs={12} sm={4} md={2.5}>
            <Box sx={{ mb: 2 }}>
              <Box 
                onClick={() => handleSectionToggle('connect')} 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  cursor: isMobile ? 'pointer' : 'default', 
                  mb: 1 
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Connect
                </Typography>
                {isMobile && (
                  expandedSections.connect ? <ExpandLess /> : <ExpandMore />
                )}
              </Box>
              <Collapse in={expandedSections.connect} timeout="auto">
                <List disablePadding>
                  <StyledListItem>
                    <FooterLink href="#">Find Friends</FooterLink>
                  </StyledListItem>
                  <StyledListItem>
                    <FooterLink href="#">Groups</FooterLink>
                  </StyledListItem>
                  <StyledListItem>
                    <FooterLink href="#">Events</FooterLink>
                  </StyledListItem>
                  <StyledListItem>
                    <FooterLink href="#">Trending Topics</FooterLink>
                  </StyledListItem>
                  <StyledListItem>
                    <FooterLink href="#">Popular Tags</FooterLink>
                  </StyledListItem>
                </List>
              </Collapse>
            </Box>
          </Grid>

          {/* Discover */}
          <Grid item xs={12} sm={4} md={2.5}>
            <Box sx={{ mb: 2 }}>
              <Box 
                onClick={() => handleSectionToggle('discover')} 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  cursor: isMobile ? 'pointer' : 'default', 
                  mb: 1 
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Discover
                </Typography>
                {isMobile && (
                  expandedSections.discover ? <ExpandLess /> : <ExpandMore />
                )}
              </Box>
              <Collapse in={expandedSections.discover} timeout="auto">
                <List disablePadding>
                  <StyledListItem>
                    <FooterLink href="#">Featured Stories</FooterLink>
                  </StyledListItem>
                  <StyledListItem>
                    <FooterLink href="#">Popular Creators</FooterLink>
                  </StyledListItem>
                  <StyledListItem>
                    <FooterLink href="#">Challenges</FooterLink>
                  </StyledListItem>
                  <StyledListItem>
                    <FooterLink href="#">Explore</FooterLink>
                  </StyledListItem>
                  <StyledListItem>
                    <FooterLink href="#">Creator Program</FooterLink>
                  </StyledListItem>
                </List>
              </Collapse>
            </Box>
          </Grid>

          {/* Safety & Support */}
          <Grid item xs={12} sm={4} md={3}>
            <Box sx={{ mb: 2 }}>
              <Box 
                onClick={() => handleSectionToggle('safety')} 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  cursor: isMobile ? 'pointer' : 'default', 
                  mb: 1 
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Safety & Support
                </Typography>
                {isMobile && (
                  expandedSections.safety ? <ExpandLess /> : <ExpandMore />
                )}
              </Box>
              <Collapse in={expandedSections.safety} timeout="auto">
                <List disablePadding>
                  <StyledListItem>
                    <FooterLink href="#">Community Guidelines</FooterLink>
                  </StyledListItem>
                  <StyledListItem>
                    <FooterLink href="#">Safety Center</FooterLink>
                  </StyledListItem>
                  <StyledListItem>
                    <FooterLink href="#">Report an Issue</FooterLink>
                  </StyledListItem>
                  <StyledListItem>
                    <FooterLink href="#">Privacy Settings</FooterLink>
                  </StyledListItem>
                  <StyledListItem>
                    <FooterLink href="#">Help Center</FooterLink>
                  </StyledListItem>
                </List>
              </Collapse>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        
        {/* Copyright */}
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              © {new Date().getFullYear()} BlogBuilder. All rights reserved.
            </Typography>
          </Grid>
          <Grid item>
            <FooterLink href="#" sx={{ mr: 2, fontSize: '0.875rem' }}>
              Terms
            </FooterLink>
            <FooterLink href="#" sx={{ mr: 2, fontSize: '0.875rem' }}>
              Privacy
            </FooterLink>
            <FooterLink href="#" sx={{ fontSize: '0.875rem' }}>
              Cookies
            </FooterLink>
          </Grid>
        </Grid>
        
        {/* Back to top button */}
        <Zoom in={showScrollTop}>
          <ScrollTopButton 
            size="small" 
            aria-label="scroll back to top"
            onClick={scrollToTop}
          >
            <KeyboardArrowUp />
          </ScrollTopButton>
        </Zoom>
      </Container>

      {/* Subscription Success Message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setOpenSnackbar(false)} 
          severity="success" 
          variant="filled"
          sx={{ width: '100%' }}
        >
          Thanks for subscribing! Get ready for trending stories in your inbox.
        </Alert>
      </Snackbar>
    </FooterContainer>
  );
};

export default Footer;