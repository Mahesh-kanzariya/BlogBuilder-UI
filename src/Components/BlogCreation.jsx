// import {
//     Code,
//     Edit,
//     FormatBold,
//     FormatItalic,
//     FormatListBulleted,
//     FormatQuote,
//     FormatUnderlined,
//     Image,
//     InsertLink,
//     Save,
//     Title,
//     Visibility
// } from '@mui/icons-material';
// import {
//     Avatar,
//     Box,
//     Button,
//     Chip,
//     Container,
//     Divider,
//     FormControl,
//     FormControlLabel,
//     IconButton,
//     InputLabel,
//     MenuItem,
//     Paper,
//     Select,
//     Switch,
//     TextField,
//     Tooltip,
//     Typography,
//     useMediaQuery,
//     useTheme
// } from '@mui/material';
// import React, { useState } from 'react';
// import Navbar from './Navbar';

// const categories = [
//   { value: 'technology', label: 'Technology' },
//   { value: 'design', label: 'Design' },
//   { value: 'business', label: 'Business' },
//   { value: 'marketing', label: 'Marketing' },
//   { value: 'development', label: 'Development' }
// ];

// const tags = [
//   'React',
//   'JavaScript',
//   'Web Development',
//   'UI/UX',
//   'Frontend',
//   'Backend',
//   'Programming',
//   'Design'
// ];

// const BlogCreation = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const [isPreview, setIsPreview] = useState(false);
  
//   const [post, setPost] = useState({
//     title: '',
//     content: '',
//     category: '',
//     tags: [],
//     coverImage: '',
//     isDraft: true,
//     publishDate: '',
//     metaDescription: ''
//   });

//   const [formatting, setFormatting] = useState({
//     bold: false,
//     italic: false,
//     underline: false
//   });

//   const handlePostChange = (field, value) => {
//     setPost(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const handleTagChange = (event) => {
//     setPost(prev => ({
//       ...prev,
//       tags: event.target.value
//     }));
//   };

//   const toggleFormatting = (type) => {
//     setFormatting(prev => ({
//       ...prev,
//       [type]: !prev[type]
//     }));
//   };

//   const formatDate = (date) => {
//     if (!date) return 'Not scheduled';
//     return new Date(date).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   const EditorToolbar = () => (
//     <Box sx={{
//       display: 'flex',
//       gap: 1,
//       p: 1,
//       borderBottom: 1,
//       borderColor: 'divider',
//       flexWrap: 'wrap'
//     }}>
//       <Tooltip title="Bold">
//         <IconButton 
//           size="small"
//           onClick={() => toggleFormatting('bold')}
//           color={formatting.bold ? 'primary' : 'default'}
//         >
//           <FormatBold />
//         </IconButton>
//       </Tooltip>
//       <Tooltip title="Italic">
//         <IconButton 
//           size="small"
//           onClick={() => toggleFormatting('italic')}
//           color={formatting.italic ? 'primary' : 'default'}
//         >
//           <FormatItalic />
//         </IconButton>
//       </Tooltip>
//       <Tooltip title="Underline">
//         <IconButton 
//           size="small"
//           onClick={() => toggleFormatting('underline')}
//           color={formatting.underline ? 'primary' : 'default'}
//         >
//           <FormatUnderlined />
//         </IconButton>
//       </Tooltip>
//       <Divider orientation="vertical" flexItem />
//       <Tooltip title="Heading">
//         <IconButton size="small">
//           <Title />
//         </IconButton>
//       </Tooltip>
//       <Tooltip title="Quote">
//         <IconButton size="small">
//           <FormatQuote />
//         </IconButton>
//       </Tooltip>
//       <Tooltip title="List">
//         <IconButton size="small">
//           <FormatListBulleted />
//         </IconButton>
//       </Tooltip>
//       <Divider orientation="vertical" flexItem />
//       <Tooltip title="Image">
//         <IconButton size="small">
//           <Image />
//         </IconButton>
//       </Tooltip>
//       <Tooltip title="Link">
//         <IconButton size="small">
//           <InsertLink />
//         </IconButton>
//       </Tooltip>
//       <Tooltip title="Code">
//         <IconButton size="small">
//           <Code />
//         </IconButton>
//       </Tooltip>
//     </Box>
//   );

//   const BlogEditor = () => (
//     <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
//       <EditorToolbar />
//       <TextField
//         multiline
//         fullWidth
//         value={post.content}
//         onChange={(e) => handlePostChange('content', e.target.value)}
//         placeholder="Start writing your amazing blog post..."
//         variant="standard"
//         InputProps={{
//           disableUnderline: true,
//           sx: { 
//             p: 2,
//             minHeight: '50vh',
//             fontSize: '1.1rem',
//             lineHeight: '1.8'
//           }
//         }}
//       />
//     </Box>
//   );

//   const BlogPreview = () => (
//     <Box sx={{ p: 3 }}>
//       {post.coverImage && (
//         <Box
//           sx={{
//             width: '100%',
//             height: 300,
//             backgroundImage: `url(${post.coverImage})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             borderRadius: 2,
//             mb: 3
//           }}
//         />
//       )}
      
//       <Typography variant="h3" gutterBottom>
//         {post.title || 'Untitled Blog Post'}
//       </Typography>
      
//       <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
//         <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" />
//         <Typography variant="subtitle1">
//           John Doe • {formatDate(post.publishDate)}
//         </Typography>
//       </Box>

//       {post.tags.length > 0 && (
//         <Box sx={{ mb: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
//           {post.tags.map(tag => (
//             <Chip key={tag} label={tag} size="small" />
//           ))}
//         </Box>
//       )}

//       <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
//         {post.content || 'No content yet...'}
//       </Typography>
//     </Box>
//   );

//   const Sidebar = () => (
//     <Box sx={{ width: isMobile ? '100%' : 300, ml: isMobile ? 0 : 3 }}>
//       <Paper sx={{ p: 2, mb: 2 }}>
//         <Button
//           fullWidth
//           variant="contained"
//           color="primary"
//           startIcon={<Save />}
//           sx={{ mb: 1 }}
//         >
//           Save Draft
//         </Button>
//         <Button
//           fullWidth
//           variant="contained"
//           color="secondary"
//         >
//           Publish
//         </Button>
//       </Paper>

//       <Paper sx={{ p: 2, mb: 2 }}>
//         <FormControl fullWidth sx={{ mb: 2 }}>
//           <InputLabel>Category</InputLabel>
//           <Select
//             value={post.category}
//             label="Category"
//             onChange={(e) => handlePostChange('category', e.target.value)}
//           >
//             {categories.map(category => (
//               <MenuItem key={category.value} value={category.value}>
//                 {category.label}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>

//         <FormControl fullWidth sx={{ mb: 2 }}>
//           <InputLabel>Tags</InputLabel>
//           <Select
//             multiple
//             value={post.tags}
//             label="Tags"
//             onChange={handleTagChange}
//             renderValue={(selected) => (
//               <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
//                 {selected.map((value) => (
//                   <Chip key={value} label={value} size="small" />
//                 ))}
//               </Box>
//             )}
//           >
//             {tags.map(tag => (
//               <MenuItem key={tag} value={tag}>
//                 {tag}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>

//         <TextField
//           fullWidth
//           label="Cover Image URL"
//           value={post.coverImage}
//           onChange={(e) => handlePostChange('coverImage', e.target.value)}
//           sx={{ mb: 2 }}
//         />

//         <TextField
//           fullWidth
//           label="Schedule Publication"
//           type="datetime-local"
//           value={post.publishDate}
//           onChange={(e) => handlePostChange('publishDate', e.target.value)}
//           InputLabelProps={{ shrink: true }}
//           sx={{ mb: 2 }}
//         />

//         <FormControlLabel
//           control={
//             <Switch
//               checked={post.isDraft}
//               onChange={(e) => handlePostChange('isDraft', e.target.checked)}
//             />
//           }
//           label="Save as draft"
//         />
//       </Paper>

//       <Paper sx={{ p: 2 }}>
//         <Typography variant="subtitle2" gutterBottom>
//           SEO Settings
//         </Typography>
//         <TextField
//           fullWidth
//           label="Meta Description"
//           multiline
//           rows={3}
//           value={post.metaDescription}
//           onChange={(e) => handlePostChange('metaDescription', e.target.value)}
//           helperText={`${post.metaDescription.length}/160 characters`}
//         />
//       </Paper>
//     </Box>
//   );

//   return (
//     <Container maxWidth="xl" sx={{ py: 10}}>
//         <Navbar/>
//       <Box sx={{ mb: 3, display: 'flex', justifyContent: 'flex-end' }}>
//         <Button
//           variant="contained"
//           startIcon={isPreview ? <Edit /> : <Visibility />}
//           onClick={() => setIsPreview(!isPreview)}
//         >
//           {isPreview ? 'Edit' : 'Preview'}
//         </Button>
//       </Box>

//       <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
//         <Paper sx={{ flex: 1, overflow: 'hidden' }}>
//           {isPreview ? <BlogPreview /> : <BlogEditor />}
//         </Paper>
//         <Sidebar />
//       </Box>
//     </Container>
//   );
// };

// export default BlogCreation;



//=============================================================


// import {
//     AddCircleOutline,
//     BorderAll,
//     Code,
//     EditNote,
//     FormatBold,
//     FormatItalic,
//     FormatListBulleted,
//     FormatQuote,
//     FormatUnderlined,
//     Image as ImageIcon,
//     InsertLink,
//     RadioButtonUnchecked,
//     Rectangle,
//     Save,
//     Title as TitleIcon,
//     Upload,
//     Visibility
// } from '@mui/icons-material';
// import {
//     Avatar,
//     Box,
//     Button,
//     Chip,
//     Container,
//     Divider,
//     FormControl,
//     FormControlLabel,
//     FormHelperText,
//     IconButton,
//     InputLabel,
//     Menu,
//     MenuItem,
//     Paper,
//     Select,
//     Switch,
//     TextField,
//     Tooltip,
//     Typography,
//     useMediaQuery,
//     useTheme
// } from '@mui/material';
// import React, { useRef, useState } from 'react';
// import Navbar from './Navbar';
  
//   const categories = [
//     { value: 'technology', label: 'Technology' },
//     { value: 'lifestyle', label: 'Lifestyle' },
//     { value: 'health', label: 'Health' },
//     { value: 'design', label: 'Design' },
//     { value: 'business', label: 'Business' },
//     { value: 'marketing', label: 'Marketing' },
//     { value: 'development', label: 'Development' }
//   ];
  
//   const fontFamilies = [
//     { value: 'Arial, sans-serif', label: 'Arial' },
//     { value: 'Times New Roman, serif', label: 'Times New Roman' },
//     { value: 'Courier New, monospace', label: 'Courier New' },
//     { value: 'Georgia, serif', label: 'Georgia' },
//     { value: 'Verdana, sans-serif', label: 'Verdana' }
//   ];
  
//   const BlogCreation = () => {
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//     const [isPreview, setIsPreview] = useState(false);
//     const fileInputRef = useRef(null);
//     const contentFileInputRef = useRef(null);
    
//     const [post, setPost] = useState({
//       title: '',
//       content: '',
//       category: '',
//       tags: [],
//       coverImage: '',
//       coverImageFile: null,
//       isDraft: true,
//       publishDate: '',
//       metaDescription: '',
//       contentBlocks: [{ type: 'text', content: '', id: Date.now() }]
//     });
  
//     const [formatting, setFormatting] = useState({
//       bold: false,
//       italic: false,
//       underline: false,
//       fontFamily: fontFamilies[0].value
//     });
  
//     const [errors, setErrors] = useState({
//       title: false,
//       category: false
//     });
  
//     const [shapeMenuAnchor, setShapeMenuAnchor] = useState(null);
//     const [currentContentId, setCurrentContentId] = useState(null);
  
//     const handlePostChange = (field, value) => {
//       setPost(prev => ({
//         ...prev,
//         [field]: value
//       }));
  
//       // Clear error if field is being filled
//       if (field === 'title' || field === 'category') {
//         if (value) {
//           setErrors(prev => ({
//             ...prev,
//             [field]: false
//           }));
//         }
//       }
//     };
  
//     const handleTagInput = (event) => {
//       if (event.key === 'Enter' && event.target.value.trim()) {
//         const newTag = event.target.value.trim();
//         if (!post.tags.includes(newTag)) {
//           setPost(prev => ({
//             ...prev,
//             tags: [...prev.tags, newTag]
//           }));
//         }
//         event.target.value = '';
//       }
//     };
  
//     const handleRemoveTag = (tagToRemove) => {
//       setPost(prev => ({
//         ...prev,
//         tags: prev.tags.filter(tag => tag !== tagToRemove)
//       }));
//     };
  
//     const toggleFormatting = (type) => {
//       setFormatting(prev => ({
//         ...prev,
//         [type]: !prev[type]
//       }));
      
//       // Apply formatting to selected text
//       const selection = window.getSelection();
//       if (selection.rangeCount > 0 && currentContentId) {
//         const range = selection.getRangeAt(0);
//         const selectedText = range.toString();
        
//         if (selectedText.length > 0) {
//           // Find the content block
//           const updatedBlocks = post.contentBlocks.map(block => {
//             if (block.id === currentContentId && block.type === 'text') {
//               // This is a simplified approach - in a real app, you would need more
//               // sophisticated handling of formatting that preserves existing formatting
//               let newContent = block.content;
//               const tag = type === 'bold' ? 'strong' : type === 'italic' ? 'em' : type === 'underline' ? 'u' : '';
              
//               if (tag) {
//                 // Toggle formatting by wrapping/unwrapping with HTML tags
//                 // Note: This is a simplified implementation
//                 if (formatting[type]) {
//                   // Remove formatting
//                   const regex = new RegExp(`<${tag}>${selectedText}</${tag}>`, 'g');
//                   newContent = newContent.replace(regex, selectedText);
//                 } else {
//                   // Add formatting
//                   newContent = newContent.replace(
//                     selectedText, 
//                     `<${tag}>${selectedText}</${tag}>`
//                   );
//                 }
                
//                 return { ...block, content: newContent };
//               }
//             }
//             return block;
//           });
          
//           setPost(prev => ({ ...prev, contentBlocks: updatedBlocks }));
//         }
//       }
//     };
  
//     const handleFontFamilyChange = (event) => {
//       setFormatting(prev => ({
//         ...prev,
//         fontFamily: event.target.value
//       }));
      
//       // Apply font family to selected text (simplified implementation)
//       const selection = window.getSelection();
//       if (selection.rangeCount > 0 && currentContentId) {
//         const range = selection.getRangeAt(0);
//         const selectedText = range.toString();
        
//         if (selectedText.length > 0) {
//           // Find the content block
//           const updatedBlocks = post.contentBlocks.map(block => {
//             if (block.id === currentContentId && block.type === 'text') {
//               // Add span with font-family style
//               const newContent = block.content.replace(
//                 selectedText, 
//                 `<span style="font-family: ${event.target.value}">${selectedText}</span>`
//               );
              
//               return { ...block, content: newContent };
//             }
//             return block;
//           });
          
//           setPost(prev => ({ ...prev, contentBlocks: updatedBlocks }));
//         }
//       }
//     };
  
//     const handleShapeMenuOpen = (event) => {
//       setShapeMenuAnchor(event.currentTarget);
//     };
  
//     const handleShapeMenuClose = () => {
//       setShapeMenuAnchor(null);
//     };
  
//     const insertShape = (shape) => {
//       handleShapeMenuClose();
      
//       // Add a new shape block
//       const newShapeBlock = {
//         type: 'shape',
//         shapeType: shape,
//         id: Date.now(),
//         width: 100,
//         height: 100,
//         backgroundColor: '#e0e0e0'
//       };
      
//       setPost(prev => ({
//         ...prev,
//         contentBlocks: [...prev.contentBlocks, newShapeBlock]
//       }));
//     };
  
//     const handleContentBlockChange = (id, content) => {
//       setPost(prev => ({
//         ...prev,
//         contentBlocks: prev.contentBlocks.map(block => 
//           block.id === id && block.type === 'text' ? { ...block, content } : block
//         )
//       }));
//     };
  
//     const handleAddContentBlock = (type = 'text') => {
//       const newBlock = {
//         type,
//         content: '',
//         id: Date.now()
//       };
      
//       setPost(prev => ({
//         ...prev,
//         contentBlocks: [...prev.contentBlocks, newBlock]
//       }));
//     };
  
//     const handleCoverImageUpload = (event) => {
//       const file = event.target.files[0];
//       if (file) {
//         const imageUrl = URL.createObjectURL(file);
//         setPost(prev => ({
//           ...prev,
//           coverImage: imageUrl,
//           coverImageFile: file
//         }));
//       }
//     };
  
//     const handleContentImageUpload = (event) => {
//       const file = event.target.files[0];
//       if (file) {
//         const imageUrl = URL.createObjectURL(file);
//         const newImageBlock = {
//           type: 'image',
//           src: imageUrl,
//           alt: file.name,
//           id: Date.now()
//         };
        
//         setPost(prev => ({
//           ...prev,
//           contentBlocks: [...prev.contentBlocks, newImageBlock]
//         }));
//       }
//     };
  
//     const handleSaveOrPublish = (publish = false) => {
//       // Validate required fields
//       const newErrors = {
//         title: !post.title.trim(),
//         category: !post.category
//       };
      
//       setErrors(newErrors);
      
//       if (!newErrors.title && !newErrors.category) {
//         // Set draft state based on the action
//         setPost(prev => ({
//           ...prev,
//           isDraft: !publish
//         }));
        
//         // Here you would typically send the data to your backend
//         console.log('Saving post:', { ...post, isDraft: !publish });
//         alert(`Blog post ${publish ? 'published' : 'saved as draft'} successfully!`);
//       } else {
//         alert('Please fill in all required fields.');
//       }
//     };
  
//     const formatDate = (date) => {
//       if (!date) return 'Not scheduled';
//       return new Date(date).toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric'
//       });
//     };
  
//     const EditorToolbar = () => (
//       <Box sx={{
//         display: 'flex',
//         gap: 1,
//         p: 1,
//         borderBottom: 1,
//         borderColor: 'divider',
//         flexWrap: 'wrap',
//         alignItems: 'center'
//       }}>
//         <Tooltip title="Bold">
//           <IconButton 
//             size="small"
//             onClick={() => toggleFormatting('bold')}
//             color={formatting.bold ? 'primary' : 'default'}
//           >
//             <FormatBold />
//           </IconButton>
//         </Tooltip>
//         <Tooltip title="Italic">
//           <IconButton 
//             size="small"
//             onClick={() => toggleFormatting('italic')}
//             color={formatting.italic ? 'primary' : 'default'}
//           >
//             <FormatItalic />
//           </IconButton>
//         </Tooltip>
//         <Tooltip title="Underline">
//           <IconButton 
//             size="small"
//             onClick={() => toggleFormatting('underline')}
//             color={formatting.underline ? 'primary' : 'default'}
//           >
//             <FormatUnderlined />
//           </IconButton>
//         </Tooltip>
//         <Divider orientation="vertical" flexItem />
//         <FormControl size="small" sx={{ minWidth: 120 }}>
//           <InputLabel id="font-family-label">Font</InputLabel>
//           <Select
//             labelId="font-family-label"
//             value={formatting.fontFamily}
//             label="Font"
//             onChange={handleFontFamilyChange}
//           >
//             {fontFamilies.map(font => (
//               <MenuItem 
//                 key={font.value} 
//                 value={font.value}
//                 sx={{ fontFamily: font.value }}
//               >
//                 {font.label}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//         <Divider orientation="vertical" flexItem />
//         <Tooltip title="Heading">
//           <IconButton size="small">
//             <TitleIcon />
//           </IconButton>
//         </Tooltip>
//         <Tooltip title="Quote">
//           <IconButton size="small">
//             <FormatQuote />
//           </IconButton>
//         </Tooltip>
//         <Tooltip title="List">
//           <IconButton size="small">
//             <FormatListBulleted />
//           </IconButton>
//         </Tooltip>
//         <Divider orientation="vertical" flexItem />
//         <Tooltip title="Insert Shape">
//           <IconButton 
//             size="small" 
//             onClick={handleShapeMenuOpen}
//             aria-controls="shape-menu"
//             aria-haspopup="true"
//           >
//             <BorderAll />
//           </IconButton>
//         </Tooltip>
//         <Menu
//           id="shape-menu"
//           anchorEl={shapeMenuAnchor}
//           open={Boolean(shapeMenuAnchor)}
//           onClose={handleShapeMenuClose}
//         >
//           <MenuItem onClick={() => insertShape('rectangle')}>
//             <Rectangle sx={{ mr: 1 }} /> Rectangle
//           </MenuItem>
//           <MenuItem onClick={() => insertShape('circle')}>
//             <RadioButtonUnchecked sx={{ mr: 1 }} /> Circle
//           </MenuItem>
//         </Menu>
//         <Tooltip title="Insert Image">
//           <IconButton 
//             size="small"
//             onClick={() => contentFileInputRef.current?.click()}
//           >
//             <ImageIcon />
//           </IconButton>
//         </Tooltip>
//         <input
//           type="file"
//           ref={contentFileInputRef}
//           style={{ display: 'none' }}
//           accept="image/*"
//           onChange={handleContentImageUpload}
//         />
//         <Tooltip title="Link">
//           <IconButton size="small">
//             <InsertLink />
//           </IconButton>
//         </Tooltip>
//         <Tooltip title="Code">
//           <IconButton size="small">
//             <Code />
//           </IconButton>
//         </Tooltip>
//         <Box sx={{ flexGrow: 1 }} />
//         <Button
//           size="small"
//           startIcon={<AddCircleOutline />}
//           variant="outlined"
//           onClick={() => handleAddContentBlock('text')}
//         >
//           Add Text Block
//         </Button>
//       </Box>
//     );
  
//     const BlogEditor = () => (
//       <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
//         <TextField
//           fullWidth
//           label="Blog Title"
//           variant="outlined"
//           value={post.title}
//           onChange={(e) => handlePostChange('title', e.target.value)}
//           error={errors.title}
//           helperText={errors.title ? 'Title is required' : ''}
//           sx={{ mb: 3, mt: 2, mx: 2 }}
//           required
//         />
        
//         <EditorToolbar />
        
//         <Box sx={{ p: 2, flex: 1, overflowY: 'auto' }}>
//           {post.contentBlocks.map((block) => {
//             if (block.type === 'text') {
//               return (
//                 <TextField
//                   key={block.id}
//                   multiline
//                   fullWidth
//                   value={block.content}
//                   onChange={(e) => handleContentBlockChange(block.id, e.target.value)}
//                   onFocus={() => setCurrentContentId(block.id)}
//                   placeholder="Write your content here..."
//                   variant="outlined"
//                   InputProps={{
//                     sx: { 
//                       minHeight: 100,
//                       mb: 2,
//                       fontFamily: formatting.fontFamily,
//                       '& .MuiInputBase-input': {
//                         fontFamily: 'inherit',
//                       }
//                     }
//                   }}
//                 />
//               );
//             } else if (block.type === 'image') {
//               return (
//                 <Box key={block.id} sx={{ mb: 2, textAlign: 'center' }}>
//                   <img 
//                     src={block.src} 
//                     alt={block.alt} 
//                     style={{ maxWidth: '100%', maxHeight: 400 }} 
//                   />
//                 </Box>
//               );
//             } else if (block.type === 'shape') {
//               if (block.shapeType === 'rectangle') {
//                 return (
//                   <Box 
//                     key={block.id}
//                     sx={{ 
//                       width: block.width, 
//                       height: block.height, 
//                       backgroundColor: block.backgroundColor,
//                       mb: 2,
//                       mx: 'auto'
//                     }}
//                   />
//                 );
//               } else if (block.shapeType === 'circle') {
//                 return (
//                   <Box 
//                     key={block.id}
//                     sx={{ 
//                       width: block.width, 
//                       height: block.height, 
//                       backgroundColor: block.backgroundColor,
//                       borderRadius: '50%',
//                       mb: 2,
//                       mx: 'auto'
//                     }}
//                   />
//                 );
//               }
//             }
//             return null;
//           })}
//         </Box>
//       </Box>
//     );
  
//     const BlogPreview = () => (
//       <Box sx={{ p: 3 }}>
//         {post.coverImage && (
//           <Box
//             sx={{
//               width: '100%',
//               height: 300,
//               backgroundImage: `url(${post.coverImage})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               borderRadius: 2,
//               mb: 3
//             }}
//           />
//         )}
        
//         <Typography variant="h3" gutterBottom>
//           {post.title || 'Untitled Blog Post'}
//         </Typography>
        
//         <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
//           <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" />
//           <Typography variant="subtitle1">
//             John Doe • {formatDate(post.publishDate)}
//           </Typography>
//         </Box>
  
//         {post.category && (
//           <Chip 
//             label={categories.find(cat => cat.value === post.category)?.label || post.category} 
//             color="primary" 
//             sx={{ mb: 2 }}
//           />
//         )}
  
//         {post.tags.length > 0 && (
//           <Box sx={{ mb: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
//             {post.tags.map(tag => (
//               <Chip key={tag} label={tag} size="small" />
//             ))}
//           </Box>
//         )}
  
//         {post.contentBlocks.map((block) => {
//           if (block.type === 'text') {
//             return (
//               <Typography 
//                 key={block.id} 
//                 variant="body1" 
//                 sx={{ 
//                   mb: 2,
//                   // This is a simplified way to render HTML - in a production app,
//                   // you would want to use a proper HTML sanitizer
//                   "& span": { fontFamily: 'inherit' }
//                 }}
//                 dangerouslySetInnerHTML={{ __html: block.content }}
//               />
//             );
//           } else if (block.type === 'image') {
//             return (
//               <Box key={block.id} sx={{ mb: 2, textAlign: 'center' }}>
//                 <img 
//                   src={block.src} 
//                   alt={block.alt} 
//                   style={{ maxWidth: '100%', maxHeight: 400 }} 
//                 />
//               </Box>
//             );
//           } else if (block.type === 'shape') {
//             if (block.shapeType === 'rectangle') {
//               return (
//                 <Box 
//                   key={block.id}
//                   sx={{ 
//                     width: block.width, 
//                     height: block.height, 
//                     backgroundColor: block.backgroundColor,
//                     mb: 2,
//                     mx: 'auto'
//                   }}
//                 />
//               );
//             } else if (block.shapeType === 'circle') {
//               return (
//                 <Box 
//                   key={block.id}
//                   sx={{ 
//                     width: block.width, 
//                     height: block.height, 
//                     backgroundColor: block.backgroundColor,
//                     borderRadius: '50%',
//                     mb: 2,
//                     mx: 'auto'
//                   }}
//                 />
//               );
//             }
//           }
//           return null;
//         })}
//       </Box>
//     );
  
//     const Sidebar = () => (
//       <Box sx={{ width: isMobile ? '100%' : 300, ml: isMobile ? 0 : 3 }}>
//         <Paper sx={{ p: 2, mb: 2 }}>
//           <Button
//             fullWidth
//             variant="contained"
//             color="primary"
//             startIcon={<Save />}
//             sx={{ mb: 1 }}
//             onClick={() => handleSaveOrPublish(false)}
//           >
//             Save Draft
//           </Button>
//           <Button
//             fullWidth
//             variant="contained"
//             color="secondary"
//             onClick={() => handleSaveOrPublish(true)}
//           >
//             Publish
//           </Button>
//         </Paper>
  
//         <Paper sx={{ p: 2, mb: 2 }}>
//           <FormControl fullWidth sx={{ mb: 2 }} error={errors.category} required>
//             <InputLabel>Category</InputLabel>
//             <Select
//               value={post.category}
//               label="Category"
//               onChange={(e) => handlePostChange('category', e.target.value)}
//             >
//               {categories.map(category => (
//                 <MenuItem key={category.value} value={category.value}>
//                   {category.label}
//                 </MenuItem>
//               ))}
//             </Select>
//             {errors.category && (
//               <FormHelperText>Category is required</FormHelperText>
//             )}
//           </FormControl>
  
//           <Box sx={{ mb: 2 }}>
//             <TextField
//               fullWidth
//               label="Add Tags"
//               placeholder="Type and press Enter"
//               onKeyDown={handleTagInput}
//               helperText="Press Enter to add a tag"
//             />
            
//             {post.tags.length > 0 && (
//               <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
//                 {post.tags.map((tag) => (
//                   <Chip 
//                     key={tag} 
//                     label={tag} 
//                     size="small" 
//                     onDelete={() => handleRemoveTag(tag)}
//                   />
//                 ))}
//               </Box>
//             )}
//           </Box>
  
//           <Box sx={{ mb: 2 }}>
//             <Button
//               variant="outlined"
//               startIcon={<Upload />}
//               onClick={() => fileInputRef.current?.click()}
//               fullWidth
//             >
//               Upload Cover Image
//             </Button>
//             <input
//               type="file"
//               ref={fileInputRef}
//               style={{ display: 'none' }}
//               accept="image/*"
//               onChange={handleCoverImageUpload}
//             />
            
//             {post.coverImage && (
//               <Box sx={{ mt: 1, textAlign: 'center' }}>
//                 <img 
//                   src={post.coverImage} 
//                   alt="Cover Preview" 
//                   style={{ 
//                     maxWidth: '100%', 
//                     maxHeight: 150, 
//                     objectFit: 'cover',
//                     borderRadius: theme.shape.borderRadius
//                   }} 
//                 />
//               </Box>
//             )}
//           </Box>
  
//           <TextField
//             fullWidth
//             label="Schedule Publication"
//             type="datetime-local"
//             value={post.publishDate}
//             onChange={(e) => handlePostChange('publishDate', e.target.value)}
//             InputLabelProps={{ shrink: true }}
//             sx={{ mb: 2 }}
//           />
  
//           <FormControlLabel
//             control={
//               <Switch
//                 checked={post.isDraft}
//                 onChange={(e) => handlePostChange('isDraft', e.target.checked)}
//               />
//             }
//             label="Save as draft"
//           />
//         </Paper>
  
//         <Paper sx={{ p: 2 }}>
//           <Typography variant="subtitle2" gutterBottom>
//             SEO Settings
//           </Typography>
//           <TextField
//             fullWidth
//             label="Meta Description"
//             multiline
//             rows={3}
//             value={post.metaDescription}
//             onChange={(e) => handlePostChange('metaDescription', e.target.value)}
//             helperText={`${post.metaDescription.length}/160 characters`}
//           />
//         </Paper>
//       </Box>
//     );
  
//     return (
//       <Container maxWidth="xl" sx={{ py: 4 }}>
//         <Navbar />
//         <Typography variant="h4" sx={{ mb: 4, mt: 6 }}>
//           Create New Blog Post
//         </Typography>
        
//         <Box sx={{ mb: 3, display: 'flex', justifyContent: 'flex-end' }}>
//           <Button
//             variant="contained"
//             startIcon={isPreview ? <EditNote /> : <Visibility />}
//             onClick={() => setIsPreview(!isPreview)}
//           >
//             {isPreview ? 'Edit' : 'Preview'}
//           </Button>
//         </Box>
  
//         <Box sx={{ 
//           display: 'flex', 
//           flexDirection: isMobile ? 'column' : 'row',
//           gap: isMobile ? 2 : 0
//         }}>
//           <Paper sx={{ flex: 1, overflow: 'hidden' }}>
//             {isPreview ? <BlogPreview /> : <BlogEditor />}
//           </Paper>
//           <Sidebar />
//         </Box>
//       </Container>
//     );
//   };
  
//   export default BlogCreation;


//======================================================================


// import {
//   AddCircleOutline,
//   BorderAll,
//   Code,
//   EditNote,
//   FormatBold,
//   FormatItalic,
//   FormatListBulleted,
//   FormatQuote,
//   FormatUnderlined,
//   Image as ImageIcon,
//   InsertLink,
//   RadioButtonUnchecked,
//   Rectangle,
//   Save,
//   Title as TitleIcon,
//   Upload,
//   Visibility
// } from '@mui/icons-material';
// import {
//   Avatar,
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Chip,
//   Container,
//   Divider,
//   FormControl,
//   FormControlLabel,
//   FormHelperText,
//   IconButton,
//   InputLabel,
//   Menu,
//   MenuItem,
//   Paper,
//   Select,
//   Switch,
//   TextField,
//   Tooltip,
//   Typography,
//   useMediaQuery,
//   useTheme
// } from '@mui/material';
// import React, { useRef, useState } from 'react';
// import Navbar from './Navbar';
  
//   const categories = [
//     { value: 'technology', label: 'Technology' },
//     { value: 'lifestyle', label: 'Lifestyle' },
//     { value: 'health', label: 'Health' },
//     { value: 'design', label: 'Design' },
//     { value: 'business', label: 'Business' },
//     { value: 'marketing', label: 'Marketing' },
//     { value: 'development', label: 'Development' }
//   ];
  
//   const fontFamilies = [
//     { value: 'Arial, sans-serif', label: 'Arial' },
//     { value: 'Times New Roman, serif', label: 'Times New Roman' },
//     { value: 'Courier New, monospace', label: 'Courier New' },
//     { value: 'Georgia, serif', label: 'Georgia' },
//     { value: 'Verdana, sans-serif', label: 'Verdana' }
//   ];
  
//   const BlogCreation = () => {
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//     const [isPreview, setIsPreview] = useState(false);
//     const fileInputRef = useRef(null);
//     const blockImageInputRefs = useRef({});
    
//    // Modified state structure
// const [post, setPost] = useState({
//     title: '',
//     content: '',
//     category: '',
//     tags: [],
//     coverImage: '',
//     coverImageFile: null,
//     isDraft: true,
//     publishDate: '',
//     metaDescription: '',
//     contentBlocks: [{ 
//       type: 'text', 
//       content: '', 
//       id: Date.now(), 
//       images: [], // Changed from single image to images array
//       fontFamily: fontFamilies[0].value // Add font family at block level
//     }]
//   });
  
//   // Remove global font family from formatting state
//   const [formatting, setFormatting] = useState({
//     bold: false,
//     italic: false,
//     underline: false
//     // fontFamily removed from here as it's now per block
//   });
  
//     const [errors, setErrors] = useState({
//       title: false,
//       category: false
//     });
  
//     const [shapeMenuAnchor, setShapeMenuAnchor] = useState(null);
//     const [currentContentId, setCurrentContentId] = useState(null);
  
//     const handlePostChange = (field, value) => {
//       setPost(prev => ({
//         ...prev,
//         [field]: value
//       }));
  
//       // Clear error if field is being filled
//       if (field === 'title' || field === 'category') {
//         if (value) {
//           setErrors(prev => ({
//             ...prev,
//             [field]: false
//           }));
//         }
//       }
//     };
  
//     const handleTagInput = (event) => {
//       if (event.key === 'Enter' && event.target.value.trim()) {
//         const newTag = event.target.value.trim();
//         if (!post.tags.includes(newTag)) {
//           setPost(prev => ({
//             ...prev,
//             tags: [...prev.tags, newTag]
//           }));
//         }
//         event.target.value = '';
//       }
//     };
  
//     const handleRemoveTag = (tagToRemove) => {
//       setPost(prev => ({
//         ...prev,
//         tags: prev.tags.filter(tag => tag !== tagToRemove)
//       }));
//     };
  
//     const toggleFormatting = (type) => {
//         setFormatting(prev => ({
//           ...prev,
//           [type]: !prev[type]
//         }));
        
//         // Apply formatting to selected text
//         const selection = window.getSelection();
//         if (selection.rangeCount > 0 && currentContentId) {
//           const range = selection.getRangeAt(0);
//           const selectedText = range.toString();
          
//           if (selectedText.length > 0) {
//             // Find the content block
//             const updatedBlocks = post.contentBlocks.map(block => {
//               if (block.id === currentContentId && block.type === 'text') {
//                 // This is a simplified approach - in a real app, you would need more
//                 // sophisticated handling of formatting that preserves existing formatting
//                 let newContent = block.content;
//                 const tag = type === 'bold' ? 'strong' : type === 'italic' ? 'em' : type === 'underline' ? 'u' : '';
                
//                 if (tag) {
//                   // Toggle formatting by wrapping/unwrapping with HTML tags
//                   // Note: This is a simplified implementation
//                   if (formatting[type]) {
//                     // Remove formatting
//                     const regex = new RegExp(`<${tag}>${selectedText}</${tag}>`, 'g');
//                     newContent = newContent.replace(regex, selectedText);
//                   } else {
//                     // Add formatting
//                     newContent = newContent.replace(
//                       selectedText, 
//                       `<${tag}>${selectedText}</${tag}>`
//                     );
//                   }
                  
//                   return { ...block, content: newContent };
//                 }
//               }
//               return block;
//             });
            
//             setPost(prev => ({ ...prev, contentBlocks: updatedBlocks }));
//           }
//         }
//       };
  
//     const handleFontFamilyChange = (event) => {
//       setFormatting(prev => ({
//         ...prev,
//         fontFamily: event.target.value
//       }));
      
//       // Apply font family to selected text (simplified implementation)
//       const selection = window.getSelection();
//       if (selection.rangeCount > 0 && currentContentId) {
//         const range = selection.getRangeAt(0);
//         const selectedText = range.toString();
        
//         if (selectedText.length > 0) {
//           // Find the content block
//           const updatedBlocks = post.contentBlocks.map(block => {
//             if (block.id === currentContentId && block.type === 'text') {
//               // Add span with font-family style
//               const newContent = block.content.replace(
//                 selectedText, 
//                 `<span style="font-family: ${event.target.value}">${selectedText}</span>`
//               );
              
//               return { ...block, content: newContent };
//             }
//             return block;
//           });
          
//           setPost(prev => ({ ...prev, contentBlocks: updatedBlocks }));
//         }
//       }
//     };
  
//     const handleShapeMenuOpen = (event) => {
//       setShapeMenuAnchor(event.currentTarget);
//     };
  
//     const handleShapeMenuClose = () => {
//       setShapeMenuAnchor(null);
//     };

//     const handleBlockFontFamilyChange = (blockId, fontFamily) => {
//         setPost(prev => ({
//           ...prev,
//           contentBlocks: prev.contentBlocks.map(block => 
//             block.id === blockId ? { ...block, fontFamily } : block
//           )
//         }));
//       };
  
//     const insertShape = (shape) => {
//       handleShapeMenuClose();
      
//       // Add a new shape block
//       const newShapeBlock = {
//         type: 'shape',
//         shapeType: shape,
//         id: Date.now(),
//         width: 100,
//         height: 100,
//         backgroundColor: '#e0e0e0'
//       };
      
//       setPost(prev => ({
//         ...prev,
//         contentBlocks: [...prev.contentBlocks, newShapeBlock]
//       }));
//     };
  
//     const handleContentBlockChange = (id, content) => {
//       setPost(prev => ({
//         ...prev,
//         contentBlocks: prev.contentBlocks.map(block => 
//           block.id === id && block.type === 'text' ? { ...block, content } : block
//         )
//       }));
//     };
  
//     const handleAddContentBlock = (type = 'text') => {
//         const newBlock = {
//           type,
//           content: '',
//           id: Date.now(),
//           images: [], // Empty array for images
//           fontFamily: fontFamilies[0].value // Default font family
//         };
        
//         setPost(prev => ({
//           ...prev,
//           contentBlocks: [...prev.contentBlocks, newBlock]
//         }));
//       };
  
//     const handleCoverImageUpload = (event) => {
//       const file = event.target.files[0];
//       if (file) {
//         const imageUrl = URL.createObjectURL(file);
//         setPost(prev => ({
//           ...prev,
//           coverImage: imageUrl,
//           coverImageFile: file
//         }));
//       }
//     };
  
//     const handleBlockImageUpload = (blockId, event) => {
//         const files = event.target.files;
//         if (files && files.length > 0) {
//           // Create a copy of the existing blocks
//           const updatedBlocks = [...post.contentBlocks];
          
//           // Find the block to update
//           const blockIndex = updatedBlocks.findIndex(block => block.id === blockId);
//           if (blockIndex !== -1) {
//             // Get existing images for this block
//             const existingImages = updatedBlocks[blockIndex].images || [];
            
//             // Add new images
//             for (let i = 0; i < files.length; i++) {
//               const file = files[i];
//               const imageUrl = URL.createObjectURL(file);
//               existingImages.push({
//                 src: imageUrl,
//                 alt: file.name,
//                 id: Date.now() + i // Unique ID for each image
//               });
//             }
            
//             // Update the block with new images
//             updatedBlocks[blockIndex] = {
//               ...updatedBlocks[blockIndex],
//               images: existingImages
//             };
            
//             // Update state
//             setPost(prev => ({
//               ...prev,
//               contentBlocks: updatedBlocks
//             }));
//           }
//         }
//       };
      
//       const handleRemoveBlockImage = (blockId, imageId) => {
//         setPost(prev => ({
//           ...prev,
//           contentBlocks: prev.contentBlocks.map(block => 
//             block.id === blockId ? 
//               { ...block, images: block.images.filter(img => img.id !== imageId) } : 
//               block
//           )
//         }));
//       };
  
//     const handleSaveOrPublish = (publish = false) => {
//       // Validate required fields
//       const newErrors = {
//         title: !post.title.trim(),
//         category: !post.category
//       };
      
//       setErrors(newErrors);
      
//       if (!newErrors.title && !newErrors.category) {
//         // Set draft state based on the action
//         setPost(prev => ({
//           ...prev,
//           isDraft: !publish
//         }));
        
//         // Here you would typically send the data to your backend
//         console.log('Saving post:', { ...post, isDraft: !publish });
//         alert(`Blog post ${publish ? 'published' : 'saved as draft'} successfully!`);
//       } else {
//         alert('Please fill in all required fields.');
//       }
//     };
  
//     const formatDate = (date) => {
//       if (!date) return 'Not scheduled';
//       return new Date(date).toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric'
//       });
//     };
  
//     const EditorToolbar = () => (
//         <Box sx={{
//           display: 'flex',
//           gap: 1,
//           p: 1,
//           borderBottom: 1,
//           borderColor: 'divider',
//           flexWrap: 'wrap',
//           alignItems: 'center'
//         }}>
//           <Tooltip title="Bold">
//             <IconButton 
//               size="small"
//               onClick={() => toggleFormatting('bold')}
//               color={formatting.bold ? 'primary' : 'default'}
//             >
//               <FormatBold />
//             </IconButton>
//           </Tooltip>
//           <Tooltip title="Italic">
//             <IconButton 
//               size="small"
//               onClick={() => toggleFormatting('italic')}
//               color={formatting.italic ? 'primary' : 'default'}
//             >
//               <FormatItalic />
//             </IconButton>
//           </Tooltip>
//           <Tooltip title="Underline">
//             <IconButton 
//               size="small"
//               onClick={() => toggleFormatting('underline')}
//               color={formatting.underline ? 'primary' : 'default'}
//             >
//               <FormatUnderlined />
//             </IconButton>
//           </Tooltip>
//           <Divider orientation="vertical" flexItem />
//           {/* Font family selector removed from here */}
//           <Tooltip title="Heading">
//             <IconButton size="small">
//               <TitleIcon />
//             </IconButton>
//           </Tooltip>
//           <Tooltip title="Quote">
//             <IconButton size="small">
//               <FormatQuote />
//             </IconButton>
//           </Tooltip>
//           <Tooltip title="List">
//             <IconButton size="small">
//               <FormatListBulleted />
//             </IconButton>
//           </Tooltip>
//           <Divider orientation="vertical" flexItem />
//           <Tooltip title="Insert Shape">
//             <IconButton 
//               size="small" 
//               onClick={handleShapeMenuOpen}
//               aria-controls="shape-menu"
//               aria-haspopup="true"
//             >
//               <BorderAll />
//             </IconButton>
//           </Tooltip>
//           <Menu
//             id="shape-menu"
//             anchorEl={shapeMenuAnchor}
//             open={Boolean(shapeMenuAnchor)}
//             onClose={handleShapeMenuClose}
//           >
//             <MenuItem onClick={() => insertShape('rectangle')}>
//               <Rectangle sx={{ mr: 1 }} /> Rectangle
//             </MenuItem>
//             <MenuItem onClick={() => insertShape('circle')}>
//               <RadioButtonUnchecked sx={{ mr: 1 }} /> Circle
//             </MenuItem>
//           </Menu>
//           <Tooltip title="Link">
//             <IconButton size="small">
//               <InsertLink />
//             </IconButton>
//           </Tooltip>
//           <Tooltip title="Code">
//             <IconButton size="small">
//               <Code />
//             </IconButton>
//           </Tooltip>
//           <Box sx={{ flexGrow: 1 }} />
//           <Button
//             size="small"
//             startIcon={<AddCircleOutline />}
//             variant="outlined"
//             onClick={() => handleAddContentBlock('text')}
//           >
//             Add Text Block
//           </Button>
//         </Box>
//       );
  
//     const BlogEditor = () => (
//         <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
//           <TextField
//             fullWidth
//             label="Blog Title"
//             variant="outlined"
//             value={post.title}
//             onChange={(e) => handlePostChange('title', e.target.value)}
//             error={errors.title}
//             helperText={errors.title ? 'Title is required' : ''}
//             sx={{ mb: 3, mt: 2, mx: 2 }}
//             required
//           />
          
//           <EditorToolbar />
          
//           <Box sx={{ p: 2, flex: 1, overflowY: 'auto' }}>
//             {post.contentBlocks.map((block, blockIndex) => {
//               if (block.type === 'text') {
//                 // Create a ref for this block's file input
//                 if (!blockImageInputRefs.current[block.id]) {
//                   blockImageInputRefs.current[block.id] = React.createRef();
//                 }
                
//                 return (
//                   <Card key={block.id} sx={{ mb: 3, boxShadow: 2 }}>
//                     <CardContent>
//                       {/* Font family selector for this specific block */}
//                       <FormControl size="small" sx={{ mb: 2, width: 150 }}>
//                         <InputLabel id={`font-family-label-${block.id}`}>Block Font</InputLabel>
//                         <Select
//                           labelId={`font-family-label-${block.id}`}
//                           value={block.fontFamily || fontFamilies[0].value}
//                           label="Block Font"
//                           onChange={(e) => handleBlockFontFamilyChange(block.id, e.target.value)}
//                         >
//                           {fontFamilies.map(font => (
//                             <MenuItem 
//                               key={font.value} 
//                               value={font.value}
//                               sx={{ fontFamily: font.value }}
//                             >
//                               {font.label}
//                             </MenuItem>
//                           ))}
//                         </Select>
//                       </FormControl>
                      
//                       <TextField
//                         multiline
//                         fullWidth
//                         value={block.content}
//                         onChange={(e) => handleContentBlockChange(block.id, e.target.value)}
//                         onFocus={() => setCurrentContentId(block.id)}
//                         placeholder="Write your content here..."
//                         variant="outlined"
//                         InputProps={{
//                           sx: { 
//                             minHeight: 100,
//                             fontFamily: block.fontFamily || fontFamilies[0].value,
//                             '& .MuiInputBase-input': {
//                               fontFamily: 'inherit',
//                             }
//                           }
//                         }}
//                       />
                      
//                       {/* Image Gallery */}
//                       {block.images && block.images.length > 0 && (
//                         <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
//                           <Typography variant="subtitle2">
//                             {block.images.length} {block.images.length === 1 ? 'Image' : 'Images'} Attached
//                           </Typography>
                          
//                           <Box sx={{ 
//                             display: 'flex', 
//                             flexWrap: 'wrap', 
//                             gap: 1,
//                             maxHeight: 220,
//                             overflowY: 'auto',
//                             p: 1,
//                             border: 1,
//                             borderColor: 'divider',
//                             borderRadius: 1
//                           }}>
//                             {block.images.map((image) => (
//                               <Box 
//                                 key={image.id} 
//                                 sx={{ 
//                                   position: 'relative',
//                                   width: 100,
//                                   height: 100,
//                                   borderRadius: 1,
//                                   overflow: 'hidden'
//                                 }}
//                               >
//                                 <img 
//                                   src={image.src} 
//                                   alt={image.alt} 
//                                   style={{ 
//                                     width: '100%',
//                                     height: '100%',
//                                     objectFit: 'cover'
//                                   }} 
//                                 />
//                                 <IconButton
//                                   size="small"
//                                   sx={{ 
//                                     position: 'absolute', 
//                                     top: 2, 
//                                     right: 2,
//                                     backgroundColor: 'rgba(255,255,255,0.7)',
//                                     width: 20,
//                                     height: 20,
//                                     '&:hover': {
//                                       backgroundColor: 'rgba(255,255,255,0.9)',
//                                     }
//                                   }}
//                                   onClick={() => handleRemoveBlockImage(block.id, image.id)}
//                                 >
//                                   ✕
//                                 </IconButton>
//                               </Box>
//                             ))}
//                           </Box>
//                         </Box>
//                       )}
                      
//                       <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
//                         <Button
//                           startIcon={<ImageIcon />}
//                           size="small"
//                           variant="outlined"
//                           onClick={() => blockImageInputRefs.current[block.id].current?.click()}
//                         >
//                           {block.images && block.images.length > 0 ? 'Add More Images' : 'Add Images'}
//                         </Button>
//                         <input
//                           type="file"
//                           ref={blockImageInputRefs.current[block.id]}
//                           style={{ display: 'none' }}
//                           accept="image/*"
//                           onChange={(e) => handleBlockImageUpload(block.id, e)}
//                           multiple // Allow selecting multiple images
//                         />
//                       </Box>
//                     </CardContent>
//                   </Card>
//                 );
//               } else if (block.type === 'image') {
//                 return (
//                   <Box key={block.id} sx={{ mb: 2, textAlign: 'center' }}>
//                     <img 
//                       src={block.src} 
//                       alt={block.alt} 
//                       style={{ maxWidth: '100%', maxHeight: 400 }} 
//                     />
//                   </Box>
//                 );
//               } else if (block.type === 'shape') {
//                 // Shape rendering code remains the same
//                 if (block.shapeType === 'rectangle') {
//                   return (
//                     <Box 
//                       key={block.id}
//                       sx={{ 
//                         width: block.width, 
//                         height: block.height, 
//                         backgroundColor: block.backgroundColor,
//                         mb: 2,
//                         mx: 'auto'
//                       }}
//                     />
//                   );
//                 } else if (block.shapeType === 'circle') {
//                   return (
//                     <Box 
//                       key={block.id}
//                       sx={{ 
//                         width: block.width, 
//                         height: block.height, 
//                         backgroundColor: block.backgroundColor,
//                         borderRadius: '50%',
//                         mb: 2,
//                         mx: 'auto'
//                       }}
//                     />
//                   );
//                 }
//               }
//               return null;
//             })}
//           </Box>
//         </Box>
//       );
  
//    // Slideshow component for multiple images
// const ImageSlideshow = ({ images, onImageClick }) => {
//     const [activeIndex, setActiveIndex] = useState(0);
    
//     const handleNext = (e) => {
//       e.stopPropagation();
//       setActiveIndex((prev) => (prev + 1) % images.length);
//     };
    
//     const handlePrev = (e) => {
//       e.stopPropagation();
//       setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
//     };
    
//     return (
//       <Box sx={{ position: 'relative', width: '100%' }}>
//         <Box
//           sx={{ 
//             position: 'relative',
//             borderRadius: 2,
//             overflow: 'hidden',
//             cursor: 'pointer'
//           }}
//           onClick={() => onImageClick(images, activeIndex)}
//         >
//           <img 
//             src={images[activeIndex].src} 
//             alt={images[activeIndex].alt}
//             style={{ 
//               width: '100%',
//               maxHeight: 400,
//               objectFit: 'cover'
//             }}
//           />
          
//           {images.length > 1 && (
//             <>
//               <IconButton
//                 sx={{
//                   position: 'absolute',
//                   left: 8,
//                   top: '50%',
//                   transform: 'translateY(-50%)',
//                   backgroundColor: 'rgba(255,255,255,0.7)',
//                   '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' }
//                 }}
//                 onClick={handlePrev}
//               >
//                 {'<'}
//               </IconButton>
//               <IconButton
//                 sx={{
//                   position: 'absolute',
//                   right: 8,
//                   top: '50%',
//                   transform: 'translateY(-50%)',
//                   backgroundColor: 'rgba(255,255,255,0.7)',
//                   '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' }
//                 }}
//                 onClick={handleNext}
//               >
//                 {'>'}
//               </IconButton>
//               <Box sx={{
//                 position: 'absolute',
//                 bottom: 8,
//                 left: '50%',
//                 transform: 'translateX(-50%)',
//                 display: 'flex',
//                 gap: 0.5
//               }}>
//                 {images.map((_, i) => (
//                   <Box
//                     key={i}
//                     sx={{
//                       width: 8,
//                       height: 8,
//                       borderRadius: '50%',
//                       backgroundColor: i === activeIndex ? 'white' : 'rgba(255,255,255,0.5)'
//                     }}
//                   />
//                 ))}
//               </Box>
//             </>
//           )}
//         </Box>
//       </Box>
//     );
//   };
  
//   // Image lightbox component
//   const ImageLightbox = ({ open, images, activeIndex, onClose }) => {
//     const [currentIndex, setCurrentIndex] = useState(activeIndex);
    
//     const handleNext = () => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     };
    
//     const handlePrev = () => {
//       setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
//     };
    
//     if (!open) return null;
    
//     return (
//       <Box sx={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: 'rgba(0,0,0,0.9)',
//         zIndex: 9999,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         flexDirection: 'column'
//       }}>
//         <Box sx={{ position: 'relative', width: '80%', height: '80%' }}>
//           <img 
//             src={images[currentIndex].src}
//             alt={images[currentIndex].alt}
//             style={{
//               maxWidth: '100%',
//               maxHeight: '100%',
//               objectFit: 'contain',
//               margin: '0 auto',
//               display: 'block'
//             }}
//           />
          
//           {images.length > 1 && (
//             <>
//               <IconButton
//                 sx={{
//                   position: 'absolute',
//                   left: -60,
//                   top: '50%',
//                   transform: 'translateY(-50%)',
//                   color: 'white',
//                   fontSize: 40
//                 }}
//                 onClick={handlePrev}
//               >
//                 {'<'}
//               </IconButton>
//               <IconButton
//                 sx={{
//                   position: 'absolute',
//                   right: -60,
//                   top: '50%',
//                   transform: 'translateY(-50%)',
//                   color: 'white',
//                   fontSize: 40
//                 }}
//                 onClick={handleNext}
//               >
//                 {'>'}
//               </IconButton>
//             </>
//           )}
//         </Box>
        
//         <Typography sx={{ color: 'white', mt: 2 }}>
//           {currentIndex + 1} / {images.length}
//         </Typography>
        
//         <IconButton
//           sx={{
//             position: 'absolute',
//             top: 16,
//             right: 16,
//             color: 'white'
//           }}
//           onClick={onClose}
//         >
//           ✕
//         </IconButton>
//       </Box>
//     );
//   };
  
//   const BlogPreview = () => {
//     const [lightbox, setLightbox] = useState({
//       open: false,
//       images: [],
//       activeIndex: 0
//     });
    
//     const openLightbox = (images, index) => {
//       setLightbox({
//         open: true,
//         images,
//         activeIndex: index
//       });
//     };
    
//     const closeLightbox = () => {
//       setLightbox({
//         ...lightbox,
//         open: false
//       });
//     };
    
//     return (
//       <Box sx={{ p: 3 }}>
//         {post.coverImage && (
//           <Box
//             sx={{
//               width: '100%',
//               height: 300,
//               backgroundImage: `url(${post.coverImage})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               borderRadius: 2,
//               mb: 3
//             }}
//           />
//         )}
        
//         <Typography variant="h3" gutterBottom>
//           {post.title || 'Untitled Blog Post'}
//         </Typography>
        
//         <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
//           <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" />
//           <Typography variant="subtitle1">
//             John Doe • {formatDate(post.publishDate)}
//           </Typography>
//         </Box>
  
//         {post.category && (
//           <Chip 
//             label={categories.find(cat => cat.value === post.category)?.label || post.category} 
//             color="primary" 
//             sx={{ mb: 2 }}
//           />
//         )}
  
//         {post.tags.length > 0 && (
//           <Box sx={{ mb: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
//             {post.tags.map(tag => (
//               <Chip key={tag} label={tag} size="small" />
//             ))}
//           </Box>
//         )}
  
//         {post.contentBlocks.map((block, index) => {
//           if (block.type === 'text') {
//             const hasImages = block.images && block.images.length > 0;
//             const isEven = index % 2 === 0;
            
//             return (
//               <Box 
//                 key={block.id} 
//                 sx={{ 
//                   mb: 6, 
//                   display: 'flex',
//                   flexDirection: {
//                     xs: 'column', // Stack on mobile
//                     md: hasImages ? (isEven ? 'row' : 'row-reverse') : 'column' // Alternating layout on desktop if there are images
//                   },
//                   gap: 3,
//                   alignItems: 'center'
//                 }}
//               >
//                 <Box sx={{ 
//                   flex: hasImages ? '1 1 50%' : '1 1 100%',
//                   width: '100%'
//                 }}>
//                   <Typography 
//                     variant="body1" 
//                     sx={{ 
//                       mb: 2,
//                       fontFamily: block.fontFamily || 'inherit',
//                       "& span": { fontFamily: 'inherit' }
//                     }}
//                     dangerouslySetInnerHTML={{ __html: block.content || 'No content' }}
//                   />
//                 </Box>
                
//                 {hasImages && (
//                   <Box sx={{ 
//                     flex: '1 1 50%',
//                     width: '100%',
//                   }}>
//                     <ImageSlideshow 
//                       images={block.images} 
//                       onImageClick={openLightbox}
//                     />
//                   </Box>
//                 )}
//               </Box>
//             );
//           } else if (block.type === 'shape') {
//             // Shape rendering code remains the same
//             if (block.shapeType === 'rectangle') {
//               return (
//                 <Box 
//                   key={block.id}
//                   sx={{ 
//                     width: block.width, 
//                     height: block.height, 
//                     backgroundColor: block.backgroundColor,
//                     mb: 4,
//                     mx: 'auto'
//                   }}
//                 />
//               );
//             } else if (block.shapeType === 'circle') {
//               return (
//                 <Box 
//                   key={block.id}
//                   sx={{ 
//                     width: block.width, 
//                     height: block.height, 
//                     backgroundColor: block.backgroundColor,
//                     borderRadius: '50%',
//                     mb: 4,
//                     mx: 'auto'
//                   }}
//                 />
//               );
//             }
//           }
//           return null;
//         })}
        
//         {/* Lightbox for fullscreen image view */}
//         <ImageLightbox 
//           open={lightbox.open} 
//           images={lightbox.images} 
//           activeIndex={lightbox.activeIndex} 
//           onClose={closeLightbox}
//         />
//       </Box>
//     );
//   };
  
//     const Sidebar = () => (
//       <Box sx={{ width: isMobile ? '100%' : 300, ml: isMobile ? 0 : 3 }}>
//         <Paper sx={{ p: 2, mb: 2 }}>
//           <Button
//             fullWidth
//             variant="contained"
//             color="primary"
//             startIcon={<Save />}
//             sx={{ mb: 1 }}
//             onClick={() => handleSaveOrPublish(false)}
//           >
//             Save Draft
//           </Button>
//           <Button
//             fullWidth
//             variant="contained"
//             color="secondary"
//             onClick={() => handleSaveOrPublish(true)}
//           >
//             Publish
//           </Button>
//         </Paper>
  
//         <Paper sx={{ p: 2, mb: 2 }}>
//           <FormControl fullWidth sx={{ mb: 2 }} error={errors.category} required>
//             <InputLabel>Category</InputLabel>
//             <Select
//               value={post.category}
//               label="Category"
//               onChange={(e) => handlePostChange('category', e.target.value)}
//             >
//               {categories.map(category => (
//                 <MenuItem key={category.value} value={category.value}>
//                   {category.label}
//                 </MenuItem>
//               ))}
//             </Select>
//             {errors.category && (
//               <FormHelperText>Category is required</FormHelperText>
//             )}
//           </FormControl>
  
//           <Box sx={{ mb: 2 }}>
//             <TextField
//               fullWidth
//               label="Add Tags"
//               placeholder="Type and press Enter"
//               onKeyDown={handleTagInput}
//               helperText="Press Enter to add a tag"
//             />
            
//             {post.tags.length > 0 && (
//               <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
//                 {post.tags.map((tag) => (
//                   <Chip 
//                     key={tag} 
//                     label={tag} 
//                     size="small" 
//                     onDelete={() => handleRemoveTag(tag)}
//                   />
//                 ))}
//               </Box>
//             )}
//           </Box>
  
//           <Box sx={{ mb: 2 }}>
//             <Button
//               variant="outlined"
//               startIcon={<Upload />}
//               onClick={() => fileInputRef.current?.click()}
//               fullWidth
//             >
//               Upload Cover Image
//             </Button>
//             <input
//               type="file"
//               ref={fileInputRef}
//               style={{ display: 'none' }}
//               accept="image/*"
//               onChange={handleCoverImageUpload}
//             />
            
//             {post.coverImage && (
//               <Box sx={{ mt: 1, textAlign: 'center' }}>
//                 <img 
//                   src={post.coverImage} 
//                   alt="Cover Preview" 
//                   style={{ 
//                     maxWidth: '100%', 
//                     maxHeight: 150, 
//                     objectFit: 'cover',
//                     borderRadius: theme.shape.borderRadius
//                   }} 
//                 />
//               </Box>
//             )}
//           </Box>
  
//           <TextField
//             fullWidth
//             label="Schedule Publication"
//             type="datetime-local"
//             value={post.publishDate}
//             onChange={(e) => handlePostChange('publishDate', e.target.value)}
//             InputLabelProps={{ shrink: true }}
//             sx={{ mb: 2 }}
//           />
  
//           <FormControlLabel
//             control={
//               <Switch
//                 checked={post.isDraft}
//                 onChange={(e) => handlePostChange('isDraft', e.target.checked)}
//               />
//             }
//             label="Save as draft"
//           />
//         </Paper>
  
//         <Paper sx={{ p: 2 }}>
//           <Typography variant="subtitle2" gutterBottom>
//             SEO Settings
//           </Typography>
//           <TextField
//             fullWidth
//             label="Meta Description"
//             multiline
//             rows={3}
//             value={post.metaDescription}
//             onChange={(e) => handlePostChange('metaDescription', e.target.value)}
//             helperText={`${post.metaDescription.length}/160 characters`}
//           />
//         </Paper>
//       </Box>
//     );
  
//     return (
//       <Container maxWidth="xl" sx={{ py: 4 }}>
//         <Navbar />
        
//         {/* Styled Header Section */}
//         <Box 
//           sx={{ 
//             backgroundColor: theme.palette.primary.main, 
//             color: 'white',
//             p: 4,
//             borderRadius: 2,
//             mb: 4,
//             mt: 4,
//             boxShadow: 3,
//             background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
//             position: 'relative',
//             overflow: 'hidden'
//           }}
//         >
//           <Box sx={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             opacity: 0.05,
//             background: 'url("https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
//             backgroundSize: 'cover',
//             zIndex: 0
//           }} />
          
//           <Box sx={{ position: 'relative', zIndex: 1 }}>
//             <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
//               Create New Blog Post
//             </Typography>
//             <Typography variant="subtitle1" sx={{ mt: 1, opacity: 0.9 }}>
//               Share your ideas with the world. Start writing below.
//             </Typography>
//           </Box>
//         </Box>
        
//         <Box sx={{ mb: 3, display: 'flex', justifyContent: 'flex-end' }}>
//           <Button
//             variant="contained"
//             startIcon={isPreview ? <EditNote /> : <Visibility />}
//             onClick={() => setIsPreview(!isPreview)}
//           >
//             {isPreview ? 'Edit' : 'Preview'}
//           </Button>
//         </Box>
  
//         <Box sx={{ 
//           display: 'flex', 
//           flexDirection: isMobile ? 'column' : 'row',
//           gap: isMobile ? 2 : 0
//         }}>
//           <Paper sx={{ flex: 1, overflow: 'hidden' }}>
//             {isPreview ? <BlogPreview /> : <BlogEditor />}
//           </Paper>
//           <Sidebar />
//         </Box>
//       </Container>
//     );
//   };
  
//   export default BlogCreation;


//=================================================



// import { EditNote, Visibility } from '@mui/icons-material';
// import { Box, Button, Container, useMediaQuery, useTheme } from '@mui/material';
// import React, { useState } from 'react';

// // Import components
// import BlogEditor from './blog/BlogEditor';
// import BlogHeader from './blog/BlogHeader';
// import BlogPreview from './blog/BlogPreview';
// import BlogSidebar from './blog/BlogSidebar';
// import Navbar from './Navbar';

// // Import data
// import { categories, fontFamilies, initialPost } from '../Data/blogData';

// const BlogCreation = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const [isPreview, setIsPreview] = useState(false);

//   // Main blog post state
//   const [post, setPost] = useState(initialPost);

//   // Text formatting state
//   const [formatting, setFormatting] = useState({
//     bold: false,
//     italic: false,
//     underline: false
//   });

//   // Error tracking state
//   const [errors, setErrors] = useState({
//     title: false,
//     category: false
//   });

//   // Lightbox state for image preview
//   const [lightbox, setLightbox] = useState({
//     open: false,
//     images: [],
//     activeIndex: 0
//   });

//   // Current editing content block ID
//   const [currentContentId, setCurrentContentId] = useState(null);

//   // Handle main post changes
//   const handlePostChange = (field, value) => {
//     setPost(prev => ({
//       ...prev,
//       [field]: value
//     }));

//     // Clear error if field is being filled
//     if (field === 'title' || field === 'category') {
//       if (value) {
//         setErrors(prev => ({
//           ...prev,
//           [field]: false
//         }));
//       }
//     }
//   };

//   // Handle tag management
//   const handleTagInput = (event) => {
//     if (event.key === 'Enter' && event.target.value.trim()) {
//       const newTag = event.target.value.trim();
//       if (!post.tags.includes(newTag)) {
//         setPost(prev => ({
//           ...prev,
//           tags: [...prev.tags, newTag]
//         }));
//       }
//       event.target.value = '';
//     }
//   };

//   const handleRemoveTag = (tagToRemove) => {
//     setPost(prev => ({
//       ...prev,
//       tags: prev.tags.filter(tag => tag !== tagToRemove)
//     }));
//   };

//   // Toggle text formatting
//   const toggleFormatting = (type) => {
//     setFormatting(prev => ({
//       ...prev,
//       [type]: !prev[type]
//     }));
    
//     // Apply formatting to selected text
//     applyFormattingToSelectedText(type);
//   };

//   // Apply formatting to selected text
//   const applyFormattingToSelectedText = (type) => {
//     const selection = window.getSelection();
//     if (selection.rangeCount > 0 && currentContentId) {
//       const range = selection.getRangeAt(0);
//       const selectedText = range.toString();
      
//       if (selectedText.length > 0) {
//         const updatedBlocks = post.contentBlocks.map(block => {
//           if (block.id === currentContentId && block.type === 'text') {
//             let newContent = block.content;
//             const tag = type === 'bold' ? 'strong' : 
//                         type === 'italic' ? 'em' : 
//                         type === 'underline' ? 'u' : '';
            
//             if (tag) {
//               // Toggle formatting
//               if (formatting[type]) {
//                 // Remove formatting
//                 const regex = new RegExp(`<${tag}>${selectedText}</${tag}>`, 'g');
//                 newContent = newContent.replace(regex, selectedText);
//               } else {
//                 // Add formatting
//                 newContent = newContent.replace(
//                   selectedText, 
//                   `<${tag}>${selectedText}</${tag}>`
//                 );
//               }
              
//               return { ...block, content: newContent };
//             }
//           }
//           return block;
//         });
        
//         setPost(prev => ({ ...prev, contentBlocks: updatedBlocks }));
//       }
//     }
//   };

//   // Set block font family
//   const handleBlockFontFamilyChange = (blockId, fontFamily) => {
//     setPost(prev => ({
//       ...prev,
//       contentBlocks: prev.contentBlocks.map(block => 
//         block.id === blockId ? { ...block, fontFamily } : block
//       )
//     }));
//   };

//   // Add new content block
//   const handleAddContentBlock = (type = 'text') => {
//     const newBlock = {
//       type,
//       content: '',
//       id: Date.now(),
//       images: [],
//       fontFamily: fontFamilies[0].value
//     };
    
//     setPost(prev => ({
//       ...prev,
//       contentBlocks: [...prev.contentBlocks, newBlock]
//     }));
//   };

//   // Edit content block text
//   const handleContentBlockChange = (id, content) => {
//     setPost(prev => ({
//       ...prev,
//       contentBlocks: prev.contentBlocks.map(block => 
//         block.id === id && block.type === 'text' ? { ...block, content } : block
//       )
//     }));
//   };

//   // Handle adding shapes
//   const handleAddShape = (shape) => {
//     // Add a new shape block
//     const newShapeBlock = {
//       type: 'shape',
//       shapeType: shape,
//       id: Date.now(),
//       width: 100,
//       height: 100,
//       backgroundColor: '#e0e0e0'
//     };
    
//     setPost(prev => ({
//       ...prev,
//       contentBlocks: [...prev.contentBlocks, newShapeBlock]
//     }));
//   };

//   // Handle cover image upload
//   const handleCoverImageUpload = (file) => {
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setPost(prev => ({
//         ...prev,
//         coverImage: imageUrl,
//         coverImageFile: file
//       }));
//     }
//   };

//   // Handle block images upload
//   const handleBlockImageUpload = (blockId, files) => {
//     if (files && files.length > 0) {
//       const updatedBlocks = [...post.contentBlocks];
//       const blockIndex = updatedBlocks.findIndex(block => block.id === blockId);
      
//       if (blockIndex !== -1) {
//         const existingImages = updatedBlocks[blockIndex].images || [];
        
//         const newImages = Array.from(files).map((file, i) => ({
//           src: URL.createObjectURL(file),
//           alt: file.name,
//           id: Date.now() + i
//         }));
        
//         updatedBlocks[blockIndex] = {
//           ...updatedBlocks[blockIndex],
//           images: [...existingImages, ...newImages]
//         };
        
//         setPost(prev => ({
//           ...prev,
//           contentBlocks: updatedBlocks
//         }));
//       }
//     }
//   };

//   // Remove block image
//   const handleRemoveBlockImage = (blockId, imageId) => {
//     setPost(prev => ({
//       ...prev,
//       contentBlocks: prev.contentBlocks.map(block => 
//         block.id === blockId ? 
//           { ...block, images: block.images.filter(img => img.id !== imageId) } : 
//           block
//       )
//     }));
//   };

//   // Handle lightbox for image preview
//   const handleOpenLightbox = (images, index) => {
//     setLightbox({
//       open: true,
//       images,
//       activeIndex: index
//     });
//   };

//   const handleCloseLightbox = () => {
//     setLightbox({
//       ...lightbox,
//       open: false
//     });
//   };

//   // Save or publish blog post
//   const handleSaveOrPublish = (publish = false) => {
//     // Validate required fields
//     const newErrors = {
//       title: !post.title.trim(),
//       category: !post.category
//     };
    
//     setErrors(newErrors);
    
//     if (!newErrors.title && !newErrors.category) {
//       setPost(prev => ({
//         ...prev,
//         isDraft: !publish
//       }));
      
//       console.log('Saving post:', { ...post, isDraft: !publish });
//       alert(`Blog post ${publish ? 'published' : 'saved as draft'} successfully!`);
//     } else {
//       alert('Please fill in all required fields.');
//     }
//   };

//   return (
//     <Container maxWidth="xl" sx={{ py: 4 }}>
//       <Navbar />
      
//       {/* Header Section */}
//       <BlogHeader />
      
//       {/* Preview Toggle Button */}
//       <Box sx={{ mb: 3, display: 'flex', justifyContent: 'flex-end' }}>
//         <Button
//           variant="contained"
//           startIcon={isPreview ? <EditNote /> : <Visibility />}
//           onClick={() => setIsPreview(!isPreview)}
//           sx={{ 
//             transition: 'all 0.3s ease',
//             '&:hover': { transform: 'translateY(-2px)', boxShadow: 3 }
//           }}
//         >
//           {isPreview ? 'Edit' : 'Preview'}
//         </Button>
//       </Box>

//       {/* Main Content */}
//       <Box sx={{ 
//         display: 'flex', 
//         flexDirection: isMobile ? 'column' : 'row',
//         gap: isMobile ? 2 : 0,
//         transition: 'all 0.3s ease'
//       }}>
//         {/* Editor/Preview Area */}
//         <Box sx={{ 
//           flex: 1, 
//           overflow: 'hidden',
//           bgcolor: 'background.paper',
//           borderRadius: 1,
//           boxShadow: 2,
//           transition: 'all 0.3s ease'
//         }}>
//           {isPreview ? (
//             <BlogPreview 
//               post={post} 
//               onOpenLightbox={handleOpenLightbox}
//               lightbox={lightbox}
//               onCloseLightbox={handleCloseLightbox}
//             />
//           ) : (
//             <BlogEditor 
//               post={post}
//               formatting={formatting}
//               currentContentId={currentContentId}
//               onContentIdChange={setCurrentContentId}
//               onContentChange={handleContentBlockChange}
//               onToggleFormatting={toggleFormatting}
//               onFontFamilyChange={handleBlockFontFamilyChange}
//               onAddContentBlock={handleAddContentBlock}
//               onAddShape={handleAddShape}
//               onBlockImageUpload={handleBlockImageUpload}
//               onRemoveBlockImage={handleRemoveBlockImage}
//               errors={errors}
//               onTitleChange={(value) => handlePostChange('title', value)}
//             />
//           )}
//         </Box>
        
//         {/* Sidebar */}
//         <BlogSidebar 
//           post={post}
//           errors={errors}
//           isMobile={isMobile}
//           onPostChange={handlePostChange}
//           onSaveOrPublish={handleSaveOrPublish}
//           onCoverImageUpload={handleCoverImageUpload}
//           onTagInput={handleTagInput}
//           onRemoveTag={handleRemoveTag}
//           categories={categories}
//         />
//       </Box>
//     </Container>
//   );
// };

// export default BlogCreation;


//=================================


// import {
//   DeleteOutline,
//   Image as ImageIcon,
//   InfoOutlined,
//   Publish,
//   Save,
//   VisibilityOutlined
// } from '@mui/icons-material';
// import {
//   Alert,
//   Backdrop,
//   Box,
//   Button,
//   Chip,
//   CircularProgress,
//   Container,
//   Divider,
//   FormControl,
//   IconButton,
//   InputLabel,
//   MenuItem,
//   Paper,
//   Select,
//   Snackbar,
//   Tab,
//   Tabs,
//   TextField,
//   Tooltip,
//   Typography,
//   useMediaQuery,
//   useTheme
// } from '@mui/material';
// import { AnimatePresence, motion } from 'framer-motion';
// import React, { useState } from 'react';
// import { categories } from '../Data/blogData';
// import BlogPreview from './Blog/BlogPreview';
// import Navbar from './Navbar';
// import EnhancedTiptapEditor from './TiptapEditor';

// const BlogCreation = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const [activeTab, setActiveTab] = useState(0);
//   const [isPreview, setIsPreview] = useState(false);
//   const [isSaving, setIsSaving] = useState(false);
//   const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });
//   const [post, setPost] = useState({
//     title: '',
//     content: '',
//     category: '',
//     tags: [],
//     coverImage: '',
//     isDraft: true,
//   });

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { 
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1 }
//   };

//   const handleContentChange = (newContent) => {
//     setPost((prev) => ({ ...prev, content: newContent }));
//   };

//   const handleTagInput = (event) => {
//     if (event.key === 'Enter' && event.target.value.trim()) {
//       const newTag = event.target.value.trim();
//       if (!post.tags.includes(newTag) && post.tags.length < 10) {
//         setPost((prev) => ({
//           ...prev,
//           tags: [...prev.tags, newTag],
//         }));
        
//         // Show tag added notification
//         setNotification({
//           open: true,
//           message: `Tag "${newTag}" added!`,
//           severity: 'success'
//         });
//       } else if (post.tags.length >= 10) {
//         setNotification({
//           open: true,
//           message: 'Maximum 10 tags allowed',
//           severity: 'warning'
//         });
//       }
//       event.target.value = '';
//     }
//   };

//   const handleRemoveTag = (tagToRemove) => {
//     setPost((prev) => ({
//       ...prev,
//       tags: prev.tags.filter((tag) => tag !== tagToRemove),
//     }));
//   };

//   const handleCoverImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       if (file.size > 5000000) { // 5MB limit
//         setNotification({
//           open: true,
//           message: 'Image size should be less than 5MB',
//           severity: 'error'
//         });
//         return;
//       }
      
//       const imageUrl = URL.createObjectURL(file);
//       setPost((prev) => ({
//         ...prev,
//         coverImage: imageUrl,
//       }));
      
//       setNotification({
//         open: true,
//         message: 'Cover image uploaded successfully!',
//         severity: 'success'
//       });
//     }
//   };

//   const handleSaveDraft = () => {
//     if (!post.title) {
//       setNotification({
//         open: true,
//         message: 'Please add a title to your post',
//         severity: 'warning'
//       });
//       return;
//     }
    
//     setIsSaving(true);
//     // Simulate saving
//     setTimeout(() => {
//       setIsSaving(false);
//       setNotification({
//         open: true,
//         message: 'Draft saved successfully!',
//         severity: 'success'
//       });
//       console.log('Saving post:', post);
//     }, 1500);
//   };

//   const handlePublish = () => {
//     if (!post.title || !post.content || !post.category || !post.coverImage) {
//       setNotification({
//         open: true,
//         message: 'Please fill in all required fields before publishing',
//         severity: 'error'
//       });
//       return;
//     }
    
//     setIsSaving(true);
//     // Simulate publishing
//     setTimeout(() => {
//       setIsSaving(false);
//       setNotification({
//         open: true,
//         message: 'Post published successfully!',
//         severity: 'success'
//       });
//       setPost(prev => ({ ...prev, isDraft: false }));
//     }, 2000);
//   };

//   const handleRemoveCoverImage = () => {
//     setPost(prev => ({ ...prev, coverImage: '' }));
//   };

//   const handleCloseNotification = () => {
//     setNotification(prev => ({ ...prev, open: false }));
//   };

//   const wordCount = post.content ? post.content.replace(/<[^>]*>/g, ' ').trim().split(/\s+/).length : 0;
//   const readTime = Math.max(1, Math.ceil(wordCount / 200)); // Assuming average reading speed of 200 words per minute

//   return (
//     <Container maxWidth="xl" sx={{ py: 8 }}>
//       <Navbar />
      
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Paper
//           elevation={3}
//           sx={{
//             p: { xs: 3, md: 4 },
//             mb: 4,
//             background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
//             color: 'white',
//             position: 'relative',
//             overflow: 'hidden',
//             borderRadius: 2,
//             display: 'flex',
//             flexDirection: { xs: 'column', md: 'row' },
//             alignItems: 'center',
//             justifyContent: 'space-between'
//           }}
//         >
//           <Box>
//             <motion.div
//               initial={{ scale: 0.95, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Typography variant="h3" gutterBottom fontWeight="bold">
//                 Create Your Blog Post
//               </Typography>
//               <Typography variant="h6" sx={{ opacity: 0.9 }}>
//                 Share your thoughts with the world
//               </Typography>
//             </motion.div>
//           </Box>
          
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//           >
//             <Box sx={{ 
//               display: 'flex',
//               gap: 2,
//               mt: { xs: 2, md: 0 }
//             }}>
//               <Tooltip title="Save as draft">
//                 <Button 
//                   variant="contained" 
//                   color="secondary"
//                   startIcon={<Save />}
//                   onClick={handleSaveDraft}
//                   disabled={isSaving}
//                 >
//                   Save
//                 </Button>
//               </Tooltip>
              
//               <Tooltip title="Publish your post">
//                 <Button 
//                   variant="contained" 
//                   color="secondary"
//                   startIcon={<Publish />}
//                   onClick={handlePublish}
//                   disabled={isSaving}
//                   sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.100' } }}
//                 >
//                   Publish
//                 </Button>
//               </Tooltip>
//             </Box>
//           </motion.div>
          
//           {/* Animated background shape */}
//           <Box sx={{
//             position: 'absolute',
//             width: '300px',
//             height: '300px',
//             borderRadius: '50%',
//             backgroundColor: 'rgba(255,255,255,0.1)',
//             bottom: '-150px',
//             right: '-100px',
//             zIndex: 0
//           }} />
//         </Paper>
//       </motion.div>

//       <Box sx={{ display: 'flex', gap: 3, flexDirection: isMobile ? 'column' : 'row' }}>
//         <Box 
//           component={motion.div}
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           sx={{ flex: 1 }}
//         >
//           <motion.div variants={itemVariants}>
//             <Paper 
//               elevation={2} 
//               sx={{ 
//                 p: 3, 
//                 mb: 3,
//                 borderRadius: 2,
//                 transition: 'all 0.3s ease-in-out'
//               }}
//             >
//               <TextField
//                 fullWidth
//                 label="Blog Title"
//                 variant="outlined"
//                 value={post.title}
//                 onChange={(e) => setPost((prev) => ({ ...prev, title: e.target.value }))}
//                 placeholder="Enter an attention-grabbing title..."
//                 InputProps={{
//                   sx: {
//                     fontSize: '1.2rem',
//                     '&:focus': {
//                       boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
//                     }
//                   }
//                 }}
//                 sx={{ 
//                   mb: 3,
//                   '& .MuiOutlinedInput-root': {
//                     transition: 'all 0.3s ease'
//                   },
//                   '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
//                     borderColor: theme.palette.primary.light
//                   }
//                 }}
//               />

//               <Box sx={{ mb: 2 }}>
//                 <Tabs 
//                   value={isPreview ? 1 : 0} 
//                   onChange={(_, newValue) => setIsPreview(Boolean(newValue))}
//                   sx={{ mb: 2 }}
//                 >
//                   <Tab label="Editor" />
//                   <Tab label="Preview" />
//                 </Tabs>
//               </Box>

//               <AnimatePresence mode="wait">
//               {!isPreview ? (
//   <motion.div
//     key="editor"
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     exit={{ opacity: 0 }}
//     transition={{ duration: 0.25 }}
//   >
//     <EnhancedTiptapEditor content={post.content} onChange={handleContentChange} />
//   </motion.div>
// ) : (
//   <motion.div
//     key="preview"
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     exit={{ opacity: 0 }}
//     transition={{ duration: 0.25 }}
//   >
//     <Paper 
//       elevation={1} 
//       sx={{ 
//         p: 3, 
//         minHeight: '400px', 
//         borderRadius: 1,
//         bgcolor: 'grey.50'
//       }}
//     >
//       <BlogPreview post={post} />
//     </Paper>
//   </motion.div>
// )}
//               </AnimatePresence>
              
//               <Box sx={{ 
//                 display: 'flex', 
//                 justifyContent: 'space-between', 
//                 alignItems: 'center', 
//                 mt: 2,
//                 color: 'text.secondary',
//                 fontSize: '0.9rem'
//               }}>
//                 <Typography variant="body2">
//                   {wordCount} words · {readTime} min read
//                 </Typography>
//                 <Typography variant="body2">
//                   {post.isDraft ? 'Draft' : 'Ready to publish'}
//                 </Typography>
//               </Box>
//             </Paper>
//           </motion.div>
//         </Box>

//         <Box
//           component={motion.div}
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           sx={{ width: isMobile ? '100%' : '350px' }}
//         >
//           <motion.div variants={itemVariants}>
//             <Paper elevation={2} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
//               <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                 <InfoOutlined fontSize="small" />
//                 Post Settings
//               </Typography>
//               <Divider sx={{ mb: 3 }} />
              
//               <FormControl fullWidth sx={{ mb: 3 }}>
//                 <InputLabel>Category</InputLabel>
//                 <Select
//                   value={post.category}
//                   label="Category"
//                   onChange={(e) => setPost((prev) => ({ ...prev, category: e.target.value }))}
//                   sx={{
//                     '& .MuiSelect-select': {
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: 1
//                     }
//                   }}
//                   MenuProps={{
//                     PaperProps: {
//                       sx: {
//                         maxHeight: 300,
//                         '& .MuiMenuItem-root': {
//                           transition: 'background-color 0.2s ease',
//                           display: 'flex',
//                           alignItems: 'center',
//                           gap: 1
//                         }
//                       }
//                     }
//                   }}
//                 >
//                   {categories.map((category) => (
//                     <MenuItem key={category.value} value={category.value}>
//                       {category.icon && React.cloneElement(category.icon, { fontSize: 'small' })}
//                       {category.label}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>

//               <TextField
//                 fullWidth
//                 label="Add Tags"
//                 placeholder="Press Enter to add tags"
//                 onKeyDown={handleTagInput}
//                 helperText={`${post.tags.length}/10 tags added`}
//                 sx={{ mb: 2 }}
//                 InputProps={{
//                   endAdornment: (
//                     <Tooltip title="Add up to 10 tags to improve discoverability">
//                       <InfoOutlined color="action" fontSize="small" sx={{ cursor: 'help' }} />
//                     </Tooltip>
//                   )
//                 }}
//               />

//               <Box sx={{ 
//                 display: 'flex', 
//                 flexWrap: 'wrap', 
//                 gap: 1, 
//                 mb: 3,
//                 minHeight: '50px'
//               }}>
//                 <AnimatePresence>
//                   {post.tags.map((tag) => (
//                     <motion.div
//                       key={tag}
//                       initial={{ scale: 0, opacity: 0 }}
//                       animate={{ scale: 1, opacity: 1 }}
//                       exit={{ scale: 0, opacity: 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <Chip
//                         label={tag}
//                         onDelete={() => handleRemoveTag(tag)}
//                         color="primary"
//                         variant="outlined"
//                         sx={{ 
//                           transition: 'all 0.2s ease',
//                           '&:hover': {
//                             backgroundColor: 'primary.light',
//                             color: 'white'
//                           }
//                         }}
//                       />
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
                
//                 {post.tags.length === 0 && (
//                   <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
//                     No tags added yet
//                   </Typography>
//                 )}
//               </Box>

//               <Typography variant="subtitle1" gutterBottom>
//                 Cover Image
//               </Typography>
              
//               <AnimatePresence mode="wait">
//                 {!post.coverImage ? (
//                   <motion.div
//                     key="upload-button"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                   >
//                     <Button
//                       fullWidth
//                       variant="outlined"
//                       startIcon={<ImageIcon />}
//                       component="label"
//                       sx={{ 
//                         mb: 2,
//                         height: '100px',
//                         border: '2px dashed',
//                         borderColor: 'divider',
//                         '&:hover': {
//                           borderColor: 'primary.main',
//                           backgroundColor: 'rgba(0, 0, 0, 0.04)'
//                         }
//                       }}
//                     >
//                       Upload Cover Image
//                       <input type="file" hidden accept="image/*" onChange={handleCoverImageUpload} />
//                     </Button>
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="image-preview"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                   >
//                     <Box sx={{ mt: 2, position: 'relative' }}>
//                       <img
//                         src={post.coverImage}
//                         alt="Cover"
//                         style={{
//                           width: '100%',
//                           height: '200px',
//                           objectFit: 'cover',
//                           borderRadius: '8px',
//                         }}
//                       />
//                       <Box sx={{
//                         position: 'absolute',
//                         top: 0,
//                         right: 0,
//                         p: 1
//                       }}>
//                         <Tooltip title="Remove image">
//                           <IconButton
//                             onClick={handleRemoveCoverImage}
//                             size="small"
//                             sx={{
//                               bgcolor: 'rgba(0,0,0,0.5)',
//                               color: 'white',
//                               '&:hover': {
//                                 bgcolor: 'rgba(255,0,0,0.7)'
//                               }
//                             }}
//                           >
//                             <DeleteOutline fontSize="small" />
//                           </IconButton>
//                         </Tooltip>
//                       </Box>
//                     </Box>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
              
//               <Divider sx={{ my: 3 }} />
              
//               <Box sx={{ display: 'flex', gap: 2 }}>
//                 <Button
//                   fullWidth
//                   variant="contained"
//                   startIcon={<VisibilityOutlined />}
//                   onClick={() => setIsPreview(!isPreview)}
//                   color="info"
//                 >
//                   {isPreview ? 'Edit' : 'Preview'}
//                 </Button>
                
//                 <Button
//                   fullWidth
//                   variant="contained"
//                   startIcon={<Publish />}
//                   color="primary"
//                   onClick={handlePublish}
//                   disabled={isSaving}
//                 >
//                   Publish
//                 </Button>
//               </Box>
//             </Paper>
//           </motion.div>
          
//           <motion.div variants={itemVariants}>
//             <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
//               <Typography variant="subtitle1" gutterBottom>
//                 Publishing Tips
//               </Typography>
//               <Alert severity="info" sx={{ mb: 2 }}>
//                 Posts with images get 94% more views!
//               </Alert>
//               <Alert severity="success">
//                 Optimal post length: 1,500-2,000 words
//               </Alert>
//             </Paper>
//           </motion.div>
//         </Box>
//       </Box>
      
//       {/* Loading overlay */}
//       <Backdrop
//         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
//         open={isSaving}
//       >
//         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
//           <CircularProgress color="inherit" />
//           <Typography variant="body1">
//             {post.isDraft ? 'Saving your draft...' : 'Publishing your post...'}
//           </Typography>
//         </Box>
//       </Backdrop>
      
//       {/* Notifications */}
//       <Snackbar
//         open={notification.open}
//         autoHideDuration={4000}
//         onClose={handleCloseNotification}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//       >
//         <Alert 
//           onClose={handleCloseNotification} 
//           severity={notification.severity} 
//           variant="filled"
//           sx={{ width: '100%' }}
//         >
//           {notification.message}
//         </Alert>
//       </Snackbar>
//     </Container>
//   );
// };

// export default BlogCreation;

//=============================================


// import {
//   DeleteOutline,
//   Image as ImageIcon,
//   InfoOutlined,
//   Publish,
//   Save,
//   VisibilityOutlined
// } from '@mui/icons-material';
// import {
//   Alert,
//   Backdrop,
//   Box,
//   Button,
//   Chip,
//   CircularProgress,
//   Container,
//   Divider,
//   FormControl,
//   IconButton,
//   InputLabel,
//   MenuItem,
//   Paper,
//   Select,
//   Snackbar,
//   Tab,
//   Tabs,
//   TextField,
//   Tooltip,
//   Typography,
//   useMediaQuery,
//   useTheme
// } from '@mui/material';
// import axios from 'axios';
// import { AnimatePresence, motion } from 'framer-motion';
// import React, { useState } from 'react';
// import { categories } from '../Data/blogData';
// import BlogPreview from './Blog/BlogPreview';
// import Navbar from './Navbar';
// import EnhancedTiptapEditor from './TiptapEditor';

// const BlogCreation = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const [activeTab, setActiveTab] = useState(0);
//   const [isPreview, setIsPreview] = useState(false);
//   const [isSaving, setIsSaving] = useState(false);
//   const [isUploading, setIsUploading] = useState(false);
//   const [uploadStatus, setUploadStatus] = useState('');
//   const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });
//   const [post, setPost] = useState({
//     title: '',
//     content: '',
//     category: '',
//     tags: [],
//     coverImage: '',
//     isDraft: true,
//   });

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { 
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1 }
//   };

//   const handleContentChange = (newContent) => {
//     setPost((prev) => ({ ...prev, content: newContent }));
//   };

//   const handleTagInput = (event) => {
//     if (event.key === 'Enter' && event.target.value.trim()) {
//       const newTag = event.target.value.trim();
//       if (!post.tags.includes(newTag) && post.tags.length < 10) {
//         setPost((prev) => ({
//           ...prev,
//           tags: [...prev.tags, newTag],
//         }));
        
//         setNotification({
//           open: true,
//           message: `Tag "${newTag}" added!`,
//           severity: 'success'
//         });
//       } else if (post.tags.length >= 10) {
//         setNotification({
//           open: true,
//           message: 'Maximum 10 tags allowed',
//           severity: 'warning'
//         });
//       }
//       event.target.value = '';
//     }
//   };

//   const handleRemoveTag = (tagToRemove) => {
//     setPost((prev) => ({
//       ...prev,
//       tags: prev.tags.filter((tag) => tag !== tagToRemove),
//     }));
//   };

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
//       throw error;
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   const handleCoverImageUpload = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       if (file.size > 5000000) {
//         setNotification({
//           open: true,
//           message: 'Image size should be less than 5MB',
//           severity: 'error'
//         });
//         return;
//       }
      
//       try {
//         const imageUrl = await uploadToCloudinary(file);
//         setPost((prev) => ({
//           ...prev,
//           coverImage: imageUrl,
//         }));
        
//         setNotification({
//           open: true,
//           message: 'Cover image uploaded successfully!',
//           severity: 'success'
//         });
//       } catch (error) {
//         setNotification({
//           open: true,
//           message: 'Failed to upload cover image',
//           severity: 'error'
//         });
//       }
//     }
//   };

//   const handleRemoveCoverImage = () => {
//     setPost(prev => ({ ...prev, coverImage: '' }));
//   };

//   const getUserEmail = () => {
//     const email = sessionStorage.getItem('userEmail');
//     if (!email) {
//       throw new Error('User email not found in session');
//     }
//     return email;
//   };

//   const preparePostData = (isPublished = false) => {
//     const userEmail = getUserEmail();
    
//     // Format content according to your API requirements
//     const formattedContent = {
//       htmlContent: [post.content],
//       plainText: [post.content.replace(/<[^>]*>/g, '')],
//       metadata: {
//         wordCount: post.content ? post.content.replace(/<[^>]*>/g, ' ').trim().split(/\s+/).length : 0
//       }
//     };

//     return {
//       userEmail,
//       title: post.title,
//       coverImageUrl: post.coverImage,
//       content: formattedContent,
//       category: post.category,
//       tags: post.tags,
//       isPublished,
//       publishedAt: isPublished ? new Date().toISOString() : null
//     };
//   };

//   const handleSave = async (isPublished = false) => {
//     if (!post.title) {
//       setNotification({
//         open: true,
//         message: 'Please add a title to your post',
//         severity: 'warning'
//       });
//       return;
//     }

//     if (isPublished && (!post.content || !post.category || !post.coverImage)) {
//       setNotification({
//         open: true,
//         message: 'Please fill in all required fields before publishing',
//         severity: 'error'
//       });
//       return;
//     }

//     setIsSaving(true);
    
//     try {
//       const postData = preparePostData(isPublished);
//       const response = await axios.post('https://localhost:7163/api/Post', postData);
      
//       if (response.status === 200 || response.status === 201) {
//         setNotification({
//           open: true,
//           message: isPublished 
//             ? 'Post published successfully!' 
//             : 'Draft saved successfully!',
//           severity: 'success'
//         });
        
//         setPost(prev => ({ ...prev, isDraft: !isPublished }));
//       } else {
//         throw new Error('Failed to save post');
//       }
//     } catch (error) {
//       console.error('Error saving post:', error);
//       setNotification({
//         open: true,
//         message: error.response?.data?.message || error.message || 'Failed to save post',
//         severity: 'error'
//       });
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   const handleSaveDraft = () => {
//     handleSave(false);
//   };

//   const handlePublish = () => {
//     handleSave(true);
//   };

//   const handleCloseNotification = () => {
//     setNotification(prev => ({ ...prev, open: false }));
//   };

//   const wordCount = post.content ? post.content.replace(/<[^>]*>/g, ' ').trim().split(/\s+/).length : 0;
//   const readTime = Math.max(1, Math.ceil(wordCount / 200));

//   return (
//     <Container maxWidth="xl" sx={{ py: 8 }}>
//       <Navbar />
      
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Paper
//           elevation={3}
//           sx={{
//             p: { xs: 3, md: 4 },
//             mb: 4,
//             background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
//             color: 'white',
//             position: 'relative',
//             overflow: 'hidden',
//             borderRadius: 2,
//             display: 'flex',
//             flexDirection: { xs: 'column', md: 'row' },
//             alignItems: 'center',
//             justifyContent: 'space-between'
//           }}
//         >
//           <Box>
//             <motion.div
//               initial={{ scale: 0.95, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Typography variant="h3" gutterBottom fontWeight="bold">
//                 Create Your Blog Post
//               </Typography>
//               <Typography variant="h6" sx={{ opacity: 0.9 }}>
//                 Share your thoughts with the world
//               </Typography>
//             </motion.div>
//           </Box>
          
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//           >
//             <Box sx={{ 
//               display: 'flex',
//               gap: 2,
//               mt: { xs: 2, md: 0 }
//             }}>
//               <Tooltip title="Save as draft">
//                 <Button 
//                   variant="contained" 
//                   color="secondary"
//                   startIcon={<Save />}
//                   onClick={handleSaveDraft}
//                   disabled={isSaving || isUploading}
//                 >
//                   Save
//                 </Button>
//               </Tooltip>
              
//               <Tooltip title="Publish your post">
//                 <Button 
//                   variant="contained" 
//                   color="secondary"
//                   startIcon={<Publish />}
//                   onClick={handlePublish}
//                   disabled={isSaving || isUploading}
//                   sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.100' } }}
//                 >
//                   Publish
//                 </Button>
//               </Tooltip>
//             </Box>
//           </motion.div>
          
//           <Box sx={{
//             position: 'absolute',
//             width: '300px',
//             height: '300px',
//             borderRadius: '50%',
//             backgroundColor: 'rgba(255,255,255,0.1)',
//             bottom: '-150px',
//             right: '-100px',
//             zIndex: 0
//           }} />
//         </Paper>
//       </motion.div>

//       <Box sx={{ display: 'flex', gap: 3, flexDirection: isMobile ? 'column' : 'row' }}>
//         <Box 
//           component={motion.div}
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           sx={{ flex: 1 }}
//         >
//           <motion.div variants={itemVariants}>
//             <Paper 
//               elevation={2} 
//               sx={{ 
//                 p: 3, 
//                 mb: 3,
//                 borderRadius: 2,
//                 transition: 'all 0.3s ease-in-out'
//               }}
//             >
//               <TextField
//                 fullWidth
//                 label="Blog Title"
//                 variant="outlined"
//                 value={post.title}
//                 onChange={(e) => setPost((prev) => ({ ...prev, title: e.target.value }))}
//                 placeholder="Enter an attention-grabbing title..."
//                 InputProps={{
//                   sx: {
//                     fontSize: '1.2rem',
//                     '&:focus': {
//                       boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
//                     }
//                   }
//                 }}
//                 sx={{ 
//                   mb: 3,
//                   '& .MuiOutlinedInput-root': {
//                     transition: 'all 0.3s ease'
//                   },
//                   '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
//                     borderColor: theme.palette.primary.light
//                   }
//                 }}
//               />

//               <Box sx={{ mb: 2 }}>
//                 <Tabs 
//                   value={isPreview ? 1 : 0} 
//                   onChange={(_, newValue) => setIsPreview(Boolean(newValue))}
//                   sx={{ mb: 2 }}
//                 >
//                   <Tab label="Editor" />
//                   <Tab label="Preview" />
//                 </Tabs>
//               </Box>

//               <AnimatePresence mode="wait">
//                 {!isPreview ? (
//                   <motion.div
//                     key="editor"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.25 }}
//                   >
//                     <EnhancedTiptapEditor content={post.content} onChange={handleContentChange} />
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="preview"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.25 }}
//                   >
//                     <Paper 
//                       elevation={1} 
//                       sx={{ 
//                         p: 3, 
//                         minHeight: '400px', 
//                         borderRadius: 1,
//                         bgcolor: 'grey.50'
//                       }}
//                     >
//                       <BlogPreview post={post} />
//                     </Paper>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
              
//               <Box sx={{ 
//                 display: 'flex', 
//                 justifyContent: 'space-between', 
//                 alignItems: 'center', 
//                 mt: 2,
//                 color: 'text.secondary',
//                 fontSize: '0.9rem'
//               }}>
//                 <Typography variant="body2">
//                   {wordCount} words · {readTime} min read
//                 </Typography>
//                 <Typography variant="body2">
//                   {post.isDraft ? 'Draft' : 'Ready to publish'}
//                 </Typography>
//               </Box>
//             </Paper>
//           </motion.div>
//         </Box>

//         <Box
//           component={motion.div}
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           sx={{ width: isMobile ? '100%' : '350px' }}
//         >
//           <motion.div variants={itemVariants}>
//             <Paper elevation={2} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
//               <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                 <InfoOutlined fontSize="small" />
//                 Post Settings
//               </Typography>
//               <Divider sx={{ mb: 3 }} />
              
//               <FormControl fullWidth sx={{ mb: 3 }}>
//                 <InputLabel>Category</InputLabel>
//                 <Select
//                   value={post.category}
//                   label="Category"
//                   onChange={(e) => setPost((prev) => ({ ...prev, category: e.target.value }))}
//                   sx={{
//                     '& .MuiSelect-select': {
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: 1
//                     }
//                   }}
//                   MenuProps={{
//                     PaperProps: {
//                       sx: {
//                         maxHeight: 300,
//                         '& .MuiMenuItem-root': {
//                           transition: 'background-color 0.2s ease',
//                           display: 'flex',
//                           alignItems: 'center',
//                           gap: 1
//                         }
//                       }
//                     }
//                   }}
//                 >
//                   {categories.map((category) => (
//                     <MenuItem key={category.value} value={category.value}>
//                       {category.icon && React.cloneElement(category.icon, { fontSize: 'small' })}
//                       {category.label}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>

//               <TextField
//                 fullWidth
//                 label="Add Tags"
//                 placeholder="Press Enter to add tags"
//                 onKeyDown={handleTagInput}
//                 helperText={`${post.tags.length}/10 tags added`}
//                 sx={{ mb: 2 }}
//                 InputProps={{
//                   endAdornment: (
//                     <Tooltip title="Add up to 10 tags to improve discoverability">
//                       <InfoOutlined color="action" fontSize="small" sx={{ cursor: 'help' }} />
//                     </Tooltip>
//                   )
//                 }}
//               />

//               <Box sx={{ 
//                 display: 'flex', 
//                 flexWrap: 'wrap', 
//                 gap: 1, 
//                 mb: 3,
//                 minHeight: '50px'
//               }}>
//                 <AnimatePresence>
//                   {post.tags.map((tag) => (
//                     <motion.div
//                       key={tag}
//                       initial={{ scale: 0, opacity: 0 }}
//                       animate={{ scale: 1, opacity: 1 }}
//                       exit={{ scale: 0, opacity: 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <Chip
//                         label={tag}
//                         onDelete={() => handleRemoveTag(tag)}
//                         color="primary"
//                         variant="outlined"
//                         sx={{ 
//                           transition: 'all 0.2s ease',
//                           '&:hover': {
//                             backgroundColor: 'primary.light',
//                             color: 'white'
//                           }
//                         }}
//                       />
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
                
//                 {post.tags.length === 0 && (
//                   <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
//                     No tags added yet
//                   </Typography>
//                 )}
//               </Box>

//               <Typography variant="subtitle1" gutterBottom>
//                 Cover Image
//               </Typography>
              
//               <AnimatePresence mode="wait">
//                 {!post.coverImage ? (
//                   <motion.div
//                     key="upload-button"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                   >
//                     <Button
//                       fullWidth
//                       variant="outlined"
//                       startIcon={<ImageIcon />}
//                       component="label"
//                       sx={{ 
//                         mb: 2,
//                         height: '100px',
//                         border: '2px dashed',
//                         borderColor: 'divider',
//                         '&:hover': {
//                           borderColor: 'primary.main',
//                           backgroundColor: 'rgba(0, 0, 0, 0.04)'
//                         }
//                       }}
//                     >
//                       Upload Cover Image
//                       <input type="file" hidden accept="image/*" onChange={handleCoverImageUpload} />
//                     </Button>
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="image-preview"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                   >
//                     <Box sx={{ mt: 2, position: 'relative' }}>
//                       <img
//                         src={post.coverImage}
//                         alt="Cover"
//                         style={{
//                           width: '100%',
//                           height: '200px',
//                           objectFit: 'cover',
//                           borderRadius: '8px',
//                         }}
//                       />
//                       <Box sx={{
//                         position: 'absolute',
//                         top: 0,
//                         right: 0,
//                         p: 1
//                       }}>
//                         <Tooltip title="Remove image">
//                           <IconButton
//                             onClick={handleRemoveCoverImage}
//                             size="small"
//                             sx={{
//                               bgcolor: 'rgba(0,0,0,0.5)',
//                               color: 'white',
//                               '&:hover': {
//                                 bgcolor: 'rgba(255,0,0,0.7)'
//                               }
//                             }}
//                           >
//                             <DeleteOutline fontSize="small" />
//                           </IconButton>
//                         </Tooltip>
//                       </Box>
//                     </Box>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
              
//               <Divider sx={{ my: 3 }} />
              
//               <Box sx={{ display: 'flex', gap: 2 }}>
//                 <Button
//                   fullWidth
//                   variant="contained"
//                   startIcon={<VisibilityOutlined />}
//                   onClick={() => setIsPreview(!isPreview)}
//                   color="info"
//                 >
//                   {isPreview ? 'Edit' : 'Preview'}
//                 </Button>
                
//                 <Button
//                   fullWidth
//                   variant="contained"
//                   startIcon={<Publish />}
//                   color="primary"
//                   onClick={handlePublish}
//                   disabled={isSaving || isUploading}
//                 >
//                   Publish
//                 </Button>
//               </Box>
//             </Paper>
//           </motion.div>
          
//           <motion.div variants={itemVariants}>
//             <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
//               <Typography variant="subtitle1" gutterBottom>
//                 Publishing Tips
//               </Typography>
//               <Alert severity="info" sx={{ mb: 2 }}>
//                 Posts with images get 94% more views!
//               </Alert>
//               <Alert severity="success">
//                 Optimal post length: 1,500-2,000 words
//               </Alert>
//             </Paper>
//           </motion.div>
//         </Box>
//       </Box>
      
//       <Backdrop
//         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
//         open={isSaving || isUploading}
//       >
//         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
//           <CircularProgress color="inherit" />
//           <Typography variant="body1">
//             {isUploading ? uploadStatus : 
//              post.isDraft ? 'Saving your draft...' : 'Publishing your post...'}
//           </Typography>
//         </Box>
//       </Backdrop>
      
//       <Snackbar
//         open={notification.open}
//         autoHideDuration={4000}
//         onClose={handleCloseNotification}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//       >
//         <Alert 
//           onClose={handleCloseNotification} 
//           severity={notification.severity} 
//           variant="filled"
//           sx={{ width: '100%' }}
//         >
//           {notification.message}
//         </Alert>
//       </Snackbar>
//     </Container>
//   );
// };

// export default BlogCreation;


//===========================================


// import {
//   DeleteOutline,
//   Image as ImageIcon,
//   InfoOutlined,
//   Publish,
//   Save,
//   VisibilityOutlined
// } from '@mui/icons-material';
// import {
//   Alert,
//   Backdrop,
//   Box,
//   Button,
//   Chip,
//   CircularProgress,
//   Container,
//   Divider,
//   FormControl,
//   IconButton,
//   InputLabel,
//   MenuItem,
//   Paper,
//   Select,
//   Snackbar,
//   Tab,
//   Tabs,
//   TextField,
//   Tooltip,
//   Typography,
//   useMediaQuery,
//   useTheme
// } from '@mui/material';
// import axios from 'axios';
// import { AnimatePresence, motion } from 'framer-motion';
// import React, { useState } from 'react';
// import { categories } from '../Data/blogData';
// import BlogPreview from './Blog/BlogPreview';
// import Navbar from './Navbar';
// import EnhancedTiptapEditor from './TiptapEditor';

// const BlogCreation = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const [activeTab, setActiveTab] = useState(0);
//   const [isPreview, setIsPreview] = useState(false);
//   const [isSaving, setIsSaving] = useState(false);
//   const [isUploading, setIsUploading] = useState(false);
//   const [uploadStatus, setUploadStatus] = useState('');
//   const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });
//   const [post, setPost] = useState({
//     title: '',
//     content: '',
//     category: '',
//     tags: [],
//     coverImage: '',
//     isDraft: true,
//   });

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { 
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1 }
//   };

//   const handleContentChange = (newContent) => {
//     setPost((prev) => ({ ...prev, content: newContent }));
//   };

//   const handleTagInput = (event) => {
//     if (event.key === 'Enter' && event.target.value.trim()) {
//       const newTag = event.target.value.trim();
//       if (!post.tags.includes(newTag) && post.tags.length < 10) {
//         setPost((prev) => ({
//           ...prev,
//           tags: [...prev.tags, newTag],
//         }));
        
//         setNotification({
//           open: true,
//           message: `Tag "${newTag}" added!`,
//           severity: 'success'
//         });
//       } else if (post.tags.length >= 10) {
//         setNotification({
//           open: true,
//           message: 'Maximum 10 tags allowed',
//           severity: 'warning'
//         });
//       }
//       event.target.value = '';
//     }
//   };

//   const handleRemoveTag = (tagToRemove) => {
//     setPost((prev) => ({
//       ...prev,
//       tags: prev.tags.filter((tag) => tag !== tagToRemove),
//     }));
//   };

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
//       throw error;
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   const handleCoverImageUpload = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       if (file.size > 5000000) {
//         setNotification({
//           open: true,
//           message: 'Image size should be less than 5MB',
//           severity: 'error'
//         });
//         return;
//       }
      
//       try {
//         const imageUrl = await uploadToCloudinary(file);
//         setPost((prev) => ({
//           ...prev,
//           coverImage: imageUrl,
//         }));
        
//         setNotification({
//           open: true,
//           message: 'Cover image uploaded successfully!',
//           severity: 'success'
//         });
//       } catch (error) {
//         setNotification({
//           open: true,
//           message: 'Failed to upload cover image',
//           severity: 'error'
//         });
//       }
//     }
//   };

//   const handleRemoveCoverImage = () => {
//     setPost(prev => ({ ...prev, coverImage: '' }));
//   };

//   const getUserEmail = () => {
//     const email = sessionStorage.getItem('userEmail');
//     if (!email) {
//       throw new Error('User email not found in session');
//     }
//     return email;
//   };

//   const createBlogPost = async (postData) => {
//     try {
//       const response = await axios.post('https://localhost:7163/api/Post', postData, {
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       });
//       return response.data;
//     } catch (error) {
//       console.error('Error creating blog post:', error);
//       throw error;
//     }
//   };

//   const handleSave = async (isPublished = false) => {
//     if (!post.title) {
//       setNotification({
//         open: true,
//         message: 'Please add a title to your post',
//         severity: 'warning'
//       });
//       return;
//     }

//     if (isPublished) {
//       const missingFields = [];
//       if (!post.content) missingFields.push('content');
//       if (!post.category) missingFields.push('category');
//       if (!post.coverImage) missingFields.push('cover image');

//       if (missingFields.length > 0) {
//         setNotification({
//           open: true,
//           message: `Please fill in all required fields before publishing: ${missingFields.join(', ')}`,
//           severity: 'error'
//         });
//         return;
//       }
//     }

//     setIsSaving(true);
    
//     try {
//       const userEmail = getUserEmail();
      
//       const postData = {
//         userEmail: userEmail,
//         title: post.title,
//         content: post.content,
//         coverImageUrl: post.coverImage || null,
//         category: post.category || null,
//         tags: post.tags.length > 0 ? post.tags : null,
//         is_published: isPublished
//       };

//       await createBlogPost(postData);
      
//       setNotification({
//         open: true,
//         message: isPublished 
//           ? 'Post published successfully!' 
//           : 'Draft saved successfully!',
//         severity: 'success'
//       });
      
//       setPost(prev => ({ ...prev, isDraft: !isPublished }));

//     } catch (error) {
//       console.error('Error saving post:', error);
      
//       let errorMessage = 'Failed to save post';
//       if (error.response) {
//         if (error.response.data.errors) {
//           errorMessage = Object.values(error.response.data.errors)
//             .flat()
//             .join(', ');
//         } else if (error.response.data.message) {
//           errorMessage = error.response.data.message;
//         }
//       }

//       setNotification({
//         open: true,
//         message: errorMessage,
//         severity: 'error'
//       });
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   const handleSaveDraft = () => {
//     handleSave(false);
//   };

//   const handlePublish = () => {
//     handleSave(true);
//   };

//   const handleCloseNotification = () => {
//     setNotification(prev => ({ ...prev, open: false }));
//   };

//   const wordCount = post.content ? post.content.replace(/<[^>]*>/g, ' ').trim().split(/\s+/).length : 0;
//   const readTime = Math.max(1, Math.ceil(wordCount / 200));

//   return (
//     <Container maxWidth="xl" sx={{ py: 8 }}>
//       <Navbar />
      
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Paper
//           elevation={3}
//           sx={{
//             p: { xs: 3, md: 4 },
//             mb: 4,
//             background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
//             color: 'white',
//             position: 'relative',
//             overflow: 'hidden',
//             borderRadius: 2,
//             display: 'flex',
//             flexDirection: { xs: 'column', md: 'row' },
//             alignItems: 'center',
//             justifyContent: 'space-between'
//           }}
//         >
//           <Box>
//             <motion.div
//               initial={{ scale: 0.95, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Typography variant="h3" gutterBottom fontWeight="bold">
//                 Create Your Blog Post
//               </Typography>
//               <Typography variant="h6" sx={{ opacity: 0.9 }}>
//                 Share your thoughts with the world
//               </Typography>
//             </motion.div>
//           </Box>
          
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//           >
//             <Box sx={{ 
//               display: 'flex',
//               gap: 2,
//               mt: { xs: 2, md: 0 }
//             }}>
//               <Tooltip title="Save as draft">
//                 <Button 
//                   variant="contained" 
//                   color="secondary"
//                   startIcon={<Save />}
//                   onClick={handleSaveDraft}
//                   disabled={isSaving || isUploading}
//                 >
//                   Save
//                 </Button>
//               </Tooltip>
              
//               <Tooltip title="Publish your post">
//                 <Button 
//                   variant="contained" 
//                   color="secondary"
//                   startIcon={<Publish />}
//                   onClick={handlePublish}
//                   disabled={isSaving || isUploading}
//                   sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.100' } }}
//                 >
//                   Publish
//                 </Button>
//               </Tooltip>
//             </Box>
//           </motion.div>
          
//           <Box sx={{
//             position: 'absolute',
//             width: '300px',
//             height: '300px',
//             borderRadius: '50%',
//             backgroundColor: 'rgba(255,255,255,0.1)',
//             bottom: '-150px',
//             right: '-100px',
//             zIndex: 0
//           }} />
//         </Paper>
//       </motion.div>

//       <Box sx={{ display: 'flex', gap: 3, flexDirection: isMobile ? 'column' : 'row' }}>
//         <Box 
//           component={motion.div}
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           sx={{ flex: 1 }}
//         >
//           <motion.div variants={itemVariants}>
//             <Paper 
//               elevation={2} 
//               sx={{ 
//                 p: 3, 
//                 mb: 3,
//                 borderRadius: 2,
//                 transition: 'all 0.3s ease-in-out'
//               }}
//             >
//               <TextField
//                 fullWidth
//                 label="Blog Title"
//                 variant="outlined"
//                 value={post.title}
//                 onChange={(e) => setPost((prev) => ({ ...prev, title: e.target.value }))}
//                 placeholder="Enter an attention-grabbing title..."
//                 InputProps={{
//                   sx: {
//                     fontSize: '1.2rem',
//                     '&:focus': {
//                       boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
//                     }
//                   }
//                 }}
//                 sx={{ 
//                   mb: 3,
//                   '& .MuiOutlinedInput-root': {
//                     transition: 'all 0.3s ease'
//                   },
//                   '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
//                     borderColor: theme.palette.primary.light
//                   }
//                 }}
//               />

//               <Box sx={{ mb: 2 }}>
//                 <Tabs 
//                   value={isPreview ? 1 : 0} 
//                   onChange={(_, newValue) => setIsPreview(Boolean(newValue))}
//                   sx={{ mb: 2 }}
//                 >
//                   <Tab label="Editor" />
//                   <Tab label="Preview" />
//                 </Tabs>
//               </Box>

//               <AnimatePresence mode="wait">
//                 {!isPreview ? (
//                   <motion.div
//                     key="editor"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.25 }}
//                   >
//                     <EnhancedTiptapEditor content={post.content} onChange={handleContentChange} />
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="preview"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.25 }}
//                   >
//                     <Paper 
//                       elevation={1} 
//                       sx={{ 
//                         p: 3, 
//                         minHeight: '400px', 
//                         borderRadius: 1,
//                         bgcolor: 'grey.50'
//                       }}
//                     >
//                       <BlogPreview post={post} />
//                     </Paper>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
              
//               <Box sx={{ 
//                 display: 'flex', 
//                 justifyContent: 'space-between', 
//                 alignItems: 'center', 
//                 mt: 2,
//                 color: 'text.secondary',
//                 fontSize: '0.9rem'
//               }}>
//                 <Typography variant="body2">
//                   {wordCount} words · {readTime} min read
//                 </Typography>
//                 <Typography variant="body2">
//                   {post.isDraft ? 'Draft' : 'Ready to publish'}
//                 </Typography>
//               </Box>
//             </Paper>
//           </motion.div>
//         </Box>

//         <Box
//           component={motion.div}
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           sx={{ width: isMobile ? '100%' : '350px' }}
//         >
//           <motion.div variants={itemVariants}>
//             <Paper elevation={2} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
//               <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                 <InfoOutlined fontSize="small" />
//                 Post Settings
//               </Typography>
//               <Divider sx={{ mb: 3 }} />
              
//               <FormControl fullWidth sx={{ mb: 3 }}>
//                 <InputLabel>Category</InputLabel>
//                 <Select
//                   value={post.category}
//                   label="Category"
//                   onChange={(e) => setPost((prev) => ({ ...prev, category: e.target.value }))}
//                   sx={{
//                     '& .MuiSelect-select': {
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: 1
//                     }
//                   }}
//                   MenuProps={{
//                     PaperProps: {
//                       sx: {
//                         maxHeight: 300,
//                         '& .MuiMenuItem-root': {
//                           transition: 'background-color 0.2s ease',
//                           display: 'flex',
//                           alignItems: 'center',
//                           gap: 1
//                         }
//                       }
//                     }
//                   }}
//                 >
//                   {categories.map((category) => (
//                     <MenuItem key={category.value} value={category.value}>
//                       {category.icon && React.cloneElement(category.icon, { fontSize: 'small' })}
//                       {category.label}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>

//               <TextField
//                 fullWidth
//                 label="Add Tags"
//                 placeholder="Press Enter to add tags"
//                 onKeyDown={handleTagInput}
//                 helperText={`${post.tags.length}/10 tags added`}
//                 sx={{ mb: 2 }}
//                 InputProps={{
//                   endAdornment: (
//                     <Tooltip title="Add up to 10 tags to improve discoverability">
//                       <InfoOutlined color="action" fontSize="small" sx={{ cursor: 'help' }} />
//                     </Tooltip>
//                   )
//                 }}
//               />

//               <Box sx={{ 
//                 display: 'flex', 
//                 flexWrap: 'wrap', 
//                 gap: 1, 
//                 mb: 3,
//                 minHeight: '50px'
//               }}>
//                 <AnimatePresence>
//                   {post.tags.map((tag) => (
//                     <motion.div
//                       key={tag}
//                       initial={{ scale: 0, opacity: 0 }}
//                       animate={{ scale: 1, opacity: 1 }}
//                       exit={{ scale: 0, opacity: 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <Chip
//                         label={tag}
//                         onDelete={() => handleRemoveTag(tag)}
//                         color="primary"
//                         variant="outlined"
//                         sx={{ 
//                           transition: 'all 0.2s ease',
//                           '&:hover': {
//                             backgroundColor: 'primary.light',
//                             color: 'white'
//                           }
//                         }}
//                       />
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
                
//                 {post.tags.length === 0 && (
//                   <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
//                     No tags added yet
//                   </Typography>
//                 )}
//               </Box>

//               <Typography variant="subtitle1" gutterBottom>
//                 Cover Image
//               </Typography>
              
//               <AnimatePresence mode="wait">
//                 {!post.coverImage ? (
//                   <motion.div
//                     key="upload-button"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                   >
//                     <Button
//                       fullWidth
//                       variant="outlined"
//                       startIcon={<ImageIcon />}
//                       component="label"
//                       sx={{ 
//                         mb: 2,
//                         height: '100px',
//                         border: '2px dashed',
//                         borderColor: 'divider',
//                         '&:hover': {
//                           borderColor: 'primary.main',
//                           backgroundColor: 'rgba(0, 0, 0, 0.04)'
//                         }
//                       }}
//                     >
//                       Upload Cover Image
//                       <input type="file" hidden accept="image/*" onChange={handleCoverImageUpload} />
//                     </Button>
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="image-preview"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                   >
//                     <Box sx={{ mt: 2, position: 'relative' }}>
//                       <img
//                         src={post.coverImage}
//                         alt="Cover"
//                         style={{
//                           width: '100%',
//                           height: '200px',
//                           objectFit: 'cover',
//                           borderRadius: '8px',
//                         }}
//                       />
//                       <Box sx={{
//                         position: 'absolute',
//                         top: 0,
//                         right: 0,
//                         p: 1
//                       }}>
//                         <Tooltip title="Remove image">
//                           <IconButton
//                             onClick={handleRemoveCoverImage}
//                             size="small"
//                             sx={{
//                               bgcolor: 'rgba(0,0,0,0.5)',
//                               color: 'white',
//                               '&:hover': {
//                                 bgcolor: 'rgba(255,0,0,0.7)'
//                               }
//                             }}
//                           >
//                             <DeleteOutline fontSize="small" />
//                           </IconButton>
//                         </Tooltip>
//                       </Box>
//                     </Box>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
              
//               <Divider sx={{ my: 3 }} />
              
//               <Box sx={{ display: 'flex', gap: 2 }}>
//                 <Button
//                   fullWidth
//                   variant="contained"
//                   startIcon={<VisibilityOutlined />}
//                   onClick={() => setIsPreview(!isPreview)}
//                   color="info"
//                 >
//                   {isPreview ? 'Edit' : 'Preview'}
//                 </Button>
                
//                 <Button
//                   fullWidth
//                   variant="contained"
//                   startIcon={<Publish />}
//                   color="primary"
//                   onClick={handlePublish}
//                   disabled={isSaving || isUploading}
//                 >
//                   Publish
//                 </Button>
//               </Box>
//             </Paper>
//           </motion.div>
          
//           <motion.div variants={itemVariants}>
//             <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
//               <Typography variant="subtitle1" gutterBottom>
//                 Publishing Tips
//               </Typography>
//               <Alert severity="info" sx={{ mb: 2 }}>
//                 Posts with images get 94% more views!
//               </Alert>
//               <Alert severity="success">
//                 Optimal post length: 1,500-2,000 words
//               </Alert>
//             </Paper>
//           </motion.div>
//         </Box>
//       </Box>
      
//       <Backdrop
//         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
//         open={isSaving || isUploading}
//       >
//         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
//           <CircularProgress color="inherit" />
//           <Typography variant="body1">
//             {isUploading ? uploadStatus : 
//              post.isDraft ? 'Saving your draft...' : 'Publishing your post...'}
//           </Typography>
//         </Box>
//       </Backdrop>
      
//       <Snackbar
//         open={notification.open}
//         autoHideDuration={4000}
//         onClose={handleCloseNotification}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//       >
//         <Alert 
//           onClose={handleCloseNotification} 
//           severity={notification.severity} 
//           variant="filled"
//           sx={{ width: '100%' }}
//         >
//           {notification.message}
//         </Alert>
//       </Snackbar>
//     </Container>
//   );
// };

// export default BlogCreation;

//===========================================================


// import {
//   DeleteOutline,
//   Image as ImageIcon,
//   InfoOutlined,
//   Publish,
//   Save,
//   VisibilityOutlined
// } from '@mui/icons-material';
// import {
//   Alert,
//   Backdrop,
//   Box,
//   Button,
//   Chip,
//   CircularProgress,
//   Container,
//   Divider,
//   FormControl,
//   IconButton,
//   InputLabel,
//   MenuItem,
//   Paper,
//   Select,
//   Snackbar,
//   Tab,
//   Tabs,
//   TextField,
//   Tooltip,
//   Typography,
//   useMediaQuery,
//   useTheme
// } from '@mui/material';
// import axios from 'axios';
// import { AnimatePresence, motion } from 'framer-motion';
// import React, { useEffect, useState } from 'react';
// import { categories } from '../Data/blogData';
// import BlogPreview from './Blog/BlogPreview';
// import Navbar from './Navbar';
// import EnhancedTiptapEditor from './TiptapEditor';



// const BlogCreation = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const [activeTab, setActiveTab] = useState(0);
//   const [isPreview, setIsPreview] = useState(false);
//   const [isSaving, setIsSaving] = useState(false);
//   const [isUploading, setIsUploading] = useState(false);
//   const [uploadStatus, setUploadStatus] = useState('');
//   const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });
//   const [post, setPost] = useState({
//     title: '',
//     content: null, // Initialize as null for JSON content
//     category: '',
//     tags: [],
//     coverImage: '',
//     isDraft: true,
//     author: {  // Add author field
//       name: '',
//       avatar: ''
//     }
//   });

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { 
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1 }
//   };

//   const handleContentChange = (newContent) => {
//     // newContent is already a JSON object from Tiptap
//     setPost((prev) => ({ ...prev, content: newContent }));
//   };

//   const handleTagInput = (event) => {
//     if (event.key === 'Enter' && event.target.value.trim()) {
//       const newTag = event.target.value.trim();
//       if (!post.tags.includes(newTag) && post.tags.length < 10) {
//         setPost((prev) => ({
//           ...prev,
//           tags: [...prev.tags, newTag],
//         }));
        
//         setNotification({
//           open: true,
//           message: `Tag "${newTag}" added!`,
//           severity: 'success'
//         });
//       } else if (post.tags.length >= 10) {
//         setNotification({
//           open: true,
//           message: 'Maximum 10 tags allowed',
//           severity: 'warning'
//         });
//       }
//       event.target.value = '';
//     }
//   };

//   const handleRemoveTag = (tagToRemove) => {
//     setPost((prev) => ({
//       ...prev,
//       tags: prev.tags.filter((tag) => tag !== tagToRemove),
//     }));
//   };

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
//       throw error;
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   const handleCoverImageUpload = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       if (file.size > 5000000) {
//         setNotification({
//           open: true,
//           message: 'Image size should be less than 5MB',
//           severity: 'error'
//         });
//         return;
//       }
      
//       try {
//         const imageUrl = await uploadToCloudinary(file);
//         setPost((prev) => ({
//           ...prev,
//           coverImage: imageUrl,
//         }));
        
//         setNotification({
//           open: true,
//           message: 'Cover image uploaded successfully!',
//           severity: 'success'
//         });
//       } catch (error) {
//         setNotification({
//           open: true,
//           message: 'Failed to upload cover image',
//           severity: 'error'
//         });
//       }
//     }
//   };

//   const handleRemoveCoverImage = () => {
//     setPost(prev => ({ ...prev, coverImage: '' }));
//   };

//   const getUserEmail = () => {
//     const email = sessionStorage.getItem('userEmail');
//     if (!email) {
//       throw new Error('User email not found in session');
//     }
//     return email;
//   };

//   const createBlogPost = async (postData) => {
//     try {
//       const response = await axios.post('https://localhost:7163/api/Post', postData, {
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       });
//       return response.data;
//     } catch (error) {
//       console.error('Error creating blog post:', error);
//       throw error;
//     }
//   };

//   const handleSave = async (isPublished = false) => {
//     if (!post.title) {
//       setNotification({
//         open: true,
//         message: 'Please add a title to your post',
//         severity: 'warning'
//       });
//       return;
//     }

//     if (isPublished) {
//       const missingFields = [];
//       if (!post.content) missingFields.push('content');
//       if (!post.category) missingFields.push('category');
//       if (!post.coverImage) missingFields.push('cover image');

//       if (missingFields.length > 0) {
//         setNotification({
//           open: true,
//           message: `Please fill in all required fields before publishing: ${missingFields.join(', ')}`,
//           severity: 'error'
//         });
//         return;
//       }
//     }

//     setIsSaving(true);
    
//     try {
//       const userEmail = getUserEmail();
      
//       const postData = {
//         userEmail: userEmail,
//         title: post.title,
//         content: post.content, // This is already a JSON object
//         coverImageUrl: post.coverImage || null,
//         category: post.category || null,
//         tags: post.tags.length > 0 ? post.tags : null,
//         isPublished: isPublished
//       };

//       await createBlogPost(postData);
      
//       setNotification({
//         open: true,
//         message: isPublished 
//           ? 'Post published successfully!' 
//           : 'Draft saved successfully!',
//         severity: 'success'
//       });
      
//       setPost(prev => ({ ...prev, isDraft: !isPublished }));

//     } catch (error) {
//       console.error('Error saving post:', error);
      
//       let errorMessage = 'Failed to save post';
//       if (error.response) {
//         if (error.response.data.errors) {
//           errorMessage = Object.values(error.response.data.errors)
//             .flat()
//             .join(', ');
//         } else if (error.response.data.message) {
//           errorMessage = error.response.data.message;
//         }
//       }

//       setNotification({
//         open: true,
//         message: errorMessage,
//         severity: 'error'
//       });
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   const handleSaveDraft = () => {
//     handleSave(false);
//   };

//   const handlePublish = () => {
//     handleSave(true);
//   };

//   const handleCloseNotification = () => {
//     setNotification(prev => ({ ...prev, open: false }));
//   };

//   // Calculate word count from JSON content
//   const calculateWordCount = (content) => {
//     if (!content) return 0;
    
//     let text = '';
//     // Recursive function to extract text from JSON content
//     const extractText = (node) => {
//       if (node.text) {
//         text += node.text + ' ';
//       }
//       if (node.content) {
//         node.content.forEach(extractText);
//       }
//     };
    
//     if (content.content) {
//       content.content.forEach(extractText);
//     }
    
//     return text.trim() ? text.trim().split(/\s+/).length : 0;
//   };

//   const wordCount = calculateWordCount(post.content);
//   const readTime = Math.max(1, Math.ceil(wordCount / 200));

//   // Add useEffect to fetch user data
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const userEmail = getUserEmail();
//         const userResponse = await axios.get(
//           `https://localhost:7163/api/User/by-email?email=${encodeURIComponent(userEmail)}`
//         );

//         setPost(prev => ({
//           ...prev,
//           author: {
//             name: userResponse.data.full_Name || userResponse.data.username || "",
//             avatar: userResponse.data.profile_Image_Url || ""
//           }
//         }));
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, []);
//   return (
//     <Container maxWidth="xl" sx={{ py: 8 }}>
//       <Navbar />
      
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Paper
//           elevation={3}
//           sx={{
//             p: { xs: 3, md: 4 },
//             mb: 4,
//             background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
//             color: 'white',
//             position: 'relative',
//             overflow: 'hidden',
//             borderRadius: 2,
//             display: 'flex',
//             flexDirection: { xs: 'column', md: 'row' },
//             alignItems: 'center',
//             justifyContent: 'space-between'
//           }}
//         >
//           <Box>
//             <motion.div
//               initial={{ scale: 0.95, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Typography variant="h3" gutterBottom fontWeight="bold">
//                 Create Your Blog Post
//               </Typography>
//               <Typography variant="h6" sx={{ opacity: 0.9 }}>
//                 Share your thoughts with the world
//               </Typography>
//             </motion.div>
//           </Box>
          
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//           >
//             <Box sx={{ 
//               display: 'flex',
//               gap: 2,
//               mt: { xs: 2, md: 0 }
//             }}>
//               <Tooltip title="Save as draft">
//                 <Button 
//                   variant="contained" 
//                   color="secondary"
//                   startIcon={<Save />}
//                   onClick={handleSaveDraft}
//                   disabled={isSaving || isUploading}
//                 >
//                   Save
//                 </Button>
//               </Tooltip>
              
//               <Tooltip title="Publish your post">
//                 <Button 
//                   variant="contained" 
//                   color="secondary"
//                   startIcon={<Publish />}
//                   onClick={handlePublish}
//                   disabled={isSaving || isUploading}
//                   sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.100' } }}
//                 >
//                   Publish
//                 </Button>
//               </Tooltip>
//             </Box>
//           </motion.div>
          
//           <Box sx={{
//             position: 'absolute',
//             width: '300px',
//             height: '300px',
//             borderRadius: '50%',
//             backgroundColor: 'rgba(255,255,255,0.1)',
//             bottom: '-150px',
//             right: '-100px',
//             zIndex: 0
//           }} />
//         </Paper>
//       </motion.div>

//       <Box sx={{ display: 'flex', gap: 3, flexDirection: isMobile ? 'column' : 'row' }}>
//         <Box 
//           component={motion.div}
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           sx={{ flex: 1 }}
//         >
//           <motion.div variants={itemVariants}>
//             <Paper 
//               elevation={2} 
//               sx={{ 
//                 p: 3, 
//                 mb: 3,
//                 borderRadius: 2,
//                 transition: 'all 0.3s ease-in-out'
//               }}
//             >
//               <TextField
//                 fullWidth
//                 label="Blog Title"
//                 variant="outlined"
//                 value={post.title}
//                 onChange={(e) => setPost((prev) => ({ ...prev, title: e.target.value }))}
//                 placeholder="Enter an attention-grabbing title..."
//                 InputProps={{
//                   sx: {
//                     fontSize: '1.2rem',
//                     '&:focus': {
//                       boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
//                     }
//                   }
//                 }}
//                 sx={{ 
//                   mb: 3,
//                   '& .MuiOutlinedInput-root': {
//                     transition: 'all 0.3s ease'
//                   },
//                   '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
//                     borderColor: theme.palette.primary.light
//                   }
//                 }}
//               />

//               <Box sx={{ mb: 2 }}>
//                 <Tabs 
//                   value={isPreview ? 1 : 0} 
//                   onChange={(_, newValue) => setIsPreview(Boolean(newValue))}
//                   sx={{ mb: 2 }}
//                 >
//                   <Tab label="Editor" />
//                   <Tab label="Preview" />
//                 </Tabs>
//               </Box>

//               <AnimatePresence mode="wait">
//                 {!isPreview ? (
//                   <motion.div
//                     key="editor"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.25 }}
//                   >
//                     <EnhancedTiptapEditor 
//                       content={post.content || undefined} // Pass undefined if null to use default empty content
//                       onChange={handleContentChange} 
//                     />
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="preview"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.25 }}
//                   >
//                     <Paper 
//                       elevation={1} 
//                       sx={{ 
//                         p: 3, 
//                         minHeight: '400px', 
//                         borderRadius: 1,
//                         bgcolor: 'grey.50'
//                       }}
//                     >
//                       <BlogPreview post={post} />
//                     </Paper>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
              
//               <Box sx={{ 
//                 display: 'flex', 
//                 justifyContent: 'space-between', 
//                 alignItems: 'center', 
//                 mt: 2,
//                 color: 'text.secondary',
//                 fontSize: '0.9rem'
//               }}>
//                 <Typography variant="body2">
//                   {wordCount} words · {readTime} min read
//                 </Typography>
//                 <Typography variant="body2">
//                   {post.isDraft ? 'Draft' : 'Ready to publish'}
//                 </Typography>
//               </Box>
//             </Paper>
//           </motion.div>
//         </Box>

//                  <Box
//           component={motion.div}
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           sx={{ width: isMobile ? '100%' : '350px' }}
//         >
//           <motion.div variants={itemVariants}>
//             <Paper elevation={2} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
//               <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                 <InfoOutlined fontSize="small" />
//                 Post Settings
//               </Typography>
//               <Divider sx={{ mb: 3 }} />
              
//               <FormControl fullWidth sx={{ mb: 3 }}>
//                 <InputLabel>Category</InputLabel>
//                 <Select
//                   value={post.category}
//                   label="Category"
//                   onChange={(e) => setPost((prev) => ({ ...prev, category: e.target.value }))}
//                   sx={{
//                     '& .MuiSelect-select': {
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: 1
//                     }
//                   }}
//                   MenuProps={{
//                     PaperProps: {
//                       sx: {
//                         maxHeight: 300,
//                         '& .MuiMenuItem-root': {
//                           transition: 'background-color 0.2s ease',
//                           display: 'flex',
//                           alignItems: 'center',
//                           gap: 1
//                         }
//                       }
//                     }
//                   }}
//                 >
//                   {categories.map((category) => (
//                     <MenuItem key={category.value} value={category.value}>
//                       {category.icon && React.cloneElement(category.icon, { fontSize: 'small' })}
//                       {category.label}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>

//               <TextField
//                 fullWidth
//                 label="Add Tags"
//                 placeholder="Press Enter to add tags"
//                 onKeyDown={handleTagInput}
//                 helperText={`${post.tags.length}/10 tags added`}
//                 sx={{ mb: 2 }}
//                 InputProps={{
//                   endAdornment: (
//                     <Tooltip title="Add up to 10 tags to improve discoverability">
//                       <InfoOutlined color="action" fontSize="small" sx={{ cursor: 'help' }} />
//                     </Tooltip>
//                   )
//                 }}
//               />

//               <Box sx={{ 
//                 display: 'flex', 
//                 flexWrap: 'wrap', 
//                 gap: 1, 
//                 mb: 3,
//                 minHeight: '50px'
//               }}>
//                 <AnimatePresence>
//                   {post.tags.map((tag) => (
//                     <motion.div
//                       key={tag}
//                       initial={{ scale: 0, opacity: 0 }}
//                       animate={{ scale: 1, opacity: 1 }}
//                       exit={{ scale: 0, opacity: 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <Chip
//                         label={tag}
//                         onDelete={() => handleRemoveTag(tag)}
//                         color="primary"
//                         variant="outlined"
//                         sx={{ 
//                           transition: 'all 0.2s ease',
//                           '&:hover': {
//                             backgroundColor: 'primary.light',
//                             color: 'white'
//                           }
//                         }}
//                       />
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
                
//                 {post.tags.length === 0 && (
//                   <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
//                     No tags added yet
//                   </Typography>
//                 )}
//               </Box>

//               <Typography variant="subtitle1" gutterBottom>
//                 Cover Image
//               </Typography>
              
//               <AnimatePresence mode="wait">
//                 {!post.coverImage ? (
//                   <motion.div
//                     key="upload-button"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                   >
//                     <Button
//                       fullWidth
//                       variant="outlined"
//                       startIcon={<ImageIcon />}
//                       component="label"
//                       sx={{ 
//                         mb: 2,
//                         height: '100px',
//                         border: '2px dashed',
//                         borderColor: 'divider',
//                         '&:hover': {
//                           borderColor: 'primary.main',
//                           backgroundColor: 'rgba(0, 0, 0, 0.04)'
//                         }
//                       }}
//                     >
//                       Upload Cover Image
//                       <input type="file" hidden accept="image/*" onChange={handleCoverImageUpload} />
//                     </Button>
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="image-preview"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                   >
//                     <Box sx={{ mt: 2, position: 'relative' }}>
//                       <img
//                         src={post.coverImage}
//                         alt="Cover"
//                         style={{
//                           width: '100%',
//                           height: '200px',
//                           objectFit: 'cover',
//                           borderRadius: '8px',
//                         }}
//                       />
//                       <Box sx={{
//                         position: 'absolute',
//                         top: 0,
//                         right: 0,
//                         p: 1
//                       }}>
//                         <Tooltip title="Remove image">
//                           <IconButton
//                             onClick={handleRemoveCoverImage}
//                             size="small"
//                             sx={{
//                               bgcolor: 'rgba(0,0,0,0.5)',
//                               color: 'white',
//                               '&:hover': {
//                                 bgcolor: 'rgba(255,0,0,0.7)'
//                               }
//                             }}
//                           >
//                             <DeleteOutline fontSize="small" />
//                           </IconButton>
//                         </Tooltip>
//                       </Box>
//                     </Box>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
              
//               <Divider sx={{ my: 3 }} />
              
//               <Box sx={{ display: 'flex', gap: 2 }}>
//                 <Button
//                   fullWidth
//                   variant="contained"
//                   startIcon={<VisibilityOutlined />}
//                   onClick={() => setIsPreview(!isPreview)}
//                   color="info"
//                 >
//                   {isPreview ? 'Edit' : 'Preview'}
//                 </Button>
                
//                 <Button
//                   fullWidth
//                   variant="contained"
//                   startIcon={<Publish />}
//                   color="primary"
//                   onClick={handlePublish}
//                   disabled={isSaving || isUploading}
//                 >
//                   Publish
//                 </Button>
//               </Box>
//             </Paper>
//           </motion.div>
          
//           <motion.div variants={itemVariants}>
//             <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
//               <Typography variant="subtitle1" gutterBottom>
//                 Publishing Tips
//               </Typography>
//               <Alert severity="info" sx={{ mb: 2 }}>
//                 Posts with images get 94% more views!
//               </Alert>
//               <Alert severity="success">
//                 Optimal post length: 1,500-2,000 words
//               </Alert>
//             </Paper>
//           </motion.div>
//         </Box>
//       </Box>
      
   
      
//       <Backdrop
//         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
//         open={isSaving || isUploading}
//       >
//         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
//           <CircularProgress color="inherit" />
//           <Typography variant="body1">
//             {isUploading ? uploadStatus : 
//              post.isDraft ? 'Saving your draft...' : 'Publishing your post...'}
//           </Typography>
//         </Box>
//       </Backdrop>
      
//       <Snackbar
//         open={notification.open}
//         autoHideDuration={4000}
//         onClose={handleCloseNotification}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//       >
//         <Alert 
//           onClose={handleCloseNotification} 
//           severity={notification.severity} 
//           variant="filled"
//           sx={{ width: '100%' }}
//         >
//           {notification.message}
//         </Alert>
//       </Snackbar>
//     </Container>
//   );
// };

// export default BlogCreation;


//==================================================================================



// import {
//   DeleteOutline,
//   Image as ImageIcon,
//   InfoOutlined,
//   Publish,
//   Save,
//   VisibilityOutlined
// } from '@mui/icons-material';
// import {
//   Alert,
//   Backdrop,
//   Box,
//   Button,
//   Chip,
//   CircularProgress,
//   Container,
//   Divider,
//   FormControl,
//   IconButton,
//   InputLabel,
//   MenuItem,
//   Paper,
//   Select,
//   Snackbar,
//   Tab,
//   Tabs,
//   TextField,
//   Tooltip,
//   Typography,
//   useMediaQuery,
//   useTheme
// } from '@mui/material';
// import axios from 'axios';
// import { AnimatePresence, motion } from 'framer-motion';
// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { categories } from '../Data/blogData';
// import BlogPreview from './Blog/BlogPreview';
// import Navbar from './Navbar';
// import EnhancedTiptapEditor from './TiptapEditor';

// const BlogCreation = () => {
//   const location = useLocation();
//   const blogData = location.state?.blogData;  // Get blogData from navigation state
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const [activeTab, setActiveTab] = useState(0);
//   const [isPreview, setIsPreview] = useState(false);
//   const [isSaving, setIsSaving] = useState(false);
//   const [isUploading, setIsUploading] = useState(false);
//   const [uploadStatus, setUploadStatus] = useState('');
//   const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });
//   const [post, setPost] = useState({
//     title: '',
//     content: null,
//     category: '',
//     tags: [],
//     coverImage: '',
//     isDraft: true,
//     author: {
//       name: '',
//       avatar: ''
//     }
//   });

//   // Initialize with blogData if provided
//   useEffect(() => {
//     if (blogData) {
//       setPost({
//         title: blogData.title,
//         content: typeof blogData.content === 'string' ? JSON.parse(blogData.content) : blogData.content,
//         category: blogData.category || '',
//         tags: blogData.tags || [],
//         coverImage: blogData.coverImageUrl || '',
//         isDraft: !blogData.isPublished,
//         author: {
//           name: blogData.fullName || blogData.username || '',
//           avatar: blogData.profileImageUrl || ''
//         }
//       });
//     }
//   }, [blogData]);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { 
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1 }
//   };

//   const handleContentChange = (newContent) => {
//     setPost((prev) => ({ ...prev, content: newContent }));
//   };

//   const handleTagInput = (event) => {
//     if (event.key === 'Enter' && event.target.value.trim()) {
//       const newTag = event.target.value.trim();
//       if (!post.tags.includes(newTag) && post.tags.length < 10) {
//         setPost((prev) => ({
//           ...prev,
//           tags: [...prev.tags, newTag],
//         }));
        
//         setNotification({
//           open: true,
//           message: `Tag "${newTag}" added!`,
//           severity: 'success'
//         });
//       } else if (post.tags.length >= 10) {
//         setNotification({
//           open: true,
//           message: 'Maximum 10 tags allowed',
//           severity: 'warning'
//         });
//       }
//       event.target.value = '';
//     }
//   };

//   const handleRemoveTag = (tagToRemove) => {
//     setPost((prev) => ({
//       ...prev,
//       tags: prev.tags.filter((tag) => tag !== tagToRemove),
//     }));
//   };

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
//       throw error;
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   const handleCoverImageUpload = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       if (file.size > 5000000) {
//         setNotification({
//           open: true,
//           message: 'Image size should be less than 5MB',
//           severity: 'error'
//         });
//         return;
//       }
      
//       try {
//         const imageUrl = await uploadToCloudinary(file);
//         setPost((prev) => ({
//           ...prev,
//           coverImage: imageUrl,
//         }));
        
//         setNotification({
//           open: true,
//           message: 'Cover image uploaded successfully!',
//           severity: 'success'
//         });
//       } catch (error) {
//         setNotification({
//           open: true,
//           message: 'Failed to upload cover image',
//           severity: 'error'
//         });
//       }
//     }
//   };

//   const handleRemoveCoverImage = () => {
//     setPost(prev => ({ ...prev, coverImage: '' }));
//   };

//   const getUserEmail = () => {
//     const email = sessionStorage.getItem('userEmail');
//     if (!email) {
//       throw new Error('User email not found in session');
//     }
//     return email;
//   };

//  const createBlogPost = async (postData) => {
//   try {
//     const userEmail = getUserEmail();
//     const url = blogData 
//       ? `https://localhost:7163/api/Post/byemail/${blogData.id}`  // PUT for existing
//       : `https://localhost:7163/api/Post/byemail/${userEmail}`;   // POST for new

//     const method = blogData ? 'put' : 'post';
    
//     const response = await axios[method](url, {
//       title: postData.title,
//       content: JSON.stringify(postData.content), // Stringify content
//       coverImageUrl: postData.coverImageUrl,
//       category: postData.category,
//       tags: postData.tags,
//       isPublished: postData.isPublished
//     }, {
//       headers: {
//         'Content-Type': 'application/json',
//       }
//     });
    
//     return response.data;
//   } catch (error) {
//     console.error('Error saving post:', error);
//     throw error;
//   }
// };

//   const handleSave = async (isPublished = false) => {
//     if (!post.title) {
//       setNotification({
//         open: true,
//         message: 'Please add a title to your post',
//         severity: 'warning'
//       });
//       return;
//     }

//     if (isPublished) {
//       const missingFields = [];
//       if (!post.content) missingFields.push('content');
//       if (!post.category) missingFields.push('category');
//       if (!post.coverImage) missingFields.push('cover image');

//       if (missingFields.length > 0) {
//         setNotification({
//           open: true,
//           message: `Please fill in all required fields before publishing: ${missingFields.join(', ')}`,
//           severity: 'error'
//         });
//         return;
//       }
//     }

//     setIsSaving(true);
    
//     try {
//       const userEmail = getUserEmail();
      
//       const postData = {
//         userEmail: userEmail,
//         title: post.title,
//         content: post.content,
//         coverImageUrl: post.coverImage || null,
//         category: post.category || null,
//         tags: post.tags.length > 0 ? post.tags : null,
//         isPublished: isPublished
//       };

//       await createBlogPost(postData);
      
//       setNotification({
//         open: true,
//         message: isPublished 
//           ? blogData 
//             ? 'Post updated and published successfully!' 
//             : 'Post published successfully!'
//           : blogData 
//             ? 'Draft updated successfully!' 
//             : 'Draft saved successfully!',
//         severity: 'success'
//       });
      
//       setPost(prev => ({ ...prev, isDraft: !isPublished }));

//     } catch (error) {
//       console.error('Error saving post:', error);
      
//       let errorMessage = 'Failed to save post';
//       if (error.response) {
//         if (error.response.data.errors) {
//           errorMessage = Object.values(error.response.data.errors)
//             .flat()
//             .join(', ');
//         } else if (error.response.data.message) {
//           errorMessage = error.response.data.message;
//         }
//       }

//       setNotification({
//         open: true,
//         message: errorMessage,
//         severity: 'error'
//       });
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   const handleSaveDraft = () => {
//     handleSave(false);
//   };

//   const handlePublish = () => {
//     handleSave(true);
//   };

//   const handleCloseNotification = () => {
//     setNotification(prev => ({ ...prev, open: false }));
//   };

//   const calculateWordCount = (content) => {
//     if (!content) return 0;
    
//     let text = '';
//     const extractText = (node) => {
//       if (node.text) {
//         text += node.text + ' ';
//       }
//       if (node.content) {
//         node.content.forEach(extractText);
//       }
//     };
    
//     if (content.content) {
//       content.content.forEach(extractText);
//     }
    
//     return text.trim() ? text.trim().split(/\s+/).length : 0;
//   };

//   const wordCount = calculateWordCount(post.content);
//   const readTime = Math.max(1, Math.ceil(wordCount / 200));

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const userEmail = getUserEmail();
//         const userResponse = await axios.get(
//           `https://localhost:7163/api/User/by-email?email=${encodeURIComponent(userEmail)}`
//         );

//         setPost(prev => ({
//           ...prev,
//           author: {
//             name: userResponse.data.full_Name || userResponse.data.username || "",
//             avatar: userResponse.data.profile_Image_Url || ""
//           }
//         }));
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     // Only fetch user data if we're not editing an existing post
//     if (!blogData) {
//       fetchUserData();
//     }
//   }, [blogData]);

//   return (
//     <Container maxWidth="xl" sx={{ py: 8 }}>
//       <Navbar />
      
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Paper
//           elevation={3}
//           sx={{
//             p: { xs: 3, md: 4 },
//             mb: 4,
//             background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
//             color: 'white',
//             position: 'relative',
//             overflow: 'hidden',
//             borderRadius: 2,
//             display: 'flex',
//             flexDirection: { xs: 'column', md: 'row' },
//             alignItems: 'center',
//             justifyContent: 'space-between'
//           }}
//         >
//           <Box>
//             <motion.div
//               initial={{ scale: 0.95, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Typography variant="h3" gutterBottom fontWeight="bold">
//                 {blogData ? 'Edit Your Blog Post' : 'Create Your Blog Post'}
//               </Typography>
//               <Typography variant="h6" sx={{ opacity: 0.9 }}>
//                 {blogData ? 'Update your existing post' : 'Share your thoughts with the world'}
//               </Typography>
//             </motion.div>
//           </Box>
          
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//           >
//             <Box sx={{ 
//               display: 'flex',
//               gap: 2,
//               mt: { xs: 2, md: 0 }
//             }}>
//               <Tooltip title="Save as draft">
//                 <Button 
//                   variant="contained" 
//                   color="secondary"
//                   startIcon={<Save />}
//                   onClick={handleSaveDraft}
//                   disabled={isSaving || isUploading}
//                 >
//                   Save
//                 </Button>
//               </Tooltip>
              
//               <Tooltip title={blogData && blogData.isPublished ? "Update published post" : "Publish your post"}>
//                 <Button 
//                   variant="contained" 
//                   color="secondary"
//                   startIcon={<Publish />}
//                   onClick={handlePublish}
//                   disabled={isSaving || isUploading}
//                   sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.100' } }}
//                 >
//                   {blogData && blogData.isPublished ? 'Update' : 'Publish'}
//                 </Button>
//               </Tooltip>
//             </Box>
//           </motion.div>
          
//           <Box sx={{
//             position: 'absolute',
//             width: '300px',
//             height: '300px',
//             borderRadius: '50%',
//             backgroundColor: 'rgba(255,255,255,0.1)',
//             bottom: '-150px',
//             right: '-100px',
//             zIndex: 0
//           }} />
//         </Paper>
//       </motion.div>

//       <Box sx={{ display: 'flex', gap: 3, flexDirection: isMobile ? 'column' : 'row' }}>
//         <Box 
//           component={motion.div}
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           sx={{ flex: 1 }}
//         >
//           <motion.div variants={itemVariants}>
//             <Paper 
//               elevation={2} 
//               sx={{ 
//                 p: 3, 
//                 mb: 3,
//                 borderRadius: 2,
//                 transition: 'all 0.3s ease-in-out'
//               }}
//             >
//               <TextField
//                 fullWidth
//                 label="Blog Title"
//                 variant="outlined"
//                 value={post.title}
//                 onChange={(e) => setPost((prev) => ({ ...prev, title: e.target.value }))}
//                 placeholder="Enter an attention-grabbing title..."
//                 InputProps={{
//                   sx: {
//                     fontSize: '1.2rem',
//                     '&:focus': {
//                       boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
//                     }
//                   }
//                 }}
//                 sx={{ 
//                   mb: 3,
//                   '& .MuiOutlinedInput-root': {
//                     transition: 'all 0.3s ease'
//                   },
//                   '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
//                     borderColor: theme.palette.primary.light
//                   }
//                 }}
//               />

//               <Box sx={{ mb: 2 }}>
//                 <Tabs 
//                   value={isPreview ? 1 : 0} 
//                   onChange={(_, newValue) => setIsPreview(Boolean(newValue))}
//                   sx={{ mb: 2 }}
//                 >
//                   <Tab label="Editor" />
//                   <Tab label="Preview" />
//                 </Tabs>
//               </Box>

//               <AnimatePresence mode="wait">
//                 {!isPreview ? (
//                   <motion.div
//                     key="editor"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.25 }}
//                   >
//                     <EnhancedTiptapEditor 
//                       content={post.content || undefined}
//                       onChange={handleContentChange} 
//                     />
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="preview"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.25 }}
//                   >
//                     <Paper 
//                       elevation={1} 
//                       sx={{ 
//                         p: 3, 
//                         minHeight: '400px', 
//                         borderRadius: 1,
//                         bgcolor: 'grey.50'
//                       }}
//                     >
//                       <BlogPreview post={post} />
//                     </Paper>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
              
//               <Box sx={{ 
//                 display: 'flex', 
//                 justifyContent: 'space-between', 
//                 alignItems: 'center', 
//                 mt: 2,
//                 color: 'text.secondary',
//                 fontSize: '0.9rem'
//               }}>
//                 <Typography variant="body2">
//                   {wordCount} words · {readTime} min read
//                 </Typography>
//                 <Typography variant="body2">
//                   {post.isDraft ? 'Draft' : blogData && blogData.isPublished ? 'Published' : 'Ready to publish'}
//                 </Typography>
//               </Box>
//             </Paper>
//           </motion.div>
//         </Box>

//         <Box
//           component={motion.div}
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           sx={{ width: isMobile ? '100%' : '350px' }}
//         >
//           <motion.div variants={itemVariants}>
//             <Paper elevation={2} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
//               <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                 <InfoOutlined fontSize="small" />
//                 Post Settings
//               </Typography>
//               <Divider sx={{ mb: 3 }} />
              
//               <FormControl fullWidth sx={{ mb: 3 }}>
//                 <InputLabel>Category</InputLabel>
//                 <Select
//                   value={post.category}
//                   label="Category"
//                   onChange={(e) => setPost((prev) => ({ ...prev, category: e.target.value }))}
//                   sx={{
//                     '& .MuiSelect-select': {
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: 1
//                     }
//                   }}
//                   MenuProps={{
//                     PaperProps: {
//                       sx: {
//                         maxHeight: 300,
//                         '& .MuiMenuItem-root': {
//                           transition: 'background-color 0.2s ease',
//                           display: 'flex',
//                           alignItems: 'center',
//                           gap: 1
//                         }
//                       }
//                     }
//                   }}
//                 >
//                   {categories.map((category) => (
//                     <MenuItem key={category.value} value={category.value}>
//                       {category.icon && React.cloneElement(category.icon, { fontSize: 'small' })}
//                       {category.label}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>

//               <TextField
//                 fullWidth
//                 label="Add Tags"
//                 placeholder="Press Enter to add tags"
//                 onKeyDown={handleTagInput}
//                 helperText={`${post.tags.length}/10 tags added`}
//                 sx={{ mb: 2 }}
//                 InputProps={{
//                   endAdornment: (
//                     <Tooltip title="Add up to 10 tags to improve discoverability">
//                       <InfoOutlined color="action" fontSize="small" sx={{ cursor: 'help' }} />
//                     </Tooltip>
//                   )
//                 }}
//               />

//               <Box sx={{ 
//                 display: 'flex', 
//                 flexWrap: 'wrap', 
//                 gap: 1, 
//                 mb: 3,
//                 minHeight: '50px'
//               }}>
//                 <AnimatePresence>
//                   {post.tags.map((tag) => (
//                     <motion.div
//                       key={tag}
//                       initial={{ scale: 0, opacity: 0 }}
//                       animate={{ scale: 1, opacity: 1 }}
//                       exit={{ scale: 0, opacity: 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <Chip
//                         label={tag}
//                         onDelete={() => handleRemoveTag(tag)}
//                         color="primary"
//                         variant="outlined"
//                         sx={{ 
//                           transition: 'all 0.2s ease',
//                           '&:hover': {
//                             backgroundColor: 'primary.light',
//                             color: 'white'
//                           }
//                         }}
//                       />
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
                
//                 {post.tags.length === 0 && (
//                   <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
//                     No tags added yet
//                   </Typography>
//                 )}
//               </Box>

//               <Typography variant="subtitle1" gutterBottom>
//                 Cover Image
//               </Typography>
              
//               <AnimatePresence mode="wait">
//                 {!post.coverImage ? (
//                   <motion.div
//                     key="upload-button"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                   >
//                     <Button
//                       fullWidth
//                       variant="outlined"
//                       startIcon={<ImageIcon />}
//                       component="label"
//                       sx={{ 
//                         mb: 2,
//                         height: '100px',
//                         border: '2px dashed',
//                         borderColor: 'divider',
//                         '&:hover': {
//                           borderColor: 'primary.main',
//                           backgroundColor: 'rgba(0, 0, 0, 0.04)'
//                         }
//                       }}
//                     >
//                       Upload Cover Image
//                       <input type="file" hidden accept="image/*" onChange={handleCoverImageUpload} />
//                     </Button>
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="image-preview"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                   >
//                     <Box sx={{ mt: 2, position: 'relative' }}>
//                       <img
//                         src={post.coverImage}
//                         alt="Cover"
//                         style={{
//                           width: '100%',
//                           height: '200px',
//                           objectFit: 'cover',
//                           borderRadius: '8px',
//                         }}
//                       />
//                       <Box sx={{
//                         position: 'absolute',
//                         top: 0,
//                         right: 0,
//                         p: 1
//                       }}>
//                         <Tooltip title="Remove image">
//                           <IconButton
//                             onClick={handleRemoveCoverImage}
//                             size="small"
//                             sx={{
//                               bgcolor: 'rgba(0,0,0,0.5)',
//                               color: 'white',
//                               '&:hover': {
//                                 bgcolor: 'rgba(255,0,0,0.7)'
//                               }
//                             }}
//                           >
//                             <DeleteOutline fontSize="small" />
//                           </IconButton>
//                         </Tooltip>
//                       </Box>
//                     </Box>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
              
//               <Divider sx={{ my: 3 }} />
              
//               <Box sx={{ display: 'flex', gap: 2 }}>
//                 <Button
//                   fullWidth
//                   variant="contained"
//                   startIcon={<VisibilityOutlined />}
//                   onClick={() => setIsPreview(!isPreview)}
//                   color="info"
//                 >
//                   {isPreview ? 'Edit' : 'Preview'}
//                 </Button>
                
//                 <Button
//                   fullWidth
//                   variant="contained"
//                   startIcon={<Publish />}
//                   color="primary"
//                   onClick={handlePublish}
//                   disabled={isSaving || isUploading}
//                 >
//                   {blogData && blogData.isPublished ? 'Update' : 'Publish'}
//                 </Button>
//               </Box>
//             </Paper>
//           </motion.div>
          
//           <motion.div variants={itemVariants}>
//             <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
//               <Typography variant="subtitle1" gutterBottom>
//                 Publishing Tips
//               </Typography>
//               <Alert severity="info" sx={{ mb: 2 }}>
//                 Posts with images get 94% more views!
//               </Alert>
//               <Alert severity="success">
//                 Optimal post length: 1,500-2,000 words
//               </Alert>
//             </Paper>
//           </motion.div>
//         </Box>
//       </Box>
      
//       <Backdrop
//         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
//         open={isSaving || isUploading}
//       >
//         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
//           <CircularProgress color="inherit" />
//           <Typography variant="body1">
//             {isUploading ? uploadStatus : 
//              post.isDraft ? 'Saving your draft...' : 'Publishing your post...'}
//           </Typography>
//         </Box>
//       </Backdrop>
      
//       <Snackbar
//         open={notification.open}
//         autoHideDuration={4000}
//         onClose={handleCloseNotification}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//       >
//         <Alert 
//           onClose={handleCloseNotification} 
//           severity={notification.severity} 
//           variant="filled"
//           sx={{ width: '100%' }}
//         >
//           {notification.message}
//         </Alert>
//       </Snackbar>
//     </Container>
//   );
// };

// export default BlogCreation;


//=================================================================


// import {
//   DeleteOutline,
//   Image as ImageIcon,
//   InfoOutlined,
//   Publish,
//   Save,
//   VisibilityOutlined
// } from '@mui/icons-material';
// import {
//   Alert,
//   Backdrop,
//   Box,
//   Button,
//   Chip,
//   CircularProgress,
//   Container,
//   Divider,
//   FormControl,
//   IconButton,
//   InputLabel,
//   MenuItem,
//   Paper,
//   Select,
//   Snackbar,
//   Tab,
//   Tabs,
//   TextField,
//   Tooltip,
//   Typography,
//   useMediaQuery,
//   useTheme
// } from '@mui/material';
// import axios from 'axios';
// import { AnimatePresence, motion } from 'framer-motion';
// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { categories } from '../Data/blogData';
// import BlogPreview from './BlogPreview';
// import Navbar from './Navbar';
// import EnhancedTiptapEditor from './TiptapEditor';

// const BlogCreation = () => {
//   const location = useLocation();
//   const blogData = location.state?.blogData;  // Get blogData from navigation state
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const [activeTab, setActiveTab] = useState(0);
//   const [isPreview, setIsPreview] = useState(false);
//   const [isSaving, setIsSaving] = useState(false);
//   const [isUploading, setIsUploading] = useState(false);
//   const [uploadStatus, setUploadStatus] = useState('');
//   const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });
//   const [post, setPost] = useState({
//     title: '',
//     content: null,
//     category: '',
//     tags: [],
//     coverImage: '',
//     isDraft: true,
//     author: {
//       name: '',
//       avatar: ''
//     }
//   });

//   // Initialize with blogData if provided
//   useEffect(() => {
//     if (blogData) {
//       setPost({
//         title: blogData.title,
//         content: typeof blogData.content === 'string' ? JSON.parse(blogData.content) : blogData.content,
//         category: blogData.category || '',
//         tags: blogData.tags || [],
//         coverImage: blogData.coverImageUrl || '',
//         isDraft: !blogData.isPublished,
//         author: {
//           name: blogData.fullName || blogData.username || '',
//           avatar: blogData.profileImageUrl || ''
//         }
//       });
//     }
//   }, [blogData]);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { 
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1 }
//   };

//   const handleContentChange = (newContent) => {
//     setPost((prev) => ({ ...prev, content: newContent }));
//   };

//   const handleTagInput = (event) => {
//     if (event.key === 'Enter' && event.target.value.trim()) {
//       const newTag = event.target.value.trim();
//       if (!post.tags.includes(newTag) && post.tags.length < 10) {
//         setPost((prev) => ({
//           ...prev,
//           tags: [...prev.tags, newTag],
//         }));
        
//         setNotification({
//           open: true,
//           message: `Tag "${newTag}" added!`,
//           severity: 'success'
//         });
//       } else if (post.tags.length >= 10) {
//         setNotification({
//           open: true,
//           message: 'Maximum 10 tags allowed',
//           severity: 'warning'
//         });
//       }
//       event.target.value = '';
//     }
//   };

//   const handleRemoveTag = (tagToRemove) => {
//     setPost((prev) => ({
//       ...prev,
//       tags: prev.tags.filter((tag) => tag !== tagToRemove),
//     }));
//   };

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
//       throw error;
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   const handleCoverImageUpload = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       if (file.size > 5000000) {
//         setNotification({
//           open: true,
//           message: 'Image size should be less than 5MB',
//           severity: 'error'
//         });
//         return;
//       }
      
//       try {
//         const imageUrl = await uploadToCloudinary(file);
//         setPost((prev) => ({
//           ...prev,
//           coverImage: imageUrl,
//         }));
        
//         setNotification({
//           open: true,
//           message: 'Cover image uploaded successfully!',
//           severity: 'success'
//         });
//       } catch (error) {
//         setNotification({
//           open: true,
//           message: 'Failed to upload cover image',
//           severity: 'error'
//         });
//       }
//     }
//   };

//   const handleRemoveCoverImage = () => {
//     setPost(prev => ({ ...prev, coverImage: '' }));
//   };

//   const getUserEmail = () => {
//     const email = sessionStorage.getItem('userEmail');
//     if (!email) {
//       throw new Error('User email not found in session');
//     }
//     return email;
//   };

//   const createBlogPost = async (postData) => {
//     try {
//       const userEmail = getUserEmail();
//       const isUpdate = !!blogData;
      
//       const url = isUpdate 
//         ? `https://localhost:7163/api/Post/byemail/${blogData.id}`
//         : `https://localhost:7163/api/Post`;

//       const method = isUpdate ? 'put' : 'post';
      
//       // Prepare payload based on request type
//       const payload = isUpdate
//         ? {
//             title: postData.title,
//             content: JSON.stringify(postData.content),
//             coverImageUrl: postData.coverImageUrl,
//             category: postData.category,
//             tags: postData.tags,
//             isPublished: postData.isPublished
//           }
//         : {
//             userEmail: userEmail,
//             title: postData.title,
//             content: JSON.stringify(postData.content),
//             coverImageUrl: postData.coverImageUrl,
//             category: postData.category,
//             tags: postData.tags,
//             isPublished: postData.isPublished
//           };

//       const response = await axios[method](url, payload, {
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       });
      
//       return response.data;
//     } catch (error) {
//       console.error('Error saving post:', error);
//       throw error;
//     }
//   };

//   const handleSave = async (isPublished = false) => {
//     if (!post.title) {
//       setNotification({
//         open: true,
//         message: 'Please add a title to your post',
//         severity: 'warning'
//       });
//       return;
//     }

//     if (isPublished) {
//       const missingFields = [];
//       if (!post.content) missingFields.push('content');
//       if (!post.category) missingFields.push('category');
//       if (!post.coverImage) missingFields.push('cover image');

//       if (missingFields.length > 0) {
//         setNotification({
//           open: true,
//           message: `Please fill in all required fields before publishing: ${missingFields.join(', ')}`,
//           severity: 'error'
//         });
//         return;
//       }
//     }

//     setIsSaving(true);
    
//     try {
//       const postData = {
//         title: post.title,
//         content: post.content,
//         coverImageUrl: post.coverImage || null,
//         category: post.category || null,
//         tags: post.tags.length > 0 ? post.tags : null,
//         isPublished: isPublished
//       };

//       await createBlogPost(postData);
      
//       setNotification({
//         open: true,
//         message: isPublished 
//           ? blogData 
//             ? 'Post updated and published successfully!' 
//             : 'Post published successfully!'
//           : blogData 
//             ? 'Draft updated successfully!' 
//             : 'Draft saved successfully!',
//         severity: 'success'
//       });
      
//       setPost(prev => ({ ...prev, isDraft: !isPublished }));

//     } catch (error) {
//       console.error('Error saving post:', error);
      
//       let errorMessage = 'Failed to save post';
//       if (error.response) {
//         if (error.response.data.errors) {
//           errorMessage = Object.values(error.response.data.errors)
//             .flat()
//             .join(', ');
//         } else if (error.response.data.message) {
//           errorMessage = error.response.data.message;
//         }
//       }

//       setNotification({
//         open: true,
//         message: errorMessage,
//         severity: 'error'
//       });
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   const handleSaveDraft = () => {
//     handleSave(false);
//   };

//   const handlePublish = () => {
//     handleSave(true);
//   };

//   const handleCloseNotification = () => {
//     setNotification(prev => ({ ...prev, open: false }));
//   };

//   const calculateWordCount = (content) => {
//     if (!content) return 0;
    
//     let text = '';
//     const extractText = (node) => {
//       if (node.text) {
//         text += node.text + ' ';
//       }
//       if (node.content) {
//         node.content.forEach(extractText);
//       }
//     };
    
//     if (content.content) {
//       content.content.forEach(extractText);
//     }
    
//     return text.trim() ? text.trim().split(/\s+/).length : 0;
//   };

//   const wordCount = calculateWordCount(post.content);
//   const readTime = Math.max(1, Math.ceil(wordCount / 200));

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const userEmail = getUserEmail();
//         const userResponse = await axios.get(
//           `https://localhost:7163/api/User/by-email?email=${encodeURIComponent(userEmail)}`
//         );

//         setPost(prev => ({
//           ...prev,
//           author: {
//             name: userResponse.data.full_Name || userResponse.data.username || "",
//             avatar: userResponse.data.profile_Image_Url || ""
//           }
//         }));
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     // Only fetch user data if we're not editing an existing post
//     if (!blogData) {
//       fetchUserData();
//     }
//   }, [blogData]);

//   return (
//     <Container maxWidth="xl" sx={{ py: 8 }}>
//       <Navbar />
      
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Paper
//           elevation={3}
//           sx={{
//             p: { xs: 3, md: 4 },
//             mb: 4,
//             background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
//             color: 'white',
//             position: 'relative',
//             overflow: 'hidden',
//             borderRadius: 2,
//             display: 'flex',
//             flexDirection: { xs: 'column', md: 'row' },
//             alignItems: 'center',
//             justifyContent: 'space-between'
//           }}
//         >
//           <Box>
//             <motion.div
//               initial={{ scale: 0.95, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Typography variant="h3" gutterBottom fontWeight="bold">
//                 {blogData ? 'Edit Your Blog Post' : 'Create Your Blog Post'}
//               </Typography>
//               <Typography variant="h6" sx={{ opacity: 0.9 }}>
//                 {blogData ? 'Update your existing post' : 'Share your thoughts with the world'}
//               </Typography>
//             </motion.div>
//           </Box>
          
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//           >
//             <Box sx={{ 
//               display: 'flex',
//               gap: 2,
//               mt: { xs: 2, md: 0 }
//             }}>
//               <Tooltip title="Save as draft">
//                 <Button 
//                   variant="contained" 
//                   color="secondary"
//                   startIcon={<Save />}
//                   onClick={handleSaveDraft}
//                   disabled={isSaving || isUploading}
//                 >
//                   Save
//                 </Button>
//               </Tooltip>
              
//               <Tooltip title={blogData && blogData.isPublished ? "Update published post" : "Publish your post"}>
//                 <Button 
//                   variant="contained" 
//                   color="secondary"
//                   startIcon={<Publish />}
//                   onClick={handlePublish}
//                   disabled={isSaving || isUploading}
//                   sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.100' } }}
//                 >
//                   {blogData && blogData.isPublished ? 'Update' : 'Publish'}
//                 </Button>
//               </Tooltip>
//             </Box>
//           </motion.div>
          
//           <Box sx={{
//             position: 'absolute',
//             width: '300px',
//             height: '300px',
//             borderRadius: '50%',
//             backgroundColor: 'rgba(255,255,255,0.1)',
//             bottom: '-150px',
//             right: '-100px',
//             zIndex: 0
//           }} />
//         </Paper>
//       </motion.div>

//       <Box sx={{ display: 'flex', gap: 3, flexDirection: isMobile ? 'column' : 'row' }}>
//         <Box 
//           component={motion.div}
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           sx={{ flex: 1 }}
//         >
//           <motion.div variants={itemVariants}>
//             <Paper 
//               elevation={2} 
//               sx={{ 
//                 p: 3, 
//                 mb: 3,
//                 borderRadius: 2,
//                 transition: 'all 0.3s ease-in-out'
//               }}
//             >
//               <TextField
//                 fullWidth
//                 label="Blog Title"
//                 variant="outlined"
//                 value={post.title}
//                 onChange={(e) => setPost((prev) => ({ ...prev, title: e.target.value }))}
//                 placeholder="Enter an attention-grabbing title..."
//                 InputProps={{
//                   sx: {
//                     fontSize: '1.2rem',
//                     '&:focus': {
//                       boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
//                     }
//                   }
//                 }}
//                 sx={{ 
//                   mb: 3,
//                   '& .MuiOutlinedInput-root': {
//                     transition: 'all 0.3s ease'
//                   },
//                   '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
//                     borderColor: theme.palette.primary.light
//                   }
//                 }}
//               />

//               <Box sx={{ mb: 2 }}>
//                 <Tabs 
//                   value={isPreview ? 1 : 0} 
//                   onChange={(_, newValue) => setIsPreview(Boolean(newValue))}
//                   sx={{ mb: 2 }}
//                 >
//                   <Tab label="Editor" />
//                   <Tab label="Preview" />
//                 </Tabs>
//               </Box>

//               <AnimatePresence mode="wait">
//                 {!isPreview ? (
//                   <motion.div
//                     key="editor"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.25 }}
//                   >
//                     <EnhancedTiptapEditor 
//                       content={post.content || undefined}
//                       onChange={handleContentChange} 
//                     />
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="preview"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.25 }}
//                   >
//                     <Paper 
//                       elevation={1} 
//                       sx={{ 
//                         p: 3, 
//                         minHeight: '400px', 
//                         borderRadius: 1,
//                         bgcolor: 'grey.50'
//                       }}
//                     >
//                       <BlogPreview post={post} />
//                     </Paper>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
              
//               <Box sx={{ 
//                 display: 'flex', 
//                 justifyContent: 'space-between', 
//                 alignItems: 'center', 
//                 mt: 2,
//                 color: 'text.secondary',
//                 fontSize: '0.9rem'
//               }}>
//                 <Typography variant="body2">
//                   {wordCount} words · {readTime} min read
//                 </Typography>
//                 <Typography variant="body2">
//                   {post.isDraft ? 'Draft' : blogData && blogData.isPublished ? 'Published' : 'Ready to publish'}
//                 </Typography>
//               </Box>
//             </Paper>
//           </motion.div>
//         </Box>

//         <Box
//           component={motion.div}
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           sx={{ width: isMobile ? '100%' : '350px' }}
//         >
//           <motion.div variants={itemVariants}>
//             <Paper elevation={2} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
//               <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                 <InfoOutlined fontSize="small" />
//                 Post Settings
//               </Typography>
//               <Divider sx={{ mb: 3 }} />
              
//               <FormControl fullWidth sx={{ mb: 3 }}>
//                 <InputLabel>Category</InputLabel>
//                 <Select
//                   value={post.category}
//                   label="Category"
//                   onChange={(e) => setPost((prev) => ({ ...prev, category: e.target.value }))}
//                   sx={{
//                     '& .MuiSelect-select': {
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: 1
//                     }
//                   }}
//                   MenuProps={{
//                     PaperProps: {
//                       sx: {
//                         maxHeight: 300,
//                         '& .MuiMenuItem-root': {
//                           transition: 'background-color 0.2s ease',
//                           display: 'flex',
//                           alignItems: 'center',
//                           gap: 1
//                         }
//                       }
//                     }
//                   }}
//                 >
//                   {categories.map((category) => (
//                     <MenuItem key={category.value} value={category.value}>
//                       {category.icon && React.cloneElement(category.icon, { fontSize: 'small' })}
//                       {category.label}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>

//               <TextField
//                 fullWidth
//                 label="Add Tags"
//                 placeholder="Press Enter to add tags"
//                 onKeyDown={handleTagInput}
//                 helperText={`${post.tags.length}/10 tags added`}
//                 sx={{ mb: 2 }}
//                 InputProps={{
//                   endAdornment: (
//                     <Tooltip title="Add up to 10 tags to improve discoverability">
//                       <InfoOutlined color="action" fontSize="small" sx={{ cursor: 'help' }} />
//                     </Tooltip>
//                   )
//                 }}
//               />

//               <Box sx={{ 
//                 display: 'flex', 
//                 flexWrap: 'wrap', 
//                 gap: 1, 
//                 mb: 3,
//                 minHeight: '50px'
//               }}>
//                 <AnimatePresence>
//                   {post.tags.map((tag) => (
//                     <motion.div
//                       key={tag}
//                       initial={{ scale: 0, opacity: 0 }}
//                       animate={{ scale: 1, opacity: 1 }}
//                       exit={{ scale: 0, opacity: 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <Chip
//                         label={tag}
//                         onDelete={() => handleRemoveTag(tag)}
//                         color="primary"
//                         variant="outlined"
//                         sx={{ 
//                           transition: 'all 0.2s ease',
//                           '&:hover': {
//                             backgroundColor: 'primary.light',
//                             color: 'white'
//                           }
//                         }}
//                       />
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
                
//                 {post.tags.length === 0 && (
//                   <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
//                     No tags added yet
//                   </Typography>
//                 )}
//               </Box>

//               <Typography variant="subtitle1" gutterBottom>
//                 Cover Image
//               </Typography>
              
//               <AnimatePresence mode="wait">
//                 {!post.coverImage ? (
//                   <motion.div
//                     key="upload-button"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                   >
//                     <Button
//                       fullWidth
//                       variant="outlined"
//                       startIcon={<ImageIcon />}
//                       component="label"
//                       sx={{ 
//                         mb: 2,
//                         height: '100px',
//                         border: '2px dashed',
//                         borderColor: 'divider',
//                         '&:hover': {
//                           borderColor: 'primary.main',
//                           backgroundColor: 'rgba(0, 0, 0, 0.04)'
//                         }
//                       }}
//                     >
//                       Upload Cover Image
//                       <input type="file" hidden accept="image/*" onChange={handleCoverImageUpload} />
//                     </Button>
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="image-preview"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                   >
//                     <Box sx={{ mt: 2, position: 'relative' }}>
//                       <img
//                         src={post.coverImage}
//                         alt="Cover"
//                         style={{
//                           width: '100%',
//                           height: '200px',
//                           objectFit: 'cover',
//                           borderRadius: '8px',
//                         }}
//                       />
//                       <Box sx={{
//                         position: 'absolute',
//                         top: 0,
//                         right: 0,
//                         p: 1
//                       }}>
//                         <Tooltip title="Remove image">
//                           <IconButton
//                             onClick={handleRemoveCoverImage}
//                             size="small"
//                             sx={{
//                               bgcolor: 'rgba(0,0,0,0.5)',
//                               color: 'white',
//                               '&:hover': {
//                                 bgcolor: 'rgba(255,0,0,0.7)'
//                               }
//                             }}
//                           >
//                             <DeleteOutline fontSize="small" />
//                           </IconButton>
//                         </Tooltip>
//                       </Box>
//                     </Box>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
              
//               <Divider sx={{ my: 3 }} />
              
//               <Box sx={{ display: 'flex', gap: 2 }}>
//                 <Button
//                   fullWidth
//                   variant="contained"
//                   startIcon={<VisibilityOutlined />}
//                   onClick={() => setIsPreview(!isPreview)}
//                   color="info"
//                 >
//                   {isPreview ? 'Edit' : 'Preview'}
//                 </Button>
                
//                 <Button
//                   fullWidth
//                   variant="contained"
//                   startIcon={<Publish />}
//                   color="primary"
//                   onClick={handlePublish}
//                   disabled={isSaving || isUploading}
//                 >
//                   {blogData && blogData.isPublished ? 'Update' : 'Publish'}
//                 </Button>
//               </Box>
//             </Paper>
//           </motion.div>
          
//           <motion.div variants={itemVariants}>
//             <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
//               <Typography variant="subtitle1" gutterBottom>
//                 Publishing Tips
//               </Typography>
//               <Alert severity="info" sx={{ mb: 2 }}>
//                 Posts with images get 94% more views!
//               </Alert>
//               <Alert severity="success">
//                 Optimal post length: 1,500-2,000 words
//               </Alert>
//             </Paper>
//           </motion.div>
//         </Box>
//       </Box>
      
//       <Backdrop
//         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
//         open={isSaving || isUploading}
//       >
//         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
//           <CircularProgress color="inherit" />
//           <Typography variant="body1">
//             {isUploading ? uploadStatus : 
//              post.isDraft ? 'Saving your draft...' : 'Publishing your post...'}
//           </Typography>
//         </Box>
//       </Backdrop>
      
//       <Snackbar
//         open={notification.open}
//         autoHideDuration={4000}
//         onClose={handleCloseNotification}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//       >
//         <Alert 
//           onClose={handleCloseNotification} 
//           severity={notification.severity} 
//           variant="filled"
//           sx={{ width: '100%' }}
//         >
//           {notification.message}
//         </Alert>
//       </Snackbar>
//     </Container>
//   );
// };

// export default BlogCreation;


//======================================================================


import {
  DeleteOutline,
  Image as ImageIcon,
  InfoOutlined,
  Publish,
  Save,
  VisibilityOutlined
} from '@mui/icons-material';
import {
  Alert,
  Backdrop,
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Snackbar,
  Tab,
  Tabs,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { categories } from '../Data/blogData';
import BlogPreview from './BlogPreview';
import Navbar from './Navbar';
import EnhancedTiptapEditor from './TiptapEditor';

const BlogCreation = () => {
  const location = useLocation();
  const blogData = location.state?.blogData;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeTab, setActiveTab] = useState(0);
  const [isPreview, setIsPreview] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('');
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState({
    title: '',
    content: null,
    category: '',
    tags: [],
    coverImage: '',
    isDraft: true,
    author: {
      name: '',
      avatar: ''
    }
  });

  useEffect(() => {
    if (blogData) {
      try {
        const parsedContent = typeof blogData.content === 'string' 
          ? JSON.parse(blogData.content) 
          : blogData.content;
        
        setPost({
          title: blogData.title,
          content: parsedContent,
          category: blogData.category || '',
          tags: blogData.tags || [],
          coverImage: blogData.coverImageUrl || '',
          isDraft: !blogData.isPublished,
          author: {
            name: blogData.fullName || blogData.username || '',
            avatar: blogData.profileImageUrl || ''
          }
        });
      } catch (error) {
        console.error('Error parsing content:', error);
        setPost(prev => ({ ...prev, content: null }));
      }
    }
    setIsLoading(false);
  }, [blogData]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const handleContentChange = (newContent) => {
    setPost((prev) => ({ ...prev, content: newContent }));
  };

  const handleTagInput = (event) => {
    if (event.key === 'Enter' && event.target.value.trim()) {
      const newTag = event.target.value.trim();
      if (!post.tags.includes(newTag) && post.tags.length < 10) {
        setPost((prev) => ({
          ...prev,
          tags: [...prev.tags, newTag],
        }));
        
        setNotification({
          open: true,
          message: `Tag "${newTag}" added!`,
          severity: 'success'
        });
      } else if (post.tags.length >= 10) {
        setNotification({
          open: true,
          message: 'Maximum 10 tags allowed',
          severity: 'warning'
        });
      }
      event.target.value = '';
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setPost((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const uploadToCloudinary = async (file) => {
    try {
      setIsUploading(true);
      setUploadStatus('Uploading...');
      
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'my_unsigned');
      
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dblu8hz5g/image/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      
      if (response.data && response.data.secure_url) {
        setUploadStatus('Upload complete!');
        return response.data.secure_url;
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      console.error('Error uploading to Cloudinary:', error);
      setUploadStatus('Upload failed. Please try again.');
      throw error;
    } finally {
      setIsUploading(false);
    }
  };

  const handleCoverImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5000000) {
        setNotification({
          open: true,
          message: 'Image size should be less than 5MB',
          severity: 'error'
        });
        return;
      }
      
      try {
        const imageUrl = await uploadToCloudinary(file);
        setPost((prev) => ({
          ...prev,
          coverImage: imageUrl,
        }));
        
        setNotification({
          open: true,
          message: 'Cover image uploaded successfully!',
          severity: 'success'
        });
      } catch (error) {
        setNotification({
          open: true,
          message: 'Failed to upload cover image',
          severity: 'error'
        });
      }
    }
  };

  const handleRemoveCoverImage = () => {
    setPost(prev => ({ ...prev, coverImage: '' }));
  };

  const getUserEmail = () => {
    const email = sessionStorage.getItem('userEmail');
    if (!email) {
      throw new Error('User email not found in session');
    }
    return email;
  };

  const createBlogPost = async (postData) => {
    try {
      const userEmail = getUserEmail();
      const isUpdate = !!blogData;
      
      const url = isUpdate 
        ? `https://localhost:7163/api/Post/byemail/${blogData.id}`
        : `https://localhost:7163/api/Post`;

      const method = isUpdate ? 'put' : 'post';
      
      const payload = isUpdate
        ? {
            title: postData.title,
            content: JSON.stringify(postData.content),
            coverImageUrl: postData.coverImageUrl,
            category: postData.category,
            tags: postData.tags,
            isPublished: postData.isPublished
          }
        : {
            userEmail: userEmail,
            title: postData.title,
            content: JSON.stringify(postData.content),
            coverImageUrl: postData.coverImageUrl,
            category: postData.category,
            tags: postData.tags,
            isPublished: postData.isPublished
          };

      const response = await axios[method](url, payload, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      return response.data;
    } catch (error) {
      console.error('Error saving post:', error);
      throw error;
    }
  };

  const handleSave = async (isPublished = false) => {
    if (!post.title) {
      setNotification({
        open: true,
        message: 'Please add a title to your post',
        severity: 'warning'
      });
      return;
    }

    if (isPublished) {
      const missingFields = [];
      if (!post.content) missingFields.push('content');
      if (!post.category) missingFields.push('category');
      if (!post.coverImage) missingFields.push('cover image');

      if (missingFields.length > 0) {
        setNotification({
          open: true,
          message: `Please fill in all required fields before publishing: ${missingFields.join(', ')}`,
          severity: 'error'
        });
        return;
      }
    }

    setIsSaving(true);
    
    try {
      const postData = {
        title: post.title,
        content: post.content,
        coverImageUrl: post.coverImage || null,
        category: post.category || null,
        tags: post.tags.length > 0 ? post.tags : null,
        isPublished: isPublished
      };

      await createBlogPost(postData);
      
      setNotification({
        open: true,
        message: isPublished 
          ? blogData 
            ? 'Post updated and published successfully!' 
            : 'Post published successfully!'
          : blogData 
            ? 'Draft updated successfully!' 
            : 'Draft saved successfully!',
        severity: 'success'
      });
      
      setPost(prev => ({ ...prev, isDraft: !isPublished }));

    } catch (error) {
      console.error('Error saving post:', error);
      
      let errorMessage = 'Failed to save post';
      if (error.response) {
        if (error.response.data.errors) {
          errorMessage = Object.values(error.response.data.errors)
            .flat()
            .join(', ');
        } else if (error.response.data.message) {
          errorMessage = error.response.data.message;
        }
      }

      setNotification({
        open: true,
        message: errorMessage,
        severity: 'error'
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleSaveDraft = () => {
    handleSave(false);
  };

  const handlePublish = () => {
    handleSave(true);
  };

  const handleCloseNotification = () => {
    setNotification(prev => ({ ...prev, open: false }));
  };

  const calculateWordCount = (content) => {
    if (!content) return 0;
    
    let text = '';
    const extractText = (node) => {
      if (node.text) {
        text += node.text + ' ';
      }
      if (node.content) {
        node.content.forEach(extractText);
      }
    };
    
    if (content.content) {
      content.content.forEach(extractText);
    }
    
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  };

  const wordCount = calculateWordCount(post.content);
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userEmail = getUserEmail();
        const userResponse = await axios.get(
          `https://localhost:7163/api/User/by-email?email=${encodeURIComponent(userEmail)}`
        );

        setPost(prev => ({
          ...prev,
          author: {
            name: userResponse.data.full_Name || userResponse.data.username || "",
            avatar: userResponse.data.profile_Image_Url || ""
          }
        }));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (!blogData) {
      fetchUserData();
    }
  }, [blogData]);

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, md: 4 },
            mb: 4,
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 2,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h3" gutterBottom fontWeight="bold">
                {blogData ? 'Edit Your Blog Post' : 'Create Your Blog Post'}
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>
                {blogData ? 'Update your existing post' : 'Share your thoughts with the world'}
              </Typography>
            </motion.div>
          </Box>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Box sx={{ 
              display: 'flex',
              gap: 2,
              mt: { xs: 2, md: 0 }
            }}>
              <Tooltip title="Save as draft">
                <Button 
                  variant="contained" 
                  color="secondary"
                  startIcon={<Save />}
                  onClick={handleSaveDraft}
                  disabled={isSaving || isUploading}
                >
                  Save
                </Button>
              </Tooltip>
              
              <Tooltip title={blogData && blogData.isPublished ? "Update published post" : "Publish your post"}>
                <Button 
                  variant="contained" 
                  color="secondary"
                  startIcon={<Publish />}
                  onClick={handlePublish}
                  disabled={isSaving || isUploading}
                  sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.100' } }}
                >
                  {blogData && blogData.isPublished ? 'Update' : 'Publish'}
                </Button>
              </Tooltip>
            </Box>
          </motion.div>
          
          <Box sx={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.1)',
            bottom: '-150px',
            right: '-100px',
            zIndex: 0
          }} />
        </Paper>
      </motion.div>

      <Box sx={{ display: 'flex', gap: 3, flexDirection: isMobile ? 'column' : 'row' }}>
        <Box 
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          sx={{ flex: 1 }}
        >
          <motion.div variants={itemVariants}>
            <Paper 
              elevation={2} 
              sx={{ 
                p: 3, 
                mb: 3,
                borderRadius: 2,
                transition: 'all 0.3s ease-in-out'
              }}
            >
              <TextField
                fullWidth
                label="Blog Title"
                variant="outlined"
                value={post.title}
                onChange={(e) => setPost((prev) => ({ ...prev, title: e.target.value }))}
                placeholder="Enter an attention-grabbing title..."
                InputProps={{
                  sx: {
                    fontSize: '1.2rem',
                    '&:focus': {
                      boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
                    }
                  }
                }}
                sx={{ 
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    transition: 'all 0.3s ease'
                  },
                  '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.primary.light
                  }
                }}
              />

              <Box sx={{ mb: 2 }}>
                <Tabs 
                  value={isPreview ? 1 : 0} 
                  onChange={(_, newValue) => setIsPreview(Boolean(newValue))}
                  sx={{ mb: 2 }}
                >
                  <Tab label="Editor" />
                  <Tab label="Preview" />
                </Tabs>
              </Box>

              <AnimatePresence mode="wait">
                {!isPreview ? (
                  <motion.div
                    key="editor"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {!isLoading && (
                      <EnhancedTiptapEditor 
                        key={blogData ? blogData.id : 'new'}
                        content={post.content || undefined}
                        onChange={handleContentChange} 
                      />
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="preview"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Paper 
                      elevation={1} 
                      sx={{ 
                        p: 3, 
                        minHeight: '400px', 
                        borderRadius: 1,
                        bgcolor: 'grey.50'
                      }}
                    >
                      <BlogPreview post={post} />
                    </Paper>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                mt: 2,
                color: 'text.secondary',
                fontSize: '0.9rem'
              }}>
                <Typography variant="body2">
                  {wordCount} words · {readTime} min read
                </Typography>
                <Typography variant="body2">
                  {post.isDraft ? 'Draft' : blogData && blogData.isPublished ? 'Published' : 'Ready to publish'}
                </Typography>
              </Box>
            </Paper>
          </motion.div>
        </Box>

        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          sx={{ width: isMobile ? '100%' : '350px' }}
        >
          <motion.div variants={itemVariants}>
            <Paper elevation={2} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <InfoOutlined fontSize="small" />
                Post Settings
              </Typography>
              <Divider sx={{ mb: 3 }} />
              
              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Category</InputLabel>
                <Select
                  value={post.category}
                  label="Category"
                  onChange={(e) => setPost((prev) => ({ ...prev, category: e.target.value }))}
                  sx={{
                    '& .MuiSelect-select': {
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        maxHeight: 300,
                        '& .MuiMenuItem-root': {
                          transition: 'background-color 0.2s ease',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1
                        }
                      }
                    }
                  }}
                >
                  {categories.map((category) => (
                    <MenuItem key={category.value} value={category.value}>
                      {category.icon && React.cloneElement(category.icon, { fontSize: 'small' })}
                      {category.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                fullWidth
                label="Add Tags"
                placeholder="Press Enter to add tags"
                onKeyDown={handleTagInput}
                helperText={`${post.tags.length}/10 tags added`}
                sx={{ mb: 2 }}
                InputProps={{
                  endAdornment: (
                    <Tooltip title="Add up to 10 tags to improve discoverability">
                      <InfoOutlined color="action" fontSize="small" sx={{ cursor: 'help' }} />
                    </Tooltip>
                  )
                }}
              />

              <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 1, 
                mb: 3,
                minHeight: '50px'
              }}>
                <AnimatePresence>
                  {post.tags.map((tag) => (
                    <motion.div
                      key={tag}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Chip
                        label={tag}
                        onDelete={() => handleRemoveTag(tag)}
                        color="primary"
                        variant="outlined"
                        sx={{ 
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            backgroundColor: 'primary.light',
                            color: 'white'
                          }
                        }}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {post.tags.length === 0 && (
                  <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                    No tags added yet
                  </Typography>
                )}
              </Box>

              <Typography variant="subtitle1" gutterBottom>
                Cover Image
              </Typography>
              
              <AnimatePresence mode="wait">
                {!post.coverImage ? (
                  <motion.div
                    key="upload-button"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={<ImageIcon />}
                      component="label"
                      sx={{ 
                        mb: 2,
                        height: '100px',
                        border: '2px dashed',
                        borderColor: 'divider',
                        '&:hover': {
                          borderColor: 'primary.main',
                          backgroundColor: 'rgba(0, 0, 0, 0.04)'
                        }
                      }}
                    >
                      Upload Cover Image
                      <input type="file" hidden accept="image/*" onChange={handleCoverImageUpload} />
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="image-preview"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Box sx={{ mt: 2, position: 'relative' }}>
                      <img
                        src={post.coverImage}
                        alt="Cover"
                        style={{
                          width: '100%',
                          height: '200px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                        }}
                      />
                      <Box sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        p: 1
                      }}>
                        <Tooltip title="Remove image">
                          <IconButton
                            onClick={handleRemoveCoverImage}
                            size="small"
                            sx={{
                              bgcolor: 'rgba(0,0,0,0.5)',
                              color: 'white',
                              '&:hover': {
                                bgcolor: 'rgba(255,0,0,0.7)'
                              }
                            }}
                          >
                            <DeleteOutline fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </Box>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <Divider sx={{ my: 3 }} />
              
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<VisibilityOutlined />}
                  onClick={() => setIsPreview(!isPreview)}
                  color="info"
                >
                  {isPreview ? 'Edit' : 'Preview'}
                </Button>
                
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<Publish />}
                  color="primary"
                  onClick={handlePublish}
                  disabled={isSaving || isUploading}
                >
                  {blogData && blogData.isPublished ? 'Update' : 'Publish'}
                </Button>
              </Box>
            </Paper>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Publishing Tips
              </Typography>
              <Alert severity="info" sx={{ mb: 2 }}>
                Posts with images get 94% more views!
              </Alert>
              <Alert severity="success">
                Optimal post length: 1,500-2,000 words
              </Alert>
            </Paper>
          </motion.div>
        </Box>
      </Box>
      
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isSaving || isUploading}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <CircularProgress color="inherit" />
          <Typography variant="body1">
            {isUploading ? uploadStatus : 
             post.isDraft ? 'Saving your draft...' : 'Publishing your post...'}
          </Typography>
        </Box>
      </Backdrop>
      
      <Snackbar
        open={notification.open}
        autoHideDuration={4000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseNotification} 
          severity={notification.severity} 
          variant="filled"
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default BlogCreation;