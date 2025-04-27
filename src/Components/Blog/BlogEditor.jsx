import {
    AddCircleOutline,
    BorderAll,
    Code,
    FormatBold,
    FormatItalic,
    FormatListBulleted,
    FormatQuote,
    FormatUnderlined,
    Image as ImageIcon,
    InsertLink,
    RadioButtonUnchecked,
    Rectangle,
    Title as TitleIcon
} from '@mui/icons-material';
import {
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    FormControl,
    IconButton,
    InputLabel,
    Menu,
    MenuItem,
    Select,
    TextField,
    Tooltip,
    Typography
} from '@mui/material';
import React, { useRef } from 'react';
import { fontFamilies } from '../../Data/blogData';

const BlogEditor = ({ 
  post, 
  formatting, 
  currentContentId,
  errors,
  onContentIdChange,
  onContentChange, 
  onToggleFormatting,
  onFontFamilyChange,
  onAddContentBlock,
  onAddShape,
  onBlockImageUpload,
  onRemoveBlockImage,
  onTitleChange
}) => {
  const blockImageInputRefs = useRef({});
  const [shapeMenuAnchor, setShapeMenuAnchor] = React.useState(null);

  const handleShapeMenuOpen = (event) => {
    setShapeMenuAnchor(event.currentTarget);
  };

  const handleShapeMenuClose = () => {
    setShapeMenuAnchor(null);
  };

  const handleInsertShape = (shape) => {
    handleShapeMenuClose();
    onAddShape(shape);
  };

  const EditorToolbar = () => (
    <Box sx={{
      display: 'flex',
      gap: 1,
      p: 1,
      borderBottom: 1,
      borderColor: 'divider',
      flexWrap: 'wrap',
      alignItems: 'center',
      bgcolor: '#f8f9fa'
    }}>
      <Tooltip title="Bold">
        <IconButton 
          size="small"
          onClick={() => onToggleFormatting('bold')}
          color={formatting.bold ? 'primary' : 'default'}
          sx={{ transition: 'all 0.2s' }}
        >
          <FormatBold />
        </IconButton>
      </Tooltip>
      <Tooltip title="Italic">
        <IconButton 
          size="small"
          onClick={() => onToggleFormatting('italic')}
          color={formatting.italic ? 'primary' : 'default'}
          sx={{ transition: 'all 0.2s' }}
        >
          <FormatItalic />
        </IconButton>
      </Tooltip>
      <Tooltip title="Underline">
        <IconButton 
          size="small"
          onClick={() => onToggleFormatting('underline')}
          color={formatting.underline ? 'primary' : 'default'}
          sx={{ transition: 'all 0.2s' }}
        >
          <FormatUnderlined />
        </IconButton>
      </Tooltip>
      <Divider orientation="vertical" flexItem />
      <Tooltip title="Heading">
        <IconButton size="small">
          <TitleIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Quote">
        <IconButton size="small">
          <FormatQuote />
        </IconButton>
      </Tooltip>
      <Tooltip title="List">
        <IconButton size="small">
          <FormatListBulleted />
        </IconButton>
      </Tooltip>
      <Divider orientation="vertical" flexItem />
      <Tooltip title="Insert Shape">
        <IconButton 
          size="small" 
          onClick={handleShapeMenuOpen}
          aria-controls="shape-menu"
          aria-haspopup="true"
        >
          <BorderAll />
        </IconButton>
      </Tooltip>
      <Menu
        id="shape-menu"
        anchorEl={shapeMenuAnchor}
        open={Boolean(shapeMenuAnchor)}
        onClose={handleShapeMenuClose}
      >
        <MenuItem onClick={() => handleInsertShape('rectangle')}>
          <Rectangle sx={{ mr: 1 }} /> Rectangle
        </MenuItem>
        <MenuItem onClick={() => handleInsertShape('circle')}>
          <RadioButtonUnchecked sx={{ mr: 1 }} /> Circle
        </MenuItem>
      </Menu>
      <Tooltip title="Link">
        <IconButton size="small">
          <InsertLink />
        </IconButton>
      </Tooltip>
      <Tooltip title="Code">
        <IconButton size="small">
          <Code />
        </IconButton>
      </Tooltip>
      <Box sx={{ flexGrow: 1 }} />
      <Button
        size="small"
        startIcon={<AddCircleOutline />}
        variant="outlined"
        onClick={() => onAddContentBlock('text')}
        sx={{ 
          transition: 'all 0.2s',
          '&:hover': { transform: 'translateY(-2px)' }
        }}
      >
        Add Text Block
      </Button>
    </Box>
  );

  return (
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <TextField
        fullWidth
        label="Blog Title"
        variant="outlined"
        value={post.title}
        onChange={(e) => onTitleChange(e.target.value)}
        error={errors.title}
        helperText={errors.title ? 'Title is required' : ''}
        sx={{ mb: 3, mt: 2, mx: 2 }}
        required
        inputProps={{
          style: { fontSize: '1.2rem', fontWeight: 500 }
        }}
      />
      
      <EditorToolbar />
      
      <Box sx={{ p: 2, flex: 1, overflowY: 'auto' }}>
        {post.contentBlocks.map((block) => {
          if (block.type === 'text') {
            // Create a ref for this block's file input
            if (!blockImageInputRefs.current[block.id]) {
              blockImageInputRefs.current[block.id] = React.createRef();
            }
            
            return (
              <Card 
                key={block.id} 
                sx={{ 
                  mb: 3, 
                  boxShadow: 2,
                  transition: 'all 0.2s ease',
                  '&:hover': { boxShadow: 3 },
                  border: currentContentId === block.id ? '2px solid #3f51b5' : 'none'
                }}
              >
                <CardContent>
                  {/* Font family selector for this specific block */}
                  <FormControl size="small" sx={{ mb: 2, width: 150 }}>
                    <InputLabel id={`font-family-label-${block.id}`}>Block Font</InputLabel>
                    <Select
                      labelId={`font-family-label-${block.id}`}
                      value={block.fontFamily || fontFamilies[0].value}
                      label="Block Font"
                      onChange={(e) => onFontFamilyChange(block.id, e.target.value)}
                    >
                      {fontFamilies.map(font => (
                        <MenuItem 
                          key={font.value} 
                          value={font.value}
                          sx={{ fontFamily: font.value }}
                        >
                          {font.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  
                  <TextField
                    multiline
                    fullWidth
                    value={block.content}
                    onChange={(e) => onContentChange(block.id, e.target.value)}
                    onFocus={() => onContentIdChange(block.id)}
                    placeholder="Write your content here..."
                    variant="outlined"
                    InputProps={{
                      sx: { 
                        minHeight: 100,
                        fontFamily: block.fontFamily || fontFamilies[0].value,
                        '& .MuiInputBase-input': {
                          fontFamily: 'inherit',
                        }
                      }
                    }}
                  />
                  
                  {/* Image Gallery */}
                  {block.images && block.images.length > 0 && (
                    <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                      <Typography variant="subtitle2">
                        {block.images.length} {block.images.length === 1 ? 'Image' : 'Images'} Attached
                      </Typography>
                      
                      <Box sx={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: 1,
                        maxHeight: 220,
                        overflowY: 'auto',
                        p: 1,
                        border: 1,
                        borderColor: 'divider',
                        borderRadius: 1
                      }}>
                        {block.images.map((image) => (
                          <Box 
                            key={image.id} 
                            sx={{ 
                              position: 'relative',
                              width: 100,
                              height: 100,
                              borderRadius: 1,
                              overflow: 'hidden',
                              transition: 'all 0.2s ease',
                              '&:hover': { transform: 'scale(1.05)' }
                            }}
                          >
                            <img 
                              src={image.src} 
                              alt={image.alt} 
                              style={{ 
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                              }} 
                            />
                            <IconButton
                              size="small"
                              sx={{ 
                                position: 'absolute', 
                                top: 2, 
                                right: 2,
                                backgroundColor: 'rgba(255,255,255,0.7)',
                                width: 20,
                                height: 20,
                                '&:hover': {
                                  backgroundColor: 'rgba(255,255,255,0.9)',
                                }
                              }}
                              onClick={() => onRemoveBlockImage(block.id, image.id)}
                            >
                              ✕
                            </IconButton>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  )}
                  
                  <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                      startIcon={<ImageIcon />}
                      size="small"
                      variant="outlined"
                      onClick={() => blockImageInputRefs.current[block.id].current?.click()}
                      sx={{ 
                        transition: 'all 0.2s',
                        '&:hover': { transform: 'translateY(-2px)' }
                      }}
                    >
                      {block.images && block.images.length > 0 ? 'Add More Images' : 'Add Images'}
                    </Button>
                    <input
                      type="file"
                      ref={blockImageInputRefs.current[block.id]}
                      style={{ display: 'none' }}
                      accept="image/*"
                      onChange={(e) => onBlockImageUpload(block.id, e.target.files)}
                      multiple
                    />
                  </Box>
                </CardContent>
              </Card>
            );
          } else if (block.type === 'shape') {
            if (block.shapeType === 'rectangle') {
              return (
                <Box 
                  key={block.id}
                  sx={{ 
                    width: block.width, 
                    height: block.height, 
                    backgroundColor: block.backgroundColor,
                    mb: 2,
                    mx: 'auto',
                    transition: 'all 0.3s ease',
                    '&:hover': { transform: 'scale(1.05)' }
                  }}
                />
              );
            } else if (block.shapeType === 'circle') {
              return (
                <Box 
                  key={block.id}
                  sx={{ 
                    width: block.width, 
                    height: block.height, 
                    backgroundColor: block.backgroundColor,
                    borderRadius: '50%',
                    mb: 2,
                    mx: 'auto',
                    transition: 'all 0.3s ease',
                    '&:hover': { transform: 'scale(1.05)' }
                  }}
                />
              );
            }
          }
          return null;
        })}
      </Box>
    </Box>
  );
};

export default BlogEditor;