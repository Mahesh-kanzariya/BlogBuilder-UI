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
  Grid,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const BlogBuilderHome = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [likedBlogs, setLikedBlogs] = useState({});
  const [savedBlogs, setSavedBlogs] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [statsVisible, setStatsVisible] = useState(false);
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

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

  const categories = ['All', ...new Set(featuredBlogs.map(blog => blog.category))];

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

  const filteredBlogs = selectedCategory === 'All'
    ? featuredBlogs
    : featuredBlogs.filter(blog => blog.category === selectedCategory);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', mt: 6 }}>
      <Navbar />
      {/* Hero Section with Parallax */}
      <motion.div
        style={{ y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
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
              opacity: 0.2,
              transition: 'opacity 0.3s ease'
            }
          }}
        >
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontWeight: 800,
                      mb: 2,
                      fontSize: { xs: '2.5rem', md: '4rem' },
                      textShadow: '2px 2px 8px rgba(0,0,0,0.3)'
                    }}
                  >
                    Share Your Story
                    <br />
                    Connect with the World
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 4, maxWidth: 600, fontWeight: 300 }}>
                    Join our vibrant community of storytellers, thought leaders, and creative minds.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="contained"
                        size="large"
                        onClick={() => navigate('/create-blog')}
                        startIcon={<CreateIcon />}
                        sx={{
                          bgcolor: 'white',
                          color: 'primary.main',
                          px: 4,
                          py: 1.5,
                          borderRadius: 2,
                          boxShadow: theme.shadows[4],
                          '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
                        }}
                      >
                        Start Writing
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outlined"
                        size="large"
                        onClick={() => navigate('/explore')}
                        startIcon={<ExploreIcon />}
                        sx={{
                          borderColor: 'white',
                          color: 'white',
                          px: 4,
                          py: 1.5,
                          borderRadius: 2,
                          '&:hover': {
                            borderColor: 'white',
                            bgcolor: 'rgba(255,255,255,0.1)'
                          }
                        }}
                      >
                        Explore Stories
                      </Button>
                    </motion.div>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </motion.div>

      {/* Category Filter Section */}
      <Container sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap', mb: 0 }}>
          {categories.map(category => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Chip
                label={category}
                clickable
                color={selectedCategory === category ? 'primary' : 'default'}
                onClick={() => setSelectedCategory(category)}
                sx={{
                  fontWeight: 500,
                  px: 1,
                  '&:hover': {
                    bgcolor: selectedCategory === category ? theme.palette.primary.dark : theme.palette.grey[200]
                  }
                }}
              />
            </motion.div>
          ))}
        </Box>
      </Container>

      {/* Featured Blogs Section */}
      <Container sx={{ py: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
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
            {filteredBlogs.map((blog, index) => (
              <Grid item xs={12} sm={6} md={4} key={blog.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      overflow: 'hidden',
                      boxShadow: theme.shadows[4],
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: theme.shadows[10]
                      }
                    }}
                  >
                    <CardActionArea onClick={() => navigate(`/blog/${blog.id}`)}>
                      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                        <CardMedia
                          component="img"
                          height="240"
                          image={blog.image}
                          alt={blog.title}
                        />
                      </motion.div>
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
                          <motion.div whileTap={{ scale: 0.8 }}>
                            <IconButton
                              onClick={() => toggleLike(blog.id)}
                              sx={{
                                color: likedBlogs[blog.id] ? 'error.main' : 'inherit'
                              }}
                            >
                              {likedBlogs[blog.id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                            </IconButton>
                          </motion.div>
                        </Tooltip>
                        <Tooltip title="Save">
                          <motion.div whileTap={{ scale: 0.8 }}>
                            <IconButton
                              onClick={() => toggleSave(blog.id)}
                              sx={{
                                color: savedBlogs[blog.id] ? 'primary.main' : 'inherit'
                              }}
                            >
                              {savedBlogs[blog.id] ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                            </IconButton>
                          </motion.div>
                        </Tooltip>
                        <Tooltip title="Share">
                          <motion.div whileTap={{ scale: 0.8 }}>
                            <IconButton>
                              <ShareIcon />
                            </IconButton>
                          </motion.div>
                        </Tooltip>
                      </Box>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: statsVisible ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <Container sx={{ position: 'relative', zIndex: 1 }}>
            <Grid container spacing={4}>
              {statistics.map((stat, index) => (
                <Grid item xs={6} md={3} key={stat.label}>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Box
                      sx={{
                        textAlign: 'center',
                        p: 3,
                        borderRadius: 4,
                        bgcolor: 'background.paper',
                        boxShadow: theme.shadows[4],
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: theme.shadows[8]
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
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </motion.div>
      </Box>

      <Footer />
    </Box>
  );
};

export default BlogBuilderHome;