import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const ImageSlideshow = ({ images, onImageClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplayActive, setAutoplayActive] = useState(false);
  
  useEffect(() => {
    let interval;
    if (autoplayActive && images.length > 1) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [autoplayActive, images.length]);
  
  const handleNext = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % images.length);
  };
  
  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  
  if (!images || images.length === 0) return null;
  
  return (
    <Box 
      sx={{ 
        position: 'relative', 
        width: '100%',
        '&:hover .MuiIconButton-root': {
          opacity: 1
        },
        '&:hover .dot-indicators': {
          opacity: 1
        }
      }}
      onMouseEnter={() => setAutoplayActive(false)}
      onMouseLeave={() => setAutoplayActive(true)}
    >
      <Box
        sx={{ 
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
          cursor: 'pointer',
          height: 0,
          paddingBottom: '56.25%', // 16:9 aspect ratio
        }}
        onClick={() => onImageClick(images, activeIndex)}
      >
        {images.map((img, idx) => (
          <Box
            key={img.id || idx}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: idx === activeIndex ? 1 : 0,
              transition: 'opacity 0.5s ease',
            }}
          >
            <img 
              src={img.src} 
              alt={img.alt}
              style={{ 
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease',
                transform: idx === activeIndex ? 'scale(1)' : 'scale(1.1)'
              }}
            />
          </Box>
        ))}
        
        {images.length > 1 && (
          <>
            <IconButton
              className="MuiIconButton-root"
              sx={{
                position: 'absolute',
                left: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255,255,255,0.7)',
                '&:hover': { 
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  transform: 'translateY(-50%) scale(1.1)'
                },
                opacity: 0,
                transition: 'all 0.3s ease'
              }}
              onClick={handlePrev}
            >
              <ArrowBack fontSize="small" />
            </IconButton>
            <IconButton
              className="MuiIconButton-root"
              sx={{
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255,255,255,0.7)',
                '&:hover': { 
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  transform: 'translateY(-50%) scale(1.1)'
                },
                opacity: 0,
                transition: 'all 0.3s ease'
              }}
              onClick={handleNext}
            >
              <ArrowForward fontSize="small" />
            </IconButton>
            <Box 
              className="dot-indicators"
              sx={{
                position: 'absolute',
                bottom: 8,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: 0.5,
                opacity: 0.7,
                transition: 'opacity 0.3s ease'
              }}
            >
              {images.map((_, i) => (
                <Box
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(i);
                  }}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: i === activeIndex ? 'white' : 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      transform: 'scale(1.2)',
                      backgroundColor: 'white'
                    }
                  }}
                />
              ))}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default ImageSlideshow;