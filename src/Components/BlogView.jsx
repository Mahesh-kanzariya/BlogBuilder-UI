// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import CategoryIcon from '@mui/icons-material/Category';
// import LocalOfferIcon from '@mui/icons-material/LocalOffer';
// import {
//     Box,
//     Button,
//     Chip,
//     Dialog,
//     DialogActions,
//     DialogContent,
//     DialogTitle,
//     Typography,
//     useTheme
// } from '@mui/material';
// import React, { useEffect, useState } from 'react';

// // Component to render TipTap JSON content
// const RenderTipTapContent = ({ content }) => {
//   // Parse the content if it's a string
//   let parsedContent;
//   try {
//     parsedContent = typeof content === 'string' ? JSON.parse(content) : content;
//   } catch (error) {
//     console.error("Error parsing content:", error);
//     return <Typography color="error">Error displaying content</Typography>;
//   }

//   // Recursive function to render nodes
//   const renderNode = (node) => {
//     if (!node) return null;

//     // Handle different node types
//     switch (node.type) {
//       case 'doc':
//         return (
//           <React.Fragment>
//             {node.content && node.content.map((childNode, index) => (
//               <React.Fragment key={index}>
//                 {renderNode(childNode)}
//               </React.Fragment>
//             ))}
//           </React.Fragment>
//         );
      
//       case 'paragraph':
//         return (
//           <Box component="p" sx={{ my: 2 }}>
//             {node.content ? node.content.map((childNode, index) => (
//               <React.Fragment key={index}>
//                 {renderNode(childNode)}
//               </React.Fragment>
//             )) : null}
//           </Box>
//         );
      
//       case 'text':
//         let content = node.text;
        
//         // Apply marks if they exist
//         if (node.marks) {
//           node.marks.forEach(mark => {
//             switch (mark.type) {
//               case 'bold':
//                 content = <strong>{content}</strong>;
//                 break;
//               case 'italic':
//                 content = <em>{content}</em>;
//                 break;
//               case 'underline':
//                 content = <u>{content}</u>;
//                 break;
//               default:
//                 break;
//             }
//           });
//         }
        
//         return content;
      
//       case 'image':
//         return (
//           <Box sx={{ my: 2, textAlign: 'center' }}>
//             <img 
//               src={node.attrs.src} 
//               alt={node.attrs.alt || "Blog image"} 
//               style={{ 
//                 maxWidth: '100%', 
//                 borderRadius: '8px',
//                 maxHeight: '400px',
//                 objectFit: 'contain'
//               }} 
//             />
//             {node.attrs.title && (
//               <Typography variant="caption" color="text.secondary" display="block">
//                 {node.attrs.title}
//               </Typography>
//             )}
//           </Box>
//         );
      
//       case 'heading':
//         const HeadingComponent = `h${node.attrs.level}`;
//         return (
//           <Typography component={HeadingComponent} variant={`h${node.attrs.level + 2}`} sx={{ my: 2, fontWeight: 'bold' }}>
//             {node.content ? node.content.map((childNode, index) => (
//               <React.Fragment key={index}>
//                 {renderNode(childNode)}
//               </React.Fragment>
//             )) : null}
//           </Typography>
//         );
      
//       case 'bulletList':
//         return (
//           <ul style={{ marginLeft: '20px' }}>
//             {node.content ? node.content.map((childNode, index) => (
//               <React.Fragment key={index}>
//                 {renderNode(childNode)}
//               </React.Fragment>
//             )) : null}
//           </ul>
//         );
      
//       case 'orderedList':
//         return (
//           <ol style={{ marginLeft: '20px' }}>
//             {node.content ? node.content.map((childNode, index) => (
//               <React.Fragment key={index}>
//                 {renderNode(childNode)}
//               </React.Fragment>
//             )) : null}
//           </ol>
//         );
      
//       case 'listItem':
//         return (
//           <li>
//             {node.content ? node.content.map((childNode, index) => (
//               <React.Fragment key={index}>
//                 {renderNode(childNode)}
//               </React.Fragment>
//             )) : null}
//           </li>
//         );
      
//       case 'horizontalRule':
//         return <hr style={{ margin: '20px 0' }} />;
      
//       case 'blockquote':
//         return (
//           <Box 
//             component="blockquote" 
//             sx={{ 
//               borderLeft: '4px solid', 
//               borderColor: 'primary.main',
//               pl: 2,
//               py: 1,
//               my: 2,
//               bgcolor: 'background.paper',
//               fontStyle: 'italic'
//             }}
//           >
//             {node.content ? node.content.map((childNode, index) => (
//               <React.Fragment key={index}>
//                 {renderNode(childNode)}
//               </React.Fragment>
//             )) : null}
//           </Box>
//         );
      
//       // Add more node types as needed
      
//       default:
//         return null;
//     }
//   };

//   return parsedContent ? renderNode(parsedContent) : null;
// };

// const BLogView = ({ blog, open, onClose }) => {
//   const theme = useTheme();
//   const [formattedDate, setFormattedDate] = useState('');

//   useEffect(() => {
//     if (blog?.createdAt) {
//       const date = new Date(blog.createdAt);
//       setFormattedDate(date.toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric'
//       }));
//     }
//   }, [blog]);

//   if (!blog) return null;

//   return (
//     <Dialog
//       open={open}
//       onClose={onClose}
//       maxWidth="md"
//       fullWidth
//       scroll="paper"
//     >
//       <DialogTitle sx={{ pb: 0 }}>
//         <Typography variant="h4" gutterBottom fontWeight="bold">
//           {blog.title}
//         </Typography>
//         <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2, alignItems: 'center' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
//             <CalendarTodayIcon fontSize="small" color="action" />
//             <Typography variant="body2" color="text.secondary">
//               {formattedDate}
//             </Typography>
//           </Box>
          
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
//             <CategoryIcon fontSize="small" color="action" />
//             <Chip 
//               label={blog.category} 
//               size="small" 
//               sx={{ 
//                 bgcolor: theme.palette.primary.light,
//                 color: theme.palette.common.white
//               }} 
//             />
//           </Box>
          
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexWrap: 'wrap' }}>
//             <LocalOfferIcon fontSize="small" color="action" />
//             {blog.tags && blog.tags.map(tag => (
//               <Chip 
//                 key={tag} 
//                 label={tag} 
//                 size="small" 
//                 sx={{ bgcolor: 'background.paper' }} 
//               />
//             ))}
//           </Box>
//         </Box>
//       </DialogTitle>
      
//       {blog.coverImageUrl && (
//         <Box sx={{ px: 3, pt: 2 }}>
//           <img 
//             src={blog.coverImageUrl} 
//             alt={blog.title}
//             style={{ 
//               width: '100%', 
//               borderRadius: '8px', 
//               maxHeight: '400px',
//               objectFit: 'cover' 
//             }} 
//           />
//         </Box>
//       )}
      
//       <DialogContent dividers>
//         {blog.content && (
//           <RenderTipTapContent content={blog.content} />
//         )}
//       </DialogContent>
      
//       <DialogActions>
//         <Button onClick={onClose}>Close</Button>
//         {!blog.isPublished && (
//           <Button 
//             variant="contained" 
//             color="primary"
//             onClick={() => {
//               // This would be connected to your edit functionality
//               onClose();
//               // Navigate to edit page, implementation dependent on your routing
//             }}
//           >
//             Edit Draft
//           </Button>
//         )}
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default BLogView;

//================================================


// import {
//     Box,
//     Chip,
//     Container,
//     Divider,
//     Typography,
//     useMediaQuery,
//     useTheme
//   } from '@mui/material';
//   import { useEditor, EditorContent } from '@tiptap/react';
//   import { useEffect, useState } from 'react';
//   import StarterKit from '@tiptap/starter-kit';
//   import Underline from '@tiptap/extension-underline';
//   import Image from '@tiptap/extension-image';
//   import Link from '@tiptap/extension-link';
//   import TextAlign from '@tiptap/extension-text-align';
//   import TextStyle from '@tiptap/extension-text-style';
//   import Highlight from '@tiptap/extension-highlight';
//   import Color from '@tiptap/extension-color';
//   import Youtube from '@tiptap/extension-youtube';
//   import Table from '@tiptap/extension-table';
//   import TableCell from '@tiptap/extension-table-cell';
//   import TableHeader from '@tiptap/extension-table-header';
//   import TableRow from '@tiptap/extension-table-row';
//   import TaskItem from '@tiptap/extension-task-item';
//   import TaskList from '@tiptap/extension-task-list';
//   import HorizontalRule from '@tiptap/extension-horizontal-rule';
  
//   const BlogView = ({ blogData }) => {
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//     const [content, setContent] = useState(null);
  
//     // Parse content when blogData changes
//     useEffect(() => {
//       if (blogData?.content) {
//         try {
//           const parsedContent = typeof blogData.content === 'string' ? 
//             JSON.parse(blogData.content) : blogData.content;
//           setContent(parsedContent);
//         } catch (error) {
//           console.error('Error parsing blog content:', error);
//         }
//       }
//     }, [blogData]);
  
//     const editor = useEditor({
//       extensions: [
//         StarterKit,
//         Underline,
//         Image,
//         Link,
//         TextAlign.configure({
//           types: ['heading', 'paragraph'],
//         }),
//         TextStyle,
//         Color,
//         Highlight.configure({
//           multicolor: true,
//         }),
//         Youtube.configure({
//           width: '100%',
//           HTMLAttributes: {
//             class: 'youtube-video',
//           },
//         }),
//         Table.configure({
//           resizable: true,
//         }),
//         TableRow,
//         TableHeader,
//         TableCell,
//         TaskList,
//         TaskItem.configure({
//           nested: true,
//         }),
//         HorizontalRule,
//       ],
//       content: content,
//       editable: false,
//       editorProps: {
//         attributes: {
//           class: 'blog-content',
//         },
//       },
//     });
  
//     if (!blogData || !content) return null;
  
//     const formatDate = (dateString) => {
//       const options = { year: 'numeric', month: 'long', day: 'numeric' };
//       return new Date(dateString).toLocaleDateString(undefined, options);
//     };
  
//     return (
//       <Container maxWidth="lg" sx={{ py: 4 }}>
//         <Box sx={{ mb: 4 }}>
//           <Typography 
//             variant="h1" 
//             sx={{ 
//               fontSize: isMobile ? '2.5rem' : '3.5rem',
//               fontWeight: 700,
//               lineHeight: 1.2,
//               mb: 3
//             }}
//           >
//             {blogData.title}
//           </Typography>
  
//           {blogData.coverImageUrl && (
//             <Box sx={{ 
//               mb: 4,
//               borderRadius: 2,
//               overflow: 'hidden',
//               boxShadow: 3
//             }}>
//               <img
//                 src={blogData.coverImageUrl}
//                 alt="Cover"
//                 style={{
//                   width: '100%',
//                   height: '500px',
//                   objectFit: 'cover',
//                 }}
//               />
//             </Box>
//           )}
  
//           <Box sx={{ 
//             display: 'flex', 
//             flexWrap: 'wrap', 
//             gap: 2, 
//             mb: 4,
//             alignItems: 'center'
//           }}>
//             <Chip 
//               label={blogData.category} 
//               color="primary"
//               sx={{ fontWeight: 600, textTransform: 'capitalize' }}
//             />
//             {blogData.tags?.map((tag) => (
//               <Chip 
//                 key={tag}
//                 label={tag}
//                 variant="outlined"
//                 sx={{ textTransform: 'capitalize' }}
//               />
//             ))}
//           </Box>
  
//           <Box sx={{ 
//             display: 'flex', 
//             gap: 2, 
//             mb: 4,
//             color: 'text.secondary',
//             flexWrap: 'wrap'
//           }}>
//             <Typography variant="body2">
//               By {blogData.userEmail}
//             </Typography>
//             <Typography variant="body2">
//               Published on {formatDate(blogData.createdAt)}
//             </Typography>
//             {blogData.updatedAt && (
//               <Typography variant="body2">
//                 Updated on {formatDate(blogData.updatedAt)}
//               </Typography>
//             )}
//           </Box>
  
//           <Divider sx={{ mb: 4 }} />
  
//           <Box sx={{
//             '& .ProseMirror': {
//               fontSize: '1.1rem',
//               lineHeight: 1.7,
//               '& h1, h2, h3, h4, h5, h6': {
//                 margin: '1.5em 0 0.5em',
//                 fontWeight: 600,
//                 lineHeight: 1.2
//               },
//               '& img': {
//                 borderRadius: 2,
//                 margin: '2rem 0',
//                 boxShadow: 3
//               },
//               '& blockquote': {
//                 borderLeft: `4px solid ${theme.palette.primary.main}`,
//                 margin: '1.5rem 0',
//                 paddingLeft: '1.5rem',
//                 fontStyle: 'italic',
//                 color: 'text.secondary'
//               },
//               '& ul, ol': {
//                 paddingLeft: '2rem',
//                 margin: '1rem 0'
//               },
//               '& table': {
//                 margin: '2rem 0',
//                 borderCollapse: 'collapse',
//                 width: '100%',
//                 '& td, th': {
//                   border: `1px solid ${theme.palette.divider}`,
//                   padding: '0.75rem',
//                   textAlign: 'left'
//                 },
//                 '& th': {
//                   backgroundColor: theme.palette.action.selected
//                 }
//               },
//               '& .youtube-video': {
//                 width: '100%',
//                 height: '500px',
//                 margin: '2rem 0',
//                 borderRadius: 2,
//                 overflow: 'hidden',
//                 [theme.breakpoints.down('sm')]: {
//                   height: '250px'
//                 }
//               }
//             }
//           }}>
//             <EditorContent editor={editor} />
//           </Box>
//         </Box>
//       </Container>
//     );
//   };
  
//   export default BlogView;


//==========================================================


import {
    Box,
    Chip,
    Container,
    Divider,
    Typography,
    useMediaQuery,
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
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
  
  const BlogView = ({ blogData }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [content, setContent] = useState(null);
  
    // Parse content when blogData changes
    useEffect(() => {
      if (blogData?.content) {
        try {
          // Handle content whether it's already an object or a string
          const parsedContent = typeof blogData.content === 'string' ? 
            JSON.parse(blogData.content) : blogData.content;
          setContent(parsedContent);
        } catch (error) {
          console.error('Error parsing blog content:', error);
          setContent(null);
        }
      }
    }, [blogData]);
  
    // Only initialize editor when content is available
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
      editable: false,
      editorProps: {
        attributes: {
          class: 'blog-content',
        },
      },
    }, []);
  
    // Update editor content when content state changes
    useEffect(() => {
      if (editor && content) {
        editor.commands.setContent(content);
      }
    }, [editor, content]);
  
    if (!blogData) return null;
  
    const formatDate = (dateString) => {
      if (!dateString) return "";
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };
  
    return (
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Navbar/>
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: isMobile ? '2.5rem' : '3.5rem',
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 3
            }}
          >
            {blogData.title}
          </Typography>
  
          {blogData.coverImageUrl && (
            <Box sx={{ 
              mb: 4,
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: 3
            }}>
              <img
                src={blogData.coverImageUrl}
                alt="Cover"
                style={{
                  width: '100%',
                  height: '500px',
                  objectFit: 'cover',
                }}
              />
            </Box>
          )}
  
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 2, 
            mb: 4,
            alignItems: 'center'
          }}>
            {blogData.category && (
              <Chip 
                label={blogData.category} 
                color="primary"
                sx={{ fontWeight: 600, textTransform: 'capitalize' }}
              />
            )}
            {blogData.tags?.map((tag) => (
              <Chip 
                key={tag}
                label={tag}
                variant="outlined"
                sx={{ textTransform: 'capitalize' }}
              />
            ))}
          </Box>
  
          <Box sx={{ 
  display: 'flex', 
  alignItems: 'center', 
  gap: 1.5,
  mb: 4,
  color: 'text.secondary',
  flexWrap: 'wrap'
}}>
  <Box sx={{ 
    width: 40, 
    height: 40, 
    borderRadius: '50%', 
    overflow: 'hidden',
    flexShrink: 0 
  }}>
    <img 
      src={blogData.profileImageUrl} 
      alt="Profile" 
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  </Box>

  <Typography variant="body2" sx={{ fontWeight: 600 }}>
    {blogData.fullName ? blogData.fullName.trim() : blogData.username}
  </Typography>

  <Typography variant="body2">
    • Published on {formatDate(blogData.createdAt)}
  </Typography>

  {blogData.updatedAt && (
    <Typography variant="body2">
      • Updated on {formatDate(blogData.updatedAt)}
    </Typography>
  )}
</Box>

  
          <Divider sx={{ mb: 4 }} />
  
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
                maxWidth: '100%',
                height: 'auto',
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
            {editor && <EditorContent editor={editor} />}
          </Box>
        </Box>
      </Container>
    );
  };
  
  export default BlogView;