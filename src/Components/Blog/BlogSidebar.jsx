import { Save, Upload } from '@mui/icons-material';
import {
    Box,
    Button,
    Chip,
    FormControl,
    FormControlLabel,
    FormHelperText,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Switch,
    TextField,
    Typography
} from '@mui/material';
import React, { useRef } from 'react';

const BlogSidebar = ({ 
  post, 
  errors, 
  isMobile, 
  onPostChange, 
  onSaveOrPublish, 
  onCoverImageUpload, 
  onTagInput, 
  onRemoveTag,
  categories 
}) => {
  const fileInputRef = useRef(null);

  const handleCoverImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      onCoverImageUpload(e.target.files[0]);
    }
  };

  return (
    <Box sx={{ 
      width: isMobile ? '100%' : 300, 
      ml: isMobile ? 0 : 3,
      transition: 'all 0.3s ease'
    }}>
      {/* Save/Publish Buttons */}
      <Paper sx={{ 
        p: 2, 
        mb: 2, 
        borderRadius: 1, 
        boxShadow: 2,
        transition: 'all 0.3s ease',
        '&:hover': { transform: 'translateY(-3px)', boxShadow: 3 }
      }}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          startIcon={<Save />}
          sx={{ 
            mb: 1,
            transition: 'all 0.2s ease',
            '&:hover': { transform: 'translateY(-2px)' }
          }}
          onClick={() => onSaveOrPublish(false)}
        >
          Save Draft
        </Button>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => onSaveOrPublish(true)}
          sx={{ 
            transition: 'all 0.2s ease',
            '&:hover': { transform: 'translateY(-2px)' }
          }}
        >
          Publish
        </Button>
      </Paper>

      {/* Post Settings */}
      <Paper sx={{ 
        p: 2, 
        mb: 2,
        borderRadius: 1,
        boxShadow: 2
      }}>
        <Typography variant="subtitle2" gutterBottom fontWeight="bold" color="primary">
          Post Settings
        </Typography>

        {/* Category Selector */}
        <FormControl fullWidth sx={{ mb: 2 }} error={errors.category} required>
          <InputLabel>Category</InputLabel>
          <Select
            value={post.category}
            label="Category"
            onChange={(e) => onPostChange('category', e.target.value)}
          >
            {categories.map(category => (
              <MenuItem key={category.value} value={category.value}>
                {category.label}
              </MenuItem>
            ))}
          </Select>
          {errors.category && (
            <FormHelperText>Category is required</FormHelperText>
          )}
        </FormControl>

        {/* Tags Input */}
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Add Tags"
            placeholder="Type and press Enter"
            onKeyDown={onTagInput}
            helperText="Press Enter to add a tag"
            sx={{ mb: 1 }}
          />
          
          {post.tags.length > 0 && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
              {post.tags.map((tag) => (
                <Chip 
                  key={tag} 
                  label={tag} 
                  size="small" 
                  onDelete={() => onRemoveTag(tag)}
                  sx={{ 
                    transition: 'all 0.2s ease',
                    '&:hover': { transform: 'translateY(-2px)' }
                  }}
                />
              ))}
            </Box>
          )}
        </Box>

        {/* Cover Image Uploader */}
        <Box sx={{ mb: 2 }}>
          <Button
            variant="outlined"
            startIcon={<Upload />}
            onClick={handleCoverImageClick}
            fullWidth
            sx={{ 
              transition: 'all 0.2s ease',
              '&:hover': { transform: 'translateY(-2px)' }
            }}
          >
            Upload Cover Image
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept="image/*"
            onChange={handleFileChange}
          />
          
          {post.coverImage && (
            <Box sx={{ 
              mt: 1, 
              textAlign: 'center',
              position: 'relative',
              borderRadius: 1,
              overflow: 'hidden',
              '&:hover::after': {
                content: '"Change"',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }
            }} onClick={handleCoverImageClick}>
              <img 
                src={post.coverImage} 
                alt="Cover Preview" 
                style={{ 
                  width: '100%', 
                  maxHeight: 150, 
                  objectFit: 'cover',
                  borderRadius: 8
                }} 
              />
            </Box>
          )}
        </Box>

        {/* Publication Date */}
        <TextField
          fullWidth
          label="Schedule Publication"
          type="datetime-local"
          value={post.publishDate}
          onChange={(e) => onPostChange('publishDate', e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={{ mb: 2 }}
        />

        {/* Draft Toggle */}
        <FormControlLabel
          control={
            <Switch
              checked={post.isDraft}
              onChange={(e) => onPostChange('isDraft', e.target.checked)}
            />
          }
          label="Save as draft"
        />
      </Paper>

      {/* SEO Settings */}
      <Paper sx={{ 
        p: 2,
        borderRadius: 1,
        boxShadow: 2
      }}>
        <Typography variant="subtitle2" gutterBottom fontWeight="bold" color="primary">
          SEO Settings
        </Typography>
        <TextField
          fullWidth
          label="Meta Description"
          multiline
          rows={3}
          value={post.metaDescription}
          onChange={(e) => onPostChange('metaDescription', e.target.value)}
          helperText={`${post.metaDescription.length}/160 characters`}
          sx={{
            '& .MuiOutlinedInput-root': {
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: 'primary.main',
              },
              '&.Mui-focused': {
                boxShadow: '0 0 0 2px rgba(63, 81, 181, 0.2)',
              },
            },
          }}
        />
      </Paper>
    </Box>
  );
};

export default BlogSidebar;