// import ArticleIcon from "@mui/icons-material/Article";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import DateRangeIcon from "@mui/icons-material/DateRange";
// import EditIcon from "@mui/icons-material/Edit";
// import EmailIcon from "@mui/icons-material/Email";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import {
//     Avatar,
//     Box,
//     Button,
//     Card,
//     CardContent,
//     Container,
//     Dialog,
//     DialogActions,
//     DialogContent,
//     DialogTitle,
//     Divider,
//     Grid,
//     IconButton,
//     List,
//     ListItem,
//     ListItemAvatar,
//     ListItemText,
//     Paper,
//     styled,
//     Tab,
//     Tabs,
//     TextField,
//     Typography,
//     useTheme
// } from "@mui/material";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";

// const LogoutButton = styled(Button)(({ theme }) => ({
//     background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.light})`,
//     color: theme.palette.common.white,
//     transition: 'all 0.3s ease',
//     '&:hover': {
//       background: `linear-gradient(90deg, ${theme.palette.secondary.dark}, ${theme.palette.primary.main})`,
//       transform: 'scale(1.05)',
//     },
//   }));

// const ProfilePage = () => {
//   const theme = useTheme();
//   const [currentTab, setCurrentTab] = useState(0);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate("/");
//   };

//   const userProfile = {
//     name: "Sarah Johnson",
//     avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
//     bio: "Digital storyteller | Tech enthusiast | Coffee lover",
//     location: "San Francisco, CA",
//     email: "sarah.johnson@example.com",
//     joinDate: "January 2024",
//     stats: {
//       posts: 47,
//       followers: 1234,
//       following: 891,
//       likes: 2156,
//     },
//     recentPosts: [
//       {
//         id: 1,
//         title: "The Future of AI in Content Creation",
//         date: "2 days ago",
//         likes: 156,
//         image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
//       },
//       {
//         id: 2,
//         title: "My Journey as a Tech Writer",
//         date: "5 days ago",
//         likes: 234,
//         image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
//       },
//       {
//         id: 3,
//         title: "Understanding Modern Web Development",
//         date: "1 week ago",
//         likes: 189,
//         image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
//       },
//     ],
//   };

//   const [editOpen, setEditOpen] = useState(false);

//   const [formData, setFormData] = useState({
//     name: userProfile.name,
//     bio: userProfile.bio,
//     avatar: userProfile.avatar,
//   });

//   const handleTabChange = (event, newValue) => {
//     setCurrentTab(newValue);
//   };

//   return (
//     <Container maxWidth="lg" sx={{ py: 8 }}>
//       <Navbar />
//       {/* Profile Header */}
//       <Paper
//         elevation={0}
//         sx={{
//           p: 4,
//           mb: 4,
//           borderRadius: 4,
//           background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
//           color: "white",
//           position: "relative", // Important for placing the button
//         }}
//       >
//         {/* Logout Button */}
//         <Box sx={{ position: "absolute", top: 20, right: 16 }}>
//           <LogoutButton
//             variant="outlined"
//             onClick={handleLogout} // Your logout logic here

//           >
//             Logout
//           </LogoutButton>
//         </Box>

//         <Grid container spacing={4} alignItems="center">
//           <Grid item>
//             <Avatar
//               src={userProfile.avatar}
//               alt={userProfile.name}
//               sx={{
//                 width: 120,
//                 height: 120,
//                 border: "4px solid white",
//                 boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
//               }}
//             />
//           </Grid>
//           <Grid item xs={12} sm>
//             <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
//               <Typography variant="h4" fontWeight="bold">
//                 {userProfile.name}
//               </Typography>
//               <IconButton
//   onClick={() => setEditOpen(true)}
//   sx={{
//     bgcolor: "rgba(255,255,255,0.1)",
//     "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
//   }}
// >
//   <EditIcon />
// </IconButton>
//             </Box>
//             <Typography variant="body1" sx={{ mb: 2, opacity: 0.9 }}>
//               {userProfile.bio}
//             </Typography>
//             <Box
//               sx={{ display: "flex", gap: 3, color: "rgba(255,255,255,0.9)" }}
//             >
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                 <LocationOnIcon fontSize="small" />
//                 <Typography variant="body2">{userProfile.location}</Typography>
//               </Box>
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                 <EmailIcon fontSize="small" />
//                 <Typography variant="body2">{userProfile.email}</Typography>
//               </Box>
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                 <DateRangeIcon fontSize="small" />
//                 <Typography variant="body2">
//                   Joined {userProfile.joinDate}
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Paper>

//       <Dialog open={editOpen} onClose={() => setEditOpen(false)} fullWidth maxWidth="sm">
//   <DialogTitle>Edit Profile</DialogTitle>
//   <DialogContent dividers>
//     <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//       <TextField
//         label="Full Name"
//         value={formData.name}
//         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//         fullWidth
//       />
//       <TextField
//         label="Bio"
//         multiline
//         rows={3}
//         value={formData.bio}
//         onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
//         fullWidth
//       />
//       <Button variant="contained" component="label">
//         Upload Profile Picture
//         <input
//           type="file"
//           hidden
//           accept="image/*"
//           onChange={(e) => {
//             const file = e.target.files[0];
//             if (file) {
//               const reader = new FileReader();
//               reader.onloadend = () => {
//                 setFormData({ ...formData, avatar: reader.result });
//               };
//               reader.readAsDataURL(file);
//             }
//           }}
//         />
//       </Button>
//       {formData.avatar && (
//         <Avatar
//           src={formData.avatar}
//           sx={{ width: 100, height: 100, mt: 2 }}
//         />
//       )}
//     </Box>
//   </DialogContent>
//   <DialogActions>
//     <Button onClick={() => setEditOpen(false)}>Cancel</Button>
//     <Button
//       onClick={() => {
//         // Save logic here
//         console.log("Updated Data:", formData);
//         setEditOpen(false);
//       }}
//       variant="contained"
//     >
//       Save
//     </Button>
//   </DialogActions>
// </Dialog>

//       {/* Statistics Cards */}
//       <Grid container spacing={3} sx={{ mb: 4 }}>
//         {[
//           { icon: ArticleIcon, label: "Posts", value: userProfile.stats.posts },
//           {
//             icon: FavoriteIcon,
//             label: "Likes",
//             value: userProfile.stats.likes,
//           },
//           {
//             icon: BookmarkIcon,
//             label: "Followers",
//             value: userProfile.stats.followers,
//           },
//           {
//             icon: BarChartIcon,
//             label: "Following",
//             value: userProfile.stats.following,
//           },
//         ].map((stat, index) => (
//           <Grid item xs={6} sm={3} key={index}>
//             <Card
//               sx={{
//                 height: "100%",
//                 transition: "transform 0.2s",
//                 "&:hover": {
//                   transform: "translateY(-4px)",
//                 },
//               }}
//             >
//               <CardContent sx={{ textAlign: "center" }}>
//                 <stat.icon color="primary" sx={{ fontSize: 40, mb: 1 }} />
//                 <Typography variant="h4" fontWeight="bold" color="primary">
//                   {stat.value.toLocaleString()}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {stat.label}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Content Tabs */}
//       <Box sx={{ mb: 4 }}>
//         <Tabs
//           value={currentTab}
//           onChange={handleTabChange}
//           variant="fullWidth"
//           sx={{
//             mb: 3,
//             "& .MuiTab-root": {
//               minHeight: 64,
//               fontSize: "1rem",
//             },
//           }}
//         >
//           <Tab label="Recent Posts" />
//           <Tab label="Liked Posts" />
//           <Tab label="Saved Posts" />
//           <Tab label="Drafts" />
//         </Tabs>

//         <List>
//           {userProfile.recentPosts.map((post) => (
//             <React.Fragment key={post.id}>
//               <ListItem
//                 sx={{
//                   bgcolor: "background.paper",
//                   borderRadius: 2,
//                   mb: 2,
//                   transition: "transform 0.2s",
//                   "&:hover": {
//                     transform: "translateX(8px)",
//                   },
//                 }}
//               >
//                 <ListItemAvatar>
//                   <Avatar
//                     variant="rounded"
//                     src={post.image}
//                     sx={{ width: 80, height: 80, mr: 2 }}
//                   />
//                 </ListItemAvatar>
//                 <ListItemText
//                   primary={
//                     <Typography variant="h6" gutterBottom>
//                       {post.title}
//                     </Typography>
//                   }
//                   secondary={
//                     <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//                       <Typography variant="body2" color="text.secondary">
//                         {post.date}
//                       </Typography>
//                       <Box
//                         sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
//                       >
//                         <FavoriteIcon fontSize="small" color="error" />
//                         <Typography variant="body2" color="text.secondary">
//                           {post.likes}
//                         </Typography>
//                       </Box>
//                     </Box>
//                   }
//                 />
//                 <Button variant="outlined" size="small">
//                   View
//                 </Button>
//               </ListItem>
//               <Divider />
//             </React.Fragment>
//           ))}
//         </List>
//       </Box>
//     </Container>
//   );
// };

// export default ProfilePage;

//================================================

// import ArticleIcon from "@mui/icons-material/Article";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import DateRangeIcon from "@mui/icons-material/DateRange";
// import EditIcon from "@mui/icons-material/Edit";
// import EmailIcon from "@mui/icons-material/Email";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import PersonIcon from "@mui/icons-material/Person";
// import {
//     Avatar,
//     Box,
//     Button,
//     Card,
//     CardContent,
//     CircularProgress,
//     Container,
//     Dialog,
//     DialogActions,
//     DialogContent,
//     DialogTitle,
//     Divider,
//     Grid,
//     IconButton,
//     List,
//     ListItem,
//     ListItemAvatar,
//     ListItemText,
//     Paper,
//     styled,
//     Tab,
//     Tabs,
//     TextField,
//     Typography,
//     useTheme
// } from "@mui/material";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";

// const LogoutButton = styled(Button)(({ theme }) => ({
//     background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.light})`,
//     color: theme.palette.common.white,
//     transition: 'all 0.3s ease',
//     '&:hover': {
//       background: `linear-gradient(90deg, ${theme.palette.secondary.dark}, ${theme.palette.primary.main})`,
//       transform: 'scale(1.05)',
//     },
// }));

// const ProfilePage = () => {
//   const theme = useTheme();
//   const [currentTab, setCurrentTab] = useState(0);
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [userData, setUserData] = useState(null);
//   const [error, setError] = useState(null);

//   // Default dummy data for stats and posts (can be replaced with real API data later)
//   const defaultStats = {
//     posts: 0,
//     followers: 0,
//     following: 0,
//     likes: 0,
//   };

//   const recentPosts = [
//     {
//       id: 1,
//       title: "The Future of AI in Content Creation",
//       date: "2 days ago",
//       likes: 156,
//       image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
//     },
//     {
//       id: 2,
//       title: "My Journey as a Tech Writer",
//       date: "5 days ago",
//       likes: 234,
//       image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
//     },
//     {
//       id: 3,
//       title: "Understanding Modern Web Development",
//       date: "1 week ago",
//       likes: 189,
//       image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
//     },
//   ];

//   const [editOpen, setEditOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     bio: "",
//     avatar: "",
//   });

//   // Fetch user data on component mount
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         setLoading(true);
//         // Get email from session storage
//         const userEmail = sessionStorage.getItem('userEmail');

//         if (!userEmail) {
//           // If no email in session storage, redirect to login
//           navigate('/');
//           return;
//         }

//         // API call to get user data
//         const response = await axios.get(`https://localhost:7163/api/user/by-email?email=${encodeURIComponent(userEmail)}`);

//         setUserData(response.data);

//         // Update form data with user data
//         setFormData({
//           name: response.data.username || response.data.full_Name || "",
//           bio: response.data.bio || "",
//           avatar: response.data.profile_Image_Url || "",
//         });
//       } catch (err) {
//         console.error("Error fetching user data:", err);
//         setError("Failed to load user data. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, [navigate]);

//   const handleLogout = () => {
//     // Clear session storage on logout
//     sessionStorage.removeItem('userEmail');
//     navigate("/");
//   };

//   const handleTabChange = (event, newValue) => {
//     setCurrentTab(newValue);
//   };

//   const formatJoinDate = (dateString) => {
//     if (!dateString) return "Unknown";
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
//   };

//   // Show loading state while fetching data
//   if (loading) {
//     return (
//       <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
//         <Navbar />
//         <Box sx={{ mt: 10 }}>
//           <CircularProgress />
//           <Typography variant="h6" sx={{ mt: 2 }}>Loading profile...</Typography>
//         </Box>
//       </Container>
//     );
//   }

//   // Show error if there's a problem fetching data
//   if (error) {
//     return (
//       <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
//         <Navbar />
//         <Paper sx={{ p: 4, mt: 4, borderRadius: 2 }}>
//           <Typography variant="h6" color="error">{error}</Typography>
//           <Button variant="contained" sx={{ mt: 2 }} onClick={() => window.location.reload()}>
//             Try Again
//           </Button>
//         </Paper>
//       </Container>
//     );
//   }

//   return (
//     <Container maxWidth="lg" sx={{ py: 8 }}>
//       <Navbar />
//       {/* Profile Header */}
//       <Paper
//         elevation={0}
//         sx={{
//           p: 4,
//           mb: 4,
//           borderRadius: 4,
//           background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
//           color: "white",
//           position: "relative", // Important for placing the button
//         }}
//       >
//         {/* Logout Button */}
//         <Box sx={{ position: "absolute", top: 20, right: 16 }}>
//           <LogoutButton
//             variant="outlined"
//             onClick={handleLogout}
//           >
//             Logout
//           </LogoutButton>
//         </Box>

//         <Grid container spacing={4} alignItems="center">
//           <Grid item>
//             {formData.avatar ? (
//               <Avatar
//                 src={formData.avatar}
//                 alt={userData?.username || "User"}
//                 sx={{
//                   width: 120,
//                   height: 120,
//                   border: "4px solid white",
//                   boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
//                 }}
//               />
//             ) : (
//               <Avatar
//                 sx={{
//                   width: 120,
//                   height: 120,
//                   border: "4px solid white",
//                   boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
//                   bgcolor: theme.palette.primary.dark,
//                 }}
//               >
//                 <PersonIcon sx={{ fontSize: 60 }} />
//               </Avatar>
//             )}
//           </Grid>
//           <Grid item xs={12} sm>
//             <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
//               <Typography variant="h4" fontWeight="bold">
//                 {userData?.username || userData?.full_Name || "User"}
//               </Typography>
//               <IconButton
//                 onClick={() => setEditOpen(true)}
//                 sx={{
//                   bgcolor: "rgba(255,255,255,0.1)",
//                   "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
//                 }}
//               >
//                 <EditIcon />
//               </IconButton>
//             </Box>
//             <Typography variant="body1" sx={{ mb: 2, opacity: 0.9 }}>
//               {userData?.bio || "No bio yet"}
//             </Typography>
//             <Box
//               sx={{ display: "flex", gap: 3, color: "rgba(255,255,255,0.9)" }}
//             >
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                 <EmailIcon fontSize="small" />
//                 <Typography variant="body2">{userData?.email}</Typography>
//               </Box>
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                 <DateRangeIcon fontSize="small" />
//                 <Typography variant="body2">
//                   Joined {formatJoinDate(userData?.created_At)}
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Paper>

//       <Dialog open={editOpen} onClose={() => setEditOpen(false)} fullWidth maxWidth="sm">
//         <DialogTitle>Edit Profile</DialogTitle>
//         <DialogContent dividers>
//           <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//             <TextField
//               label="Full Name"
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               fullWidth
//             />
//             <TextField
//               label="Bio"
//               multiline
//               rows={3}
//               value={formData.bio}
//               onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
//               fullWidth
//             />
//             <Button variant="contained" component="label">
//               Upload Profile Picture
//               <input
//                 type="file"
//                 hidden
//                 accept="image/*"
//                 onChange={(e) => {
//                   const file = e.target.files[0];
//                   if (file) {
//                     const reader = new FileReader();
//                     reader.onloadend = () => {
//                       setFormData({ ...formData, avatar: reader.result });
//                     };
//                     reader.readAsDataURL(file);
//                   }
//                 }}
//               />
//             </Button>
//             {formData.avatar ? (
//               <Avatar
//                 src={formData.avatar}
//                 sx={{ width: 100, height: 100, mt: 2 }}
//               />
//             ) : (
//               <Avatar
//                 sx={{
//                   width: 100,
//                   height: 100,
//                   mt: 2,
//                   bgcolor: theme.palette.primary.dark
//                 }}
//               >
//                 <PersonIcon sx={{ fontSize: 50 }} />
//               </Avatar>
//             )}
//           </Box>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setEditOpen(false)}>Cancel</Button>
//           <Button
//             onClick={() => {
//               // Save logic here - could be expanded to update user data via API
//               console.log("Updated Data:", formData);
//               setEditOpen(false);
//             }}
//             variant="contained"
//           >
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Statistics Cards */}
//       <Grid container spacing={3} sx={{ mb: 4 }}>
//         {[
//           { icon: ArticleIcon, label: "Posts", value: defaultStats.posts },
//           {
//             icon: FavoriteIcon,
//             label: "Likes",
//             value: defaultStats.likes,
//           },
//           {
//             icon: BookmarkIcon,
//             label: "Followers",
//             value: defaultStats.followers,
//           },
//           {
//             icon: BarChartIcon,
//             label: "Following",
//             value: defaultStats.following,
//           },
//         ].map((stat, index) => (
//           <Grid item xs={6} sm={3} key={index}>
//             <Card
//               sx={{
//                 height: "100%",
//                 transition: "transform 0.2s",
//                 "&:hover": {
//                   transform: "translateY(-4px)",
//                 },
//               }}
//             >
//               <CardContent sx={{ textAlign: "center" }}>
//                 <stat.icon color="primary" sx={{ fontSize: 40, mb: 1 }} />
//                 <Typography variant="h4" fontWeight="bold" color="primary">
//                   {stat.value.toLocaleString()}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {stat.label}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Content Tabs */}
//       <Box sx={{ mb: 4 }}>
//         <Tabs
//           value={currentTab}
//           onChange={handleTabChange}
//           variant="fullWidth"
//           sx={{
//             mb: 3,
//             "& .MuiTab-root": {
//               minHeight: 64,
//               fontSize: "1rem",
//             },
//           }}
//         >
//           <Tab label="Recent Posts" />
//           <Tab label="Liked Posts" />
//           <Tab label="Saved Posts" />
//           <Tab label="Drafts" />
//         </Tabs>

//         {recentPosts.length > 0 ? (
//           <List>
//             {recentPosts.map((post) => (
//               <React.Fragment key={post.id}>
//                 <ListItem
//                   sx={{
//                     bgcolor: "background.paper",
//                     borderRadius: 2,
//                     mb: 2,
//                     transition: "transform 0.2s",
//                     "&:hover": {
//                       transform: "translateX(8px)",
//                     },
//                   }}
//                 >
//                   <ListItemAvatar>
//                     <Avatar
//                       variant="rounded"
//                       src={post.image}
//                       sx={{ width: 80, height: 80, mr: 2 }}
//                     />
//                   </ListItemAvatar>
//                   <ListItemText
//                     primary={
//                       <Typography variant="h6" gutterBottom>
//                         {post.title}
//                       </Typography>
//                     }
//                     secondary={
//                       <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//                         <Typography variant="body2" color="text.secondary">
//                           {post.date}
//                         </Typography>
//                         <Box
//                           sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
//                         >
//                           <FavoriteIcon fontSize="small" color="error" />
//                           <Typography variant="body2" color="text.secondary">
//                             {post.likes}
//                           </Typography>
//                         </Box>
//                       </Box>
//                     }
//                   />
//                   <Button variant="outlined" size="small">
//                     View
//                   </Button>
//                 </ListItem>
//                 <Divider />
//               </React.Fragment>
//             ))}
//           </List>
//         ) : (
//           <Box sx={{ textAlign: 'center', py: 4 }}>
//             <Typography variant="body1" color="text.secondary">
//               No posts available
//             </Typography>
//           </Box>
//         )}
//       </Box>
//     </Container>
//   );
// };

// export default ProfilePage;

//=====================================================

// import ArticleIcon from "@mui/icons-material/Article";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import DateRangeIcon from "@mui/icons-material/DateRange";
// import EditIcon from "@mui/icons-material/Edit";
// import EmailIcon from "@mui/icons-material/Email";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import PersonIcon from "@mui/icons-material/Person";
// import {
//   Avatar,
//   Box,
//   Button,
//   Card,
//   CardContent,
//   CircularProgress,
//   Container,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   Divider,
//   Grid,
//   IconButton,
//   List,
//   ListItem,
//   ListItemAvatar,
//   ListItemText,
//   Paper,
//   styled,
//   Tab,
//   Tabs,
//   TextField,
//   Typography,
//   useTheme
// } from "@mui/material";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";

// const LogoutButton = styled(Button)(({ theme }) => ({
//     background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.light})`,
//     color: theme.palette.common.white,
//     transition: 'all 0.3s ease',
//     '&:hover': {
//       background: `linear-gradient(90deg, ${theme.palette.secondary.dark}, ${theme.palette.primary.main})`,
//       transform: 'scale(1.05)',
//     },
// }));

// const ProfilePage = () => {
//   const theme = useTheme();
//   const [currentTab, setCurrentTab] = useState(0);
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [userData, setUserData] = useState(null);
//   const [error, setError] = useState(null);
//   const [uploadStatus, setUploadStatus] = useState('');
//   const [isImagePopupOpen, setIsImagePopupOpen] = useState(false); // State for image popup
//   // Default dummy data for stats and posts (can be replaced with real API data later)
//   const defaultStats = {
//     posts: 0,
//     followers: 0,
//     following: 0,
//     likes: 0,
//   };

//   const recentPosts = [
//     {
//       id: 1,
//       title: "The Future of AI in Content Creation",
//       date: "2 days ago",
//       likes: 156,
//       image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
//     },
//     {
//       id: 2,
//       title: "My Journey as a Tech Writer",
//       date: "5 days ago",
//       likes: 234,
//       image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
//     },
//     {
//       id: 3,
//       title: "Understanding Modern Web Development",
//       date: "1 week ago",
//       likes: 189,
//       image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
//     },
//   ];

//   const [editOpen, setEditOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     bio: "",
//     avatar: "",
//   });
//   const [isUploading, setIsUploading] = useState(false);

//   // Fetch user data on component mount
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         setLoading(true);
//         // Get email from session storage
//         const userEmail = sessionStorage.getItem('userEmail');

//         if (!userEmail) {
//           // If no email in session storage, redirect to login
//           navigate('/');
//           return;
//         }

//         // API call to get user data
//         const response = await axios.get(`https://localhost:7163/api/user/by-email?email=${encodeURIComponent(userEmail)}`);

//         setUserData(response.data);

//         // Update form data with user data
//         setFormData({
//           name: response.data.full_Name || response.data.username || "",
//           bio: response.data.bio || "",
//           avatar: response.data.profile_Image_Url || "",
//         });
//       } catch (err) {
//         console.error("Error fetching user data:", err);
//         setError("Failed to load user data. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, [navigate]);

//   const handleLogout = () => {
//     // Clear session storage on logout
//     sessionStorage.removeItem('userEmail');
//     navigate("/");
//   };

//   const handleTabChange = (event, newValue) => {
//     setCurrentTab(newValue);
//   };

//   const formatJoinDate = (dateString) => {
//     if (!dateString) return "Unknown";
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
//   };

//   // Function to upload image to Cloudinary using axios
//   const uploadToCloudinary = async (file) => {
//     try {
//       setIsUploading(true);
//       setUploadStatus('Uploading...');

//       const formData = new FormData();
//       formData.append('file', file);
//       formData.append('upload_preset', 'my_unsigned');

//       const response = await axios.post(
//         'https://api.cloudinary.com/v1_1/dblu8hz5g/image/upload',
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         }
//       );

//       if (response.data && response.data.secure_url) {
//         setUploadStatus('Upload complete!');
//         return response.data.secure_url;
//       } else {
//         throw new Error('Upload failed');
//       }
//     } catch (error) {
//       console.error('Error uploading to Cloudinary:', error);
//       setUploadStatus('Upload failed. Please try again.');
//       return null;
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   // Function to save updated profile data
//   const saveProfileChanges = async () => {
//     try {
//       setLoading(true);
//       const userEmail = sessionStorage.getItem('userEmail');

//       if (!userEmail) {
//         navigate('/');
//         return;
//       }

//       // Prepare the data for the update
//       const updateData = {
//         full_Name: formData.name,
//         bio: formData.bio,
//         profile_Image_Url: formData.avatar,
//       };

//       // Update the user data via API
//       await axios.put(
//         `https://localhost:7163/api/user/by-email/${encodeURIComponent(userEmail)}`,
//         updateData
//       );

//       // Refresh user data after update
//       const response = await axios.get(`https://localhost:7163/api/user/by-email?email=${encodeURIComponent(userEmail)}`);
//       setUserData(response.data);

//       setEditOpen(false);
//     } catch (err) {
//       console.error("Error updating profile:", err);
//       setError("Failed to update profile. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Show loading state while fetching data
//   if (loading) {
//     return (
//       <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
//         <Navbar />
//         <Box sx={{ mt: 10 }}>
//           <CircularProgress />
//           <Typography variant="h6" sx={{ mt: 2 }}>Loading profile...</Typography>
//         </Box>
//       </Container>
//     );
//   }

//   // Show error if there's a problem fetching data
//   if (error) {
//     return (
//       <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
//         <Navbar />
//         <Paper sx={{ p: 4, mt: 4, borderRadius: 2 }}>
//           <Typography variant="h6" color="error">{error}</Typography>
//           <Button variant="contained" sx={{ mt: 2 }} onClick={() => window.location.reload()}>
//             Try Again
//           </Button>
//         </Paper>
//       </Container>
//     );
//   }

//   return (
//     <Container maxWidth="lg" sx={{ py: 8 }}>
//       <Navbar />
//       {/* Profile Header */}
//       <Paper
//         elevation={0}
//         sx={{
//           p: 4,
//           mb: 4,
//           borderRadius: 4,
//           background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
//           color: "white",
//           position: "relative", // Important for placing the button
//         }}
//       >
//         {/* Logout Button */}
//         <Box sx={{ position: "absolute", top: 20, right: 16 }}>
//           <LogoutButton
//             variant="outlined"
//             onClick={handleLogout}
//           >
//             Logout
//           </LogoutButton>
//         </Box>

//         <Grid container spacing={4} alignItems="center">
//           <Grid item>
//             {userData?.profile_Image_Url ? (
//               <Avatar
//                 src={userData.profile_Image_Url}
//                 alt={userData?.username || "User"}
//                 sx={{
//                   width: 120,
//                   height: 120,
//                   border: "4px solid white",
//                   boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
//                   cursor: "pointer", // Add cursor pointer
//                 }}
//                 onClick={() => setIsImagePopupOpen(true)} // Open popup on click
//               />
//             ) : (
//               <Avatar
//                 sx={{
//                   width: 120,
//                   height: 120,
//                   border: "4px solid white",
//                   boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
//                   bgcolor: theme.palette.primary.dark,
//                   cursor: "pointer", // Add cursor pointer
//                 }}
//                 onClick={() => setIsImagePopupOpen(true)} // Open popup on click
//               >
//                 <PersonIcon sx={{ fontSize: 60 }} />
//               </Avatar>
//             )}
//           </Grid>
//           <Grid item xs={12} sm>
//             <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
//               <Typography variant="h4" fontWeight="bold">
//                 {userData?.full_Name || userData?.username || "User"}
//               </Typography>
//               <IconButton
//                 onClick={() => setEditOpen(true)}
//                 sx={{
//                   bgcolor: "rgba(255,255,255,0.1)",
//                   "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
//                 }}
//               >
//                 <EditIcon />
//               </IconButton>
//             </Box>
//             <Typography variant="body1" sx={{ mb: 2, opacity: 0.9 }}>
//               {userData?.bio || "No bio yet"}
//             </Typography>
//             <Box
//               sx={{ display: "flex", gap: 3, color: "rgba(255,255,255,0.9)" }}
//             >
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                 <EmailIcon fontSize="small" />
//                 <Typography variant="body2">{userData?.email}</Typography>
//               </Box>
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                 <DateRangeIcon fontSize="small" />
//                 <Typography variant="body2">
//                   Joined {formatJoinDate(userData?.created_At)}
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Paper>

//       {/* Image Popup */}
//       <Dialog
//         open={isImagePopupOpen}
//         onClose={() => setIsImagePopupOpen(false)}
//         maxWidth="sm"
//         fullWidth
//       >
//         <DialogContent sx={{ textAlign: "center" }}>
//           {userData?.profile_Image_Url ? (
//             <img
//               src={userData.profile_Image_Url}
//               alt="Profile"
//               style={{
//                 maxWidth: "100%",
//                 maxHeight: "80vh",
//                 borderRadius: "8px",
//               }}
//             />
//           ) : (
//             <Typography variant="body1">No profile image available</Typography>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setIsImagePopupOpen(false)}>Close</Button>
//         </DialogActions>
//       </Dialog>

//       <Dialog open={editOpen} onClose={() => setEditOpen(false)} fullWidth maxWidth="sm">
//         <DialogTitle>Edit Profile</DialogTitle>
//         <DialogContent dividers>
//           <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//             <TextField
//               label="Full Name"
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               fullWidth
//             />
//             <TextField
//               label="Bio"
//               multiline
//               rows={3}
//               value={formData.bio}
//               onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
//               fullWidth
//             />
//             <Button
//               variant="contained"
//               component="label"
//               disabled={isUploading}
//             >
//               {isUploading ? "Uploading..." : "Upload Profile Picture"}
//               <input
//                 type="file"
//                 hidden
//                 accept="image/*"
//                 onChange={async (e) => {
//                   const file = e.target.files[0];
//                   if (file) {
//                     // Upload to Cloudinary
//                     const cloudinaryUrl = await uploadToCloudinary(file);
//                     if (cloudinaryUrl) {
//                       setFormData({ ...formData, avatar: cloudinaryUrl });
//                     }
//                   }
//                 }}
//               />
//             </Button>
//             {uploadStatus && (
//               <Typography
//                 variant="caption"
//                 color={uploadStatus === 'Upload complete!' ? 'success.main' : 'info.main'}
//               >
//                 {uploadStatus}
//               </Typography>
//             )}
//             {formData.avatar ? (
//               <Avatar
//                 src={formData.avatar}
//                 sx={{ width: 100, height: 100, mt: 2 }}
//               />
//             ) : (
//               <Avatar
//                 sx={{
//                   width: 100,
//                   height: 100,
//                   mt: 2,
//                   bgcolor: theme.palette.primary.dark
//                 }}
//               >
//                 <PersonIcon sx={{ fontSize: 50 }} />
//               </Avatar>
//             )}
//           </Box>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setEditOpen(false)}>Cancel</Button>
//           <Button
//             onClick={saveProfileChanges}
//             variant="contained"
//             disabled={isUploading}
//           >
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Statistics Cards */}
//       <Grid container spacing={3} sx={{ mb: 4 }}>
//         {[
//           { icon: ArticleIcon, label: "Posts", value: defaultStats.posts },
//           {
//             icon: FavoriteIcon,
//             label: "Likes",
//             value: defaultStats.likes,
//           },
//           {
//             icon: BookmarkIcon,
//             label: "Followers",
//             value: defaultStats.followers,
//           },
//           {
//             icon: BarChartIcon,
//             label: "Following",
//             value: defaultStats.following,
//           },
//         ].map((stat, index) => (
//           <Grid item xs={6} sm={3} key={index}>
//             <Card
//               sx={{
//                 height: "100%",
//                 transition: "transform 0.2s",
//                 "&:hover": {
//                   transform: "translateY(-4px)",
//                 },
//               }}
//             >
//               <CardContent sx={{ textAlign: "center" }}>
//                 <stat.icon color="primary" sx={{ fontSize: 40, mb: 1 }} />
//                 <Typography variant="h4" fontWeight="bold" color="primary">
//                   {stat.value.toLocaleString()}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {stat.label}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Content Tabs */}
//       <Box sx={{ mb: 4 }}>
//         <Tabs
//           value={currentTab}
//           onChange={handleTabChange}
//           variant="fullWidth"
//           sx={{
//             mb: 3,
//             "& .MuiTab-root": {
//               minHeight: 64,
//               fontSize: "1rem",
//             },
//           }}
//         >
//           <Tab label="Recent Posts" />
//           <Tab label="Liked Posts" />
//           <Tab label="Saved Posts" />
//           <Tab label="Drafts" />
//         </Tabs>

//         {recentPosts.length > 0 ? (
//           <List>
//             {recentPosts.map((post) => (
//               <React.Fragment key={post.id}>
//                 <ListItem
//                   sx={{
//                     bgcolor: "background.paper",
//                     borderRadius: 2,
//                     mb: 2,
//                     transition: "transform 0.2s",
//                     "&:hover": {
//                       transform: "translateX(8px)",
//                     },
//                   }}
//                 >
//                   <ListItemAvatar>
//                     <Avatar
//                       variant="rounded"
//                       src={post.image}
//                       sx={{ width: 80, height: 80, mr: 2 }}
//                     />
//                   </ListItemAvatar>
//                   <ListItemText
//                     primary={
//                       <Typography variant="h6" gutterBottom>
//                         {post.title}
//                       </Typography>
//                     }
//                     secondary={
//                       <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//                         <Typography variant="body2" color="text.secondary">
//                           {post.date}
//                         </Typography>
//                         <Box
//                           sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
//                         >
//                           <FavoriteIcon fontSize="small" color="error" />
//                           <Typography variant="body2" color="text.secondary">
//                             {post.likes}
//                           </Typography>
//                         </Box>
//                       </Box>
//                     }
//                   />
//                   <Button variant="outlined" size="small">
//                     View
//                   </Button>
//                 </ListItem>
//                 <Divider />
//               </React.Fragment>
//             ))}
//           </List>
//         ) : (
//           <Box sx={{ textAlign: 'center', py: 4 }}>
//             <Typography variant="body1" color="text.secondary">
//               No posts available
//             </Typography>
//           </Box>
//         )}
//       </Box>
//     </Container>
//   );
// };

// export default ProfilePage;

//========================================================================

// import ArticleIcon from "@mui/icons-material/Article";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import DateRangeIcon from "@mui/icons-material/DateRange";
// import EditIcon from "@mui/icons-material/Edit";
// import EmailIcon from "@mui/icons-material/Email";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import PersonIcon from "@mui/icons-material/Person";
// import {
//   Avatar,
//   Box,
//   Button,
//   Card,
//   CardContent,
//   CircularProgress,
//   Container,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   Divider,
//   Grid,
//   IconButton,
//   List,
//   ListItem,
//   ListItemAvatar,
//   ListItemText,
//   Paper,
//   styled,
//   Tab,
//   Tabs,
//   TextField,
//   Typography,
//   useTheme
// } from "@mui/material";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import BlogView from "./BlogView"; // Import the new BlogPreview component
// import Navbar from "./Navbar";

// const LogoutButton = styled(Button)(({ theme }) => ({
//     background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.light})`,
//     color: theme.palette.common.white,
//     transition: 'all 0.3s ease',
//     '&:hover': {
//       background: `linear-gradient(90deg, ${theme.palette.secondary.dark}, ${theme.palette.primary.main})`,
//       transform: 'scale(1.05)',
//     },
// }));

// const ProfilePage = () => {
//   const theme = useTheme();
//   const [currentTab, setCurrentTab] = useState(0);
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [userData, setUserData] = useState(null);
//   const [error, setError] = useState(null);
//   const [uploadStatus, setUploadStatus] = useState('');
//   const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
//   const [blogPosts, setBlogPosts] = useState([]);
//   const [selectedBlog, setSelectedBlog] = useState(null);
//   const [isPreviewOpen, setIsPreviewOpen] = useState(false);

//   // Default dummy data for stats (will be updated with real counts)
//   const [stats, setStats] = useState({
//     posts: 0,
//     followers: 0,
//     following: 0,
//     likes: 0,
//   });

//   // Define some dummy data for liked and saved posts
//   const dummyLikedPosts = [
//     {
//       id: 101,
//       title: "The Art of Data Science",
//       date: "3 days ago",
//       likes: 423,
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
//     },
//     {
//       id: 102,
//       title: "Travel Photography Tips",
//       date: "1 week ago",
//       likes: 321,
//       image: "https://images.unsplash.com/photo-1500051638674-ff996a0ec29f",
//     },
//   ];

//   const dummySavedPosts = [
//     {
//       id: 201,
//       title: "Minimalist Living Guide",
//       date: "5 days ago",
//       likes: 287,
//       image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
//     },
//     {
//       id: 202,
//       title: "Cooking with Local Ingredients",
//       date: "2 weeks ago",
//       likes: 194,
//       image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
//     },
//   ];

//   const [editOpen, setEditOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     bio: "",
//     avatar: "",
//   });
//   const [isUploading, setIsUploading] = useState(false);

//   // Helper function to format date
//   const formatDate = (dateString) => {
//     if (!dateString) return "Unknown";
//     const date = new Date(dateString);

//     // Calculate how long ago
//     const now = new Date();
//     const diffTime = Math.abs(now - date);
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

//     if (diffDays === 1) return "1 day ago";
//     if (diffDays < 7) return `${diffDays} days ago`;
//     if (diffDays < 30) return `${Math.floor(diffDays/7)} week${Math.floor(diffDays/7) > 1 ? 's' : ''} ago`;

//     return date.toLocaleDateString('en-US', {
//       month: 'long',
//       day: 'numeric',
//       year: 'numeric'
//     });
//   };

//   // Fetch user data and blog posts on component mount
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         // Get email from session storage
//         const userEmail = sessionStorage.getItem('userEmail');

//         if (!userEmail) {
//           // If no email in session storage, redirect to login
//           navigate('/');
//           return;
//         }

//         // Fetch user data
//         const userResponse = await axios.get(`https://localhost:7163/api/user/by-email?email=${encodeURIComponent(userEmail)}`);
//         setUserData(userResponse.data);

//         // Update form data with user data
//         setFormData({
//           name: userResponse.data.full_Name || userResponse.data.username || "",
//           bio: userResponse.data.bio || "",
//           avatar: userResponse.data.profile_Image_Url || "",
//         });

//         // Fetch blog posts
//         const postsResponse = await axios.get(`https://localhost:7163/api/Post/byemail?email=${encodeURIComponent(userEmail)}`);

//         // Set blog posts
//         if (Array.isArray(postsResponse.data)) {
//           setBlogPosts(postsResponse.data);

//           // Update statistics
//           setStats({
//             posts: postsResponse.data.filter(post => post.isPublished).length,
//             followers: 0, // These would come from your backend when implemented
//             following: 0,
//             likes: 0,
//           });
//         } else if (postsResponse.data) {
//           // Handle case where response might be a single object
//           setBlogPosts([postsResponse.data]);

//           // Update statistics
//           setStats({
//             posts: postsResponse.data.isPublished ? 1 : 0,
//             followers: 0,
//             following: 0,
//             likes: 0,
//           });
//         }
//       } catch (err) {
//         console.error("Error fetching data:", err);
//         setError("Failed to load data. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [navigate]);

//   const handleLogout = () => {
//     // Clear session storage on logout
//     sessionStorage.removeItem('userEmail');
//     navigate("/");
//   };

//   const handleTabChange = (event, newValue) => {
//     setCurrentTab(newValue);
//   };

//   const formatJoinDate = (dateString) => {
//     if (!dateString) return "Unknown";
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
//   };

//   // Function to get truncated excerpt from content
//   const getContentExcerpt = (contentString) => {
//     try {
//       if (!contentString) return "";

//       const content = JSON.parse(contentString);

//       // Try to find text content
//       let text = "";

//       const extractText = (node) => {
//         if (!node) return;

//         if (node.type === 'text' && node.text) {
//           text += node.text + " ";
//         }

//         if (node.content && Array.isArray(node.content)) {
//           node.content.forEach(child => extractText(child));
//         }
//       };

//       if (content && content.content) {
//         content.content.forEach(node => extractText(node));
//       }

//       // Truncate to reasonable length
//       return text.length > 100 ? text.substring(0, 100) + "..." : text;
//     } catch (e) {
//       console.error("Error parsing content:", e);
//       return "";
//     }
//   };

//   // Function to upload image to Cloudinary using axios
//   const uploadToCloudinary = async (file) => {
//     try {
//       setIsUploading(true);
//       setUploadStatus('Uploading...');

//       const formData = new FormData();
//       formData.append('file', file);
//       formData.append('upload_preset', 'my_unsigned');

//       const response = await axios.post(
//         'https://api.cloudinary.com/v1_1/dblu8hz5g/image/upload',
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         }
//       );

//       if (response.data && response.data.secure_url) {
//         setUploadStatus('Upload complete!');
//         return response.data.secure_url;
//       } else {
//         throw new Error('Upload failed');
//       }
//     } catch (error) {
//       console.error('Error uploading to Cloudinary:', error);
//       setUploadStatus('Upload failed. Please try again.');
//       return null;
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   // Function to save updated profile data
//   const saveProfileChanges = async () => {
//     try {
//       setLoading(true);
//       const userEmail = sessionStorage.getItem('userEmail');

//       if (!userEmail) {
//         navigate('/');
//         return;
//       }

//       // Prepare the data for the update
//       const updateData = {
//         full_Name: formData.name,
//         bio: formData.bio,
//         profile_Image_Url: formData.avatar,
//       };

//       // Update the user data via API
//       await axios.put(
//         `https://localhost:7163/api/user/by-email/${encodeURIComponent(userEmail)}`,
//         updateData
//       );

//       // Refresh user data after update
//       const response = await axios.get(`https://localhost:7163/api/user/by-email?email=${encodeURIComponent(userEmail)}`);
//       setUserData(response.data);

//       setEditOpen(false);
//     } catch (err) {
//       console.error("Error updating profile:", err);
//       setError("Failed to update profile. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Function to handle blog preview
//   const handleViewBlog = (blog) => {
//     setSelectedBlog(blog);
//     setIsPreviewOpen(true);
//   };

//   // Show loading state while fetching data
//   if (loading) {
//     return (
//       <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
//         <Navbar />
//         <Box sx={{ mt: 10 }}>
//           <CircularProgress />
//           <Typography variant="h6" sx={{ mt: 2 }}>Loading profile...</Typography>
//         </Box>
//       </Container>
//     );
//   }

//   // Show error if there's a problem fetching data
//   if (error) {
//     return (
//       <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
//         <Navbar />
//         <Paper sx={{ p: 4, mt: 4, borderRadius: 2 }}>
//           <Typography variant="h6" color="error">{error}</Typography>
//           <Button variant="contained" sx={{ mt: 2 }} onClick={() => window.location.reload()}>
//             Try Again
//           </Button>
//         </Paper>
//       </Container>
//     );
//   }

//   // Get posts based on current tab
//   const getPostsForCurrentTab = () => {
//     switch(currentTab) {
//       case 0: // Recent Posts
//         return blogPosts.filter(post => post.isPublished);
//       case 1: // Liked Posts
//         return dummyLikedPosts;
//       case 2: // Saved Posts
//         return dummySavedPosts;
//       case 3: // Drafts
//         return blogPosts.filter(post => !post.isPublished);
//       default:
//         return [];
//     }
//   };

//   const currentPosts = getPostsForCurrentTab();

//   return (
//     <Container maxWidth="lg" sx={{ py: 8 }}>
//       <Navbar />
//       {/* Profile Header */}
//       <Paper
//         elevation={0}
//         sx={{
//           p: 4,
//           mb: 4,
//           borderRadius: 4,
//           background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
//           color: "white",
//           position: "relative", // Important for placing the button
//         }}
//       >
//         {/* Logout Button */}
//         <Box sx={{ position: "absolute", top: 20, right: 16 }}>
//           <LogoutButton
//             variant="outlined"
//             onClick={handleLogout}
//           >
//             Logout
//           </LogoutButton>
//         </Box>

//         <Grid container spacing={4} alignItems="center">
//           <Grid item>
//             {userData?.profile_Image_Url ? (
//               <Avatar
//                 src={userData.profile_Image_Url}
//                 alt={userData?.username || "User"}
//                 sx={{
//                   width: 120,
//                   height: 120,
//                   border: "4px solid white",
//                   boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
//                   cursor: "pointer", // Add cursor pointer
//                 }}
//                 onClick={() => setIsImagePopupOpen(true)} // Open popup on click
//               />
//             ) : (
//               <Avatar
//                 sx={{
//                   width: 120,
//                   height: 120,
//                   border: "4px solid white",
//                   boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
//                   bgcolor: theme.palette.primary.dark,
//                   cursor: "pointer", // Add cursor pointer
//                 }}
//                 onClick={() => setIsImagePopupOpen(true)} // Open popup on click
//               >
//                 <PersonIcon sx={{ fontSize: 60 }} />
//               </Avatar>
//             )}
//           </Grid>
//           <Grid item xs={12} sm>
//             <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
//               <Typography variant="h4" fontWeight="bold">
//                 {userData?.full_Name || userData?.username || "User"}
//               </Typography>
//               <IconButton
//                 onClick={() => setEditOpen(true)}
//                 sx={{
//                   bgcolor: "rgba(255,255,255,0.1)",
//                   "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
//                 }}
//               >
//                 <EditIcon />
//               </IconButton>
//             </Box>
//             <Typography variant="body1" sx={{ mb: 2, opacity: 0.9 }}>
//               {userData?.bio || "No bio yet"}
//             </Typography>
//             <Box
//               sx={{ display: "flex", gap: 3, color: "rgba(255,255,255,0.9)" }}
//             >
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                 <EmailIcon fontSize="small" />
//                 <Typography variant="body2">{userData?.email}</Typography>
//               </Box>
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                 <DateRangeIcon fontSize="small" />
//                 <Typography variant="body2">
//                   Joined {formatJoinDate(userData?.created_At)}
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Paper>

//       {/* Image Popup */}
//       <Dialog
//         open={isImagePopupOpen}
//         onClose={() => setIsImagePopupOpen(false)}
//         maxWidth="sm"
//         fullWidth
//       >
//         <DialogContent sx={{ textAlign: "center" }}>
//           {userData?.profile_Image_Url ? (
//             <img
//               src={userData.profile_Image_Url}
//               alt="Profile"
//               style={{
//                 maxWidth: "100%",
//                 maxHeight: "80vh",
//                 borderRadius: "8px",
//               }}
//             />
//           ) : (
//             <Typography variant="body1">No profile image available</Typography>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setIsImagePopupOpen(false)}>Close</Button>
//         </DialogActions>
//       </Dialog>

//       {/* Edit Profile Dialog */}
//       <Dialog open={editOpen} onClose={() => setEditOpen(false)} fullWidth maxWidth="sm">
//         <DialogTitle>Edit Profile</DialogTitle>
//         <DialogContent dividers>
//           <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//             <TextField
//               label="Full Name"
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               fullWidth
//             />
//             <TextField
//               label="Bio"
//               multiline
//               rows={3}
//               value={formData.bio}
//               onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
//               fullWidth
//             />
//             <Button
//               variant="contained"
//               component="label"
//               disabled={isUploading}
//             >
//               {isUploading ? "Uploading..." : "Upload Profile Picture"}
//               <input
//                 type="file"
//                 hidden
//                 accept="image/*"
//                 onChange={async (e) => {
//                   const file = e.target.files[0];
//                   if (file) {
//                     // Upload to Cloudinary
//                     const cloudinaryUrl = await uploadToCloudinary(file);
//                     if (cloudinaryUrl) {
//                       setFormData({ ...formData, avatar: cloudinaryUrl });
//                     }
//                   }
//                 }}
//               />
//             </Button>
//             {uploadStatus && (
//               <Typography
//                 variant="caption"
//                 color={uploadStatus === 'Upload complete!' ? 'success.main' : 'info.main'}
//               >
//                 {uploadStatus}
//               </Typography>
//             )}
//             {formData.avatar ? (
//               <Avatar
//                 src={formData.avatar}
//                 sx={{ width: 100, height: 100, mt: 2 }}
//               />
//             ) : (
//               <Avatar
//                 sx={{
//                   width: 100,
//                   height: 100,
//                   mt: 2,
//                   bgcolor: theme.palette.primary.dark
//                 }}
//               >
//                 <PersonIcon sx={{ fontSize: 50 }} />
//               </Avatar>
//             )}
//           </Box>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setEditOpen(false)}>Cancel</Button>
//           <Button
//             onClick={saveProfileChanges}
//             variant="contained"
//             disabled={isUploading}
//           >
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Blog Preview Component */}
//       <BlogView
//         blog={selectedBlog}
//         open={isPreviewOpen}
//         onClose={() => setIsPreviewOpen(false)}
//       />

//       {/* Statistics Cards */}
//       <Grid container spacing={3} sx={{ mb: 4 }}>
//         {[
//           { icon: ArticleIcon, label: "Posts", value: stats.posts },
//           {
//             icon: FavoriteIcon,
//             label: "Likes",
//             value: stats.likes,
//           },
//           {
//             icon: BookmarkIcon,
//             label: "Followers",
//             value: stats.followers,
//           },
//           {
//             icon: BarChartIcon,
//             label: "Following",
//             value: stats.following,
//           },
//         ].map((stat, index) => (
//           <Grid item xs={6} sm={3} key={index}>
//             <Card
//               sx={{
//                 height: "100%",
//                 transition: "transform 0.2s",
//                 "&:hover": {
//                   transform: "translateY(-4px)",
//                 },
//               }}
//             >
//               <CardContent sx={{ textAlign: "center" }}>
//                 <stat.icon color="primary" sx={{ fontSize: 40, mb: 1 }} />
//                 <Typography variant="h4" fontWeight="bold" color="primary">
//                   {stat.value.toLocaleString()}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {stat.label}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Content Tabs */}
//       <Box sx={{ mb: 4 }}>
//         <Tabs
//           value={currentTab}
//           onChange={handleTabChange}
//           variant="fullWidth"
//           sx={{
//             mb: 3,
//             "& .MuiTab-root": {
//               minHeight: 64,
//               fontSize: "1rem",
//             },
//           }}
//         >
//           <Tab label="Recent Posts" />
//           <Tab label="Liked Posts" />
//           <Tab label="Saved Posts" />
//           <Tab label="Drafts" />
//         </Tabs>

//         {currentPosts.length > 0 ? (
//           <List>
//             {currentPosts.map((post) => (
//               <React.Fragment key={post.id}>
//                 <ListItem
//                   sx={{
//                     bgcolor: "background.paper",
//                     borderRadius: 2,
//                     mb: 2,
//                     transition: "transform 0.2s",
//                     "&:hover": {
//                       transform: "translateX(8px)",
//                     },
//                   }}
//                 >
//                   <ListItemAvatar>
//                     <Avatar
//                       variant="rounded"
//                       src={post.image}
//                       sx={{ width: 80, height: 80, mr: 2 }}
//                     />
//                   </ListItemAvatar>
//                   <ListItemText
//                     primary={
//                       <Typography variant="h6" gutterBottom>
//                         {post.title}
//                       </Typography>
//                     }
//                     secondary={
//                       <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//                         <Typography variant="body2" color="text.secondary">
//                           {formatDate(post.date)}
//                         </Typography>
//                         <Box
//                           sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
//                         >
//                           <FavoriteIcon fontSize="small" color="error" />
//                           <Typography variant="body2" color="text.secondary">
//                             {post.likes}
//                           </Typography>
//                         </Box>
//                       </Box>
//                     }
//                   />
//                   <Button
//                     variant="outlined"
//                     size="small"
//                     onClick={() => handleViewBlog(post)} // Open blog preview
//                   >
//                     View
//                   </Button>
//                 </ListItem>

//                 <Divider />
//               </React.Fragment>
//             ))}
//           </List>
//         ) : (
//           <Box sx={{ textAlign: 'center', py: 4 }}>
//             <Typography variant="body1" color="text.secondary">
//               No posts available
//             </Typography>
//           </Box>
//         )}
//       </Box>
//     </Container>
//   );
// }
// export default ProfilePage;

//========================================================================

import ArticleIcon from "@mui/icons-material/Article";
import BarChartIcon from "@mui/icons-material/BarChart";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CloseIcon from "@mui/icons-material/Close";
import DateRangeIcon from "@mui/icons-material/DateRange";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  styled,
  Tab,
  Tabs,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogView from "./BlogView";
import Navbar from "./Navbar";

const LogoutButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.light})`,
  color: theme.palette.common.white,
  transition: "all 0.3s ease",
  "&:hover": {
    background: `linear-gradient(90deg, ${theme.palette.secondary.dark}, ${theme.palette.primary.main})`,
    transform: "scale(1.05)",
  },
}));

const ProfilePage = () => {
  const theme = useTheme();
  const [currentTab, setCurrentTab] = useState(0);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const [stats, setStats] = useState({
    posts: 0,
    followers: 0,
    following: 0,
    likes: 0,
  });

  const dummyLikedPosts = [
    {
      id: 101,
      title: "The Art of Data Science",
      date: "3 days ago",
      likes: 423,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
    {
      id: 102,
      title: "Travel Photography Tips",
      date: "1 week ago",
      likes: 321,
      image: "https://images.unsplash.com/photo-1500051638674-ff996a0ec29f",
    },
  ];

  const dummySavedPosts = [
    {
      id: 201,
      title: "Minimalist Living Guide",
      date: "5 days ago",
      likes: 287,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    },
    {
      id: 202,
      title: "Cooking with Local Ingredients",
      date: "2 weeks ago",
      likes: 194,
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    },
  ];

  const [editOpen, setEditOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    avatar: "",
  });
  const [isUploading, setIsUploading] = useState(false);

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown";
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30)
      return `${Math.floor(diffDays / 7)} week${
        Math.floor(diffDays / 7) > 1 ? "s" : ""
      } ago`;

    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const userEmail = sessionStorage.getItem("userEmail");

        if (!userEmail) {
          navigate("/");
          return;
        }

        const userResponse = await axios.get(
          `https://localhost:7163/api/user/by-email?email=${encodeURIComponent(
            userEmail
          )}`
        );
        setUserData(userResponse.data);

        setFormData({
          name: userResponse.data.full_Name || userResponse.data.username || "",
          bio: userResponse.data.bio || "",
          avatar: userResponse.data.profile_Image_Url || "",
        });

        const postsResponse = await axios.get(
          `https://localhost:7163/api/Post/byemail?email=${encodeURIComponent(
            userEmail
          )}`
        );

        if (Array.isArray(postsResponse.data)) {
          setBlogPosts(postsResponse.data);
          setStats({
            posts: postsResponse.data.filter((post) => post.isPublished).length,
            followers: 0,
            following: 0,
            likes: 0,
          });
        } else if (postsResponse.data) {
          setBlogPosts([postsResponse.data]);
          setStats({
            posts: postsResponse.data.isPublished ? 1 : 0,
            followers: 0,
            following: 0,
            likes: 0,
          });
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("userEmail");
    navigate("/");
  };

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const formatJoinDate = (dateString) => {
    if (!dateString) return "Unknown";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  const getContentExcerpt = (contentString) => {
    try {
      if (!contentString) return "";
      const content = JSON.parse(contentString);
      let text = "";

      const extractText = (node) => {
        if (!node) return;

        if (node.type === "text" && node.text) {
          text += node.text + " ";
        }

        if (node.content && Array.isArray(node.content)) {
          node.content.forEach((child) => extractText(child));
        }
      };

      if (content && content.content) {
        content.content.forEach((node) => extractText(node));
      }

      return text.length > 100 ? text.substring(0, 100) + "..." : text;
    } catch (e) {
      console.error("Error parsing content:", e);
      return "";
    }
  };

  const uploadToCloudinary = async (file) => {
    try {
      setIsUploading(true);
      setUploadStatus("Uploading...");

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "my_unsigned");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dblu8hz5g/image/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data && response.data.secure_url) {
        setUploadStatus("Upload complete!");
        return response.data.secure_url;
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      setUploadStatus("Upload failed. Please try again.");
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  const saveProfileChanges = async () => {
    try {
      setLoading(true);
      const userEmail = sessionStorage.getItem("userEmail");

      if (!userEmail) {
        navigate("/");
        return;
      }

      const updateData = {
        full_Name: formData.name,
        bio: formData.bio,
        profile_Image_Url: formData.avatar,
      };

      await axios.put(
        `https://localhost:7163/api/user/by-email/${encodeURIComponent(
          userEmail
        )}`,
        updateData
      );

      const response = await axios.get(
        `https://localhost:7163/api/user/by-email?email=${encodeURIComponent(
          userEmail
        )}`
      );
      setUserData(response.data);

      setEditOpen(false);
    } catch (err) {
      console.error("Error updating profile:", err);
      setError("Failed to update profile. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleViewBlog = (blog) => {
    setSelectedBlog(blog);
    setIsPreviewOpen(true);
  };

  const getPostsForCurrentTab = () => {
    switch (currentTab) {
      case 0:
        return blogPosts.filter((post) => post.isPublished);
      case 1:
        return dummyLikedPosts;
      case 2:
        return dummySavedPosts;
      case 3:
        return blogPosts.filter((post) => !post.isPublished);
      default:
        return [];
    }
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
        <Navbar />
        <Box sx={{ mt: 10 }}>
          <CircularProgress />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Loading profile...
          </Typography>
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
        <Navbar />
        <Paper sx={{ p: 4, mt: 4, borderRadius: 2 }}>
          <Typography variant="h6" color="error">
            {error}
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={() => window.location.reload()}
          >
            Try Again
          </Button>
        </Paper>
      </Container>
    );
  }

  const currentPosts = getPostsForCurrentTab();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Navbar />

      {/* Fullscreen Blog View Dialog */}
      <Dialog
        open={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        fullScreen
        PaperProps={{ sx: { bgcolor: "background.default" } }}
      >
        <Box sx={{ position: "relative" }}>
          <IconButton
            onClick={() => setIsPreviewOpen(false)}
            sx={{
              position: "fixed",
              top: 16,
              right: 16,
              zIndex: 9999,
              bgcolor: "background.paper",
              boxShadow: 3,
            }}
          >
            <CloseIcon />
          </IconButton>

          {selectedBlog && <BlogView blogData={selectedBlog} />}
        </Box>
      </Dialog>

      {/* Profile Header */}
      <Paper
        elevation={0}
        sx={{
          p: 4,
          mb: 4,
          borderRadius: 4,
          background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
          color: "white",
          position: "relative",
        }}
      >
        <Box sx={{ position: "absolute", top: 20, right: 16 }}>
          <LogoutButton variant="outlined" onClick={handleLogout}>
            Logout
          </LogoutButton>
        </Box>

        <Grid container spacing={4} alignItems="center">
          <Grid item>
            {userData?.profile_Image_Url ? (
              <Avatar
                src={userData.profile_Image_Url}
                alt={userData?.username || "User"}
                sx={{
                  width: 120,
                  height: 120,
                  border: "4px solid white",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                  cursor: "pointer",
                }}
                onClick={() => setIsImagePopupOpen(true)}
              />
            ) : (
              <Avatar
                sx={{
                  width: 120,
                  height: 120,
                  border: "4px solid white",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                  bgcolor: theme.palette.primary.dark,
                  cursor: "pointer",
                }}
                onClick={() => setIsImagePopupOpen(true)}
              >
                <PersonIcon sx={{ fontSize: 60 }} />
              </Avatar>
            )}
          </Grid>
          <Grid item xs={12} sm>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
              <Typography variant="h4" fontWeight="bold">
                {userData?.full_Name || userData?.username || "User"}
              </Typography>
              <IconButton
                onClick={() => setEditOpen(true)}
                sx={{
                  bgcolor: "rgba(255,255,255,0.1)",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                }}
              >
                <EditIcon />
              </IconButton>
            </Box>
            <Typography variant="body1" sx={{ mb: 2, opacity: 0.9 }}>
              {userData?.bio || "No bio yet"}
            </Typography>
            <Box
              sx={{ display: "flex", gap: 3, color: "rgba(255,255,255,0.9)" }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <EmailIcon fontSize="small" />
                <Typography variant="body2">{userData?.email}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <DateRangeIcon fontSize="small" />
                <Typography variant="body2">
                  Joined {formatJoinDate(userData?.created_At)}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Image Popup */}
      <Dialog
        open={isImagePopupOpen}
        onClose={() => setIsImagePopupOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogContent sx={{ textAlign: "center" }}>
          {userData?.profile_Image_Url ? (
            <img
              src={userData.profile_Image_Url}
              alt="Profile"
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                borderRadius: "8px",
              }}
            />
          ) : (
            <Typography variant="body1">No profile image available</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsImagePopupOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Edit Profile Dialog */}
      <Dialog
        open={editOpen}
        onClose={() => setEditOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent dividers>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="Full Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              fullWidth
            />
            <TextField
              label="Bio"
              multiline
              rows={3}
              value={formData.bio}
              onChange={(e) =>
                setFormData({ ...formData, bio: e.target.value })
              }
              fullWidth
            />
            <Button
              variant="contained"
              component="label"
              disabled={isUploading}
            >
              {isUploading ? "Uploading..." : "Upload Profile Picture"}
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={async (e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const cloudinaryUrl = await uploadToCloudinary(file);
                    if (cloudinaryUrl) {
                      setFormData({ ...formData, avatar: cloudinaryUrl });
                    }
                  }
                }}
              />
            </Button>
            {uploadStatus && (
              <Typography
                variant="caption"
                color={
                  uploadStatus === "Upload complete!"
                    ? "success.main"
                    : "info.main"
                }
              >
                {uploadStatus}
              </Typography>
            )}
            {formData.avatar ? (
              <Avatar
                src={formData.avatar}
                sx={{ width: 100, height: 100, mt: 2 }}
              />
            ) : (
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  mt: 2,
                  bgcolor: theme.palette.primary.dark,
                }}
              >
                <PersonIcon sx={{ fontSize: 50 }} />
              </Avatar>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditOpen(false)}>Cancel</Button>
          <Button
            onClick={saveProfileChanges}
            variant="contained"
            disabled={isUploading}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Statistics Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[
          { icon: ArticleIcon, label: "Posts", value: stats.posts },
          { icon: FavoriteIcon, label: "Likes", value: stats.likes },
          { icon: BookmarkIcon, label: "Followers", value: stats.followers },
          { icon: BarChartIcon, label: "Following", value: stats.following },
        ].map((stat, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Card
              sx={{
                height: "100%",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                },
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <stat.icon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h4" fontWeight="bold" color="primary">
                  {stat.value.toLocaleString()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Content Tabs */}
      <Box sx={{ mb: 4 }}>
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{
            mb: 3,
            "& .MuiTab-root": {
              minHeight: 64,
              fontSize: "1rem",
            },
          }}
        >
          <Tab label="Recent Posts" />
          <Tab label="Liked Posts" />
          <Tab label="Saved Posts" />
          <Tab label="Drafts" />
        </Tabs>

        {currentPosts.length > 0 ? (
        <List>
        {currentPosts.map((post) => (
          <React.Fragment key={post.id}>
            <ListItem
              sx={{
                bgcolor: "background.paper",
                borderRadius: 2,
                mb: 2,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateX(8px)",
                },
              }}
            >
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  src={currentTab === 0 || currentTab === 3 ? post.coverImageUrl : post.image}
                  sx={{ width: 80, height: 80, mr: 2 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="h6" gutterBottom>
                    {post.title}
                  </Typography>
                }
                secondary={
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      {currentTab === 0 || currentTab === 3 
                        ? formatDate(post.createdAt) 
                        : formatDate(post.date)}
                    </Typography>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <FavoriteIcon fontSize="small" color="error" />
                      <Typography variant="body2" color="text.secondary">
                        {post.likes || 0}
                      </Typography>
                    </Box>
                  </Box>
                }
              />
              <Button 
                variant="outlined" 
                size="small"
                onClick={() => handleViewBlog(post)}
              >
                View
              </Button>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
        ) : (
          <Box sx={{ textAlign: "center", py: 4 }}>
            <Typography variant="body1" color="text.secondary">
              No posts available
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default ProfilePage;
