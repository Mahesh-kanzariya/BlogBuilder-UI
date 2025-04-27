import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';

const BlogHeader = () => {
  const theme = useTheme();

  return (
    <Box 
      sx={{ 
        backgroundColor: theme.palette.primary.main, 
        color: 'white',
        p: 4,
        borderRadius: 2,
        mb: 4,
        mt: 4,
        boxShadow: 3,
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: 4
        }
      }}
    >
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.05,
        background: 'url("https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundSize: 'cover',
        zIndex: 0
      }} />
      
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h3" sx={{ 
          fontWeight: 'bold',
          textShadow: '1px 1px 3px rgba(0,0,0,0.3)'
        }}>
          Create New Blog Post
        </Typography>
        <Typography variant="subtitle1" sx={{ 
          mt: 1, 
          opacity: 0.9,
          maxWidth: '600px'
        }}>
          Share your ideas with the world. Craft your content below and preview before publishing.
        </Typography>
      </Box>
    </Box>
  );
};

export default BlogHeader;