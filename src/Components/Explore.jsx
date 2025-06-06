// import {
//     Bookmark,
//     BookmarkBorder,
//     Favorite,
//     FavoriteBorder,
//     LocalFireDepartment,
//     Search,
//     TrendingUp
// } from '@mui/icons-material';
// import {
//     Avatar,
//     AvatarGroup,
//     Box,
//     Button,
//     Card,
//     CardContent,
//     CardMedia,
//     Chip,
//     Container,
//     Divider,
//     Grid,
//     IconButton,
//     InputBase,
//     Paper,
//     Skeleton,
//     Tab,
//     Tabs,
//     Typography,
//     useMediaQuery,
//     useTheme
// } from '@mui/material';
// import React, { useState } from 'react';
// import Navbar from './Navbar';

// // Sample blog data
// const trendingBlogs = [
//   {
//     id: 1,
//     title: "The Evolution of Artificial Intelligence in 2024",
//     excerpt: "Exploring the latest breakthroughs in AI and their impact on various industries...",
//     coverImage: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
//     author: {
//       name: "Sarah Wilson",
//       avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
//     },
//     category: "Technology",
//     tags: ["AI", "Machine Learning", "Future Tech"],
//     publishDate: "2024-03-18",
//     readTime: "7 min read",
//     likes: 342,
//     views: 1205,
//     trending: true
//   },
//   {
//     id: 2,
//     title: "Sustainable Web Design Practices",
//     excerpt: "How to create eco-friendly websites without compromising on user experience...",
//     coverImage: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg",
//     author: {
//       name: "Alex Chen",
//       avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
//     },
//     category: "Design",
//     tags: ["Web Design", "Sustainability", "UX"],
//     publishDate: "2024-03-17",
//     readTime: "5 min read",
//     likes: 256,
//     views: 890,
//     trending: true
//   }
// ];

// const featuredBlogs = [
//   {
//     id: 3,
//     title: "Building Scalable Microservices Architecture",
//     excerpt: "A comprehensive guide to designing and implementing microservices...",
//     coverImage: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
//     author: {
//       name: "David Kumar",
//       avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
//     },
//     category: "Development",
//     tags: ["Microservices", "Architecture", "Backend"],
//     publishDate: "2024-03-16",
//     readTime: "12 min read",
//     likes: 189,
//     views: 678,
//     featured: true
//   }
// ];

// const recentBlogs = [
//   {
//     id: 4,
//     title: "The Rise of No-Code Development",
//     excerpt: "How no-code platforms are revolutionizing software development...",
//     coverImage: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg",
//     author: {
//       name: "Emily Rodriguez",
//       avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
//     },
//     category: "Technology",
//     tags: ["No-Code", "Development", "Future"],
//     publishDate: "2024-03-15",
//     readTime: "6 min read",
//     likes: 145,
//     views: 432
//   },
//   {
//     id: 5,
//     title: "Mastering CSS Grid Layout",
//     excerpt: "Advanced techniques for creating complex layouts with CSS Grid...",
//     coverImage: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg",
//     author: {
//       name: "Mike Johnson",
//       avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
//     },
//     category: "Development",
//     tags: ["CSS", "Web Design", "Frontend"],
//     publishDate: "2024-03-14",
//     readTime: "8 min read",
//     likes: 178,
//     views: 567
//   }
// ];

// const ExplorePage = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const [searchQuery, setSearchQuery] = useState('');
//   const [currentTab, setCurrentTab] = useState(0);
//   const [savedPosts, setSavedPosts] = useState(new Set());
//   const [likedPosts, setLikedPosts] = useState(new Set());
//   const [isLoading, setIsLoading] = useState(false);

//   const handleTabChange = (event, newValue) => {
//     setIsLoading(true);
//     setCurrentTab(newValue);
//     setTimeout(() => setIsLoading(false), 500);
//   };

//   const handleSaveToggle = (postId) => {
//     setSavedPosts(prev => {
//       const newSaved = new Set(prev);
//       if (newSaved.has(postId)) {
//         newSaved.delete(postId);
//       } else {
//         newSaved.add(postId);
//       }
//       return newSaved;
//     });
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

//   const BlogCard = ({ post, isFeatured = false }) => (
//     <Card 
//       sx={{ 
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         transition: 'all 0.3s ease',
//         position: 'relative',
//         overflow: 'visible',
//         '&:hover': {
//           transform: 'translateY(-8px)',
//           boxShadow: theme.shadows[8]
//         }
//       }}
//     >
//       {post.trending && (
//         <Chip
//           icon={<LocalFireDepartment />}
//           label="Trending"
//           color="error"
//           sx={{
//             position: 'absolute',
//             top: -12,
//             right: 16,
//             zIndex: 1
//           }}
//         />
//       )}
//       <CardMedia
//         component="img"
//         height={isFeatured ? "300" : "200"}
//         image={post.coverImage}
//         alt={post.title}
//         sx={{ 
//           objectFit: 'cover',
//           filter: 'brightness(0.9)'
//         }}
//       />
//       <CardContent sx={{ flex: 1, p: 3 }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
//           <Chip 
//             label={post.category}
//             color="primary"
//             size="small"
//             sx={{ borderRadius: '4px' }}
//           />
//           <Box sx={{ display: 'flex', gap: 1 }}>
//             <IconButton 
//               size="small"
//               onClick={() => handleLikeToggle(post.id)}
//               color={likedPosts.has(post.id) ? 'primary' : 'default'}
//             >
//               {likedPosts.has(post.id) ? <Favorite /> : <FavoriteBorder />}
//             </IconButton>
//             <IconButton 
//               size="small"
//               onClick={() => handleSaveToggle(post.id)}
//               color={savedPosts.has(post.id) ? 'primary' : 'default'}
//             >
//               {savedPosts.has(post.id) ? <Bookmark /> : <BookmarkBorder />}
//             </IconButton>
//           </Box>
//         </Box>

//         <Typography 
//           variant={isFeatured ? "h5" : "h6"} 
//           gutterBottom 
//           sx={{ 
//             fontWeight: 'bold',
//             lineHeight: 1.3,
//             minHeight: isFeatured ? '4rem' : '3.6rem'
//           }}
//         >
//           {post.title}
//         </Typography>

//         <Typography 
//           variant="body2" 
//           color="text.secondary" 
//           paragraph
//           sx={{ 
//             display: '-webkit-box',
//             WebkitLineClamp: 3,
//             WebkitBoxOrient: 'vertical',
//             overflow: 'hidden',
//             minHeight: '4.5em'
//           }}
//         >
//           {post.excerpt}
//         </Typography>

//         <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
//           {post.tags.map(tag => (
//             <Chip
//               key={tag}
//               label={tag}
//               size="small"
//               variant="outlined"
//               sx={{ borderRadius: '4px' }}
//             />
//           ))}
//         </Box>

//         <Divider sx={{ my: 2 }} />

//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//             <Avatar
//               src={post.author.avatar}
//               sx={{ width: 32, height: 32 }}
//             />
//             <Box>
//               <Typography variant="subtitle2">
//                 {post.author.name}
//               </Typography>
//               <Typography variant="caption" color="text.secondary">
//                 {post.readTime} • {post.views.toLocaleString()} views
//               </Typography>
//             </Box>
//           </Box>
//         </Box>
//       </CardContent>
//     </Card>
//   );

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
//           position: 'relative',
//           overflow: 'hidden'
//         }}
//       >
//         <Box
//           sx={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 80%)',
//             zIndex: 1
//           }}
//         />
        
//         <Box sx={{ position: 'relative', zIndex: 2 }}>
//           <Typography variant={isMobile ? "h5" : "h4"} component="h1" gutterBottom fontWeight="bold">
//             Explore Amazing Content
//           </Typography>
//           <Typography variant="subtitle1" sx={{ mb: 3, opacity: 0.9 }}>
//             Discover trending topics and insights from our community
//           </Typography>
          
//           <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//             <Paper
//               sx={{
//                 p: '2px 4px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 flex: 1,
//                 maxWidth: 600,
//                 backgroundColor: 'rgba(255,255,255,0.1)',
//                 backdropFilter: 'blur(10px)',
//                 border: '1px solid rgba(255,255,255,0.2)'
//               }}
//             >
//               <IconButton sx={{ p: '10px', color: 'white' }}>
//                 <Search />
//               </IconButton>
//               <InputBase
//                 sx={{ ml: 1, flex: 1, color: 'white', '::placeholder': { color: 'rgba(255,255,255,0.7)' } }}
//                 placeholder="Search articles, topics, or authors..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </Paper>
//           </Box>
//         </Box>
//       </Paper>

//       {/* Active Writers Section */}
//       <Box sx={{ mb: 4 }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
//           <Typography variant="h6" fontWeight="bold">
//             Active Writers
//           </Typography>
//           <Button color="primary">View All</Button>
//         </Box>
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, overflowX: 'auto', pb: 1 }}>
//           <AvatarGroup max={8} sx={{ '& .MuiAvatar-root': { width: 48, height: 48, border: 2 } }}>
//             {[...Array(8)].map((_, i) => (
//               <Avatar
//                 key={i}
//                 src={`https://images.pexels.com/photos/${220453 + i}/pexels-photo-${220453 + i}.jpeg`}
//                 sx={{ cursor: 'pointer' }}
//               />
//             ))}
//           </AvatarGroup>
//         </Box>
//       </Box>

//       {/* Content Tabs */}
//       <Box sx={{ mb: 4 }}>
//         <Tabs 
//           value={currentTab} 
//           onChange={handleTabChange}
//           variant="scrollable"
//           scrollButtons="auto"
//           sx={{
//             mb: 3,
//             '& .MuiTab-root': {
//               minWidth: 120,
//               fontWeight: 'bold'
//             }
//           }}
//         >
//           <Tab label="Featured" />
//           <Tab label="Trending" icon={<TrendingUp />} iconPosition="start" />
//           <Tab label="Latest" />
//         </Tabs>

//         {isLoading ? (
//           <Grid container spacing={3}>
//             {[...Array(6)].map((_, i) => (
//               <Grid item xs={12} md={6} lg={4} key={i}>
//                 <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 2, mb: 2 }} />
//                 <Skeleton variant="text" height={32} width="80%" />
//                 <Skeleton variant="text" height={20} width="60%" />
//               </Grid>
//             ))}
//           </Grid>
//         ) : (
//           <Grid container spacing={3}>
//             {currentTab === 0 && (
//               <>
//                 {featuredBlogs.map(post => (
//                   <Grid item xs={12} key={post.id}>
//                     <BlogCard post={post} isFeatured />
//                   </Grid>
//                 ))}
//                 {recentBlogs.map(post => (
//                   <Grid item xs={12} md={6} lg={4} key={post.id}>
//                     <BlogCard post={post} />
//                   </Grid>
//                 ))}
//               </>
//             )}
//             {currentTab === 1 && (
//               <>
//                 {trendingBlogs.map(post => (
//                   <Grid item xs={12} md={6} lg={4} key={post.id}>
//                     <BlogCard post={post} />
//                   </Grid>
//                 ))}
//               </>
//             )}
//             {currentTab === 2 && (
//               <>
//                 {recentBlogs.map(post => (
//                   <Grid item xs={12} md={6} lg={4} key={post.id}>
//                     <BlogCard post={post} />
//                   </Grid>
//                 ))}
//               </>
//             )}
//           </Grid>
//         )}
//       </Box>
//     </Container>
//   );
// };

// export default ExplorePage;

//====================================================


// import {
//   ArrowBack,
//   Bookmark,
//   BookmarkBorder,
//   Favorite,
//   FavoriteBorder,
//   LocalFireDepartment,
//   Search,
//   TrendingUp
// } from '@mui/icons-material';
// import {
//   Avatar,
//   AvatarGroup,
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
//   Paper,
//   Skeleton,
//   Tab,
//   Tabs,
//   Typography,
//   useMediaQuery,
//   useTheme
// } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import BlogView from './BlogView';
// import Navbar from './Navbar';

// const ExplorePage = () => {
// const theme = useTheme();
// const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
// const isMobile = useMediaQuery(theme.breakpoints.down('md'));
// const [searchQuery, setSearchQuery] = useState('');
// const [currentTab, setCurrentTab] = useState(0);
// const [savedPosts, setSavedPosts] = useState(new Set());
// const [likedPosts, setLikedPosts] = useState(new Set());
// const [isLoading, setIsLoading] = useState(true);

// // State for storing blog posts
// const [allPosts, setAllPosts] = useState([]);
// const [filteredPosts, setFilteredPosts] = useState({
//   trending: [],
//   featured: [],
//   latest: []
// });

// // State for popup blog view
// const [selectedBlog, setSelectedBlog] = useState(null);
// const [selectedBlogForView, setSelectedBlogForView] = useState(null);
// const [blogLoading, setBlogLoading] = useState(false);

// // Fetch posts from backend API
// useEffect(() => {
//   const fetchPosts = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch('https://localhost:7163/api/Post/published');
//       if (!response.ok) {
//         throw new Error('Failed to fetch posts');
//       }
//       const data = await response.json();
//       setAllPosts(data);
      
//       // Process posts for different categories
//       processPostsForDisplay(data);
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   fetchPosts();
// }, []);

// // Process and categorize posts for display
// const processPostsForDisplay = (posts) => {
//   if (!posts || posts.length === 0) return;

//   // Sort posts by date to get latest
//   const sortedByDate = [...posts].sort((a, b) => 
//     new Date(b.publishedAt || b.createdAt) - new Date(a.publishedAt || a.createdAt)
//   );

//   // For demo purposes - assign some posts as trending and featured
//   // In a real application, you might have these attributes from the backend
//   const trending = sortedByDate.slice(0, Math.min(4, sortedByDate.length)).map(post => ({
//     ...post,
//     trending: true
//   }));

//   const featured = sortedByDate.filter((_, index) => index % 3 === 0).slice(0, 1).map(post => ({
//     ...post,
//     featured: true
//   }));

//   const latest = sortedByDate.slice(0, 6);

//   setFilteredPosts({
//     trending,
//     featured,
//     latest
//   });
// };

// // Filter posts when search query changes
// useEffect(() => {
//   if (!allPosts.length) return;

//   const filterPosts = () => {
//     if (!searchQuery.trim()) {
//       processPostsForDisplay(allPosts);
//       return;
//     }

//     const query = searchQuery.toLowerCase();
//     const filtered = allPosts.filter(post => 
//       post.title.toLowerCase().includes(query) || 
//       (post.category && post.category.toLowerCase().includes(query)) ||
//       (post.tags && post.tags.some(tag => tag.toLowerCase().includes(query)))
//     );

//     processPostsForDisplay(filtered);
//   };

//   filterPosts();
// }, [searchQuery, allPosts]);

// const handleTabChange = (event, newValue) => {
//   setIsLoading(true);
//   setCurrentTab(newValue);
//   setTimeout(() => setIsLoading(false), 500);
// };

// const handleSaveToggle = (postId) => {
//   setSavedPosts(prev => {
//     const newSaved = new Set(prev);
//     if (newSaved.has(postId)) {
//       newSaved.delete(postId);
//     } else {
//       newSaved.add(postId);
//     }
//     return newSaved;
//   });
// };

// const handleLikeToggle = (postId) => {
//   setLikedPosts(prev => {
//     const newLiked = new Set(prev);
//     if (newLiked.has(postId)) {
//       newLiked.delete(postId);
//     } else {
//       newLiked.add(postId);
//     }
//     return newLiked;
//   });
// };

// const handlePostClick = async (postId) => {
//   setBlogLoading(true);
  
//   // First check if we already have all the data we need in allPosts
//   const existingPost = allPosts.find(post => post.id === postId);
//   if (existingPost) {
//     setSelectedBlogForView(existingPost);
//     setBlogLoading(false);
//     return;
//   }
  
//   // Otherwise fetch the specific post details
//   try {
//     const response = await fetch(`https://localhost:7163/api/Post/${postId}`);
//     if (!response.ok) throw new Error('Failed to fetch blog post');
//     const data = await response.json();
//     setSelectedBlogForView(data);
//   } catch (error) {
//     console.error('Error fetching blog post:', error);
//   } finally {
//     setBlogLoading(false);
//   }
// };

// const handleBackToExplore = () => {
//   setSelectedBlogForView(null);
// };

// const BlogCard = ({ post, isFeatured = false }) => {
//   // Extract excerpt from content if available
//   const getExcerpt = () => {
//     if (post.content) {
//       try {
//         const contentObj = typeof post.content === 'string' ? 
//           JSON.parse(post.content) : post.content;
        
//         // Try to extract text from paragraphs
//         const paragraphs = contentObj?.content?.filter(item => 
//           item.type === 'paragraph' && item.content?.some(c => c.text)
//         );
        
//         if (paragraphs && paragraphs.length > 0) {
//           // Get text from first paragraph
//           const firstPara = paragraphs[0].content
//             .filter(item => item.type === 'text')
//             .map(item => item.text)
//             .join(' ');
            
//           return firstPara.substring(0, 120) + '...';
//         }
//       } catch (error) {
//         console.error('Error parsing content for excerpt:', error);
//       }
//     }
//     return "Read this interesting article...";
//   };


  

//   return (
//     <Card 
//       sx={{ 
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         transition: 'all 0.3s ease',
//         position: 'relative',
//         overflow: 'visible',
//         cursor: 'pointer',
//         '&:hover': {
//           transform: 'translateY(-8px)',
//           boxShadow: theme.shadows[8]
//         }
//       }}
//       onClick={() => handlePostClick(post.id)}
//     >
//       {post.trending && (
//         <Chip
//           icon={<LocalFireDepartment />}
//           label="Trending"
//           color="error"
//           sx={{
//             position: 'absolute',
//             top: -12,
//             right: 16,
//             zIndex: 1
//           }}
//         />
//       )}
//       <CardMedia
//         component="img"
//         height={isFeatured ? "300" : "200"}
//         image={post.coverImageUrl || "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg"}
//         alt={post.title}
//         sx={{ 
//           objectFit: 'cover',
//           filter: 'brightness(0.9)'
//         }}
//       />
//       <CardContent sx={{ flex: 1, p: 3 }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
//           <Chip 
//             label={post.category || "General"}
//             color="primary"
//             size="small"
//             sx={{ borderRadius: '4px', textTransform: 'capitalize' }}
//           />
//           <Box sx={{ display: 'flex', gap: 1 }}>
//             <IconButton 
//               size="small"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleLikeToggle(post.id);
//               }}
//               color={likedPosts.has(post.id) ? 'primary' : 'default'}
//             >
//               {likedPosts.has(post.id) ? <Favorite /> : <FavoriteBorder />}
//             </IconButton>
//             <IconButton 
//               size="small"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleSaveToggle(post.id);
//               }}
//               color={savedPosts.has(post.id) ? 'primary' : 'default'}
//             >
//               {savedPosts.has(post.id) ? <Bookmark /> : <BookmarkBorder />}
//             </IconButton>
//           </Box>
//         </Box>

//         <Typography 
//           variant={isFeatured ? "h5" : "h6"} 
//           gutterBottom 
//           sx={{ 
//             fontWeight: 'bold',
//             lineHeight: 1.3,
//             minHeight: isFeatured ? '4rem' : '3.6rem',
//             display: '-webkit-box',
//             WebkitLineClamp: 2,
//             WebkitBoxOrient: 'vertical',
//             overflow: 'hidden'
//           }}
//         >
//           {post.title}
//         </Typography>

//         <Typography 
//           variant="body2" 
//           color="text.secondary" 
//           paragraph
//           sx={{ 
//             display: '-webkit-box',
//             WebkitLineClamp: 3,
//             WebkitBoxOrient: 'vertical',
//             overflow: 'hidden',
//             minHeight: '4.5em'
//           }}
//         >
//           {getExcerpt()}
//         </Typography>

//         <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
//           {post.tags && post.tags.slice(0, 3).map(tag => (
//             <Chip
//               key={tag}
//               label={tag.replace('#', '')}
//               size="small"
//               variant="outlined"
//               sx={{ borderRadius: '4px' }}
//             />
//           ))}
//         </Box>

//         <Divider sx={{ my: 2 }} />

//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//             <Avatar
//               src={post.profileImageUrl || "/default-avatar.png"}
//               sx={{ width: 32, height: 32 }}
//             />
//             <Box>
//               <Typography variant="subtitle2">
//                 {post.fullName ? post.fullName.trim() : post.username}
//               </Typography>
//               <Typography variant="caption" color="text.secondary">
//                 {formatDate(post.publishedAt || post.createdAt)}
//               </Typography>
//             </Box>
//           </Box>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// // Format date for display
// const formatDate = (dateString) => {
//   if (!dateString) return "";
//   const date = new Date(dateString);
//   const now = new Date();
//   const diffTime = Math.abs(now - date);
//   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
//   if (diffDays <= 1) {
//     return "Today";
//   } else if (diffDays <= 2) {
//     return "Yesterday";
//   } else if (diffDays <= 7) {
//     return `${diffDays} days ago`;
//   } else {
//     return date.toLocaleDateString(undefined, { 
//       year: 'numeric', 
//       month: 'short', 
//       day: 'numeric' 
//     });
//   }
// };


// if (selectedBlogForView) {
//   return (
//     <Box>
//       <Button 
//         variant="contained" 
//         onClick={handleBackToExplore}
//         startIcon={<ArrowBack />}
//         sx={{ 
//           position: 'fixed',
//           top: theme.spacing(10),
//           right: theme.spacing(0),
//           zIndex: theme.zIndex.modal + 1,
//           px: 4,
//           boxShadow: 3,
//           '&:hover': {
//             boxShadow: 6,
//           },
//           [theme.breakpoints.down('sm')]: {
//             top: theme.spacing(1),
//             right: theme.spacing(1),
//             px: 2,
//             fontSize: '0.875rem'
//           }
//         }}
//       >
//         Back to Explore
//       </Button>
//       <Box sx={{ mt: { xs: 6, sm: 8 } }}>
//         <BlogView blogData={selectedBlogForView} />
//       </Box>
//     </Box>
//   );
// }

// return (
//   <Container maxWidth="xl" sx={{ py: 8 }}>
//     <Navbar/>
//     {/* Header Section */}
//     <Paper 
//       elevation={0}
//       sx={{
//         p: 3,
//         mb: 4,
//         borderRadius: 2,
//         background: theme => `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
//         color: 'white',
//         position: 'relative',
//         overflow: 'hidden'
//       }}
//     >
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 80%)',
//           zIndex: 1
//         }}
//       />
      
//       <Box sx={{ position: 'relative', zIndex: 2 }}>
//         <Typography variant={isMobile ? "h5" : "h4"} component="h1" gutterBottom fontWeight="bold">
//           Explore Amazing Content
//         </Typography>
//         <Typography variant="subtitle1" sx={{ mb: 3, opacity: 0.9 }}>
//           Discover trending topics and insights from our community
//         </Typography>
        
//         <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//           <Paper
//             sx={{
//               p: '2px 4px',
//               display: 'flex',
//               alignItems: 'center',
//               flex: 1,
//               maxWidth: 600,
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
//               placeholder="Search articles, topics, or authors..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </Paper>
//         </Box>
//       </Box>
//     </Paper>

//     {/* Active Writers Section */}
//     <Box sx={{ mb: 4 }}>
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
//         <Typography variant="h6" fontWeight="bold">
//           Active Writers
//         </Typography>
//         <Button color="primary">View All</Button>
//       </Box>
//       <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, overflowX: 'auto', pb: 1 }}>
//         <AvatarGroup max={8} sx={{ '& .MuiAvatar-root': { width: 48, height: 48, border: 2 } }}>
//           {allPosts.slice(0, 8).map((post, i) => (
//             <Avatar
//               key={i}
//               src={post.profileImageUrl || `https://images.pexels.com/photos/${220453 + i}/pexels-photo-${220453 + i}.jpeg`}
//               sx={{ cursor: 'pointer' }}
//             />
//           ))}
//         </AvatarGroup>
//       </Box>
//     </Box>

//     {/* Content Tabs */}
//     <Box sx={{ mb: 4 }}>
//       <Tabs 
//         value={currentTab} 
//         onChange={handleTabChange}
//         variant="scrollable"
//         scrollButtons="auto"
//         sx={{
//           mb: 3,
//           '& .MuiTab-root': {
//             minWidth: 120,
//             fontWeight: 'bold'
//           }
//         }}
//       >
//         <Tab label="Featured" />
//         <Tab label="Trending" icon={<TrendingUp />} iconPosition="start" />
//         <Tab label="Latest" />
//       </Tabs>

//       {isLoading ? (
//         <Grid container spacing={3}>
//           {[...Array(6)].map((_, i) => (
//             <Grid item xs={12} md={6} lg={4} key={i}>
//               <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 2, mb: 2 }} />
//               <Skeleton variant="text" height={32} width="80%" />
//               <Skeleton variant="text" height={20} width="60%" />
//             </Grid>
//           ))}
//         </Grid>
//       ) : (
//         <Grid container spacing={3}>
//           {currentTab === 0 && (
//             <>
//               {filteredPosts.featured.length > 0 && (
//                 <Grid item xs={12} key={filteredPosts.featured[0].id}>
//                   <BlogCard post={filteredPosts.featured[0]} isFeatured />
//                 </Grid>
//               )}
//               {filteredPosts.latest.map(post => (
//                 <Grid item xs={12} md={6} lg={4} key={post.id}>
//                   <BlogCard post={post} />
//                 </Grid>
//               ))}
//             </>
//           )}
//           {currentTab === 1 && (
//             <>
//               {filteredPosts.trending.map(post => (
//                 <Grid item xs={12} md={6} lg={4} key={post.id}>
//                   <BlogCard post={post} />
//                 </Grid>
//               ))}
//               {filteredPosts.trending.length === 0 && (
//                 <Grid item xs={12}>
//                   <Typography variant="h6" textAlign="center">
//                     No trending posts available
//                   </Typography>
//                 </Grid>
//               )}
//             </>
//           )}
//           {currentTab === 2 && (
//             <>
//               {filteredPosts.latest.map(post => (
//                 <Grid item xs={12} md={6} lg={4} key={post.id}>
//                   <BlogCard post={post} />
//                 </Grid>
//               ))}
//               {filteredPosts.latest.length === 0 && (
//                 <Grid item xs={12}>
//                   <Typography variant="h6" textAlign="center">
//                     No posts available
//                   </Typography>
//                 </Grid>
//               )}
//             </>
//           )}
//         </Grid>
//       )}
//     </Box>


//   </Container>
// );
// };

// export default ExplorePage;


//==========================================================================


// import {
//   ArrowBack,
//   Bookmark,
//   BookmarkBorder,
//   Favorite,
//   FavoriteBorder,
//   LocalFireDepartment,
//   Search,
//   TrendingUp
// } from '@mui/icons-material';
// import {
//   Avatar,
//   AvatarGroup,
//   Badge,
//   Box,
//   Button,
//   Card,
//   CardContent,
//   CardMedia,
//   Chip,
//   CircularProgress,
//   Container,
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   Divider,
//   Grid,
//   IconButton,
//   InputBase,
//   List,
//   ListItem,
//   ListItemAvatar,
//   ListItemText,
//   Paper,
//   Skeleton,
//   Tab,
//   Tabs,
//   Tooltip,
//   Typography,
//   useMediaQuery,
//   useTheme
// } from '@mui/material';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import BlogView from './BlogView';
// import Navbar from './Navbar';

// const ExplorePage = () => {
// const theme = useTheme();
// const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
// const isMobile = useMediaQuery(theme.breakpoints.down('md'));
// const [searchQuery, setSearchQuery] = useState('');
// const [currentTab, setCurrentTab] = useState(0);
// const [savedPosts, setSavedPosts] = useState(new Set());
// const [likedPosts, setLikedPosts] = useState(new Set());
// const [isLoading, setIsLoading] = useState(true);

// // Current user info (replace with your actual user auth system)
// const currentUser = {
//   email: sessionStorage.getItem('userEmail') || 'user@example.com'
// };

// // State for storing blog posts
// const [allPosts, setAllPosts] = useState([]);
// const [filteredPosts, setFilteredPosts] = useState({
//   trending: [],
//   featured: [],
//   latest: []
// });

// // State for like information
// const [likesCount, setLikesCount] = useState({});
// const [likeUsers, setLikeUsers] = useState({});
// const [likesLoading, setLikesLoading] = useState({});
// const [showLikesDialog, setShowLikesDialog] = useState(false);
// const [currentLikeDialogPostId, setCurrentLikeDialogPostId] = useState(null);

// // State for popup blog view
// const [selectedBlog, setSelectedBlog] = useState(null);
// const [selectedBlogForView, setSelectedBlogForView] = useState(null);
// const [blogLoading, setBlogLoading] = useState(false);

// // API axios instance
// const api = axios.create({
//   baseURL: 'https://localhost:7163',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// });

// // Fetch posts from backend API
// useEffect(() => {
//   const fetchPosts = async () => {
//     setIsLoading(true);
//     try {
//       const response = await api.get('/api/Post/published');
//       const data = response.data;
//       setAllPosts(data);
      
//       // Process posts for different categories
//       processPostsForDisplay(data);
      
//       // Fetch like information for all posts
//       data.forEach(post => {
//         fetchLikesCount(post.id);
//         checkIfUserLiked(post.id);
//       });
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   fetchPosts();
// }, []);

// // Process and categorize posts for display
// const processPostsForDisplay = (posts) => {
//   if (!posts || posts.length === 0) return;

//   // Sort posts by date to get latest
//   const sortedByDate = [...posts].sort((a, b) => 
//     new Date(b.publishedAt || b.createdAt) - new Date(a.publishedAt || a.createdAt)
//   );

//   // For demo purposes - assign some posts as trending and featured
//   const trending = sortedByDate.slice(0, Math.min(4, sortedByDate.length)).map(post => ({
//     ...post,
//     trending: true
//   }));

//   // Get featured post (first post where index % 3 === 0)
//   const featuredPost = sortedByDate.find((_, index) => index % 3 === 0);
//   const featured = featuredPost ? [{ ...featuredPost, featured: true }] : [];

//   // Get latest posts, excluding the featured post if it exists
//   const latest = sortedByDate
//     .filter(post => !featured.length || post.id !== featured[0].id)
//     .slice(0, 6);

//   setFilteredPosts({
//     trending,
//     featured,
//     latest
//   });
// };

// // Filter posts when search query changes
// useEffect(() => {
//   if (!allPosts.length) return;

//   const filterPosts = () => {
//     if (!searchQuery.trim()) {
//       processPostsForDisplay(allPosts);
//       return;
//     }

//     const query = searchQuery.toLowerCase();
//     const filtered = allPosts.filter(post => 
//       post.title.toLowerCase().includes(query) || 
//       (post.category && post.category.toLowerCase().includes(query)) ||
//       (post.tags && post.tags.some(tag => tag.toLowerCase().includes(query)))
//     );

//     processPostsForDisplay(filtered);
//   };

//   filterPosts();
// }, [searchQuery, allPosts]);

// const handleTabChange = (event, newValue) => {
//   setIsLoading(true);
//   setCurrentTab(newValue);
//   setTimeout(() => setIsLoading(false), 500);
// };

// const handleSaveToggle = (postId) => {
//   setSavedPosts(prev => {
//     const newSaved = new Set(prev);
//     if (newSaved.has(postId)) {
//       newSaved.delete(postId);
//     } else {
//       newSaved.add(postId);
//     }
//     return newSaved;
//   });
// };

// // Like functionality
// const fetchLikesCount = async (postId) => {
//   try {
//     const response = await api.get(`/api/Likes/${postId}/count`);
//     setLikesCount(prev => ({
//       ...prev,
//       [postId]: response.data.likes
//     }));
//   } catch (error) {
//     console.error(`Error fetching likes count for post ${postId}:`, error);
//   }
// };

// const fetchLikeUsers = async (postId) => {
//   setLikesLoading(prev => ({ ...prev, [postId]: true }));
//   try {
//     const response = await api.get(`/api/Likes/${postId}/users`);
//     setLikeUsers(prev => ({
//       ...prev,
//       [postId]: response.data
//     }));
//   } catch (error) {
//     console.error(`Error fetching like users for post ${postId}:`, error);
//   } finally {
//     setLikesLoading(prev => ({ ...prev, [postId]: false }));
//   }
// };

// const checkIfUserLiked = async (postId) => {
//   try {
//     // Use the new has-liked API endpoint
//     const encodedEmail = encodeURIComponent(currentUser.email);
//     const response = await api.get(`/api/Likes/${postId}/has-liked/${encodedEmail}`);
    
//     // Update the liked posts set based on API response
//     setLikedPosts(prev => {
//       const newLiked = new Set(prev);
//       if (response.data.liked) {
//         newLiked.add(postId);
//       } else {
//         newLiked.delete(postId);
//       }
//       return newLiked;
//     });
    
//     return response.data.liked;
//   } catch (error) {
//     console.error(`Error checking if user liked post ${postId}:`, error);
//     return false;
//   }
// };

// const handleLikeToggle = async (postId) => {
//   // Set optimistic UI update
//   const wasLiked = likedPosts.has(postId);
  
//   setLikedPosts(prev => {
//     const newLiked = new Set(prev);
//     if (newLiked.has(postId)) {
//       newLiked.delete(postId);
//     } else {
//       newLiked.add(postId);
//     }
//     return newLiked;
//   });
  
//   // Optimistic update for count
//   setLikesCount(prev => ({
//     ...prev,
//     [postId]: (prev[postId] || 0) + (wasLiked ? -1 : 1)
//   }));
  
//   try {
//     if (wasLiked) {
//       // Unlike - Fix for 415 error by including proper headers and stringify the JSON data
//       await api.delete('/api/Likes/unlike', {
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         data: JSON.stringify({
//           postId: postId,
//           userEmail: currentUser.email
//         })
//       });
//     } else {
//       // Like
//       await api.post('/api/Likes/like', {
//         postId: postId,
//         userEmail: currentUser.email
//       });
//     }
    
//     // Refresh like count to ensure accuracy
//     fetchLikesCount(postId);
//   } catch (error) {
//     console.error('Error toggling like:', error);
    
//     // Revert optimistic updates on error
//     setLikedPosts(prev => {
//       const newLiked = new Set(prev);
//       if (wasLiked) {
//         newLiked.add(postId);
//       } else {
//         newLiked.delete(postId);
//       }
//       return newLiked;
//     });
    
//     setLikesCount(prev => ({
//       ...prev,
//       [postId]: prev[postId] + (wasLiked ? 1 : -1)
//     }));
//   }
// };

// const handleShowLikeUsers = (postId, event) => {
//   event.stopPropagation();
//   setCurrentLikeDialogPostId(postId);
//   fetchLikeUsers(postId);
//   setShowLikesDialog(true);
// };

// const handleCloseLikesDialog = () => {
//   setShowLikesDialog(false);
//   setCurrentLikeDialogPostId(null);
// };

// const handlePostClick = async (postId) => {
//   setBlogLoading(true);
  
//   // First check if we already have all the data we need in allPosts
//   const existingPost = allPosts.find(post => post.id === postId);
//   if (existingPost) {
//     setSelectedBlogForView(existingPost);
//     setBlogLoading(false);
//     return;
//   }
  
//   // Otherwise fetch the specific post details
//   try {
//     const response = await api.get(`/api/Post/${postId}`);
//     setSelectedBlogForView(response.data);
//   } catch (error) {
//     console.error('Error fetching blog post:', error);
//   } finally {
//     setBlogLoading(false);
//   }
// };

// const handleBackToExplore = () => {
//   setSelectedBlogForView(null);
// };

// const BlogCard = ({ post, isFeatured = false }) => {
//   // Extract excerpt from content if available
//   const getExcerpt = () => {
//     if (post.content) {
//       try {
//         const contentObj = typeof post.content === 'string' ? 
//           JSON.parse(post.content) : post.content;
        
//         // Try to extract text from paragraphs
//         const paragraphs = contentObj?.content?.filter(item => 
//           item.type === 'paragraph' && item.content?.some(c => c.text)
//         );
        
//         if (paragraphs && paragraphs.length > 0) {
//           // Get text from first paragraph
//           const firstPara = paragraphs[0].content
//             .filter(item => item.type === 'text')
//             .map(item => item.text)
//             .join(' ');
            
//           return firstPara.substring(0, 120) + '...';
//         }
//       } catch (error) {
//         console.error('Error parsing content for excerpt:', error);
//       }
//     }
//     return "Read this interesting article...";
//   };

//   const postLikeCount = likesCount[post.id] || 0;

//   return (
//     <Card 
//       sx={{ 
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         transition: 'all 0.3s ease',
//         position: 'relative',
//         overflow: 'visible',
//         cursor: 'pointer',
//         '&:hover': {
//           transform: 'translateY(-8px)',
//           boxShadow: theme.shadows[8]
//         }
//       }}
//       onClick={() => handlePostClick(post.id)}
//     >
//       {post.trending && (
//         <Chip
//           icon={<LocalFireDepartment />}
//           label="Trending"
//           color="error"
//           sx={{
//             position: 'absolute',
//             top: -12,
//             right: 16,
//             zIndex: 1
//           }}
//         />
//       )}
//       <CardMedia
//         component="img"
//         height={isFeatured ? "300" : "200"}
//         image={post.coverImageUrl || "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg"}
//         alt={post.title}
//         sx={{ 
//           objectFit: 'cover',
//           filter: 'brightness(0.9)'
//         }}
//       />
//       <CardContent sx={{ flex: 1, p: 3 }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
//           <Chip 
//             label={post.category || "General"}
//             color="primary"
//             size="small"
//             sx={{ borderRadius: '4px', textTransform: 'capitalize' }}
//           />
//           <Box sx={{ display: 'flex', gap: 1 }}>
//           <Tooltip title={likedPosts.has(post.id) ? "Unlike" : "Like"}>
//   <Badge 
//     badgeContent={postLikeCount > 0 ? postLikeCount : null} 
//     color="error"
//     overlap="circular"
//     anchorOrigin={{
//       vertical: 'top',
//       horizontal: 'right',
//     }}
//     onClick={(e) => postLikeCount > 0 && handleShowLikeUsers(post.id, e)}
//     sx={{ cursor: postLikeCount > 0 ? 'pointer' : 'default' }}
//   >
//     <IconButton 
//       size="small"
//       onClick={(e) => {
//         e.stopPropagation();
//         handleLikeToggle(post.id);
//       }}
//       color={likedPosts.has(post.id) ? 'error' : 'default'} // <-- red when liked
//     >
//       {likedPosts.has(post.id) ? <Favorite /> : <FavoriteBorder />}
//     </IconButton>
//   </Badge>
// </Tooltip>

//             <IconButton 
//               size="small"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleSaveToggle(post.id);
//               }}
//               color={savedPosts.has(post.id) ? 'primary' : 'default'}
//             >
//               {savedPosts.has(post.id) ? <Bookmark /> : <BookmarkBorder />}
//             </IconButton>
//           </Box>
//         </Box>

//         <Typography 
//           variant={isFeatured ? "h5" : "h6"} 
//           gutterBottom 
//           sx={{ 
//             fontWeight: 'bold',
//             lineHeight: 1.3,
//             minHeight: isFeatured ? '4rem' : '3.6rem',
//             display: '-webkit-box',
//             WebkitLineClamp: 2,
//             WebkitBoxOrient: 'vertical',
//             overflow: 'hidden'
//           }}
//         >
//           {post.title}
//         </Typography>

//         <Typography 
//           variant="body2" 
//           color="text.secondary" 
//           paragraph
//           sx={{ 
//             display: '-webkit-box',
//             WebkitLineClamp: 3,
//             WebkitBoxOrient: 'vertical',
//             overflow: 'hidden',
//             minHeight: '4.5em'
//           }}
//         >
//           {getExcerpt()}
//         </Typography>

//         <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
//           {post.tags && post.tags.slice(0, 3).map(tag => (
//             <Chip
//               key={tag}
//               label={tag.replace('#', '')}
//               size="small"
//               variant="outlined"
//               sx={{ borderRadius: '4px' }}
//             />
//           ))}
//         </Box>

//         <Divider sx={{ my: 2 }} />

//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//             <Avatar
//               src={post.profileImageUrl || "/default-avatar.png"}
//               sx={{ width: 32, height: 32 }}
//             />
//             <Box>
//               <Typography variant="subtitle2">
//                 {post.fullName ? post.fullName.trim() : post.username}
//               </Typography>
//               <Typography variant="caption" color="text.secondary">
//                 {formatDate(post.publishedAt || post.createdAt)}
//               </Typography>
//             </Box>
//           </Box>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// // Format date for display
// const formatDate = (dateString) => {
//   if (!dateString) return "";
//   const date = new Date(dateString);
//   const now = new Date();
//   const diffTime = Math.abs(now - date);
//   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
//   if (diffDays <= 1) {
//     return "Today";
//   } else if (diffDays <= 2) {
//     return "Yesterday";
//   } else if (diffDays <= 7) {
//     return `${diffDays} days ago`;
//   } else {
//     return date.toLocaleDateString(undefined, { 
//       year: 'numeric', 
//       month: 'short', 
//       day: 'numeric' 
//     });
//   }
// };

// // Dialog to show users who liked a post
// const LikesDialog = () => {
//   const users = likeUsers[currentLikeDialogPostId] || [];
//   const isLoading = likesLoading[currentLikeDialogPostId] || false;
  
//   return (
//     <Dialog
//       open={showLikesDialog}
//       onClose={handleCloseLikesDialog}
//       fullWidth
//       maxWidth="xs"
//     >
//       <DialogTitle>Liked by</DialogTitle>
//       <DialogContent dividers>
//         {isLoading ? (
//           <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
//             <CircularProgress size={24} />
//           </Box>
//         ) : users.length > 0 ? (
//           <List>
//             {users.map((user, index) => (
//               <ListItem key={index}>
//                 <ListItemAvatar>
//                   <Avatar src={user.profileImageUrl || "/default-avatar.png"} />
//                 </ListItemAvatar>
//                 <ListItemText primary={user.username} />
//               </ListItem>
//             ))}
//           </List>
//         ) : (
//           <Typography variant="body2" sx={{ p: 2, textAlign: 'center' }}>
//             No likes yet
//           </Typography>
//         )}
//       </DialogContent>
//     </Dialog>
//   );
// };

// if (selectedBlogForView) {
//   return (
//     <Box>
//       <Button 
//         variant="contained" 
//         onClick={handleBackToExplore}
//         startIcon={<ArrowBack />}
//         sx={{ 
//           position: 'fixed',
//           top: theme.spacing(10),
//           right: theme.spacing(0),
//           zIndex: theme.zIndex.modal + 1,
//           px: 4,
//           boxShadow: 3,
//           '&:hover': {
//             boxShadow: 6,
//           },
//           [theme.breakpoints.down('sm')]: {
//             top: theme.spacing(1),
//             right: theme.spacing(1),
//             px: 2,
//             fontSize: '0.875rem'
//           }
//         }}
//       >
//         Back to Explore
//       </Button>
//       <Box sx={{ mt: { xs: 6, sm: 8 } }}>
//         <BlogView blogData={selectedBlogForView} />
//       </Box>
//     </Box>
//   );
// }

// return (
//   <Container maxWidth="xl" sx={{ py: 8 }}>
//     <Navbar/>
//     {/* Header Section */}
//     <Paper 
//       elevation={0}
//       sx={{
//         p: 3,
//         mb: 4,
//         borderRadius: 2,
//         background: theme => `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
//         color: 'white',
//         position: 'relative',
//         overflow: 'hidden'
//       }}
//     >
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 80%)',
//           zIndex: 1
//         }}
//       />
      
//       <Box sx={{ position: 'relative', zIndex: 2 }}>
//         <Typography variant={isMobile ? "h5" : "h4"} component="h1" gutterBottom fontWeight="bold">
//           Explore Amazing Content
//         </Typography>
//         <Typography variant="subtitle1" sx={{ mb: 3, opacity: 0.9 }}>
//           Discover trending topics and insights from our community
//         </Typography>
        
//         <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//           <Paper
//             sx={{
//               p: '2px 4px',
//               display: 'flex',
//               alignItems: 'center',
//               flex: 1,
//               maxWidth: 600,
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
//               placeholder="Search articles, topics, or authors..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </Paper>
//         </Box>
//       </Box>
//     </Paper>

//     {/* Active Writers Section */}
//     <Box sx={{ mb: 4 }}>
//   <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
//     <Typography variant="h6" fontWeight="bold">
//       Active Writers
//     </Typography>
//     <Button color="primary">View All</Button>
//   </Box>
//   <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, overflowX: 'auto', pb: 1 }}>
//     <AvatarGroup max={8} sx={{ '& .MuiAvatar-root': { width: 48, height: 48, border: 2 } }}>
//       {Array.from(
//         new Map(
//           allPosts.map(post => [
//             post.profileImageUrl || '', // key
//             post,                       // value
//           ])
//         ).values()
//       )
//         .slice(0, 8)
//         .map((uniquePost, i) => (
//           <Avatar
//             key={i}
//             src={
//               uniquePost.profileImageUrl ||
//               `https://images.pexels.com/photos/${220453 + i}/pexels-photo-${220453 + i}.jpeg`
//             }
//             sx={{ cursor: 'pointer' }}
//           />
//         ))}
//     </AvatarGroup>
//   </Box>
// </Box>


//     {/* Content Tabs */}
//     <Box sx={{ mb: 4 }}>
//       <Tabs 
//         value={currentTab} 
//         onChange={handleTabChange}
//         variant="scrollable"
//         scrollButtons="auto"
//         sx={{
//           mb: 3,
//           '& .MuiTab-root': {
//             minWidth: 120,
//             fontWeight: 'bold'
//           }
//         }}
//       >
//         <Tab label="Featured" />
//         <Tab label="Trending" icon={<TrendingUp />} iconPosition="start" />
//         <Tab label="Latest" />
//       </Tabs>

//       {isLoading ? (
//         <Grid container spacing={3}>
//           {[...Array(6)].map((_, i) => (
//             <Grid item xs={12} md={6} lg={4} key={i}>
//               <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 2, mb: 2 }} />
//               <Skeleton variant="text" height={32} width="80%" />
//               <Skeleton variant="text" height={20} width="60%" />
//             </Grid>
//           ))}
//         </Grid>
//       ) : (
//         <Grid container spacing={3}>
//           {currentTab === 0 && (
//             <>
//               {filteredPosts.featured.length > 0 && (
//                 <Grid item xs={12} key={filteredPosts.featured[0].id}>
//                   <BlogCard post={filteredPosts.featured[0]} isFeatured />
//                 </Grid>
//               )}
//               {filteredPosts.latest.map(post => (
//                 <Grid item xs={12} md={6} lg={4} key={post.id}>
//                   <BlogCard post={post} />
//                 </Grid>
//               ))}
//             </>
//           )}
//           {currentTab === 1 && (
//             <>
//               {filteredPosts.trending.map(post => (
//                 <Grid item xs={12} md={6} lg={4} key={post.id}>
//                   <BlogCard post={post} />
//                 </Grid>
//               ))}
//               {filteredPosts.trending.length === 0 && (
//                 <Grid item xs={12}>
//                   <Typography variant="h6" textAlign="center">
//                     No trending posts available
//                   </Typography>
//                 </Grid>
//               )}
//             </>
//           )}
//           {currentTab === 2 && (
//             <>
//               {filteredPosts.latest.map(post => (
//                 <Grid item xs={12} md={6} lg={4} key={post.id}>
//                   <BlogCard post={post} />
//                 </Grid>
//               ))}
//               {filteredPosts.latest.length === 0 && (
//                 <Grid item xs={12}>
//                   <Typography variant="h6" textAlign="center">
//                     No posts available
//                   </Typography>
//                 </Grid>
//               )}
//             </>
//           )}
//         </Grid>
//       )}
//     </Box>

//     {/* Likes Dialog */}
//     <LikesDialog />
//   </Container>
// );
// };

// export default ExplorePage;

//==========================================================================

import {
  ArrowBack,
  Bookmark,
  BookmarkBorder,
  ChatBubbleOutline,
  Close,
  Delete,
  Edit,
  Favorite,
  FavoriteBorder,
  LocalFireDepartment,
  MoreVert,
  Reply,
  Search,
  Send,
  TrendingUp
} from '@mui/icons-material';
import {
  Avatar,
  AvatarGroup,
  Badge,
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
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Skeleton,
  Tab,
  Tabs,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';
import { useEffect, useRef, useState } from 'react';
import BlogView from './BlogView';
import Navbar from './Navbar';

const ExplorePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTab, setCurrentTab] = useState(0);
  const [savedPosts, setSavedPosts] = useState(new Set());
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);

  // Current user info (only email available from session storage)
  const currentUser = {
    email: sessionStorage.getItem('userEmail') || 'user@example.com'
  };

  // State for storing blog posts
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState({
    trending: [],
    featured: [],
    latest: []
  });

  // State for like information
  const [likesCount, setLikesCount] = useState({});
  const [likeUsers, setLikeUsers] = useState({});
  const [likesLoading, setLikesLoading] = useState({});
  const [showLikesDialog, setShowLikesDialog] = useState(false);
  const [currentLikeDialogPostId, setCurrentLikeDialogPostId] = useState(null);

  // State for popup blog view
  const [selectedBlogForView, setSelectedBlogForView] = useState(null);
  const [blogLoading, setBlogLoading] = useState(false);

  // Comment system states
  const [comments, setComments] = useState({});
  const [commentCounts, setCommentCounts] = useState({}); // New state for comment counts
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [editingComment, setEditingComment] = useState(null);
  const [editCommentContent, setEditCommentContent] = useState('');
  const [commentMenuAnchor, setCommentMenuAnchor] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const commentInputRef = useRef(null);

  // API axios instance
  const api = axios.create({
    baseURL: 'https://localhost:7163',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // Fetch posts from backend API
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await api.get('/api/Post/published');
        const data = response.data;
        setAllPosts(data);
        processPostsForDisplay(data);

        // Fetch likes and comments for all posts
        await Promise.all(data.map(post => (
          Promise.all([
            fetchLikesCount(post.id),
            checkIfUserLiked(post.id),
            fetchComments(post.id)
          ])
        )));
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Process and categorize posts for display
  const processPostsForDisplay = (posts) => {
    if (!posts || posts.length === 0) return;

    const sortedByDate = [...posts].sort((a, b) =>
      new Date(b.publishedAt || b.createdAt) - new Date(a.publishedAt || a.createdAt)
    );

    const trending = sortedByDate.slice(0, Math.min(4, sortedByDate.length)).map(post => ({
      ...post,
      trending: true
    }));

    const featuredPost = sortedByDate.find((_, index) => index % 3 === 0);
    const featured = featuredPost ? [{ ...featuredPost, featured: true }] : [];

    const latest = sortedByDate
      .filter(post => !featured.length || post.id !== featured[0].id)
      .slice(0, 6);

    setFilteredPosts({
      trending,
      featured,
      latest
    });
  };

  // Filter posts when search query changes
  useEffect(() => {
    if (!allPosts.length) return;

    const filterPosts = () => {
      if (!searchQuery.trim()) {
        processPostsForDisplay(allPosts);
        return;
      }

      const query = searchQuery.toLowerCase();
      const filtered = allPosts.filter(post =>
        post.title.toLowerCase().includes(query) ||
        (post.category && post.category.toLowerCase().includes(query)) ||
        (post.tags && post.tags.some(tag => tag.toLowerCase().includes(query)))
      );

      processPostsForDisplay(filtered);
    };

    filterPosts();
  }, [searchQuery, allPosts]);

  const handleTabChange = (event, newValue) => {
    setIsLoading(true);
    setCurrentTab(newValue);
    setTimeout(() => setIsLoading(false), 500);
  };

  const handleSaveToggle = (postId) => {
    setSavedPosts(prev => {
      const newSaved = new Set(prev);
      if (newSaved.has(postId)) {
        newSaved.delete(postId);
      } else {
        newSaved.add(postId);
      }
      return newSaved;
    });
  };

  // Like functionality
  const fetchLikesCount = async (postId) => {
    try {
      const response = await api.get(`/api/Likes/${postId}/count`);
      setLikesCount(prev => ({
        ...prev,
        [postId]: response.data.likes
      }));
    } catch (error) {
      console.error(`Error fetching likes count for post ${postId}:`, error);
    }
  };

  const fetchLikeUsers = async (postId) => {
    setLikesLoading(prev => ({ ...prev, [postId]: true }));
    try {
      const response = await api.get(`/api/Likes/${postId}/users`);
      setLikeUsers(prev => ({
        ...prev,
        [postId]: response.data
      }));
    } catch (error) {
      console.error(`Error fetching like users for post ${postId}:`, error);
    } finally {
      setLikesLoading(prev => ({ ...prev, [postId]: false }));
    }
  };

  const checkIfUserLiked = async (postId) => {
    try {
      const encodedEmail = encodeURIComponent(currentUser.email);
      const response = await api.get(`/api/Likes/${postId}/has-liked/${encodedEmail}`);

      setLikedPosts(prev => {
        const newLiked = new Set(prev);
        if (response.data.liked) {
          newLiked.add(postId);
        } else {
          newLiked.delete(postId);
        }
        return newLiked;
      });

      return response.data.liked;
    } catch (error) {
      console.error(`Error checking if user liked post ${postId}:`, error);
      return false;
    }
  };

  const handleLikeToggle = async (postId) => {
    const wasLiked = likedPosts.has(postId);

    setLikedPosts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(postId)) {
        newLiked.delete(postId);
      } else {
        newLiked.add(postId);
      }
      return newLiked;
    });

    setLikesCount(prev => ({
      ...prev,
      [postId]: (prev[postId] || 0) + (wasLiked ? -1 : 1)
    }));

    try {
      if (wasLiked) {
        await api.delete('/api/Likes/unlike', {
          headers: {
            'Content-Type': 'application/json'
          },
          data: JSON.stringify({
            postId: postId,
            userEmail: currentUser.email
          })
        });
      } else {
        await api.post('/api/Likes/like', {
          postId: postId,
          userEmail: currentUser.email
        });
      }

      fetchLikesCount(postId);
    } catch (error) {
      console.error('Error toggling like:', error);

      setLikedPosts(prev => {
        const newLiked = new Set(prev);
        if (wasLiked) {
          newLiked.add(postId);
        } else {
          newLiked.delete(postId);
        }
        return newLiked;
      });

      setLikesCount(prev => ({
        ...prev,
        [postId]: prev[postId] + (wasLiked ? 1 : -1)
      }));
    }
  };

  const handleShowLikeUsers = (postId, event) => {
    event.stopPropagation();
    setCurrentLikeDialogPostId(postId);
    fetchLikeUsers(postId);
    setShowLikesDialog(true);
  };

  const handleCloseLikesDialog = () => {
    setShowLikesDialog(false);
    setCurrentLikeDialogPostId(null);
  };

  const handlePostClick = async (postId) => {
    setBlogLoading(true);

    const existingPost = allPosts.find(post => post.id === postId);
    if (existingPost) {
      setSelectedBlogForView(existingPost);
      fetchComments(existingPost.id);
      setBlogLoading(false);
      return;
    }

    try {
      const response = await api.get(`/api/Post/${postId}`);
      setSelectedBlogForView(response.data);
      fetchComments(response.data.id);
    } catch (error) {
      console.error('Error fetching blog post:', error);
    } finally {
      setBlogLoading(false);
    }
  };

  const handleBackToExplore = () => {
    setSelectedBlogForView(null);
  };

  // Comment functionality
  const fetchComments = async (postId) => {
    try {
      const response = await api.get(`/api/comments/post/${postId}/nested`);
      const postComments = response.data;
      setComments(prev => ({
        ...prev,
        [postId]: postComments
      }));
      // Calculate comment count including replies
      const commentCount = postComments.reduce((count, comment) => {
        return count + 1 + (comment.replies ? comment.replies.length : 0);
      }, 0);
      setCommentCounts(prev => ({
        ...prev,
        [postId]: commentCount
      }));
    } catch (error) {
      console.error(`Error fetching comments for post ${postId}:`, error);
      setCommentCounts(prev => ({
        ...prev,
        [postId]: 0
      }));
    }
  };

  const handleAddComment = async (postId) => {
    if (!newComment.trim()) return;

    try {
      const response = await api.post('/api/comments/add', {
        postId: postId,
        userEmail: currentUser.email,
        content: newComment,
        parentId: replyingTo || null
      });

      // Refresh comments and comment count
      await fetchComments(postId);

      // Reset comment input
      setNewComment('');
      setReplyingTo(null);
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleEditComment = async (postId, commentId) => {
    if (!editCommentContent.trim()) return;

    try {
      await api.post('/api/comments/edit', {
        id: commentId,
        content: editCommentContent,
        userEmail: currentUser.email
      });

      // Refresh comments and comment count
      await fetchComments(postId);
      setEditingComment(null);
      setEditCommentContent('');
    } catch (error) {
      console.error('Error editing comment:', error);
    }
  };

  const handleDeleteComment = async () => {
    if (!commentToDelete) return;

    try {
      const encodedEmail = encodeURIComponent(currentUser.email);
      await api.delete(`/api/comments/${commentToDelete}?userEmail=${encodedEmail}`);

      // Refresh comments and comment count for the post
      if (selectedBlogForView) {
        await fetchComments(selectedBlogForView.id);
      }

      setOpenDeleteDialog(false);
      setCommentToDelete(null);
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const handleCommentKeyPress = (e, postId) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAddComment(postId);
    }
  };

  const handleEditKeyPress = (e, postId, commentId) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleEditComment(postId, commentId);
    }
  };

  // Comment component
  const Comment = ({ comment, postId, depth = 0 }) => {
    const [showReplies, setShowReplies] = useState(false);
    const [isReplying, setIsReplying] = useState(false);
    const [menuOpen, setMenuOpen] = useState(null);

    const handleMenuOpen = (event) => {
      event.stopPropagation();
      setMenuOpen(event.currentTarget);
    };

    const handleMenuClose = () => {
      setMenuOpen(null);
    };

    const handleReplyClick = () => {
      setIsReplying(true);
      setReplyingTo(comment.id);
      setTimeout(() => {
        commentInputRef.current?.focus();
      }, 0);
    };

    const handleEditClick = () => {
      setEditingComment(comment.id);
      setEditCommentContent(comment.content);
      handleMenuClose();
    };

    const handleDeleteClick = () => {
      setCommentToDelete(comment.id);
      setOpenDeleteDialog(true);
      handleMenuClose();
    };

    const toggleReplies = () => {
      setShowReplies(!showReplies);
    };

    return (
      <Box sx={{
        mb: 2,
        pl: depth > 0 ? 4 : 0,
        borderLeft: depth > 0 ? `1px solid ${theme.palette.divider}` : 'none'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
          <Avatar
            src={comment.profileImageUrl || '/default-avatar.png'}
            sx={{ width: 32, height: 32, mr: 2 }}
          />
          <Box sx={{ flex: 1 }}>
            <Box sx={{
              backgroundColor: theme.palette.mode === 'dark' ?
                theme.palette.grey[800] : theme.palette.grey[100],
              borderRadius: '18px',
              p: 1.5,
              position: 'relative'
            }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                {comment.username}
              </Typography>
              {editingComment === comment.id ? (
                <TextField
                  fullWidth
                  multiline
                  value={editCommentContent}
                  onChange={(e) => setEditCommentContent(e.target.value)}
                  onKeyPress={(e) => handleEditKeyPress(e, postId, comment.id)}
                  sx={{ mt: 1 }}
                  autoFocus
                />
              ) : (
                <Typography variant="body2" sx={{ mt: 0.5 }}>
                  {comment.content}
                </Typography>
              )}
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
                {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                {comment.updatedAt && ' (edited)'}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5, ml: 1 }}>
              <Button
                size="small"
                startIcon={<Reply fontSize="small" />}
                onClick={handleReplyClick}
                sx={{ minWidth: 0, mr: 1 }}
              >
                Reply
              </Button>

              {comment.replies && comment.replies.length > 0 && (
                <Button
                  size="small"
                  onClick={toggleReplies}
                  sx={{ minWidth: 0 }}
                >
                  {showReplies ? 'Hide replies' : `${comment.replies.length} replies`}
                </Button>
              )}

              {comment.userEmail === currentUser.email && (
                <>
                  <IconButton
                    size="small"
                    onClick={handleMenuOpen}
                    sx={{ ml: 'auto' }}
                  >
                    <MoreVert fontSize="small" />
                  </IconButton>
                  <Menu
                    anchorEl={menuOpen}
                    open={Boolean(menuOpen)}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    <MenuItem onClick={handleEditClick}>
                      <Edit fontSize="small" sx={{ mr: 1 }} /> Edit
                    </MenuItem>
                    <MenuItem onClick={handleDeleteClick}>
                      <Delete fontSize="small" sx={{ mr: 1 }} /> Delete
                    </MenuItem>
                  </Menu>
                </>
              )}
            </Box>

            {isReplying && replyingTo === comment.id && (
              <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                <Avatar
                  src={currentUser.profileImageUrl || '/default-avatar.png'}
                  sx={{ width: 32, height: 32, mr: 2 }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  placeholder={`Reply to ${comment.username}...`}
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  onKeyPress={(e) => handleCommentKeyPress(e, postId)}
                  inputRef={commentInputRef}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() => handleAddComment(postId)}
                        disabled={!newComment.trim()}
                      >
                        <Send />
                      </IconButton>
                    ),
                  }}
                />
              </Box>
            )}

            {editingComment === comment.id && (
              <Box sx={{ mt: 1, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => setEditingComment(null)}
                >
                  Cancel
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => handleEditComment(postId, comment.id)}
                  disabled={!editCommentContent.trim()}
                >
                  Save
                </Button>
              </Box>
            )}
          </Box>
        </Box>

        {showReplies && comment.replies && comment.replies.length > 0 && (
          <Box sx={{ mt: 2 }}>
            {comment.replies.map(reply => (
              <Comment
                key={reply.id}
                comment={reply}
                postId={postId}
                depth={depth + 1}
              />
            ))}
          </Box>
        )}
      </Box>
    );
  };

  // Blog card component
  const BlogCard = ({ post, isFeatured = false }) => {
    const postCommentCount = commentCounts[post.id] || 0;

    return (
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'visible',
          cursor: 'pointer',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: theme.shadows[8]
          }
        }}
      >
        {post.trending && (
          <Chip
            icon={<LocalFireDepartment />}
            label="Trending"
            color="error"
            sx={{
              position: 'absolute',
              top: -12,
              right: 16,
              zIndex: 1
            }}
          />
        )}
        <CardMedia
          component="img"
          height={isFeatured ? "300" : "200"}
          image={post.coverImageUrl || "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg"}
          alt={post.title}
          sx={{
            objectFit: 'cover',
            filter: 'brightness(0.9)'
          }}
          onClick={() => handlePostClick(post.id)}
        />
        <CardContent sx={{ flex: 1, p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Chip
              label={post.category || "General"}
              color="primary"
              size="small"
              sx={{ borderRadius: '4px', textTransform: 'capitalize' }}
            />
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Tooltip title={likedPosts.has(post.id) ? "Unlike" : "Like"}>
                <Badge
                  badgeContent={likesCount[post.id] > 0 ? likesCount[post.id] : null}
                  color="error"
                  overlap="circular"
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  onClick={(e) => likesCount[post.id] > 0 && handleShowLikeUsers(post.id, e)}
                  sx={{ cursor: likesCount[post.id] > 0 ? 'pointer' : 'default' }}
                >
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLikeToggle(post.id);
                    }}
                    color={likedPosts.has(post.id) ? 'error' : 'default'}
                  >
                    {likedPosts.has(post.id) ? <Favorite /> : <FavoriteBorder />}
                  </IconButton>
                </Badge>
              </Tooltip>

              <Tooltip title="View comments">
                <Badge
                  badgeContent={postCommentCount > 0 ? postCommentCount : null}
                  color="primary"
                  overlap="circular"
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePostClick(post.id);
                    }}
                  >
                    <ChatBubbleOutline />
                  </IconButton>
                </Badge>
              </Tooltip>

              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSaveToggle(post.id);
                }}
                color={savedPosts.has(post.id) ? 'primary' : 'default'}
              >
                {savedPosts.has(post.id) ? <Bookmark /> : <BookmarkBorder />}
              </IconButton>
            </Box>
          </Box>

          <Typography
            variant={isFeatured ? "h5" : "h6"}
            gutterBottom
            sx={{
              fontWeight: 'bold',
              lineHeight: 1.3,
              minHeight: isFeatured ? '4rem' : '3.6rem',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
            onClick={() => handlePostClick(post.id)}
          >
            {post.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            paragraph
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              minHeight: '4.5em'
            }}
            onClick={() => handlePostClick(post.id)}
          >
            {post.excerpt || "Read this interesting article..."}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
            {post.tags && post.tags.slice(0, 3).map(tag => (
              <Chip
                key={tag}
                label={tag.replace('#', '')}
                size="small"
                variant="outlined"
                sx={{ borderRadius: '4px' }}
              />
            ))}
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Avatar
                src={post.profileImageUrl || "/default-avatar.png"}
                sx={{ width: 32, height: 32 }}
              />
              <Box>
                <Typography variant="subtitle2">
                  {post.fullName ? post.fullName.trim() : post.username}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {formatDistanceToNow(new Date(post.publishedAt || post.createdAt), { addSuffix: true })}
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  };

  // Blog view with comments
  if (selectedBlogForView) {
    const postComments = comments[selectedBlogForView.id] || [];
    const postCommentCount = commentCounts[selectedBlogForView.id] || 0;

    return (
      <Box>
        <Button
          variant="contained"
          onClick={handleBackToExplore}
          startIcon={<ArrowBack />}
          sx={{
            position: 'fixed',
            top: theme.spacing(10),
            right: theme.spacing(0),
            zIndex: theme.zIndex.modal + 1,
            px: 4,
            boxShadow: 3,
            '&:hover': {
              boxShadow: 6,
            },
            [theme.breakpoints.down('sm')]: {
              top: theme.spacing(1),
              right: theme.spacing(1),
              px: 2,
              fontSize: '0.875rem'
            }
          }}
        >
          Back to Explore
        </Button>
        <Box sx={{ mt: { xs: 6, sm: 8 } }}>
          <BlogView blogData={selectedBlogForView} />

          {/* Comments section for blog view */}
          <Container maxWidth="md" sx={{ py: 4 }}>
            <Paper elevation={0} sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                Comments ({postCommentCount})
              </Typography>

              {/* Comment list */}
              <Box sx={{ maxHeight: 500, overflowY: 'auto', mb: 3 }}>
                {postComments.length > 0 ? (
                  postComments.map(comment => (
                    <Comment key={comment.id} comment={comment} postId={selectedBlogForView.id} />
                  ))
                ) : (
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
                    No comments yet. Be the first to comment!
                  </Typography>
                )}
              </Box>

              {/* Add comment */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  src={currentUser.profileImageUrl || '/default-avatar.png'}
                  sx={{ width: 48, height: 48, mr: 2 }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  size="medium"
                  placeholder={replyingTo ? "Write a reply..." : "Add a comment..."}
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  onKeyPress={(e) => handleCommentKeyPress(e, selectedBlogForView.id)}
                  inputRef={commentInputRef}
                  multiline
                  maxRows={4}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() => handleAddComment(selectedBlogForView.id)}
                        disabled={!newComment.trim()}
                        sx={{ alignSelf: 'flex-end' }}
                      >
                        <Send />
                      </IconButton>
                    ),
                  }}
                />
              </Box>

              {replyingTo && (
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <Typography variant="caption" color="text.secondary" sx={{ mr: 1 }}>
                    Replying to {postComments.find(c => c.id === replyingTo)?.username}
                  </Typography>
                  <IconButton size="small" onClick={() => setReplyingTo(null)}>
                    <Close fontSize="small" />
                  </IconButton>
                </Box>
              )}
            </Paper>
          </Container>
          
        </Box>
        {/* Delete comment dialog */}
      <Dialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>Delete Comment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this comment? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)}>Cancel</Button>
          <Button
            onClick={handleDeleteComment}
            color="error"
            variant="contained"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      </Box>
    );
  }

  // Main explore page
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
          background: theme => `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 80%)',
            zIndex: 1
          }}
        />
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          <Typography variant={isMobile ? "h5" : "h4"} component="h1" gutterBottom fontWeight="bold">
            Explore Amazing Content
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 3, opacity: 0.9 }}>
            Discover trending topics and insights from our community
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Paper
              sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                flex: 1,
                maxWidth: 600,
                backgroundColor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              <IconButton sx={{ p: '10px', color: 'white' }}>
                <Search />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1, color: 'white', '::placeholder': { color: 'rgba(255,255,255,0.7)' } }}
                placeholder="Search articles, topics, or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Paper>
          </Box>
        </Box>
      </Paper>

      {/* Active Writers Section */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            Active Writers
          </Typography>
          <Button color="primary">View All</Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, overflowX: 'auto', pb: 1 }}>
          <AvatarGroup max={8} sx={{ '& .MuiAvatar-root': { width: 48, height: 48, border: 2 } }}>
            {Array.from(
              new Map(
                allPosts.map(post => [
                  post.profileImageUrl || '',
                  post,
                ])
              ).values()
            )
              .slice(0, 8)
              .map((uniquePost, i) => (
                <Avatar
                  key={i}
                  src={
                    uniquePost.profileImageUrl ||
                    `https://images.pexels.com/photos/${220453 + i}/pexels-photo-${220453 + i}.jpeg`
                  }
                  sx={{ cursor: 'pointer' }}
                />
              ))}
          </AvatarGroup>
        </Box>
      </Box>

      {/* Content Tabs */}
      <Box sx={{ mb: 4 }}>
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            mb: 3,
            '& .MuiTab-root': {
              minWidth: 120,
              fontWeight: 'bold'
            }
          }}
        >
          <Tab label="Featured" />
          <Tab label="Trending" icon={<TrendingUp />} iconPosition="start" />
          <Tab label="Latest" />
        </Tabs>

        {isLoading ? (
          <Grid container spacing={3}>
            {[...Array(6)].map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <Skeleton variant="rectangular" height={200} />
                  <CardContent>
                    <Skeleton variant="text" width="60%" />
                    <Skeleton variant="text" width="40%" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Box sx={{ display: 'flex', mt: 2 }}>
                      <Skeleton variant="circular" width={32} height={32} />
                      <Box sx={{ ml: 1 }}>
                        <Skeleton variant="text" width={80} />
                        <Skeleton variant="text" width={60} />
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <>
            {currentTab === 0 && (
              <Grid container spacing={3}>
                {filteredPosts.featured.length > 0 ? (
                  <Grid item xs={12}>
                    <BlogCard post={filteredPosts.featured[0]} isFeatured />
                  </Grid>
                ) : (
                  <Grid item xs={12}>
                    <Typography variant="body1" color="text.secondary" textAlign="center" py={4}>
                      No featured posts found
                    </Typography>
                  </Grid>
                )}
                {filteredPosts.latest.slice(0, 6).map((post, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <BlogCard post={post} />
                  </Grid>
                ))}
              </Grid>
            )}

            {currentTab === 1 && (
              <Grid container spacing={3}>
                {filteredPosts.trending.length > 0 ? (
                  filteredPosts.trending.map((post, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <BlogCard post={post} />
                    </Grid>
                  ))
                ) : (
                  <Grid item xs={12}>
                    <Typography variant="body1" color="text.secondary" textAlign="center" py={4}>
                      No trending posts found
                    </Typography>
                  </Grid>
                )}
              </Grid>
            )}

            {currentTab === 2 && (
              <Grid container spacing={3}>
                {filteredPosts.latest.length > 0 ? (
                  filteredPosts.latest.map((post, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <BlogCard post={post} />
                    </Grid>
                  ))
                ) : (
                  <Grid item xs={12}>
                    <Typography variant="body1" color="text.secondary" textAlign="center" py={4}>
                      No latest posts found
                    </Typography>
                  </Grid>
                )}
              </Grid>
            )}
          </>
        )}
      </Box>

      {/* Likes Dialog */}
      <Dialog open={showLikesDialog} onClose={handleCloseLikesDialog}>
        <DialogTitle>
          {likesLoading[currentLikeDialogPostId] ? (
            <CircularProgress size={24} />
          ) : (
            `Liked by (${likeUsers[currentLikeDialogPostId]?.length || 0})`
          )}
        </DialogTitle>
        <DialogContent>
          {likesLoading[currentLikeDialogPostId] ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
              <CircularProgress />
            </Box>
          ) : (
            <List sx={{ pt: 0 }}>
              {likeUsers[currentLikeDialogPostId]?.length > 0 ? (
                likeUsers[currentLikeDialogPostId].map((user, index) => (
                  <ListItem key={index}>
                    <ListItemAvatar>
                      <Avatar src={user.profileImageUrl || '/default-avatar.png'} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={user.fullName || user.username}
                      secondary={user.email}
                    />
                  </ListItem>
                ))
              ) : (
                <Typography variant="body2" color="text.secondary" sx={{ p: 2, textAlign: 'center' }}>
                  No likes yet
                </Typography>
              )}
            </List>
          )}
        </DialogContent>
      </Dialog>

    </Container>
  );
};

export default ExplorePage;