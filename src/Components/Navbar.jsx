// import ArticleIcon from '@mui/icons-material/Article';
// import CloseIcon from '@mui/icons-material/Close';
// import CreateIcon from '@mui/icons-material/Create';
// import ExploreIcon from '@mui/icons-material/Explore';
// import HomeIcon from '@mui/icons-material/Home';
// import MenuIcon from '@mui/icons-material/Menu';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import PersonIcon from '@mui/icons-material/Person';
// import { AppBar, Avatar, Badge, Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import bbLogo from '../Images/bb_logo_bgless.png';

// const Navbar = ({ scrolled }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const navigate = useNavigate();
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const navLinks = [
//     { text: 'Home', icon: <HomeIcon />, path: '/home' },
//     { text: 'My Blogs', icon: <ArticleIcon />, path: '/my-blogs' },
//     { text: 'Create Blog', icon: <CreateIcon />, path: '/create-blog' },
//     { text: 'Explore', icon: <ExploreIcon />, path: '/explore' },
//     { text: 'Profile', icon: <PersonIcon />, path: '/profile' }
//   ];

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   return (
//     <>
//       <AppBar
//         position="fixed"
//         sx={{
//           background: scrolled 
//             ? 'rgba(255, 255, 255, 0.9)'
//             : 'linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8))',
//           backdropFilter: 'blur(10px)',
//           boxShadow: scrolled ? '0px 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
//           transition: 'all 0.3s ease-in-out',
//           borderBottom: '1px solid rgba(231, 231, 231, 0.3)'
//         }}
//       >
//         <Container maxWidth="lg">
//           <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
//             <Box 
//               sx={{ 
//                 display: 'flex', 
//                 alignItems: 'center',
//                 cursor: 'pointer',
//                 transition: 'transform 0.3s ease',
//                 '&:hover': {
//                   transform: 'scale(1.15)'
//                 }
//               }}
//               onClick={() => navigate("/home")}
//             >
//               <img
//                 src={bbLogo}
//                 alt="BlogBuilder Logo"
//                 style={{ width: '60px', height: 'auto', marginRight: '2px' }}
//               />
//               <Typography
//                 variant="h5"
//                 sx={{
//                   fontWeight: 700,
//                   background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//                   backgroundClip: 'text',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   letterSpacing: '0.5px'
//                 }}
//               >
//                 BlogBuilder
//               </Typography>
//             </Box>

//             {isMobile ? (
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                 <Tooltip title="Notifications">
//                   <IconButton size="large">
//                     <Badge badgeContent={3} color="error">
//                       <NotificationsIcon />
//                     </Badge>
//                   </IconButton>
//                 </Tooltip>
//                 <IconButton
//                   onClick={toggleDrawer}
//                   sx={{
//                     color: theme.palette.text.primary,
//                     '&:hover': {
//                       background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`
//                     }
//                   }}
//                 >
//                   <MenuIcon />
//                 </IconButton>
//               </Box>
//             ) : (
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                 {navLinks.map((link) => (
//                   <Button
//                     key={link.text}
//                     onClick={() => navigate(link.path)}
//                     startIcon={link.icon}
//                     sx={{
//                       color: theme.palette.text.primary,
//                       px: 2,
//                       py: 1,
//                       borderRadius: 2,
//                       transition: 'all 0.3s ease',
//                       position: 'relative',
//                       overflow: 'hidden',
//                       '&::before': {
//                         content: '""',
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         width: '100%',
//                         height: '100%',
//                         background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
//                         opacity: 0,
//                         transition: 'opacity 0.3s ease',
//                       },
//                       '&:hover': {
//                         transform: 'translateY(-2px)',
//                         '&::before': {
//                           opacity: 1,
//                         }
//                       }
//                     }}
//                   >
//                     {link.text}
//                   </Button>
//                 ))}
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 2 }}>
//                   <Tooltip title="Notifications">
//                     <IconButton size="large">
//                       <Badge badgeContent={3} color="error">
//                         <NotificationsIcon />
//                       </Badge>
//                     </IconButton>
//                   </Tooltip>
//                   <Tooltip title="Profile">
//                     <IconButton onClick={() => navigate("/profile")}>
//                       <Avatar 
//                         sx={{ 
//                           width: 35, 
//                           height: 35,
//                           border: `2px solid ${theme.palette.primary.main}`,
//                           transition: 'transform 0.3s ease',
//                           '&:hover': {
//                             transform: 'scale(1.1)'
//                           }
//                         }}
//                       />
//                     </IconButton>
//                   </Tooltip>
//                 </Box>
//               </Box>
//             )}
//           </Toolbar>
//         </Container>
//       </AppBar>

//       <Drawer
//         anchor="right"
//         open={drawerOpen}
//         onClose={toggleDrawer}
//         PaperProps={{
//           sx: {
//             width: 280,
//             borderRadius: '20px 0 0 20px',
//             background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
//           },
//         }}
//       >
//         <Box sx={{ 
//           p: 3, 
//           display: 'flex', 
//           flexDirection: 'column',
//           height: '100%'
//         }}>
//           <Box sx={{ 
//             display: 'flex', 
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             mb: 4
//           }}>
//             <Typography variant="h6" sx={{ fontWeight: 600 }}>
//               Menu
//             </Typography>
//             <IconButton 
//               onClick={toggleDrawer}
//               sx={{
//                 '&:hover': {
//                   background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`
//                 }
//               }}
//             >
//               <CloseIcon />
//             </IconButton>
//           </Box>
          
//           <List sx={{ flex: 1 }}>
//             {navLinks.map((link) => (
//               <ListItem key={link.text} disablePadding sx={{ mb: 1 }}>
//                 <ListItemButton
//                   onClick={() => {
//                     navigate(link.path);
//                     toggleDrawer();
//                   }}
//                   sx={{
//                     borderRadius: 2,
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
//                       transform: 'translateX(8px)'
//                     },
//                   }}
//                 >
//                   <ListItemIcon sx={{ minWidth: 40 }}>
//                     {link.icon}
//                   </ListItemIcon>
//                   <ListItemText 
//                     primary={link.text} 
//                     primaryTypographyProps={{
//                       fontWeight: 500
//                     }}
//                   />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>

//           <Box sx={{ pt: 2, borderTop: 1, borderColor: 'divider' }}>
//             <ListItem disablePadding>
//               <ListItemButton
//                 sx={{
//                   borderRadius: 2,
//                   '&:hover': {
//                     background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`
//                   }
//                 }}
//               >
//                 <ListItemIcon>
//                   <Avatar sx={{ width: 32, height: 32 }} />
//                 </ListItemIcon>
//                 <ListItemText 
//                   primary="Your Profile"
//                   secondary="View and edit profile"
//                 />
//               </ListItemButton>
//             </ListItem>
//           </Box>
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;

//==========================================================================

import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  AppBar, 
  Avatar, 
  Badge, 
  Box, 
  Button, 
  Container, 
  Drawer, 
  IconButton, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Menu,
  MenuItem,
  Toolbar, 
  Tooltip, 
  Typography, 
  useMediaQuery, 
  useTheme 
} from '@mui/material';

// Icons
import ArticleIcon from '@mui/icons-material/Article';
import CloseIcon from '@mui/icons-material/Close';
import CreateIcon from '@mui/icons-material/Create';
import ExploreIcon from '@mui/icons-material/Explore';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

// Logo
import bbLogo from '../Images/bb_logo_bgless.png';

const Navbar = ({ scrolled }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  
  // For profile menu popup
  const [profileMenuAnchor, setProfileMenuAnchor] = useState(null);
  const profileMenuOpen = Boolean(profileMenuAnchor);

  // Navigation links without the Profile tab
  const navLinks = [
    { text: 'Home', icon: <HomeIcon />, path: '/home' },
    { text: 'My Blogs', icon: <ArticleIcon />, path: '/my-blogs' },
    { text: 'Create Blog', icon: <CreateIcon />, path: '/create-blog' },
    { text: 'Explore', icon: <ExploreIcon />, path: '/explore' }
  ];

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Fetch user data when component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const email = sessionStorage.getItem('userEmail');
        if (!email) return;

        const encodedEmail = encodeURIComponent(email);
        const response = await fetch(`https://localhost:7163/api/user/by-email?email=${encodedEmail}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  // Handle profile menu open
  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchor(event.currentTarget);
  };

  // Handle profile menu close
  const handleProfileMenuClose = () => {
    setProfileMenuAnchor(null);
  };

  // Handle navigation to profile page
  const handleSeeProfile = () => {
    navigate('/profile');
    handleProfileMenuClose();
    if (drawerOpen) {
      toggleDrawer();
    }
  };

  // Handle logout
  const handleLogout = () => {
    // Clear session storage
    sessionStorage.clear();
    // Navigate to login page
    navigate('/');
    handleProfileMenuClose();
    if (drawerOpen) {
      toggleDrawer();
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: scrolled 
            ? 'rgba(255, 255, 255, 0.9)'
            : 'linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8))',
          backdropFilter: 'blur(10px)',
          boxShadow: scrolled ? '0px 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
          transition: 'all 0.3s ease-in-out',
          borderBottom: '1px solid rgba(231, 231, 231, 0.3)'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.15)'
                }
              }}
              onClick={() => navigate("/home")}
            >
              <img
                src={bbLogo}
                alt="BlogBuilder Logo"
                style={{ width: '60px', height: 'auto', marginRight: '2px' }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '0.5px'
                }}
              >
                BlogBuilder
              </Typography>
            </Box>

            {isMobile ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Tooltip title="Notifications">
                  <IconButton size="large">
                    <Badge badgeContent={3} color="error">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Profile">
                  <IconButton 
                    onClick={handleProfileMenuOpen}
                    aria-controls={profileMenuOpen ? "profile-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={profileMenuOpen ? "true" : undefined}
                  >
                    <Avatar 
                      src={userData?.profile_Image_Url || ''}
                      alt={userData?.username || 'User'}
                      sx={{ 
                        width: 35, 
                        height: 35,
                        border: `2px solid ${theme.palette.primary.main}`,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.1)'
                        }
                      }}
                    />
                  </IconButton>
                </Tooltip>
                <IconButton
                  onClick={toggleDrawer}
                  sx={{
                    color: theme.palette.text.primary,
                    '&:hover': {
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`
                    }
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.text}
                    onClick={() => navigate(link.path)}
                    startIcon={link.icon}
                    sx={{
                      color: theme.palette.text.primary,
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      },
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        '&::before': {
                          opacity: 1,
                        }
                      }
                    }}
                  >
                    {link.text}
                  </Button>
                ))}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 2 }}>
                  <Tooltip title="Notifications">
                    <IconButton size="large">
                      <Badge badgeContent={3} color="error">
                        <NotificationsIcon />
                      </Badge>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Profile">
                    <IconButton 
                      onClick={handleProfileMenuOpen}
                      aria-controls={profileMenuOpen ? "profile-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={profileMenuOpen ? "true" : undefined}
                    >
                      <Avatar 
                        src={userData?.profile_Image_Url || ''}
                        alt={userData?.username || 'User'}
                        sx={{ 
                          width: 35, 
                          height: 35,
                          border: `2px solid ${theme.palette.primary.main}`,
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.1)'
                          }
                        }}
                      />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Profile Menu Popup */}
      <Menu
        id="profile-menu"
        anchorEl={profileMenuAnchor}
        open={profileMenuOpen}
        onClose={handleProfileMenuClose}
        MenuListProps={{
          'aria-labelledby': 'profile-button',
        }}
        PaperProps={{
          elevation: 3,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.12))',
            mt: 1.5,
            borderRadius: 2,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box sx={{ px: 2, py: 1, borderBottom: 1, borderColor: 'divider' }}>
          <Typography variant="subtitle1" fontWeight={600}>
            {userData?.username || 'User'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {userData?.email || ''}
          </Typography>
        </Box>
        <MenuItem onClick={handleSeeProfile} sx={{ py: 1.5 }}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>See Profile</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleLogout} sx={{ py: 1.5 }}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: 280,
            borderRadius: '20px 0 0 20px',
            background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
          },
        }}
      >
        <Box sx={{ 
          p: 3, 
          display: 'flex', 
          flexDirection: 'column',
          height: '100%'
        }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 4
          }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Menu
            </Typography>
            <IconButton 
              onClick={toggleDrawer}
              sx={{
                '&:hover': {
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`
                }
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          
          <List sx={{ flex: 1 }}>
            {navLinks.map((link) => (
              <ListItem key={link.text} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  onClick={() => {
                    navigate(link.path);
                    toggleDrawer();
                  }}
                  sx={{
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                      transform: 'translateX(8px)'
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    {link.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={link.text} 
                    primaryTypographyProps={{
                      fontWeight: 500
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box sx={{ pt: 2, borderTop: 1, borderColor: 'divider' }}>
            <ListItem disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                onClick={handleSeeProfile}
                sx={{
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`
                  }
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Avatar 
                    src={userData?.profile_Image_Url || ''}
                    alt={userData?.username || 'User'}
                    sx={{ width: 32, height: 32 }} 
                  />
                </ListItemIcon>
                <ListItemText 
                  primary="See Profile" 
                  primaryTypographyProps={{
                    fontWeight: 500
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={handleLogout}
                sx={{
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`
                  }
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText 
                  primary="Logout" 
                  primaryTypographyProps={{
                    fontWeight: 500
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;