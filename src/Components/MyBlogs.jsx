// import {
//   Delete,
//   Edit,
//   Favorite,
//   FavoriteBorder,
//   FilterList,
//   MoreVert,
//   Search,
//   Share
// } from '@mui/icons-material';
// import {
//   Avatar,
//   Box,
//   Button,
//   Card,
//   CardContent,
//   CardMedia,
//   Chip,
//   Container,
//   Divider,
//   Grid,
//   IconButton,
//   InputBase,
//   Menu,
//   MenuItem,
//   Paper,
//   Typography,
//   useMediaQuery,
//   useTheme
// } from '@mui/material';
// import React, { useState } from 'react';
// import Navbar from './Navbar';

// // Sample blog data
// const sampleBlogs = [
//   {
//     id: 1,
//     title: "Getting Started with React and Material-UI",
//     excerpt: "Learn how to build beautiful React applications using Material-UI components and best practices...",
//     coverImage: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
//     author: {
//       name: "John Doe",
//       avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
//     },
//     category: "Development",
//     tags: ["React", "Material-UI", "Frontend"],
//     publishDate: "2024-03-15",
//     readTime: "5 min read",
//     likes: 124
//   },
//   {
//     id: 2,
//     title: "The Future of Web Development",
//     excerpt: "Exploring upcoming trends and technologies that will shape the future of web development...",
//     coverImage: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
//     author: {
//       name: "Jane Smith",
//       avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
//     },
//     category: "Technology",
//     tags: ["WebDev", "Future", "Tech"],
//     publishDate: "2024-03-14",
//     readTime: "8 min read",
//     likes: 89
//   },
//   {
//     id: 3,
//     title: "Mastering CSS Grid Layout",
//     excerpt: "A comprehensive guide to creating responsive layouts using CSS Grid with practical examples...",
//     coverImage: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
//     author: {
//       name: "Mike Johnson",
//       avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
//     },
//     category: "Design",
//     tags: ["CSS", "Web Design", "Layout"],
//     publishDate: "2024-03-13",
//     readTime: "6 min read",
//     likes: 156
//   }
// ];

// const BlogsPage = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filterAnchorEl, setFilterAnchorEl] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [likedPosts, setLikedPosts] = useState(new Set());
//   const [menuAnchorEl, setMenuAnchorEl] = useState(null);
//   const [selectedPost, setSelectedPost] = useState(null);

//   const handleFilterClick = (event) => {
//     setFilterAnchorEl(event.currentTarget);
//   };

//   const handleFilterClose = (category) => {
//     if (category && category !== selectedCategory) {
//       setSelectedCategory(category);
//     }
//     setFilterAnchorEl(null);
//   };

//   const handleLikeToggle = (postId) => {
//     setLikedPosts(prev => {
//       const newLiked = new Set(prev);
//       if (newLiked.has(postId)) {
//         newLiked.delete(postId);
//       } else {
//         newLiked.add(postId);
//       }
//       return newLiked;
//     });
//   };

//   const handlePostMenuOpen = (event, post) => {
//     setSelectedPost(post);
//     setMenuAnchorEl(event.currentTarget);
//   };

//   const handlePostMenuClose = () => {
//     setMenuAnchorEl(null);
//     setSelectedPost(null);
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   return (
//     <Container maxWidth="xl" sx={{ py: 8 }}>
//         <Navbar/>
//       {/* Header Section */}
//       <Paper
//         elevation={0}
//         sx={{
//           p: 3,
//           mb: 4,
//           borderRadius: 2,
//           background: theme => `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
//           color: 'white',
//         }}
//       >
//         <Typography variant={isMobile ? "h5" : "h4"} component="h1" gutterBottom fontWeight="bold">
//           My Blog Posts
//         </Typography>
//         <Box sx={{ display: 'flex', gap: 2, mt: 3, flexWrap: 'wrap' }}>
//           <Paper
//             sx={{
//               p: '2px 4px',
//               display: 'flex',
//               alignItems: 'center',
//               flex: 1,
//               maxWidth: 500,
//               backgroundColor: 'rgba(255,255,255,0.1)',
//               backdropFilter: 'blur(10px)',
//               border: '1px solid rgba(255,255,255,0.2)'
//             }}
//           >
//             <IconButton sx={{ p: '10px', color: 'white' }}>
//               <Search />
//             </IconButton>
//             <InputBase
//               sx={{ ml: 1, flex: 1, color: 'white', '::placeholder': { color: 'rgba(255,255,255,0.7)' } }}
//               placeholder="Search blog posts..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </Paper>
//           <Button
//             variant="contained"
//             onClick={handleFilterClick}
//             startIcon={<FilterList />}
//             sx={{
//               backgroundColor: 'rgba(255,255,255,0.1)',
//               backdropFilter: 'blur(10px)',
//               border: '1px solid rgba(255,255,255,0.2)',
//               '&:hover': {
//                 backgroundColor: 'rgba(255,255,255,0.2)',
//               }
//             }}
//           >
//             {selectedCategory}
//           </Button>
//           <Button
//             variant="contained"
//             color="secondary"
//             onClick={() => {}}
//             sx={{ px: 3 }}
//           >
//             New Post
//           </Button>
//         </Box>
//       </Paper>

//       {/* Blog Posts Grid */}
//       <Grid container spacing={3}>
//         {sampleBlogs.map(post => (
//           <Grid item xs={12} md={6} lg={4} key={post.id}>
//             <Card
//               sx={{
//                 height: '100%',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
//                 '&:hover': {
//                   transform: 'translateY(-4px)',
//                   boxShadow: theme.shadows[4]
//                 }
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={post.coverImage}
//                 alt={post.title}
//                 sx={{ objectFit: 'cover' }}
//               />
//               <CardContent sx={{ flex: 1, p: 3 }}>
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
//                   <Chip
//                     label={post.category}
//                     color="primary"
//                     size="small"
//                     sx={{ mb: 1 }}
//                   />
//                   <IconButton
//                     size="small"
//                     onClick={(e) => handlePostMenuOpen(e, post)}
//                   >
//                     <MoreVert />
//                   </IconButton>
//                 </Box>

//                 <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', lineHeight: 1.3 }}>
//                   {post.title}
//                 </Typography>

//                 <Typography variant="body2" color="text.secondary" paragraph>
//                   {post.excerpt}
//                 </Typography>

//                 <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
//                   {post.tags.map(tag => (
//                     <Chip
//                       key={tag}
//                       label={tag}
//                       size="small"
//                       variant="outlined"
//                       sx={{ borderRadius: 1 }}
//                     />
//                   ))}
//                 </Box>

//                 <Divider sx={{ my: 2 }} />

//                 <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                     <Avatar
//                       src={post.author.avatar}
//                       sx={{ width: 32, height: 32 }}
//                     />
//                     <Box>
//                       <Typography variant="subtitle2">
//                         {post.author.name}
//                       </Typography>
//                       <Typography variant="caption" color="text.secondary">
//                         {formatDate(post.publishDate)} • {post.readTime}
//                       </Typography>
//                     </Box>
//                   </Box>

//                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                     <IconButton
//                       size="small"
//                       onClick={() => handleLikeToggle(post.id)}
//                       color={likedPosts.has(post.id) ? 'primary' : 'default'}
//                     >
//                       {likedPosts.has(post.id) ? <Favorite /> : <FavoriteBorder />}
//                     </IconButton>
//                     <IconButton size="small">
//                       <Share />
//                     </IconButton>
//                   </Box>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Filter Menu */}
//       <Menu
//         anchorEl={filterAnchorEl}
//         open={Boolean(filterAnchorEl)}
//         onClose={() => handleFilterClose()}
//       >
//         {['All', 'Technology', 'Design', 'Development', 'Business', 'Marketing'].map(category => (
//           <MenuItem
//             key={category}
//             onClick={() => handleFilterClose(category)}
//             selected={category === selectedCategory}
//           >
//             {category}
//           </MenuItem>
//         ))}
//       </Menu>

//       {/* Post Actions Menu */}
//       <Menu
//         anchorEl={menuAnchorEl}
//         open={Boolean(menuAnchorEl)}
//         onClose={handlePostMenuClose}
//       >
//         <MenuItem onClick={handlePostMenuClose}>
//           <Edit sx={{ mr: 1 }} /> Edit
//         </MenuItem>
//         <MenuItem onClick={handlePostMenuClose} sx={{ color: 'error.main' }}>
//           <Delete sx={{ mr: 1 }} /> Delete
//         </MenuItem>
//       </Menu>
//     </Container>
//   );
// };

// export default BlogsPage;

//=============================================================================

// import {
//   ArrowBack,
//   Delete,
//   Edit,
//   Favorite,
//   FavoriteBorder,
//   FilterList,
//   MoreVert,
//   Search,
//   Share,
// } from "@mui/icons-material";
// import {
//   Avatar,
//   Box,
//   Button,
//   Card,
//   CardContent,
//   CardMedia,
//   Chip,
//   CircularProgress,
//   Container,
//   Divider,
//   Grid,
//   IconButton,
//   InputBase,
//   Menu,
//   MenuItem,
//   Paper,
//   Typography,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import BlogView from "./BlogView";
// import Navbar from "./Navbar";

// const BlogsPage = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filterAnchorEl, setFilterAnchorEl] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [likedPosts, setLikedPosts] = useState(new Set());
//   const [menuAnchorEl, setMenuAnchorEl] = useState(null);
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [blogPosts, setBlogPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedBlogForView, setSelectedBlogForView] = useState(null);
//   const [categories, setCategories] = useState(["All"]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserBlogs = async () => {
//       try {
//         setLoading(true);
//         const userEmail = sessionStorage.getItem("userEmail");

//         if (!userEmail) {
//           setError("User email not found in session storage");
//           setLoading(false);
//           return;
//         }

//         const response = await axios.get(
//           `https://localhost:7163/api/Post/byemail?email=${encodeURIComponent(
//             userEmail
//           )}`
//         );
//         setBlogPosts(response.data);

//         // Extract unique categories from posts
//         const uniqueCategories = [
//           "All",
//           ...new Set(
//             response.data.map((post) => post.category).filter(Boolean)
//           ),
//         ];
//         setCategories(uniqueCategories);

//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching blog posts:", err);
//         setError("Failed to load blog posts. Please try again later.");
//         setLoading(false);
//       }
//     };

//     fetchUserBlogs();
//   }, []);

//   const handleFilterClick = (event) => {
//     setFilterAnchorEl(event.currentTarget);
//   };

//   const handleFilterClose = (category) => {
//     if (category && category !== selectedCategory) {
//       setSelectedCategory(category);
//     }
//     setFilterAnchorEl(null);
//   };

//   const handleLikeToggle = (postId) => {
//     setLikedPosts((prev) => {
//       const newLiked = new Set(prev);
//       if (newLiked.has(postId)) {
//         newLiked.delete(postId);
//       } else {
//         newLiked.add(postId);
//       }
//       return newLiked;
//     });
//   };

//   const handlePostMenuOpen = (event, post) => {
//     setSelectedPost(post);
//     setMenuAnchorEl(event.currentTarget);
//   };

//   const handlePostMenuClose = () => {
//     setMenuAnchorEl(null);
//     setSelectedPost(null);
//   };

//   const handlePostClick = (post) => {
//     setSelectedBlogForView(post);
//   };

//   const handleBackToBlogs = () => {
//     setSelectedBlogForView(null);
//   };

//   const handleNewPostClick = () => {
//     navigate("/create-blog");
//   }

//   const formatDate = (dateString) => {
//     if (!dateString) return "";
//     return new Date(dateString).toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//   };

//   // Get excerpt from content if available
//   const getExcerpt = (content) => {
//     if (!content) return "";
//     try {
//       const parsedContent =
//         typeof content === "string" ? JSON.parse(content) : content;
//       // Try to find the first paragraph's text content
//       if (parsedContent?.content) {
//         for (const node of parsedContent.content) {
//           if (
//             node.type === "paragraph" &&
//             node.content &&
//             node.content.length > 0
//           ) {
//             let text = "";
//             for (const textNode of node.content) {
//               if (textNode.text) {
//                 text += textNode.text;
//               }
//             }
//             if (text) {
//               return text.length > 150 ? text.substring(0, 150) + "..." : text;
//             }
//           }
//         }
//       }
//       return "Click to read this blog post...";
//     } catch (error) {
//       return "Click to read this blog post...";
//     }
//   };

//   // Filter posts based on search query and selected category
//   const filteredPosts = blogPosts.filter((post) => {
//     const matchesSearch =
//       post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       getExcerpt(post.content)
//         ?.toLowerCase()
//         .includes(searchQuery.toLowerCase());
//     const matchesCategory =
//       selectedCategory === "All" || post.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   // Return blog view if a post is selected
//   if (selectedBlogForView) {
//     return (
//       <Box>
//         <Button
//           variant="contained"
//           onClick={handleBackToBlogs}
//           startIcon={<ArrowBack />}
//           sx={{
//             position: "fixed",
//             top: theme.spacing(10),
//             right: theme.spacing(0),
//             zIndex: theme.zIndex.modal + 1,
//             px: 4,
//             boxShadow: 3,
//             "&:hover": {
//               boxShadow: 6,
//             },
//             // Add mobile responsiveness
//             [theme.breakpoints.down("sm")]: {
//               top: theme.spacing(1),
//               right: theme.spacing(1),
//               px: 2,
//               fontSize: "0.875rem",
//             },
//           }}
//         >
//           Back to All Posts
//         </Button>
//         <Box sx={{ mt: { xs: 6, sm: 8 } }}>
//           <BlogView blogData={selectedBlogForView} />
//         </Box>
//       </Box>
//     );
//   }

//   return (
//     <Container maxWidth="xl" sx={{ py: 8 }}>
//       <Navbar />
//       {/* Header Section */}
//       <Paper
//         elevation={0}
//         sx={{
//           p: 3,
//           mb: 4,
//           borderRadius: 2,
//           background: (theme) =>
//             `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
//           color: "white",
//         }}
//       >
//         <Typography
//           variant={isMobile ? "h5" : "h4"}
//           component="h1"
//           gutterBottom
//           fontWeight="bold"
//         >
//           My Blog Posts
//         </Typography>
//         <Box sx={{ display: "flex", gap: 2, mt: 3, flexWrap: "wrap" }}>
//           <Paper
//             sx={{
//               p: "2px 4px",
//               display: "flex",
//               alignItems: "center",
//               flex: 1,
//               maxWidth: 500,
//               backgroundColor: "rgba(255,255,255,0.1)",
//               backdropFilter: "blur(10px)",
//               border: "1px solid rgba(255,255,255,0.2)",
//             }}
//           >
//             <IconButton sx={{ p: "10px", color: "white" }}>
//               <Search />
//             </IconButton>
//             <InputBase
//               sx={{
//                 ml: 1,
//                 flex: 1,
//                 color: "white",
//                 "::placeholder": { color: "rgba(255,255,255,0.7)" },
//               }}
//               placeholder="Search blog posts..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </Paper>
//           <Button
//             variant="contained"
//             onClick={handleFilterClick}
//             startIcon={<FilterList />}
//             sx={{
//               backgroundColor: "rgba(255,255,255,0.1)",
//               backdropFilter: "blur(10px)",
//               border: "1px solid rgba(255,255,255,0.2)",
//               "&:hover": {
//                 backgroundColor: "rgba(255,255,255,0.2)",
//               },
//             }}
//           >
//             {selectedCategory}
//           </Button>
//           <Button
//             variant="contained"
//             color="secondary"
//             onClick={handleNewPostClick}
//             sx={{ px: 3 }}
//           >
//             New Post
//           </Button>
//         </Box>
//       </Paper>

//       {/* Loading State */}
//       {loading && (
//         <Box sx={{ display: "flex", justifyContent: "center", my: 8 }}>
//           <CircularProgress />
//         </Box>
//       )}

//       {/* Error State */}
//       {error && (
//         <Paper sx={{ p: 4, textAlign: "center", my: 4 }}>
//           <Typography variant="h6" color="error" gutterBottom>
//             {error}
//           </Typography>
//           <Button
//             variant="contained"
//             onClick={() => window.location.reload()}
//             sx={{ mt: 2 }}
//           >
//             Try Again
//           </Button>
//         </Paper>
//       )}

//       {/* Empty State */}
//       {!loading && !error && filteredPosts.length === 0 && (
//         <Paper sx={{ p: 4, textAlign: "center", my: 4 }}>
//           <Typography variant="h6" gutterBottom>
//             No blog posts found
//           </Typography>
//           <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
//             {searchQuery || selectedCategory !== "All"
//               ? "Try changing your search or filter criteria"
//               : "Start creating your first blog post!"}
//           </Typography>
//           <Button variant="contained" color="primary">
//             Create New Post
//           </Button>
//         </Paper>
//       )}

//       {/* Blog Posts Grid */}
//       {!loading && !error && (
//         <Grid container spacing={3}>
//           {filteredPosts.map((post) => (
//             <Grid item xs={12} md={6} lg={4} key={post.id}>
//               <Card
//                 sx={{
//                   height: "100%",
//                   display: "flex",
//                   flexDirection: "column",
//                   transition:
//                     "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
//                   "&:hover": {
//                     transform: "translateY(-4px)",
//                     boxShadow: theme.shadows[4],
//                     cursor: "pointer",
//                   },
//                 }}
//                 onClick={() => handlePostClick(post)}
//               >
//                 <CardMedia
//                   component="img"
//                   height="200"
//                   image={
//                     post.coverImageUrl ||
//                     "https://via.placeholder.com/600x300?text=Blog+Cover"
//                   }
//                   alt={post.title}
//                   sx={{ objectFit: "cover" }}
//                 />
//                 <CardContent sx={{ flex: 1, p: 3 }}>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       alignItems: "flex-start",
//                       mb: 2,
//                     }}
//                   >
//                     {post.category && (
//                       <Chip
//                         label={post.category}
//                         color="primary"
//                         size="small"
//                         sx={{ mb: 1, textTransform: "capitalize" }}
//                       />
//                     )}
//                     <IconButton
//                       size="small"
//                       onClick={(e) => {
//                         e.stopPropagation(); // Prevent card click
//                         handlePostMenuOpen(e, post);
//                       }}
//                     >
//                       <MoreVert />
//                     </IconButton>
//                   </Box>

//                   <Typography
//                     variant="h6"
//                     gutterBottom
//                     sx={{ fontWeight: "bold", lineHeight: 1.3 }}
//                   >
//                     {post.title}
//                   </Typography>

//                   <Typography variant="body2" color="text.secondary" paragraph>
//                     {getExcerpt(post.content)}
//                   </Typography>

//                   {post.tags && post.tags.length > 0 && (
//                     <Box
//                       sx={{
//                         display: "flex",
//                         flexWrap: "wrap",
//                         gap: 0.5,
//                         mb: 2,
//                       }}
//                     >
//                       {post.tags.map((tag) => (
//                         <Chip
//                           key={tag}
//                           label={tag}
//                           size="small"
//                           variant="outlined"
//                           sx={{ borderRadius: 1 }}
//                           onClick={(e) => e.stopPropagation()}
//                         />
//                       ))}
//                     </Box>
//                   )}

//                   <Divider sx={{ my: 2 }} />

//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "space-between",
//                     }}
//                   >
//                     <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                       <Avatar
//                         src={
//                           post.profileImageUrl ||
//                           "https://via.placeholder.com/40"
//                         }
//                         sx={{ width: 32, height: 32 }}
//                       />
//                       <Box>
//                         <Typography variant="subtitle2">
//                           {post.fullName || post.username || "Author"}
//                         </Typography>
//                         <Typography variant="caption" color="text.secondary">
//                           {formatDate(post.createdAt)}
//                         </Typography>
//                       </Box>
//                     </Box>

//                     <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                       <IconButton
//                         size="small"
//                         onClick={(e) => {
//                           e.stopPropagation(); // Prevent card click
//                           handleLikeToggle(post.id);
//                         }}
//                         color={likedPosts.has(post.id) ? "primary" : "default"}
//                       >
//                         {likedPosts.has(post.id) ? (
//                           <Favorite />
//                         ) : (
//                           <FavoriteBorder />
//                         )}
//                       </IconButton>
//                       <IconButton
//                         size="small"
//                         onClick={(e) => e.stopPropagation()} // Prevent card click
//                       >
//                         <Share />
//                       </IconButton>
//                     </Box>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       )}

//       {/* Filter Menu */}
//       <Menu
//         anchorEl={filterAnchorEl}
//         open={Boolean(filterAnchorEl)}
//         onClose={() => handleFilterClose()}
//       >
//         {categories.map((category) => (
//           <MenuItem
//             key={category}
//             onClick={() => handleFilterClose(category)}
//             selected={category === selectedCategory}
//           >
//             {category}
//           </MenuItem>
//         ))}
//       </Menu>

//       {/* Post Actions Menu */}
//       <Menu
//         anchorEl={menuAnchorEl}
//         open={Boolean(menuAnchorEl)}
//         onClose={handlePostMenuClose}
//       >
//         <MenuItem
//           onClick={(e) => {
//             e.stopPropagation();
//             handlePostMenuClose();
//           }}
//         >
//           <Edit sx={{ mr: 1 }} /> Edit
//         </MenuItem>
//         <MenuItem
//           onClick={(e) => {
//             e.stopPropagation();
//             handlePostMenuClose();
//           }}
//           sx={{ color: "error.main" }}
//         >
//           <Delete sx={{ mr: 1 }} /> Delete
//         </MenuItem>
//       </Menu>
//     </Container>
//   );
// };

// export default BlogsPage;

//===================================================================

// import {
//   ArrowBack,
//   Delete,
//   Edit,
//   Favorite,
//   FavoriteBorder,
//   FilterList,
//   MoreVert,
//   Search,
//   Share,
// } from "@mui/icons-material";
// import {
//   Avatar,
//   Box,
//   Button,
//   Card,
//   CardContent,
//   CardMedia,
//   Chip,
//   CircularProgress,
//   Container,
//   Divider,
//   Grid,
//   IconButton,
//   InputBase,
//   Menu,
//   MenuItem,
//   Paper,
//   Typography,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import BlogView from "./BlogView";
// import Navbar from "./Navbar";

// const BlogsPage = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filterAnchorEl, setFilterAnchorEl] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [likedPosts, setLikedPosts] = useState(new Set());
//   const [menuAnchorEl, setMenuAnchorEl] = useState(null);
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [blogPosts, setBlogPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedBlogForView, setSelectedBlogForView] = useState(null);
//   const [categories, setCategories] = useState(["All"]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserBlogs = async () => {
//       try {
//         setLoading(true);
//         const userEmail = sessionStorage.getItem("userEmail");

//         if (!userEmail) {
//           setError("User email not found in session storage");
//           setLoading(false);
//           return;
//         }

//         const response = await axios.get(
//           `https://localhost:7163/api/Post/byemail?email=${encodeURIComponent(
//             userEmail
//           )}`
//         );
//         setBlogPosts(response.data);

//         // Extract unique categories from posts
//         const uniqueCategories = [
//           "All",
//           ...new Set(
//             response.data.map((post) => post.category).filter(Boolean)
//           ),
//         ];
//         setCategories(uniqueCategories);

//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching blog posts:", err);
//         setError("Failed to load blog posts. Please try again later.");
//         setLoading(false);
//       }
//     };

//     fetchUserBlogs();
//   }, []);

//   const handleFilterClick = (event) => {
//     setFilterAnchorEl(event.currentTarget);
//   };

//   const handleFilterClose = (category) => {
//     if (category && category !== selectedCategory) {
//       setSelectedCategory(category);
//     }
//     setFilterAnchorEl(null);
//   };

//   const handleLikeToggle = (postId) => {
//     setLikedPosts((prev) => {
//       const newLiked = new Set(prev);
//       if (newLiked.has(postId)) {
//         newLiked.delete(postId);
//       } else {
//         newLiked.add(postId);
//       }
//       return newLiked;
//     });
//   };

//   const handlePostMenuOpen = (event, post) => {
//     setSelectedPost(post);
//     setMenuAnchorEl(event.currentTarget);
//   };

//   const handlePostMenuClose = () => {
//     setMenuAnchorEl(null);
//     setSelectedPost(null);
//   };

//   const handlePostClick = (post) => {
//     setSelectedBlogForView(post);
//   };

//   const handleBackToBlogs = () => {
//     setSelectedBlogForView(null);
//   };

//   const handleNewPostClick = () => {
//     navigate("/create-blog");
//   }

//   const handleEditPost = (post) => {
//     // Navigate to the create-blog route with state containing the blog data
//     navigate("/create-blog", { state: { blogData: post } });
//     handlePostMenuClose();
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return "";
//     return new Date(dateString).toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//   };

//   // Get excerpt from content if available
//   const getExcerpt = (content) => {
//     if (!content) return "";
//     try {
//       const parsedContent =
//         typeof content === "string" ? JSON.parse(content) : content;
//       // Try to find the first paragraph's text content
//       if (parsedContent?.content) {
//         for (const node of parsedContent.content) {
//           if (
//             node.type === "paragraph" &&
//             node.content &&
//             node.content.length > 0
//           ) {
//             let text = "";
//             for (const textNode of node.content) {
//               if (textNode.text) {
//                 text += textNode.text;
//               }
//             }
//             if (text) {
//               return text.length > 150 ? text.substring(0, 150) + "..." : text;
//             }
//           }
//         }
//       }
//       return "Click to read this blog post...";
//     } catch (error) {
//       return "Click to read this blog post...";
//     }
//   };

//   // Filter posts based on search query and selected category
//   const filteredPosts = blogPosts.filter((post) => {
//     const matchesSearch =
//       post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       getExcerpt(post.content)
//         ?.toLowerCase()
//         .includes(searchQuery.toLowerCase());
//     const matchesCategory =
//       selectedCategory === "All" || post.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   // Return blog view if a post is selected
//   if (selectedBlogForView) {
//     return (
//       <Box>
//         <Button
//           variant="contained"
//           onClick={handleBackToBlogs}
//           startIcon={<ArrowBack />}
//           sx={{
//             position: "fixed",
//             top: theme.spacing(10),
//             right: theme.spacing(0),
//             zIndex: theme.zIndex.modal + 1,
//             px: 4,
//             boxShadow: 3,
//             "&:hover": {
//               boxShadow: 6,
//             },
//             // Add mobile responsiveness
//             [theme.breakpoints.down("sm")]: {
//               top: theme.spacing(1),
//               right: theme.spacing(1),
//               px: 2,
//               fontSize: "0.875rem",
//             },
//           }}
//         >
//           Back to All Posts
//         </Button>
//         <Box sx={{ mt: { xs: 6, sm: 8 } }}>
//           <BlogView blogData={selectedBlogForView} />
//         </Box>
//       </Box>
//     );
//   }

//   return (
//     <Container maxWidth="xl" sx={{ py: 8 }}>
//       <Navbar />
//       {/* Header Section */}
//       <Paper
//         elevation={0}
//         sx={{
//           p: 3,
//           mb: 4,
//           borderRadius: 2,
//           background: (theme) =>
//             `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
//           color: "white",
//         }}
//       >
//         <Typography
//           variant={isMobile ? "h5" : "h4"}
//           component="h1"
//           gutterBottom
//           fontWeight="bold"
//         >
//           My Blog Posts
//         </Typography>
//         <Box sx={{ display: "flex", gap: 2, mt: 3, flexWrap: "wrap" }}>
//           <Paper
//             sx={{
//               p: "2px 4px",
//               display: "flex",
//               alignItems: "center",
//               flex: 1,
//               maxWidth: 500,
//               backgroundColor: "rgba(255,255,255,0.1)",
//               backdropFilter: "blur(10px)",
//               border: "1px solid rgba(255,255,255,0.2)",
//             }}
//           >
//             <IconButton sx={{ p: "10px", color: "white" }}>
//               <Search />
//             </IconButton>
//             <InputBase
//               sx={{
//                 ml: 1,
//                 flex: 1,
//                 color: "white",
//                 "::placeholder": { color: "rgba(255,255,255,0.7)" },
//               }}
//               placeholder="Search blog posts..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </Paper>
//           <Button
//             variant="contained"
//             onClick={handleFilterClick}
//             startIcon={<FilterList />}
//             sx={{
//               backgroundColor: "rgba(255,255,255,0.1)",
//               backdropFilter: "blur(10px)",
//               border: "1px solid rgba(255,255,255,0.2)",
//               "&:hover": {
//                 backgroundColor: "rgba(255,255,255,0.2)",
//               },
//             }}
//           >
//             {selectedCategory}
//           </Button>
//           <Button
//             variant="contained"
//             color="secondary"
//             onClick={handleNewPostClick}
//             sx={{ px: 3 }}
//           >
//             New Post
//           </Button>
//         </Box>
//       </Paper>

//       {/* Loading State */}
//       {loading && (
//         <Box sx={{ display: "flex", justifyContent: "center", my: 8 }}>
//           <CircularProgress />
//         </Box>
//       )}

//       {/* Error State */}
//       {error && (
//         <Paper sx={{ p: 4, textAlign: "center", my: 4 }}>
//           <Typography variant="h6" color="error" gutterBottom>
//             {error}
//           </Typography>
//           <Button
//             variant="contained"
//             onClick={() => window.location.reload()}
//             sx={{ mt: 2 }}
//           >
//             Try Again
//           </Button>
//         </Paper>
//       )}

//       {/* Empty State */}
//       {!loading && !error && filteredPosts.length === 0 && (
//         <Paper sx={{ p: 4, textAlign: "center", my: 4 }}>
//           <Typography variant="h6" gutterBottom>
//             No blog posts found
//           </Typography>
//           <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
//             {searchQuery || selectedCategory !== "All"
//               ? "Try changing your search or filter criteria"
//               : "Start creating your first blog post!"}
//           </Typography>
//           <Button variant="contained" color="primary">
//             Create New Post
//           </Button>
//         </Paper>
//       )}

//       {/* Blog Posts Grid */}
//       {!loading && !error && (
//         <Grid container spacing={3}>
//           {filteredPosts.map((post) => (
//             <Grid item xs={12} md={6} lg={4} key={post.id}>
//               <Card
//                 sx={{
//                   height: "100%",
//                   display: "flex",
//                   flexDirection: "column",
//                   transition:
//                     "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
//                   "&:hover": {
//                     transform: "translateY(-4px)",
//                     boxShadow: theme.shadows[4],
//                     cursor: "pointer",
//                   },
//                 }}
//                 onClick={() => handlePostClick(post)}
//               >
//                 <CardMedia
//                   component="img"
//                   height="200"
//                   image={
//                     post.coverImageUrl ||
//                     "https://via.placeholder.com/600x300?text=Blog+Cover"
//                   }
//                   alt={post.title}
//                   sx={{ objectFit: "cover" }}
//                 />
//                 <CardContent sx={{ flex: 1, p: 3 }}>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       alignItems: "flex-start",
//                       mb: 2,
//                     }}
//                   >
//                     {post.category && (
//                       <Chip
//                         label={post.category}
//                         color="primary"
//                         size="small"
//                         sx={{ mb: 1, textTransform: "capitalize" }}
//                       />
//                     )}
//                     <IconButton
//                       size="small"
//                       onClick={(e) => {
//                         e.stopPropagation(); // Prevent card click
//                         handlePostMenuOpen(e, post);
//                       }}
//                     >
//                       <MoreVert />
//                     </IconButton>
//                   </Box>

//                   <Typography
//                     variant="h6"
//                     gutterBottom
//                     sx={{ fontWeight: "bold", lineHeight: 1.3 }}
//                   >
//                     {post.title}
//                   </Typography>

//                   <Typography variant="body2" color="text.secondary" paragraph>
//                     {getExcerpt(post.content)}
//                   </Typography>

//                   {post.tags && post.tags.length > 0 && (
//                     <Box
//                       sx={{
//                         display: "flex",
//                         flexWrap: "wrap",
//                         gap: 0.5,
//                         mb: 2,
//                       }}
//                     >
//                       {post.tags.map((tag) => (
//                         <Chip
//                           key={tag}
//                           label={tag}
//                           size="small"
//                           variant="outlined"
//                           sx={{ borderRadius: 1 }}
//                           onClick={(e) => e.stopPropagation()}
//                         />
//                       ))}
//                     </Box>
//                   )}

//                   <Divider sx={{ my: 2 }} />

//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "space-between",
//                     }}
//                   >
//                     <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                       <Avatar
//                         src={
//                           post.profileImageUrl ||
//                           "https://via.placeholder.com/40"
//                         }
//                         sx={{ width: 32, height: 32 }}
//                       />
//                       <Box>
//                         <Typography variant="subtitle2">
//                           {post.fullName || post.username || "Author"}
//                         </Typography>
//                         <Typography variant="caption" color="text.secondary">
//                           {formatDate(post.createdAt)}
//                         </Typography>
//                       </Box>
//                     </Box>

//                     <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                       <IconButton
//                         size="small"
//                         onClick={(e) => {
//                           e.stopPropagation(); // Prevent card click
//                           handleLikeToggle(post.id);
//                         }}
//                         color={likedPosts.has(post.id) ? "primary" : "default"}
//                       >
//                         {likedPosts.has(post.id) ? (
//                           <Favorite />
//                         ) : (
//                           <FavoriteBorder />
//                         )}
//                       </IconButton>
//                       <IconButton
//                         size="small"
//                         onClick={(e) => e.stopPropagation()} // Prevent card click
//                       >
//                         <Share />
//                       </IconButton>
//                     </Box>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       )}

//       {/* Filter Menu */}
//       <Menu
//         anchorEl={filterAnchorEl}
//         open={Boolean(filterAnchorEl)}
//         onClose={() => handleFilterClose()}
//       >
//         {categories.map((category) => (
//           <MenuItem
//             key={category}
//             onClick={() => handleFilterClose(category)}
//             selected={category === selectedCategory}
//           >
//             {category}
//           </MenuItem>
//         ))}
//       </Menu>

//       {/* Post Actions Menu */}
//       <Menu
//         anchorEl={menuAnchorEl}
//         open={Boolean(menuAnchorEl)}
//         onClose={handlePostMenuClose}
//       >
//         <MenuItem
//           onClick={(e) => {
//             e.stopPropagation();
//             handleEditPost(selectedPost);
//           }}
//         >
//           <Edit sx={{ mr: 1 }} /> Edit
//         </MenuItem>
//         <MenuItem
//           onClick={(e) => {
//             e.stopPropagation();
//             handlePostMenuClose();
//           }}
//           sx={{ color: "error.main" }}
//         >
//           <Delete sx={{ mr: 1 }} /> Delete
//         </MenuItem>
//       </Menu>
//     </Container>
//   );
// };

// export default BlogsPage;

//===============================================================

import {
  ArrowBack,
  Delete,
  Edit,
  FilterList,
  Search,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogView from "./BlogView";
import Navbar from "./Navbar";

const BlogsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [searchQuery, setSearchQuery] = useState("");
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBlogForView, setSelectedBlogForView] = useState(null);
  const [categories, setCategories] = useState(["All"]);
  const navigate = useNavigate();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);

  useEffect(() => {
    const fetchUserBlogs = async () => {
      try {
        setLoading(true);
        const userEmail = sessionStorage.getItem("userEmail");

        if (!userEmail) {
          setError("User email not found in session storage");
          setLoading(false);
          return;
        }

        const response = await axios.get(
          `https://localhost:7163/api/Post/byemail?email=${encodeURIComponent(
            userEmail
          )}`
        );
        setBlogPosts(response.data);

        // Extract unique categories from posts
        const uniqueCategories = [
          "All",
          ...new Set(
            response.data.map((post) => post.category).filter(Boolean)
          ),
        ];
        setCategories(uniqueCategories);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError("Failed to load blog posts. Please try again later.");
        setLoading(false);
      }
    };

    fetchUserBlogs();
  }, []);

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = (category) => {
    if (category && category !== selectedCategory) {
      setSelectedCategory(category);
    }
    setFilterAnchorEl(null);
  };

  const handlePostClick = (post) => {
    setSelectedBlogForView(post);
  };

  const handleBackToBlogs = () => {
    setSelectedBlogForView(null);
  };

  const handleNewPostClick = () => {
    navigate("/create-blog");
  };

  const handleEditPost = (post) => {
    navigate("/create-blog", { state: { blogData: post } });
  };

  const handleDeletePost = (postId) => {
    setPostToDelete(postId);
    setDeleteDialogOpen(true);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Get excerpt from content if available
  const getExcerpt = (content) => {
    if (!content) return "";
    try {
      const parsedContent =
        typeof content === "string" ? JSON.parse(content) : content;
      // Try to find the first paragraph's text content
      if (parsedContent?.content) {
        for (const node of parsedContent.content) {
          if (
            node.type === "paragraph" &&
            node.content &&
            node.content.length > 0
          ) {
            let text = "";
            for (const textNode of node.content) {
              if (textNode.text) {
                text += textNode.text;
              }
            }
            if (text) {
              return text.length > 150 ? text.substring(0, 150) + "..." : text;
            }
          }
        }
      }
      return "Click to read this blog post...";
    } catch (error) {
      return "Click to read this blog post...";
    }
  };

  // Filter posts based on search query and selected category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      getExcerpt(post.content)
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Return blog view if a post is selected
  if (selectedBlogForView) {
    return (
      <Box>
        <Button
          variant="contained"
          onClick={handleBackToBlogs}
          startIcon={<ArrowBack />}
          sx={{
            position: "fixed",
            top: theme.spacing(10),
            right: theme.spacing(0),
            zIndex: theme.zIndex.modal + 1,
            px: 4,
            boxShadow: 3,
            "&:hover": {
              boxShadow: 6,
            },
            // Add mobile responsiveness
            [theme.breakpoints.down("sm")]: {
              top: theme.spacing(1),
              right: theme.spacing(1),
              px: 2,
              fontSize: "0.875rem",
            },
          }}
        >
          Back to All Posts
        </Button>
        <Box sx={{ mt: { xs: 6, sm: 8 } }}>
          <BlogView blogData={selectedBlogForView} />
        </Box>
      </Box>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Navbar />
      {/* Header Section */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 4,
          borderRadius: 2,
          background: (theme) =>
            `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
          color: "white",
        }}
      >
        <Typography
          variant={isMobile ? "h5" : "h4"}
          component="h1"
          gutterBottom
          fontWeight="bold"
        >
          My Blog Posts
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mt: 3, flexWrap: "wrap" }}>
          <Paper
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              flex: 1,
              maxWidth: 500,
              backgroundColor: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <IconButton sx={{ p: "10px", color: "white" }}>
              <Search />
            </IconButton>
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                color: "white",
                "::placeholder": { color: "rgba(255,255,255,0.7)" },
              }}
              placeholder="Search blog posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Paper>
          <Button
            variant="contained"
            onClick={handleFilterClick}
            startIcon={<FilterList />}
            sx={{
              backgroundColor: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.2)",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.2)",
              },
            }}
          >
            {selectedCategory}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleNewPostClick}
            sx={{ px: 3 }}
          >
            New Post
          </Button>
        </Box>
      </Paper>

      {/* Loading State */}
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 8 }}>
          <CircularProgress />
        </Box>
      )}

      {/* Error State */}
      {error && (
        <Paper sx={{ p: 4, textAlign: "center", my: 4 }}>
          <Typography variant="h6" color="error" gutterBottom>
            {error}
          </Typography>
          <Button
            variant="contained"
            onClick={() => window.location.reload()}
            sx={{ mt: 2 }}
          >
            Try Again
          </Button>
        </Paper>
      )}

      {/* Empty State */}
      {!loading && !error && filteredPosts.length === 0 && (
        <Paper sx={{ p: 4, textAlign: "center", my: 4 }}>
          <Typography variant="h6" gutterBottom>
            No blog posts found
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            {searchQuery || selectedCategory !== "All"
              ? "Try changing your search or filter criteria"
              : "Start creating your first blog post!"}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNewPostClick}
          >
            Create New Post
          </Button>
        </Paper>
      )}

      {/* Blog Posts Grid */}
      {!loading && !error && (
        <Grid container spacing={3}>
          {filteredPosts.map((post) => (
            <Grid item xs={12} md={6} lg={4} key={post.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition:
                    "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: theme.shadows[4],
                    cursor: "pointer",
                  },
                }}
                onClick={() => handlePostClick(post)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={
                    post.coverImageUrl ||
                    "https://via.placeholder.com/600x300?text=Blog+Cover"
                  }
                  alt={post.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ flex: 1, p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      mb: 2,
                    }}
                  >
                    {post.category && (
                      <Chip
                        label={post.category}
                        color="primary"
                        size="small"
                        sx={{ mb: 1, textTransform: "capitalize" }}
                      />
                    )}
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <IconButton
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditPost(post);
                        }}
                        color="primary"
                      >
                        <Edit fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeletePost(post.id);
                        }}
                        color="error"
                      >
                        <Delete fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>

                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold", lineHeight: 1.3 }}
                  >
                    {post.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" paragraph>
                    {getExcerpt(post.content)}
                  </Typography>

                  {post.tags && post.tags.length > 0 && (
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 0.5,
                        mb: 2,
                      }}
                    >
                      {post.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          variant="outlined"
                          sx={{ borderRadius: 1 }}
                          onClick={(e) => e.stopPropagation()}
                        />
                      ))}
                    </Box>
                  )}

                  <Divider sx={{ my: 2 }} />

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Avatar
                        src={
                          post.profileImageUrl ||
                          "https://via.placeholder.com/40"
                        }
                        sx={{ width: 32, height: 32 }}
                      />
                      <Box>
                        <Typography variant="subtitle2">
                          {post.fullName || post.username || "Author"}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {formatDate(post.createdAt)}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Filter Menu */}
      <Menu
        anchorEl={filterAnchorEl}
        open={Boolean(filterAnchorEl)}
        onClose={() => handleFilterClose()}
      >
        {categories.map((category) => (
          <MenuItem
            key={category}
            onClick={() => handleFilterClose(category)}
            selected={category === selectedCategory}
          >
            {category}
          </MenuItem>
        ))}
      </Menu>
      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Post?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this post? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button
            onClick={async () => {
              try {
                await axios.delete(
                  `https://localhost:7163/api/Post/byemail?id=${postToDelete}`
                );
                // Remove the deleted post from the state
                setBlogPosts(
                  blogPosts.filter((post) => post.id !== postToDelete)
                );
                setDeleteDialogOpen(false);
              } catch (err) {
                console.error("Error deleting post:", err);
                setError("Failed to delete post. Please try again.");
                setDeleteDialogOpen(false);
              }
            }}
            color="error"
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default BlogsPage;
