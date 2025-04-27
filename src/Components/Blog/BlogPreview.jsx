// import { Avatar, Box, Chip, Typography } from '@mui/material';
// import React from 'react';
// import ImageLightbox from './ImageLightbox';
// import ImageSlideshow from './ImageSlideshow';

// const BlogPreview = ({ post, onOpenLightbox, lightbox, onCloseLightbox }) => {
//   const formatDate = (date) => {
//     if (!date) return 'Not scheduled';
//     return new Date(date).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   return (
//     <Box sx={{ p: 3 }}>
//       {/* Cover Image */}
//       {post.coverImage && (
//         <Box
//           sx={{
//             width: '100%',
//             height: 300,
//             backgroundImage: `url(${post.coverImage})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             borderRadius: 2,
//             mb: 3,
//             transition: 'all 0.3s ease',
//             '&:hover': { transform: 'scale(1.01)' }
//           }}
//         />
//       )}
      
//       {/* Title */}
//       <Typography variant="h3" gutterBottom sx={{ 
//         fontWeight: 'bold',
//         transition: 'color 0.3s ease',
//         '&:hover': { color: 'primary.main' }
//       }}>
//         {post.title || 'Untitled Blog Post'}
//       </Typography>
      
//       {/* Author Info */}
//       <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
//         <Avatar 
//           src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
//           sx={{ 
//             width: 48, 
//             height: 48,
//             transition: 'all 0.3s ease',
//             '&:hover': { transform: 'scale(1.1)' }
//           }}
//         />
//         <Typography variant="subtitle1">
//           John Doe • {formatDate(post.publishDate)}
//         </Typography>
//       </Box>

//       {/* Category */}
//       {post.category && (
//         <Chip 
//           label={post.categories?.find(cat => cat.value === post.category)?.label || post.category} 
//           color="primary" 
//           sx={{ 
//             mb: 2,
//             transition: 'all 0.3s ease',
//             '&:hover': { transform: 'translateY(-2px)' }
//           }}
//         />
//       )}

//       {/* Tags */}
//       {post.tags.length > 0 && (
//         <Box sx={{ mb: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
//           {post.tags.map(tag => (
//             <Chip 
//               key={tag} 
//               label={tag} 
//               size="small" 
//               sx={{ 
//                 transition: 'all 0.2s ease',
//                 '&:hover': { transform: 'translateY(-2px)' }
//               }}
//             />
//           ))}
//         </Box>
//       )}

//       {/* Content Blocks */}
//       {post.contentBlocks.map((block, index) => {
//         if (block.type === 'text') {
//           const hasImages = block.images && block.images.length > 0;
//           const isEven = index % 2 === 0;
          
//           return (
//             <Box 
//               key={block.id} 
//               sx={{ 
//                 mb: 6, 
//                 display: 'flex',
//                 flexDirection: {
//                   xs: 'column', // Stack on mobile
//                   md: hasImages ? (isEven ? 'row' : 'row-reverse') : 'column' // Alternating layout on desktop if there are images
//                 },
//                 gap: 3,
//                 alignItems: 'center'
//               }}
//             >
//               <Box sx={{ 
//                 flex: hasImages ? '1 1 50%' : '1 1 100%',
//                 width: '100%'
//               }}>
//                 <Typography 
//                   variant="body1" 
//                   sx={{ 
//                     mb: 2,
//                     fontFamily: block.fontFamily || 'inherit',
//                     "& span": { fontFamily: 'inherit' },
//                     lineHeight: 1.6
//                   }}
//                   dangerouslySetInnerHTML={{ __html: block.content || 'No content' }}
//                 />
//               </Box>
              
//               {hasImages && (
//                 <Box sx={{ 
//                   flex: '1 1 50%',
//                   width: '100%',
//                 }}>
//                   <ImageSlideshow 
//                     images={block.images} 
//                     onImageClick={onOpenLightbox}
//                   />
//                 </Box>
//               )}
//             </Box>
//           );
//         } else if (block.type === 'shape') {
//           if (block.shapeType === 'rectangle') {
//             return (
//               <Box 
//                 key={block.id}
//                 sx={{ 
//                   width: block.width, 
//                   height: block.height, 
//                   backgroundColor: block.backgroundColor,
//                   mb: 4,
//                   mx: 'auto',
//                   transition: 'all 0.3s ease',
//                   '&:hover': { transform: 'scale(1.05)' }
//                 }}
//               />
//             );
//           } else if (block.shapeType === 'circle') {
//             return (
//               <Box 
//                 key={block.id}
//                 sx={{ 
//                   width: block.width, 
//                   height: block.height, 
//                   backgroundColor: block.backgroundColor,
//                   borderRadius: '50%',
//                   mb: 4,
//                   mx: 'auto',
//                   transition: 'all 0.3s ease',
//                   '&:hover': { transform: 'scale(1.05)' }
//                 }}
//               />
//             );
//           }
//         }
//         return null;
//       })}
      
//       <ImageLightbox 
//         open={lightbox.open} 
//         images={lightbox.images} 
//         activeIndex={lightbox.activeIndex} 
//         onClose={onCloseLightbox}
//       />
//     </Box>
//   );
// };

// export default BlogPreview;


//===========================================================


import {
  Avatar,
  Box,
  Chip,
  Divider,
  Typography,
  useTheme
} from '@mui/material';
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import Youtube from '@tiptap/extension-youtube';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { format } from 'date-fns';
import React from 'react';

const BlogPreview = ({ post }) => {
  const theme = useTheme();
  const { title, content, category, tags, coverImage } = post;

  // Calculate word count from JSON content
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

  const wordCount = calculateWordCount(content);
  const readTime = Math.max(1, Math.ceil(wordCount / 200));
  const formattedDate = format(new Date(), 'MMMM dd, yyyy');

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image,
      Link,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      TextStyle,
      Color,
      Highlight.configure({
        multicolor: true,
      }),
      Youtube.configure({
        width: '100%',
        HTMLAttributes: {
          class: 'youtube-video',
        },
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      HorizontalRule,
    ],
    content: content,
    editable: false,
    editorProps: {
      attributes: {
        class: 'blog-preview-content',
      },
    },
  });

  return (
    <Box sx={{ 
      maxWidth: '100%',
      overflowX: 'hidden',
      fontFamily: theme.typography.fontFamily,
    }}>
      {/* Cover Image */}
      {coverImage && (
        <Box sx={{ mb: 3, borderRadius: '8px', overflow: 'hidden' }}>
          <img
            src={coverImage}
            alt="Cover"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '400px',
              objectFit: 'cover',
            }}
          />
        </Box>
      )}
      
      {/* Title and Metadata */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" sx={{ 
          fontWeight: 700,
          color: theme.palette.text.primary,
          mb: 2,
          lineHeight: 1.2
        }}>
          {title || "Untitled Post"}
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3, alignItems: 'center' }}>
  {/* Author Info */}
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
    {/* Dynamic Profile Image */}
    <Avatar 
      sx={{ width: 36, height: 36 }} 
      src={post.author?.avatar} 
      alt="Profile Image"
    />
    
    {/* Dynamic Name */}
    <Typography variant="body2" color="text.secondary">
      {post.author?.name || "Unknown Author"}
    </Typography>
  </Box>
  
  {/* Published Date */}
  <Typography variant="body2" color="text.secondary">
    {formattedDate}
  </Typography>
  
  {/* Word Count and Read Time */}
  <Typography variant="body2" color="text.secondary">
    {wordCount} words · {readTime} min read
  </Typography>
  
  {/* Category */}
  {category && (
    <Chip 
      label={category} 
      size="small" 
      color="primary" 
      sx={{ fontWeight: 500 }}
    />
  )}
</Box>


        
        {tags?.length > 0 && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            {tags.map(tag => (
              <Chip 
                key={tag} 
                label={tag} 
                size="small" 
                variant="outlined"
                sx={{ 
                  borderColor: theme.palette.divider,
                  '&:hover': { borderColor: theme.palette.primary.main }
                }}
              />
            ))}
          </Box>
        )}
      </Box>
      
      <Divider sx={{ mb: 4 }} />
      
      {/* Content */}
      <Box sx={{
        '& .ProseMirror': {
          fontSize: '1.1rem',
          lineHeight: 1.7,
          '& h1, h2, h3, h4, h5, h6': {
            margin: '1.5em 0 0.5em',
            fontWeight: 600,
            lineHeight: 1.2
          },
          '& img': {
            borderRadius: 2,
            margin: '2rem 0',
            boxShadow: 3
          },
          '& blockquote': {
            borderLeft: `4px solid ${theme.palette.primary.main}`,
            margin: '1.5rem 0',
            paddingLeft: '1.5rem',
            fontStyle: 'italic',
            color: 'text.secondary'
          },
          '& ul, ol': {
            paddingLeft: '2rem',
            margin: '1rem 0'
          },
          '& table': {
            margin: '2rem 0',
            borderCollapse: 'collapse',
            width: '100%',
            '& td, th': {
              border: `1px solid ${theme.palette.divider}`,
              padding: '0.75rem',
              textAlign: 'left'
            },
            '& th': {
              backgroundColor: theme.palette.action.selected
            }
          },
          '& .youtube-video': {
            width: '100%',
            height: '500px',
            margin: '2rem 0',
            borderRadius: 2,
            overflow: 'hidden',
            [theme.breakpoints.down('sm')]: {
              height: '250px'
            }
          }
        }
      }}>
        <EditorContent editor={editor} />
      </Box>
    </Box>
  );
};

export default BlogPreview;