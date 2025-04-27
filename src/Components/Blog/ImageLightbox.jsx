import { ArrowBack, ArrowForward, Close } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ImageLightbox = ({ open, images, activeIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(activeIndex || 0);
  
  // Update the current index when the activeIndex prop changes
  useEffect(() => {
    if (open) {
      setCurrentIndex(activeIndex);
    }
  }, [activeIndex, open]);
  
  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  
  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!open) return;
      
      if (e.key === 'ArrowRight') {
        handleNext(e);
      } else if (e.key === 'ArrowLeft') {
        handlePrev(e);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, images, onClose]);
  
  if (!open || !images || images.length === 0) return null;
  
  return (
    <Box sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.9)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      animation: 'fadeIn 0.3s ease',
      '@keyframes fadeIn': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 }
      }
    }}>
      <Box sx={{ position: 'relative', width: '80%', height: '80%' }}>
        <img 
          src={images[currentIndex]?.src}
          alt={images[currentIndex]?.alt}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            margin: '0 auto',
            display: 'block',
            transition: 'opacity 0.3s ease',
            animation: 'scaleIn 0.3s ease',
          }}
        />
        
        {images.length > 1 && (
          <>
            <IconButton
              sx={{
                position: 'absolute',
                left: -60,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white',
                fontSize: 40,
                transition: 'all 0.2s ease',
                '&:hover': {
                  background: 'rgba(255,255,255,0.1)',
                  transform: 'translateY(-50%) scale(1.1)'
                }
              }}
              onClick={handlePrev}
            >
              <ArrowBack fontSize="large" />
            </IconButton>
            <IconButton
              sx={{
                position: 'absolute',
                right: -60,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white',
                fontSize: 40,
                transition: 'all 0.2s ease',
                '&:hover': {
                  background: 'rgba(255,255,255,0.1)',
                  transform: 'translateY(-50%) scale(1.1)'
                }
              }}
              onClick={handleNext}
            >
              <ArrowForward fontSize="large" />
            </IconButton>
          </>
        )}
      </Box>
      
      <Typography sx={{ color: 'white', mt: 2 }}>
        {currentIndex + 1} / {images.length}
      </Typography>
      
      <IconButton
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          color: 'white',
          transition: 'all 0.2s ease',
          '&:hover': {
            background: 'rgba(255,255,255,0.1)',
            transform: 'scale(1.1)'
          }
        }}
        onClick={onClose}
      >
        <Close fontSize="large" />
      </IconButton>

      {/* Thumbnail navigation */}
      {images.length > 1 && (
        <Box sx={{
          display: 'flex',
          gap: 1,
          mt: 3,
          px: 2,
          maxWidth: '100%',
          overflowX: 'auto',
          justifyContent: 'center'
        }}>
          {images.map((img, idx) => (
            <Box
              key={img.id || idx}
              onClick={() => setCurrentIndex(idx)}
              sx={{
                width: 60,
                height: 60,
                opacity: idx === currentIndex ? 1 : 0.5,
                border: idx === currentIndex ? '2px solid white' : 'none',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                '&:hover': {
                  opacity: 1,
                  transform: 'scale(1.05)'
                }
              }}
            >
              <img
                src={img.src}
                alt={img.alt || `Thumbnail ${idx + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ImageLightbox;