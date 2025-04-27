import {
  BookmarkBorder as BookmarkBorderIcon,
  Bookmark as BookmarkIcon,
  Create as CreateIcon,
  Explore as ExploreIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon
} from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Fade,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const BlogBuilderHome = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [likedBlogs, setLikedBlogs] = useState({});
  const [savedBlogs, setSavedBlogs] = useState({});
  const [statsVisible, setStatsVisible] = useState(false);
  const navigate = useNavigate();

  const featuredBlogs = [
    {
      id: 1,
      title: "The Art of Mindful Living",
      description: "Discover how mindfulness can transform your daily life and boost your mental well-being.",
      image: "https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg",
      author: "Sarah Chen",
      date: "June 15, 2025",
      readTime: "7 min",
      likes: 1243,
      category: "Wellness"
    },
    {
      id: 2,
      title: "Future of AI in 2025",
      description: "Exploring groundbreaking AI developments and their impact on society.",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
      author: "James Wilson",
      date: "June 14, 2025",
      readTime: "8 min",
      likes: 892,
      category: "Technology"
    },
    {
      id: 3,
      title: "Sustainable Living Guide",
      description: "Practical tips for reducing your carbon footprint and living eco-friendly.",
      image: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg",
      author: "Emma Green",
      date: "June 13, 2025",
      readTime: "6 min",
      likes: 567,
      category: "Lifestyle"
    }
  ];

  const statistics = [
    { label: "Active Writers", value: "50K", suffix: "+" },
    { label: "Monthly Readers", value: "2M", suffix: "+" },
    { label: "Articles Published", value: "100K", suffix: "+" },
    { label: "Global Community", value: "180", suffix: " Countries" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const statsElement = document.getElementById('statistics');
      if (statsElement) {
        const rect = statsElement.getBoundingClientRect();
        setStatsVisible(rect.top < window.innerHeight - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLike = (id) => {
    setLikedBlogs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSave = (id) => {
    setSavedBlogs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default',mt:6 }}>
      <Navbar/>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '90vh',
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Fade in timeout={1000}>
                <Box>
                  <Typography variant="h1" 
                    sx={{ 
                      fontWeight: 800, 
                      mb: 2,
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                      textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                    }}
                  >
                    Share Your Story
                    <br />
                    Connect with the World
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 4, maxWidth: 600 }}>
                    Join our vibrant community of storytellers, thought leaders, and creative minds.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => navigate('/create-blog')}
                      startIcon={<CreateIcon />}
                      sx={{
                        bgcolor: 'white',
                        color: 'primary.main',
                        '&:hover': {
                          bgcolor: 'rgba(255,255,255,0.9)',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      Start Writing
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() => navigate('/explore')}
                      startIcon={<ExploreIcon />}
                      sx={{
                        borderColor: 'white',
                        color: 'white',
                        '&:hover': {
                          borderColor: 'white',
                          bgcolor: 'rgba(255,255,255,0.1)',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      Explore Stories
                    </Button>
                  </Box>
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Blogs Section */}
      <Container sx={{ py: 8 }}>
        <Typography 
          variant="h3" 
          sx={{ 
            textAlign: 'center', 
            mb: 6,
            fontWeight: 700,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Trending Stories
        </Typography>
        <Grid container spacing={4}>
          {featuredBlogs.map((blog) => (
            <Grid item xs={12} sm={6} md={4} key={blog.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: theme.shadows[3],
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[8]
                  }
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="240"
                    image={blog.image}
                    alt={blog.title}
                    sx={{
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)'
                      }
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Chip 
                      label={blog.category}
                      size="small"
                      sx={{ 
                        mb: 2,
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        color: 'white'
                      }}
                    />
                    <Typography gutterBottom variant="h6" component="h2" sx={{ fontWeight: 600 }}>
                      {blog.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {blog.description}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Typography variant="caption" color="text.secondary">
                        {blog.readTime} read
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {blog.likes} likes
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
                <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Tooltip title="Like">
                      <IconButton 
                        onClick={() => toggleLike(blog.id)}
                        sx={{ 
                          color: likedBlogs[blog.id] ? 'error.main' : 'inherit',
                          transition: 'transform 0.2s ease',
                          '&:hover': { transform: 'scale(1.1)' }
                        }}
                      >
                        {likedBlogs[blog.id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Save">
                      <IconButton 
                        onClick={() => toggleSave(blog.id)}
                        sx={{ 
                          color: savedBlogs[blog.id] ? 'primary.main' : 'inherit',
                          transition: 'transform 0.2s ease',
                          '&:hover': { transform: 'scale(1.1)' }
                        }}
                      >
                        {savedBlogs[blog.id] ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Share">
                      <IconButton 
                        sx={{ 
                          transition: 'transform 0.2s ease',
                          '&:hover': { transform: 'scale(1.1)' }
                        }}
                      >
                        <ShareIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Statistics Section */}
      <Box
        id="statistics"
        sx={{
          py: 8,
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}22, ${theme.palette.secondary.main}22)`,
            zIndex: 0
          }
        }}
      >
        <Fade in={statsVisible} timeout={1000}>
          <Container sx={{ position: 'relative', zIndex: 1 }}>
            <Grid container spacing={4}>
              {statistics.map((stat) => (
                <Grid item xs={6} md={3} key={stat.label}>
                  <Box
                    sx={{
                      textAlign: 'center',
                      p: 3,
                      borderRadius: 4,
                      bgcolor: 'background.paper',
                      boxShadow: theme.shadows[3],
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: theme.shadows[6]
                      }
                    }}
                  >
                    <Typography 
                      variant="h3" 
                      sx={{ 
                        fontWeight: 700,
                        mb: 1,
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {stat.value}{stat.suffix}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Fade>
      </Box>

      <Footer />
    </Box>
  );
};

export default BlogBuilderHome;