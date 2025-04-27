// import {
//     CheckBox,
//     Code,
//     FormatBold,
//     FormatItalic,
//     FormatListBulleted,
//     FormatListNumbered,
//     FormatQuote,
//     FormatUnderlined,
//     Image as ImageIcon,
//     Link as LinkIcon,
//     Redo,
//     Undo,
//     YouTube
// } from '@mui/icons-material';
// import { Box, IconButton, Paper, Tooltip } from '@mui/material';
// import Color from '@tiptap/extension-color';
// import Highlight from '@tiptap/extension-highlight';
// import Image from '@tiptap/extension-image';
// import Link from '@tiptap/extension-link';
// import TaskItem from '@tiptap/extension-task-item';
// import TaskList from '@tiptap/extension-task-list';
// import TextStyle from '@tiptap/extension-text-style';
// import Underline from '@tiptap/extension-underline';
// import Youtube from '@tiptap/extension-youtube';
// import { EditorContent, useEditor } from '@tiptap/react';
// import StarterKit from '@tiptap/starter-kit';
// import { motion } from 'framer-motion';

// const TiptapEditor = ({ content, onChange }) => {
//   const editor = useEditor({
//     extensions: [
//       StarterKit,
//       Underline,
//       Image,
//       TaskList,
//       TaskItem,
//       Link,
//       TextStyle,
//       Color,
//       Highlight,
//       Youtube,
//     ],
//     content,
//     onUpdate: ({ editor }) => {
//       onChange(editor.getHTML());
//     },
//   });

//   if (!editor) {
//     return null;
//   }

//   const MenuButton = ({ onClick, icon, title, isActive = null }) => (
//     <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
//       <Tooltip title={title}>
//         <IconButton
//           size="small"
//           onClick={onClick}
//           color={isActive !== null && isActive ? 'primary' : 'default'}
//         >
//           {icon}
//         </IconButton>
//       </Tooltip>
//     </motion.div>
//   );

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Paper
//         elevation={2}
//         sx={{
//           p: 1,
//           mb: 2,
//           display: 'flex',
//           gap: 1,
//           flexWrap: 'wrap',
//           backgroundColor: 'background.paper',
//           borderRadius: '8px',
//           '& > *': {
//             transition: 'all 0.2s ease',
//           },
//         }}
//       >
//         <MenuButton
//           onClick={() => editor.chain().focus().toggleBold().run()}
//           icon={<FormatBold />}
//           title="Bold"
//           isActive={editor.isActive('bold')}
//         />
//         <MenuButton
//           onClick={() => editor.chain().focus().toggleItalic().run()}
//           icon={<FormatItalic />}
//           title="Italic"
//           isActive={editor.isActive('italic')}
//         />
//         <MenuButton
//           onClick={() => editor.chain().focus().toggleUnderline().run()}
//           icon={<FormatUnderlined />}
//           title="Underline"
//           isActive={editor.isActive('underline')}
//         />
//         <MenuButton
//           onClick={() => editor.chain().focus().toggleBulletList().run()}
//           icon={<FormatListBulleted />}
//           title="Bullet List"
//           isActive={editor.isActive('bulletList')}
//         />
//         <MenuButton
//           onClick={() => editor.chain().focus().toggleOrderedList().run()}
//           icon={<FormatListNumbered />}
//           title="Numbered List"
//           isActive={editor.isActive('orderedList')}
//         />
//         <MenuButton
//           onClick={() => editor.chain().focus().toggleBlockquote().run()}
//           icon={<FormatQuote />}
//           title="Quote"
//           isActive={editor.isActive('blockquote')}
//         />
//         <MenuButton
//           onClick={() => editor.chain().focus().toggleCodeBlock().run()}
//           icon={<Code />}
//           title="Code Block"
//           isActive={editor.isActive('codeBlock')}
//         />
//         <MenuButton
//           onClick={() => {
//             const url = window.prompt('Enter image URL:');
//             if (url) {
//               editor.chain().focus().setImage({ src: url }).run();
//             }
//           }}
//           icon={<ImageIcon />}
//           title="Insert Image"
//         />
//         <MenuButton
//           onClick={() => {
//             const url = window.prompt('Enter link URL:');
//             if (url) {
//               editor.chain().focus().setLink({ href: url }).run();
//             }
//           }}
//           icon={<LinkIcon />}
//           title="Insert Link"
//           isActive={editor.isActive('link')}
//         />
//         <MenuButton
//           onClick={() => {
//             const url = window.prompt('Enter YouTube URL:');
//             if (url) {
//               editor.chain().focus().setYoutubeVideo({ src: url }).run();
//             }
//           }}
//           icon={<YouTube />}
//           title="Insert YouTube Video"
//         />
//         <MenuButton
//           onClick={() => editor.chain().focus().toggleTaskList().run()}
//           icon={<CheckBox />}
//           title="Task List"
//           isActive={editor.isActive('taskList')}
//         />
//         <MenuButton
//           onClick={() => editor.chain().focus().undo().run()}
//           icon={<Undo />}
//           title="Undo"
//         />
//         <MenuButton
//           onClick={() => editor.chain().focus().redo().run()}
//           icon={<Redo />}
//           title="Redo"
//         />
//       </Paper>

//       <Paper
//         elevation={3}
//         sx={{
//           '.ProseMirror': {
//             minHeight: '300px',
//             padding: '16px',
//             '&:focus': {
//               outline: 'none',
//             },
//             '& h1': {
//               fontSize: '2em',
//               fontWeight: 'bold',
//               marginBottom: '0.5em',
//             },
//             '& h2': {
//               fontSize: '1.5em',
//               fontWeight: 'bold',
//               marginBottom: '0.5em',
//             },
//             '& p': {
//               marginBottom: '0.5em',
//             },
//             '& ul, & ol': {
//               paddingLeft: '1.2em',
//               marginBottom: '0.5em',
//             },
//             '& blockquote': {
//               borderLeft: '3px solid #ccc',
//               paddingLeft: '1em',
//               marginLeft: '0',
//               fontStyle: 'italic',
//             },
//             '& code': {
//               backgroundColor: '#f5f5f5',
//               padding: '0.2em 0.4em',
//               borderRadius: '3px',
//             },
//             '& pre': {
//               backgroundColor: '#f5f5f5',
//               padding: '1em',
//               borderRadius: '5px',
//               overflow: 'auto',
//             },
//             '& img': {
//               maxWidth: '100%',
//               height: 'auto',
//             },
//             '& a': {
//               color: 'primary.main',
//               textDecoration: 'underline',
//             },
//             '& .task-list': {
//               listStyle: 'none',
//               padding: 0,
//             },
//             '& .task-list-item': {
//               display: 'flex',
//               alignItems: 'center',
//               gap: '0.5em',
//             },
//           },
//         }}
//       >
//         <EditorContent editor={editor} />
//       </Paper>
//     </Box>
//   );
// };

// export default TiptapEditor;


//====================================


// import {
//   CheckBox,
//   Code,
//   FormatBold,
//   FormatItalic,
//   FormatListBulleted,
//   FormatListNumbered,
//   FormatQuote,
//   FormatUnderlined,
//   Image as ImageIcon,
//   Link as LinkIcon,
//   Redo,
//   Undo,
//   YouTube,
//   FormatColorText,
//   TextFields,
//   FormatClear,
//   HighlightOutlined,
//   MoreVert,
//   AddCircleOutline,
//   FormatAlignLeft,
//   FormatAlignCenter,
//   FormatAlignRight,
//   FormatAlignJustify,
//   HorizontalRuleOutlined,
//   TableChart
// } from '@mui/icons-material';
// import { 
//   Box, 
//   IconButton, 
//   Paper, 
//   Tooltip, 
//   Menu, 
//   MenuItem, 
//   ListItemIcon, 
//   ListItemText,
//   Divider,
//   Popover,
//   ButtonGroup,
//   Button,
//   TextField,
//   Typography,
//   Zoom,
//   useTheme
// } from '@mui/material';
// import Color from '@tiptap/extension-color';
// import Highlight from '@tiptap/extension-highlight';
// import Image from '@tiptap/extension-image';
// import Link from '@tiptap/extension-link';
// import TaskItem from '@tiptap/extension-task-item';
// import TaskList from '@tiptap/extension-task-list';
// import TextStyle from '@tiptap/extension-text-style';
// import Underline from '@tiptap/extension-underline';
// import Youtube from '@tiptap/extension-youtube';
// import { EditorContent, useEditor } from '@tiptap/react';
// import StarterKit from '@tiptap/starter-kit';
// import TextAlign from '@tiptap/extension-text-align';
// import Placeholder from '@tiptap/extension-placeholder';
// import Table from '@tiptap/extension-table';
// import TableCell from '@tiptap/extension-table-cell';
// import TableHeader from '@tiptap/extension-table-header';
// import TableRow from '@tiptap/extension-table-row';
// import HorizontalRule from '@tiptap/extension-horizontal-rule';
// import { motion, AnimatePresence } from 'framer-motion';
// import React, { useState, useRef, useEffect } from 'react';

// const EnhancedTiptapEditor = ({ content, onChange }) => {
// const theme = useTheme();
// const [anchorEl, setAnchorEl] = useState(null);
// const [linkMenuAnchor, setLinkMenuAnchor] = useState(null);
// const [imageMenuAnchor, setImageMenuAnchor] = useState(null);
// const [youtubeMenuAnchor, setYoutubeMenuAnchor] = useState(null);
// const [headingMenuAnchor, setHeadingMenuAnchor] = useState(null);
// const [tableMenuAnchor, setTableMenuAnchor] = useState(null);
// const [colorMenuAnchor, setColorMenuAnchor] = useState(null);
// const [linkUrl, setLinkUrl] = useState('');
// const [imageUrl, setImageUrl] = useState('');
// const [youtubeUrl, setYoutubeUrl] = useState('');
// const [tableSize, setTableSize] = useState({ rows: 3, cols: 3 });
// const [activeTool, setActiveTool] = useState(null);
// const editorRef = useRef(null);

// const colors = [
//   '#000000', '#434343', '#666666', '#999999', '#b7b7b7', '#cccccc', '#d9d9d9', '#efefef', '#f3f3f3', '#ffffff',
//   '#980000', '#ff0000', '#ff9900', '#ffff00', '#00ff00', '#00ffff', '#4a86e8', '#0000ff', '#9900ff', '#ff00ff', 
//   '#e6b8af', '#f4cccc', '#fce5cd', '#fff2cc', '#d9ead3', '#d0e0e3', '#c9daf8', '#cfe2f3', '#d9d2e9', '#ead1dc'
// ];

// const editor = useEditor({
//   extensions: [
//     StarterKit.configure({
//       heading: {
//         levels: [1, 2, 3, 4, 5, 6],
//       },
//     }),
//     Underline,
//     Image.configure({
//       inline: true,
//       allowBase64: true,
//     }),
//     TaskList,
//     TaskItem.configure({
//       nested: true,
//     }),
//     Link.configure({
//       openOnClick: false,
//       linkOnPaste: true,
//     }),
//     TextStyle,
//     Color,
//     Highlight.configure({
//       multicolor: true,
//     }),
//     Youtube.configure({
//       width: 640,
//       height: 480,
//       HTMLAttributes: {
//         class: 'youtube-video',
//       },
//     }),
//     TextAlign.configure({
//       types: ['heading', 'paragraph'],
//     }),
//     Placeholder.configure({
//       placeholder: 'Start writing your amazing story...',
//     }),
//     Table.configure({
//       resizable: true,
//     }),
//     TableRow,
//     TableHeader,
//     TableCell,
//     HorizontalRule,
//   ],
//   content,
//   onUpdate: ({ editor }) => {
//     onChange(editor.getHTML());
//   },
//   editorProps: {
//     attributes: {
//       class: 'enhanced-tiptap-editor',
//     },
//   },
// });

// useEffect(() => {
//   if (editorRef.current) {
//     const handleClickOutside = (event) => {
//       if (editorRef.current && !editorRef.current.contains(event.target)) {
//         setActiveTool(null);
//       }
//     };
    
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }
// }, [editorRef]);

// if (!editor) {
//   return null;
// }

// const handleClickMore = (event) => {
//   setAnchorEl(event.currentTarget);
// };

// const handleClose = () => {
//   setAnchorEl(null);
// };

// // Link handlers
// const openLinkMenu = () => {
//   if (editor.isActive('link')) {
//     editor.chain().focus().unsetLink().run();
//     return;
//   }
  
//   setLinkUrl(editor.isActive('link') ? editor.getAttributes('link').href : '');
//   setLinkMenuAnchor(document.querySelector('.tiptap-link-button'));
// };

// const closeLinkMenu = () => {
//   setLinkMenuAnchor(null);
//   setLinkUrl('');
// };

// const applyLink = () => {
//   if (linkUrl) {
//     // Add http if not present
//     const url = linkUrl.startsWith('http') ? linkUrl : `https://${linkUrl}`;
//     editor.chain().focus().setLink({ href: url }).run();
//   } else {
//     editor.chain().focus().unsetLink().run();
//   }
//   closeLinkMenu();
// };

// // Image handlers
// const openImageMenu = () => {
//   setImageUrl('');
//   setImageMenuAnchor(document.querySelector('.tiptap-image-button'));
// };

// const closeImageMenu = () => {
//   setImageMenuAnchor(null);
//   setImageUrl('');
// };

// const insertImage = () => {
//   if (imageUrl) {
//     editor.chain().focus().setImage({ src: imageUrl }).run();
//   }
//   closeImageMenu();
// };

// // YouTube handlers
// const openYoutubeMenu = () => {
//   setYoutubeUrl('');
//   setYoutubeMenuAnchor(document.querySelector('.tiptap-youtube-button'));
// };

// const closeYoutubeMenu = () => {
//   setYoutubeMenuAnchor(null);
//   setYoutubeUrl('');
// };

// const insertYoutube = () => {
//   if (youtubeUrl) {
//     editor.chain().focus().setYoutubeVideo({ src: youtubeUrl }).run();
//   }
//   closeYoutubeMenu();
// };

// // Heading handlers
// const openHeadingMenu = (e) => {
//   setHeadingMenuAnchor(e.currentTarget);
// };

// const closeHeadingMenu = () => {
//   setHeadingMenuAnchor(null);
// };

// const setHeading = (level) => {
//   editor.chain().focus().toggleHeading({ level }).run();
//   closeHeadingMenu();
// };

// // Table handlers
// const openTableMenu = (e) => {
//   setTableMenuAnchor(e.currentTarget);
// };

// const closeTableMenu = () => {
//   setTableMenuAnchor(null);
// };

// const insertTable = () => {
//   editor.chain().focus().insertTable({ rows: tableSize.rows, cols: tableSize.cols }).run();
//   closeTableMenu();
// };

// // Color handlers
// const openColorMenu = (e) => {
//   setColorMenuAnchor(e.currentTarget);
//   setActiveTool('color');
// };

// const closeColorMenu = () => {
//   setColorMenuAnchor(null);
//   setActiveTool(null);
// };

// const applyColor = (color) => {
//   editor.chain().focus().setColor(color).run();
//   closeColorMenu();
// };

// const applyHighlight = (color) => {
//   editor.chain().focus().toggleHighlight({ color }).run();
//   closeColorMenu();
// };

// const isToolActive = (tool) => {
//   return activeTool === tool;
// };

// const toggleTool = (tool) => {
//   setActiveTool(isToolActive(tool) ? null : tool);
// };

// return (
//   <Box ref={editorRef} sx={{ position: 'relative', width: '100%' }}>
//     <Paper 
//       elevation={2} 
//       sx={{ 
//         p: 1, 
//         mb: 1, 
//         display: 'flex', 
//         flexWrap: 'wrap', 
//         gap: 0.5, 
//         borderRadius: '8px',
//         backgroundColor: theme.palette.background.paper,
//         alignItems: 'center',
//       }}
//     >
//       {/* Undo/Redo */}
//       <Tooltip title="Undo">
//         <IconButton 
//           size="small" 
//           onClick={() => editor.chain().focus().undo().run()} 
//           disabled={!editor.can().undo()}
//         >
//           <Undo fontSize="small" />
//         </IconButton>
//       </Tooltip>
//       <Tooltip title="Redo">
//         <IconButton 
//           size="small" 
//           onClick={() => editor.chain().focus().redo().run()} 
//           disabled={!editor.can().redo()}
//         >
//           <Redo fontSize="small" />
//         </IconButton>
//       </Tooltip>
      
//       <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />
      
//       {/* Headings */}
//       <Tooltip title="Headings">
//         <IconButton size="small" onClick={openHeadingMenu}>
//           <TextFields fontSize="small" />
//         </IconButton>
//       </Tooltip>
      
//       <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />
      
//       {/* Text formatting */}
//       <Tooltip title="Bold">
//         <IconButton 
//           size="small" 
//           onClick={() => editor.chain().focus().toggleBold().run()} 
//           className={editor.isActive('bold') ? 'is-active' : ''}
//           sx={{ backgroundColor: editor.isActive('bold') ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
//         >
//           <FormatBold fontSize="small" />
//         </IconButton>
//       </Tooltip>
//       <Tooltip title="Italic">
//         <IconButton 
//           size="small" 
//           onClick={() => editor.chain().focus().toggleItalic().run()} 
//           className={editor.isActive('italic') ? 'is-active' : ''}
//           sx={{ backgroundColor: editor.isActive('italic') ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
//         >
//           <FormatItalic fontSize="small" />
//         </IconButton>
//       </Tooltip>
//       <Tooltip title="Underline">
//         <IconButton 
//           size="small" 
//           onClick={() => editor.chain().focus().toggleUnderline().run()} 
//           className={editor.isActive('underline') ? 'is-active' : ''}
//           sx={{ backgroundColor: editor.isActive('underline') ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
//         >
//           <FormatUnderlined fontSize="small" />
//         </IconButton>
//       </Tooltip>
//       <Tooltip title="Text Color">
//         <IconButton 
//           size="small" 
//           onClick={openColorMenu} 
//           className="tiptap-color-button"
//           sx={{ backgroundColor: isToolActive('color') ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
//         >
//           <FormatColorText fontSize="small" />
//         </IconButton>
//       </Tooltip>
//       <Tooltip title="Highlight">
//         <IconButton 
//           size="small" 
//           onClick={openColorMenu} 
//           className={editor.isActive('highlight') ? 'is-active' : ''}
//           sx={{ backgroundColor: editor.isActive('highlight') ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
//         >
//           <HighlightOutlined fontSize="small" />
//         </IconButton>
//       </Tooltip>
      
//       <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />
      
//       {/* Alignment */}
//       <Tooltip title="Align Left">
//         <IconButton 
//           size="small" 
//           onClick={() => editor.chain().focus().setTextAlign('left').run()} 
//           className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
//           sx={{ backgroundColor: editor.isActive({ textAlign: 'left' }) ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
//         >
//           <FormatAlignLeft fontSize="small" />
//         </IconButton>
//       </Tooltip>
//       <Tooltip title="Align Center">
//         <IconButton 
//           size="small" 
//           onClick={() => editor.chain().focus().setTextAlign('center').run()} 
//           className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
//           sx={{ backgroundColor: editor.isActive({ textAlign: 'center' }) ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
//         >
//           <FormatAlignCenter fontSize="small" />
//         </IconButton>
//       </Tooltip>
//       <Tooltip title="Align Right">
//         <IconButton 
//           size="small" 
//           onClick={() => editor.chain().focus().setTextAlign('right').run()} 
//           className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
//           sx={{ backgroundColor: editor.isActive({ textAlign: 'right' }) ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
//         >
//           <FormatAlignRight fontSize="small" />
//         </IconButton>
//       </Tooltip>
//       <Tooltip title="Justify">
//         <IconButton 
//           size="small" 
//           onClick={() => editor.chain().focus().setTextAlign('justify').run()} 
//           className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
//           sx={{ backgroundColor: editor.isActive({ textAlign: 'justify' }) ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
//         >
//           <FormatAlignJustify fontSize="small" />
//         </IconButton>
//       </Tooltip>
      
//       <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />
      
//       {/* Lists */}
//       <Tooltip title="Bullet List">
//         <IconButton 
//           size="small" 
//           onClick={() => editor.chain().focus().toggleBulletList().run()} 
//           className={editor.isActive('bulletList') ? 'is-active' : ''}
//           sx={{ backgroundColor: editor.isActive('bulletList') ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
//         >
//           <FormatListBulleted fontSize="small" />
//         </IconButton>
//       </Tooltip>
//       <Tooltip title="Numbered List">
//         <IconButton 
//           size="small" 
//           onClick={() => editor.chain().focus().toggleOrderedList().run()} 
//           className={editor.isActive('orderedList') ? 'is-active' : ''}
//           sx={{ backgroundColor: editor.isActive('orderedList') ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
//         >
//           <FormatListNumbered fontSize="small" />
//         </IconButton>
//       </Tooltip>
//       <Tooltip title="Task List">
//         <IconButton 
//           size="small" 
//           onClick={() => editor.chain().focus().toggleTaskList().run()} 
//           className={editor.isActive('taskList') ? 'is-active' : ''}
//           sx={{ backgroundColor: editor.isActive('taskList') ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
//         >
//           <CheckBox fontSize="small" />
//         </IconButton>
//       </Tooltip>
      
//       <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />
      
//       {/* Links and media */}
//       <Tooltip title={editor.isActive('link') ? 'Remove Link' : 'Add Link'}>
//         <IconButton 
//           size="small" 
//           onClick={openLinkMenu} 
//           className={`tiptap-link-button ${editor.isActive('link') ? 'is-active' : ''}`}
//           sx={{ backgroundColor: editor.isActive('link') ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
//         >
//           <LinkIcon fontSize="small" />
//         </IconButton>
//       </Tooltip>
//       <Tooltip title="Insert Image">
//         <IconButton 
//           size="small" 
//           onClick={openImageMenu} 
//           className="tiptap-image-button"
//         >
//           <ImageIcon fontSize="small" />
//         </IconButton>
//       </Tooltip>
//       <Tooltip title="Insert YouTube Video">
//         <IconButton 
//           size="small" 
//           onClick={openYoutubeMenu} 
//           className="tiptap-youtube-button"
//         >
//           <YouTube fontSize="small" />
//         </IconButton>
//       </Tooltip>
//       <Tooltip title="Insert Table">
//         <IconButton 
//           size="small" 
//           onClick={openTableMenu}
//           className="tiptap-table-button"
//         >
//           <TableChart fontSize="small" />
//         </IconButton>
//       </Tooltip>
//       <Tooltip title="Insert Horizontal Rule">
//         <IconButton 
//           size="small" 
//           onClick={() => editor.chain().focus().setHorizontalRule().run()}
//         >
//           <HorizontalRuleOutlined fontSize="small" />
//         </IconButton>
//       </Tooltip>
      
//       <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />
      
//       {/* Quote */}
//       <Tooltip title="Block Quote">
//         <IconButton 
//           size="small" 
//           onClick={() => editor.chain().focus().toggleBlockquote().run()} 
//           className={editor.isActive('blockquote') ? 'is-active' : ''}
//           sx={{ backgroundColor: editor.isActive('blockquote') ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
//         >
//           <FormatQuote fontSize="small" />
//         </IconButton>
//       </Tooltip>
//       <Tooltip title="Code Block">
//         <IconButton 
//           size="small" 
//           onClick={() => editor.chain().focus().toggleCodeBlock().run()} 
//           className={editor.isActive('codeBlock') ? 'is-active' : ''}
//           sx={{ backgroundColor: editor.isActive('codeBlock') ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
//         >
//           <Code fontSize="small" />
//         </IconButton>
//       </Tooltip>
      
//       <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />
      
//       {/* More options */}
//       <Tooltip title="Clear Formatting">
//         <IconButton 
//           size="small" 
//           onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()}
//         >
//           <FormatClear fontSize="small" />
//         </IconButton>
//       </Tooltip>
//       <Tooltip title="More Options">
//         <IconButton size="small" onClick={handleClickMore}>
//           <MoreVert fontSize="small" />
//         </IconButton>
//       </Tooltip>
//     </Paper>

//     {/* Editor Content */}
//     <Paper 
//       elevation={3} 
//       sx={{ 
//         p: 2, 
//         minHeight: '300px', 
//         borderRadius: '8px',
//         '& .ProseMirror': {
//           outline: 'none',
//           minHeight: '280px',
//           '&:focus': {
//             outline: 'none',
//           },
//         },
//         '& .ProseMirror p.is-editor-empty:first-child::before': {
//           content: 'attr(data-placeholder)',
//           float: 'left',
//           color: 'gray',
//           pointerEvents: 'none',
//           height: 0,
//         },
//       }}
//     >
//       <EditorContent editor={editor} />
//     </Paper>

//     {/* Menus and Popups */}
//     <Menu
//       anchorEl={anchorEl}
//       open={Boolean(anchorEl)}
//       onClose={handleClose}
//       TransitionComponent={Zoom}
//     >
//       <MenuItem onClick={() => {
//         editor.chain().focus().clearNodes().run();
//         handleClose();
//       }}>
//         <ListItemIcon>
//           <FormatClear fontSize="small" />
//         </ListItemIcon>
//         <ListItemText>Clear Formatting</ListItemText>
//       </MenuItem>
//       <MenuItem onClick={() => {
//         editor.chain().focus().setParagraph().run();
//         handleClose();
//       }}>
//         <ListItemIcon>
//           <TextFields fontSize="small" />
//         </ListItemIcon>
//         <ListItemText>Normal Text</ListItemText>
//       </MenuItem>
//     </Menu>

//     {/* Link Menu */}
//     <Popover
//       open={Boolean(linkMenuAnchor)}
//       anchorEl={linkMenuAnchor}
//       onClose={closeLinkMenu}
//       anchorOrigin={{
//         vertical: 'bottom',
//         horizontal: 'center',
//       }}
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'center',
//       }}
//     >
//       <Box sx={{ p: 2, width: '300px' }}>
//         <Typography variant="subtitle1" sx={{ mb: 1 }}>Insert Link</Typography>
//         <TextField
//           fullWidth
//           size="small"
//           placeholder="https://example.com"
//           value={linkUrl}
//           onChange={(e) => setLinkUrl(e.target.value)}
//           sx={{ mb: 2 }}
//           autoFocus
//           onKeyDown={(e) => {
//             if (e.key === 'Enter') {
//               applyLink();
//             }
//           }}
//         />
//         <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
//           <Button variant="outlined" size="small" onClick={closeLinkMenu}>Cancel</Button>
//           <Button variant="contained" size="small" onClick={applyLink}>Apply</Button>
//         </Box>
//       </Box>
//     </Popover>

//     {/* Image Menu */}
//     <Popover
//       open={Boolean(imageMenuAnchor)}
//       anchorEl={imageMenuAnchor}
//       onClose={closeImageMenu}
//       anchorOrigin={{
//         vertical: 'bottom',
//         horizontal: 'center',
//       }}
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'center',
//       }}
//     >
//       <Box sx={{ p: 2, width: '300px' }}>
//         <Typography variant="subtitle1" sx={{ mb: 1 }}>Insert Image</Typography>
//         <TextField
//           fullWidth
//           size="small"
//           placeholder="https://example.com/image.jpg"
//           value={imageUrl}
//           onChange={(e) => setImageUrl(e.target.value)}
//           sx={{ mb: 2 }}
//           autoFocus
//           onKeyDown={(e) => {
//             if (e.key === 'Enter') {
//               insertImage();
//             }
//           }}
//         />
//         <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
//           <Button variant="outlined" size="small" onClick={closeImageMenu}>Cancel</Button>
//           <Button variant="contained" size="small" onClick={insertImage}>Insert</Button>
//         </Box>
//       </Box>
//     </Popover>

//     {/* YouTube Menu */}
//     <Popover
//       open={Boolean(youtubeMenuAnchor)}
//       anchorEl={youtubeMenuAnchor}
//       onClose={closeYoutubeMenu}
//       anchorOrigin={{
//         vertical: 'bottom',
//         horizontal: 'center',
//       }}
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'center',
//       }}
//     >
//       <Box sx={{ p: 2, width: '300px' }}>
//         <Typography variant="subtitle1" sx={{ mb: 1 }}>Insert YouTube Video</Typography>
//         <TextField
//           fullWidth
//           size="small"
//           placeholder="https://www.youtube.com/watch?v=..."
//           value={youtubeUrl}
//           onChange={(e) => setYoutubeUrl(e.target.value)}
//           sx={{ mb: 2 }}
//           autoFocus
//           onKeyDown={(e) => {
//             if (e.key === 'Enter') {
//               insertYoutube();
//             }
//           }}
//         />
//         <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
//           <Button variant="outlined" size="small" onClick={closeYoutubeMenu}>Cancel</Button>
//           <Button variant="contained" size="small" onClick={insertYoutube}>Insert</Button>
//         </Box>
//       </Box>
//     </Popover>

//     {/* Heading Menu */}
//     <Menu
//       anchorEl={headingMenuAnchor}
//       open={Boolean(headingMenuAnchor)}
//       onClose={closeHeadingMenu}
//       TransitionComponent={Zoom}
//     >
//       <MenuItem onClick={() => setHeading(1)}>
//         <Typography variant="h6">Heading 1</Typography>
//       </MenuItem>
//       <MenuItem onClick={() => setHeading(2)}>
//         <Typography variant="h6" sx={{ fontSize: '1.25rem' }}>Heading 2</Typography>
//       </MenuItem>
//       <MenuItem onClick={() => setHeading(3)}>
//         <Typography variant="subtitle1">Heading 3</Typography>
//       </MenuItem>
//       <MenuItem onClick={() => setHeading(4)}>
//         <Typography variant="subtitle2">Heading 4</Typography>
//       </MenuItem>
//       <MenuItem onClick={() => setHeading(5)}>
//         <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Heading 5</Typography>
//       </MenuItem>
//       <MenuItem onClick={() => setHeading(6)}>
//         <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '0.8rem' }}>Heading 6</Typography>
//       </MenuItem>
//       <MenuItem onClick={() => {
//         editor.chain().focus().setParagraph().run();
//         closeHeadingMenu();
//       }}>
//         <Typography variant="body2">Normal Text</Typography>
//       </MenuItem>
//     </Menu>

//     {/* Table Menu */}
//     <Popover
//       open={Boolean(tableMenuAnchor)}
//       anchorEl={tableMenuAnchor}
//       onClose={closeTableMenu}
//       anchorOrigin={{
//         vertical: 'bottom',
//         horizontal: 'center',
//       }}
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'center',
//       }}
//     >
//       <Box sx={{ p: 2, width: '250px' }}>
//         <Typography variant="subtitle1" sx={{ mb: 1 }}>Insert Table</Typography>
//         <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
//           <TextField
//             label="Rows"
//             type="number"
//             size="small"
//             value={tableSize.rows}
//             onChange={(e) => setTableSize({...tableSize, rows: parseInt(e.target.value) || 2})}
//             inputProps={{ min: 1, max: 10 }}
//           />
//           <TextField
//             label="Columns"
//             type="number"
//             size="small"
//             value={tableSize.cols}
//             onChange={(e) => setTableSize({...tableSize, cols: parseInt(e.target.value) || 2})}
//             inputProps={{ min: 1, max: 10 }}
//           />
//         </Box>
//         <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
//           <Button variant="outlined" size="small" onClick={closeTableMenu}>Cancel</Button>
//           <Button variant="contained" size="small" onClick={insertTable}>Insert</Button>
//         </Box>
//       </Box>
//     </Popover>

//     {/* Color Menu */}
//     <Popover
//       open={Boolean(colorMenuAnchor)}
//       anchorEl={colorMenuAnchor}
//       onClose={closeColorMenu}
//       anchorOrigin={{
//         vertical: 'bottom',
//         horizontal: 'center',
//       }}
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'center',
//       }}
//     >
//       <Box sx={{ p: 2, width: '280px' }}>
//         <Typography variant="subtitle1" sx={{ mb: 1 }}>
//           {isToolActive('color') ? 'Text Color' : 'Highlight Color'}
//         </Typography>
//         <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
//           {colors.map((color) => (
//             <Box
//               key={color}
//               onClick={() => isToolActive('color') ? applyColor(color) : applyHighlight(color)}
//               sx={{
//                 width: 20,
//                 height: 20,
//                 backgroundColor: color,
//                 borderRadius: '50%',
//                 cursor: 'pointer',
//                 border: '1px solid #ddd',
//                 '&:hover': {
//                   transform: 'scale(1.2)',
//                 }
//               }}
//             />
//           ))}
//         </Box>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
//           <Button 
//             variant="outlined" 
//             size="small" 
//             onClick={() => isToolActive('color') 
//               ? editor.chain().focus().unsetColor().run() 
//               : editor.chain().focus().unsetHighlight().run()
//             }
//           >
//             Remove
//           </Button>
//           <Button variant="outlined" size="small" onClick={closeColorMenu}>
//             Close
//           </Button>
//         </Box>
//       </Box>
//     </Popover>

//     {/* Animation for Active Tool Indicator */}
//     <AnimatePresence>
//       {activeTool && (
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 10 }}
//           transition={{ duration: 0.2 }}
//           style={{
//             position: 'absolute',
//             bottom: -30,
//             left: '50%',
//             transform: 'translateX(-50%)',
//             zIndex: 1000,
//           }}
//         >
//           <Paper sx={{ px: 2, py: 0.5, backgroundColor: theme.palette.primary.main, color: '#fff' }}>
//             <Typography variant="caption">{`${activeTool.charAt(0).toUpperCase() + activeTool.slice(1)} Tool Active`}</Typography>
//           </Paper>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   </Box>
// );
// };

// export default EnhancedTiptapEditor;

//===================================================================


import {
  CheckBox,
  Code,
  FormatAlignCenter,
  FormatAlignJustify,
  FormatAlignLeft,
  FormatAlignRight,
  FormatBold,
  FormatClear,
  FormatColorText,
  FormatItalic,
  FormatListBulleted,
  FormatListNumbered,
  FormatQuote,
  FormatUnderlined,
  HighlightOutlined,
  HorizontalRuleOutlined,
  Image as ImageIcon,
  Link as LinkIcon,
  MoreVert,
  Redo,
  TableChart,
  TextFields,
  Undo,
  YouTube
} from '@mui/icons-material';
import {
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Popover,
  TextField,
  Tooltip,
  Typography,
  Zoom,
  useTheme
} from '@mui/material';
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
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
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const EnhancedTiptapEditor = ({ content, onChange }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [linkMenuAnchor, setLinkMenuAnchor] = useState(null);
  const [imageMenuAnchor, setImageMenuAnchor] = useState(null);
  const [youtubeMenuAnchor, setYoutubeMenuAnchor] = useState(null);
  const [headingMenuAnchor, setHeadingMenuAnchor] = useState(null);
  const [tableMenuAnchor, setTableMenuAnchor] = useState(null);
  const [colorMenuAnchor, setColorMenuAnchor] = useState(null);
  const [linkUrl, setLinkUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [tableSize, setTableSize] = useState({ rows: 3, cols: 3 });
  const [activeTool, setActiveTool] = useState(null);
  const editorRef = useRef(null);

  const colors = [
    '#000000', '#434343', '#666666', '#999999', '#b7b7b7', '#cccccc', '#d9d9d9', '#efefef', '#f3f3f3', '#ffffff',
    '#980000', '#ff0000', '#ff9900', '#ffff00', '#00ff00', '#00ffff', '#4a86e8', '#0000ff', '#9900ff', '#ff00ff', 
    '#e6b8af', '#f4cccc', '#fce5cd', '#fff2cc', '#d9ead3', '#d0e0e3', '#c9daf8', '#cfe2f3', '#d9d2e9', '#ead1dc'
  ];

  // Parse content if it's a string
  const initialContent = typeof content === 'string' && content ? 
    (content.startsWith('{') ? JSON.parse(content) : content) : 
    content;

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
      }),
      Underline,
      Image.configure({
        inline: true,
        allowBase64: true,
      }),
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Link.configure({
        openOnClick: false,
        linkOnPaste: true,
      }),
      TextStyle,
      Color,
      Highlight.configure({
        multicolor: true,
      }),
      Youtube.configure({
        width: 640,
        height: 480,
        HTMLAttributes: {
          class: 'youtube-video',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Placeholder.configure({
        placeholder: 'Start writing your amazing story...',
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      HorizontalRule,
    ],
    content: initialContent,
    onUpdate: ({ editor }) => {
      // Send content as JSON instead of HTML
      onChange(editor.getJSON());
    },
    editorProps: {
      attributes: {
        class: 'enhanced-tiptap-editor',
      },
    },
  });

  useEffect(() => {
    if (editorRef.current) {
      const handleClickOutside = (event) => {
        if (editorRef.current && !editorRef.current.contains(event.target)) {
          setActiveTool(null);
        }
      };
      
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [editorRef]);

  if (!editor) {
    return null;
  }

  const handleClickMore = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Link handlers
  const openLinkMenu = () => {
    if (editor.isActive('link')) {
      editor.chain().focus().unsetLink().run();
      return;
    }
    
    setLinkUrl(editor.isActive('link') ? editor.getAttributes('link').href : '');
    setLinkMenuAnchor(document.querySelector('.tiptap-link-button'));
  };

  const closeLinkMenu = () => {
    setLinkMenuAnchor(null);
    setLinkUrl('');
  };

  const applyLink = () => {
    if (linkUrl) {
      // Add http if not present
      const url = linkUrl.startsWith('http') ? linkUrl : `https://${linkUrl}`;
      editor.chain().focus().setLink({ href: url }).run();
    } else {
      editor.chain().focus().unsetLink().run();
    }
    closeLinkMenu();
  };

  // Image handlers
  const openImageMenu = () => {
    setImageUrl('');
    setImageMenuAnchor(document.querySelector('.tiptap-image-button'));
  };

  const closeImageMenu = () => {
    setImageMenuAnchor(null);
    setImageUrl('');
  };

  const insertImage = () => {
    if (imageUrl) {
      editor.chain().focus().setImage({ src: imageUrl }).run();
    }
    closeImageMenu();
  };

  // YouTube handlers
  const openYoutubeMenu = () => {
    setYoutubeUrl('');
    setYoutubeMenuAnchor(document.querySelector('.tiptap-youtube-button'));
  };

  const closeYoutubeMenu = () => {
    setYoutubeMenuAnchor(null);
    setYoutubeUrl('');
  };

  const insertYoutube = () => {
    if (youtubeUrl) {
      editor.chain().focus().setYoutubeVideo({ src: youtubeUrl }).run();
    }
    closeYoutubeMenu();
  };

  // Heading handlers
  const openHeadingMenu = (e) => {
    setHeadingMenuAnchor(e.currentTarget);
  };

  const closeHeadingMenu = () => {
    setHeadingMenuAnchor(null);
  };

  const setHeading = (level) => {
    editor.chain().focus().toggleHeading({ level }).run();
    closeHeadingMenu();
  };

  // Table handlers
  const openTableMenu = (e) => {
    setTableMenuAnchor(e.currentTarget);
  };

  const closeTableMenu = () => {
    setTableMenuAnchor(null);
  };

  const insertTable = () => {
    editor.chain().focus().insertTable({ rows: tableSize.rows, cols: tableSize.cols }).run();
    closeTableMenu();
  };

  // Color handlers
  const openColorMenu = (e) => {
    setColorMenuAnchor(e.currentTarget);
    setActiveTool('color');
  };

  const closeColorMenu = () => {
    setColorMenuAnchor(null);
    setActiveTool(null);
  };

  const applyColor = (color) => {
    editor.chain().focus().setColor(color).run();
    closeColorMenu();
  };

  const applyHighlight = (color) => {
    editor.chain().focus().toggleHighlight({ color }).run();
    closeColorMenu();
  };

  const isToolActive = (tool) => {
    return activeTool === tool;
  };

  const toggleTool = (tool) => {
    setActiveTool(isToolActive(tool) ? null : tool);
  };

  return (
    <Box ref={editorRef} sx={{ position: 'relative', width: '100%' }}>
      <Paper 
        elevation={2} 
        sx={{ 
          p: 1, 
          mb: 1, 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 0.5, 
          borderRadius: '8px',
          backgroundColor: theme.palette.background.paper,
          alignItems: 'center',
        }}
      >
        {/* Undo/Redo */}
        <Tooltip title="Undo">
          <IconButton 
            size="small" 
            onClick={() => editor.chain().focus().undo().run()} 
            disabled={!editor.can().undo()}
          >
            <Undo fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Redo">
          <IconButton 
            size="small" 
            onClick={() => editor.chain().focus().redo().run()} 
            disabled={!editor.can().redo()}
          >
            <Redo fontSize="small" />
          </IconButton>
        </Tooltip>
        
        <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />
        
        {/* Headings */}
        <Tooltip title="Headings">
          <IconButton size="small" onClick={openHeadingMenu}>
            <TextFields fontSize="small" />
          </IconButton>
        </Tooltip>
        
        <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />
        
        {/* Text formatting */}
        <Tooltip title="Bold">
          <IconButton 
            size="small" 
            onClick={() => editor.chain().focus().toggleBold().run()} 
            className={editor.isActive('bold') ? 'is-active' : ''}
            sx={{ backgroundColor: editor.isActive('bold') ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
          >
            <FormatBold fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Italic">
          <IconButton 
            size="small" 
            onClick={() => editor.chain().focus().toggleItalic().run()} 
            className={editor.isActive('italic') ? 'is-active' : ''}
            sx={{ backgroundColor: editor.isActive('italic') ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
          >
            <FormatItalic fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Underline">
          <IconButton 
            size="small" 
            onClick={() => editor.chain().focus().toggleUnderline().run()} 
            className={editor.isActive('underline') ? 'is-active' : ''}
            sx={{ backgroundColor: editor.isActive('underline') ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
          >
            <FormatUnderlined fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Text Color">
          <IconButton 
            size="small" 
            onClick={openColorMenu} 
            className="tiptap-color-button"
            sx={{ backgroundColor: isToolActive('color') ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
          >
            <FormatColorText fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Highlight">
          <IconButton 
            size="small" 
            onClick={openColorMenu} 
            className={editor.isActive('highlight') ? 'is-active' : ''}
            sx={{ backgroundColor: editor.isActive('highlight') ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
          >
            <HighlightOutlined fontSize="small" />
          </IconButton>
        </Tooltip>
        
        <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />
        
        {/* Alignment */}
        <Tooltip title="Align Left">
          <IconButton 
            size="small" 
            onClick={() => editor.chain().focus().setTextAlign('left').run()} 
            className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
            sx={{ backgroundColor: editor.isActive({ textAlign: 'left' }) ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
          >
            <FormatAlignLeft fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Align Center">
          <IconButton 
            size="small" 
            onClick={() => editor.chain().focus().setTextAlign('center').run()} 
            className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
            sx={{ backgroundColor: editor.isActive({ textAlign: 'center' }) ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
          >
            <FormatAlignCenter fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Align Right">
          <IconButton 
            size="small" 
            onClick={() => editor.chain().focus().setTextAlign('right').run()} 
            className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
            sx={{ backgroundColor: editor.isActive({ textAlign: 'right' }) ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
          >
            <FormatAlignRight fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Justify">
          <IconButton 
            size="small" 
            onClick={() => editor.chain().focus().setTextAlign('justify').run()} 
            className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
            sx={{ backgroundColor: editor.isActive({ textAlign: 'justify' }) ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
          >
            <FormatAlignJustify fontSize="small" />
          </IconButton>
        </Tooltip>
        
        <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />
        
        {/* Lists */}
        <Tooltip title="Bullet List">
          <IconButton 
            size="small" 
            onClick={() => editor.chain().focus().toggleBulletList().run()} 
            className={editor.isActive('bulletList') ? 'is-active' : ''}
            sx={{ backgroundColor: editor.isActive('bulletList') ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
          >
            <FormatListBulleted fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Numbered List">
          <IconButton 
            size="small" 
            onClick={() => editor.chain().focus().toggleOrderedList().run()} 
            className={editor.isActive('orderedList') ? 'is-active' : ''}
            sx={{ backgroundColor: editor.isActive('orderedList') ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
          >
            <FormatListNumbered fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Task List">
          <IconButton 
            size="small" 
            onClick={() => editor.chain().focus().toggleTaskList().run()} 
            className={editor.isActive('taskList') ? 'is-active' : ''}
            sx={{ backgroundColor: editor.isActive('taskList') ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
          >
            <CheckBox fontSize="small" />
          </IconButton>
        </Tooltip>
        
        <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />
        
        {/* Links and media */}
        <Tooltip title={editor.isActive('link') ? 'Remove Link' : 'Add Link'}>
          <IconButton 
            size="small" 
            onClick={openLinkMenu} 
            className={`tiptap-link-button ${editor.isActive('link') ? 'is-active' : ''}`}
            sx={{ backgroundColor: editor.isActive('link') ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
          >
            <LinkIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Insert Image">
          <IconButton 
            size="small" 
            onClick={openImageMenu} 
            className="tiptap-image-button"
          >
            <ImageIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Insert YouTube Video">
          <IconButton 
            size="small" 
            onClick={openYoutubeMenu} 
            className="tiptap-youtube-button"
          >
            <YouTube fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Insert Table">
          <IconButton 
            size="small" 
            onClick={openTableMenu}
            className="tiptap-table-button"
          >
            <TableChart fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Insert Horizontal Rule">
          <IconButton 
            size="small" 
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
          >
            <HorizontalRuleOutlined fontSize="small" />
          </IconButton>
        </Tooltip>
        
        <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />
        
        {/* Quote */}
        <Tooltip title="Block Quote">
          <IconButton 
            size="small" 
            onClick={() => editor.chain().focus().toggleBlockquote().run()} 
            className={editor.isActive('blockquote') ? 'is-active' : ''}
            sx={{ backgroundColor: editor.isActive('blockquote') ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
          >
            <FormatQuote fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Code Block">
          <IconButton 
            size="small" 
            onClick={() => editor.chain().focus().toggleCodeBlock().run()} 
            className={editor.isActive('codeBlock') ? 'is-active' : ''}
            sx={{ backgroundColor: editor.isActive('codeBlock') ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
          >
            <Code fontSize="small" />
          </IconButton>
        </Tooltip>
        
        <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />
        
        {/* More options */}
        <Tooltip title="Clear Formatting">
          <IconButton 
            size="small" 
            onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()}
          >
            <FormatClear fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="More Options">
          <IconButton size="small" onClick={handleClickMore}>
            <MoreVert fontSize="small" />
          </IconButton>
        </Tooltip>
      </Paper>

      {/* Editor Content */}
      <Paper 
        elevation={3} 
        sx={{ 
          p: 2, 
          minHeight: '300px', 
          borderRadius: '8px',
          '& .ProseMirror': {
            outline: 'none',
            minHeight: '280px',
            '&:focus': {
              outline: 'none',
            },
          },
          '& .ProseMirror p.is-editor-empty:first-child::before': {
            content: 'attr(data-placeholder)',
            float: 'left',
            color: 'gray',
            pointerEvents: 'none',
            height: 0,
          },
        }}
      >
        <EditorContent editor={editor} />
      </Paper>

      {/* Menus and Popups */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Zoom}
      >
        <MenuItem onClick={() => {
          editor.chain().focus().clearNodes().run();
          handleClose();
        }}>
          <ListItemIcon>
            <FormatClear fontSize="small" />
          </ListItemIcon>
          <ListItemText>Clear Formatting</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => {
          editor.chain().focus().setParagraph().run();
          handleClose();
        }}>
          <ListItemIcon>
            <TextFields fontSize="small" />
          </ListItemIcon>
          <ListItemText>Normal Text</ListItemText>
        </MenuItem>
      </Menu>

      {/* Link Menu */}
      <Popover
        open={Boolean(linkMenuAnchor)}
        anchorEl={linkMenuAnchor}
        onClose={closeLinkMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box sx={{ p: 2, width: '300px' }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>Insert Link</Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="https://example.com"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            sx={{ mb: 2 }}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                applyLink();
              }
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
            <Button variant="outlined" size="small" onClick={closeLinkMenu}>Cancel</Button>
            <Button variant="contained" size="small" onClick={applyLink}>Apply</Button>
          </Box>
        </Box>
      </Popover>

      {/* Image Menu */}
      <Popover
        open={Boolean(imageMenuAnchor)}
        anchorEl={imageMenuAnchor}
        onClose={closeImageMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box sx={{ p: 2, width: '300px' }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>Insert Image</Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="https://example.com/image.jpg"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            sx={{ mb: 2 }}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                insertImage();
              }
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
            <Button variant="outlined" size="small" onClick={closeImageMenu}>Cancel</Button>
            <Button variant="contained" size="small" onClick={insertImage}>Insert</Button>
          </Box>
        </Box>
      </Popover>

      {/* YouTube Menu */}
      <Popover
        open={Boolean(youtubeMenuAnchor)}
        anchorEl={youtubeMenuAnchor}
        onClose={closeYoutubeMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box sx={{ p: 2, width: '300px' }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>Insert YouTube Video</Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="https://www.youtube.com/watch?v=..."
            value={youtubeUrl}
            onChange={(e) => setYoutubeUrl(e.target.value)}
            sx={{ mb: 2 }}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                insertYoutube();
              }
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
            <Button variant="outlined" size="small" onClick={closeYoutubeMenu}>Cancel</Button>
            <Button variant="contained" size="small" onClick={insertYoutube}>Insert</Button>
          </Box>
        </Box>
      </Popover>

      {/* Heading Menu */}
      <Menu
        anchorEl={headingMenuAnchor}
        open={Boolean(headingMenuAnchor)}
        onClose={closeHeadingMenu}
        TransitionComponent={Zoom}
      >
        <MenuItem onClick={() => setHeading(1)}>
          <Typography variant="h6">Heading 1</Typography>
        </MenuItem>
        <MenuItem onClick={() => setHeading(2)}>
          <Typography variant="h6" sx={{ fontSize: '1.25rem' }}>Heading 2</Typography>
        </MenuItem>
        <MenuItem onClick={() => setHeading(3)}>
          <Typography variant="subtitle1">Heading 3</Typography>
        </MenuItem>
        <MenuItem onClick={() => setHeading(4)}>
          <Typography variant="subtitle2">Heading 4</Typography>
        </MenuItem>
        <MenuItem onClick={() => setHeading(5)}>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Heading 5</Typography>
        </MenuItem>
        <MenuItem onClick={() => setHeading(6)}>
          <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '0.8rem' }}>Heading 6</Typography>
        </MenuItem>
        <MenuItem onClick={() => {
          editor.chain().focus().setParagraph().run();
          closeHeadingMenu();
        }}>
          <Typography variant="body2">Normal Text</Typography>
        </MenuItem>
      </Menu>

      {/* Table Menu */}
      <Popover
        open={Boolean(tableMenuAnchor)}
        anchorEl={tableMenuAnchor}
        onClose={closeTableMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box sx={{ p: 2, width: '250px' }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>Insert Table</Typography>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField
              label="Rows"
              type="number"
              size="small"
              value={tableSize.rows}
              onChange={(e) => setTableSize({...tableSize, rows: parseInt(e.target.value) || 2})}
              inputProps={{ min: 1, max: 10 }}
            />
            <TextField
              label="Columns"
              type="number"
              size="small"
              value={tableSize.cols}
              onChange={(e) => setTableSize({...tableSize, cols: parseInt(e.target.value) || 2})}
              inputProps={{ min: 1, max: 10 }}
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
            <Button variant="outlined" size="small" onClick={closeTableMenu}>Cancel</Button>
            <Button variant="contained" size="small" onClick={insertTable}>Insert</Button>
          </Box>
        </Box>
      </Popover>

      {/* Color Menu */}
      <Popover
        open={Boolean(colorMenuAnchor)}
        anchorEl={colorMenuAnchor}
        onClose={closeColorMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box sx={{ p: 2, width: '280px' }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            {isToolActive('color') ? 'Text Color' : 'Highlight Color'}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
            {colors.map((color) => (
              <Box
              key={color}
              onClick={() => isToolActive('color') ? applyColor(color) : applyHighlight(color)}
              sx={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                backgroundColor: color,
                cursor: 'pointer',
                border: '1px solid #ddd',
                '&:hover': {
                  transform: 'scale(1.1)',
                  boxShadow: '0 0 5px rgba(0,0,0,0.2)',
                }
              }}
            />
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 2 }}>
          <Button 
            variant="outlined" 
            size="small" 
            onClick={() => {
              if (isToolActive('color')) {
                editor.chain().focus().unsetColor().run();
              } else {
                editor.chain().focus().unsetHighlight().run();
              }
              closeColorMenu();
            }}
          >
            Clear
          </Button>
          <Button variant="outlined" size="small" onClick={closeColorMenu}>Cancel</Button>
        </Box>
      </Box>
    </Popover>

    {/* Additional table controls that appear when a table is active */}
    <AnimatePresence>
      {editor && editor.isActive('table') && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <Paper
            elevation={3}
            sx={{
              position: 'absolute',
              top: -60,
              left: '50%',
              transform: 'translateX(-50%)',
              p: 1,
              display: 'flex',
              gap: 1,
              zIndex: 10,
            }}
          >
            <Button 
              size="small" 
              variant="outlined"
              onClick={() => editor.chain().focus().addColumnBefore().run()}
              disabled={!editor.can().addColumnBefore()}
            >
              Add Column Before
            </Button>
            <Button 
              size="small" 
              variant="outlined"
              onClick={() => editor.chain().focus().addColumnAfter().run()}
              disabled={!editor.can().addColumnAfter()}
            >
              Add Column After
            </Button>
            <Button 
              size="small" 
              variant="outlined"
              onClick={() => editor.chain().focus().deleteColumn().run()}
              disabled={!editor.can().deleteColumn()}
            >
              Delete Column
            </Button>
            <Button 
              size="small" 
              variant="outlined"
              onClick={() => editor.chain().focus().addRowBefore().run()}
              disabled={!editor.can().addRowBefore()}
            >
              Add Row Before
            </Button>
            <Button 
              size="small" 
              variant="outlined"
              onClick={() => editor.chain().focus().addRowAfter().run()}
              disabled={!editor.can().addRowAfter()}
            >
              Add Row After
            </Button>
            <Button 
              size="small" 
              variant="outlined"
              onClick={() => editor.chain().focus().deleteRow().run()}
              disabled={!editor.can().deleteRow()}
            >
              Delete Row
            </Button>
            <Button 
              size="small" 
              variant="outlined" 
              color="error"
              onClick={() => editor.chain().focus().deleteTable().run()}
              disabled={!editor.can().deleteTable()}
            >
              Delete Table
            </Button>
          </Paper>
        </motion.div>
      )}
    </AnimatePresence>

    {/* Custom floating toolbar for text selection */}
    <AnimatePresence>
      {editor && editor.view && editor.view.state.selection.content().size > 0 && !editor.isActive('codeBlock') && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          <Paper
            elevation={4}
            sx={{
              position: 'absolute',
              zIndex: 20,
              top: (() => {
                const selection = window.getSelection();
                if (selection && selection.rangeCount > 0) {
                  const range = selection.getRangeAt(0);
                  const rect = range.getBoundingClientRect();
                  const editorRect = editorRef.current.getBoundingClientRect();
                  return rect.top - editorRect.top - 40; // Position above selection
                }
                return 0;
              })(),
              left: (() => {
                const selection = window.getSelection();
                if (selection && selection.rangeCount > 0) {
                  const range = selection.getRangeAt(0);
                  const rect = range.getBoundingClientRect();
                  const editorRect = editorRef.current.getBoundingClientRect();
                  return rect.left - editorRect.left + (rect.width / 2) - 100; // Center horizontally
                }
                return 0;
              })(),
              p: 0.5,
              display: 'flex',
              gap: 0.5,
              borderRadius: '4px',
            }}
          >
            <IconButton 
              size="small" 
              onClick={() => editor.chain().focus().toggleBold().run()}
              sx={{ color: editor.isActive('bold') ? theme.palette.primary.main : 'inherit' }}
            >
              <FormatBold fontSize="small" />
            </IconButton>
            <IconButton 
              size="small" 
              onClick={() => editor.chain().focus().toggleItalic().run()}
              sx={{ color: editor.isActive('italic') ? theme.palette.primary.main : 'inherit' }}
            >
              <FormatItalic fontSize="small" />
            </IconButton>
            <IconButton 
              size="small" 
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              sx={{ color: editor.isActive('underline') ? theme.palette.primary.main : 'inherit' }}
            >
              <FormatUnderlined fontSize="small" />
            </IconButton>
            <IconButton 
              size="small" 
              onClick={openLinkMenu}
              sx={{ color: editor.isActive('link') ? theme.palette.primary.main : 'inherit' }}
            >
              <LinkIcon fontSize="small" />
            </IconButton>
            <IconButton 
              size="small" 
              onClick={openColorMenu}
            >
              <FormatColorText fontSize="small" />
            </IconButton>
          </Paper>
        </motion.div>
      )}
    </AnimatePresence>

    {/* Custom styles for the editor */}
    <style jsx global>{`
      .enhanced-tiptap-editor {
        font-size: 16px;
        line-height: 1.5;
      }
      .enhanced-tiptap-editor p {
        margin: 0.5em 0;
      }
      .enhanced-tiptap-editor h1 {
        font-size: 2em;
        margin: 0.67em 0;
      }
      .enhanced-tiptap-editor h2 {
        font-size: 1.5em;
        margin: 0.75em 0;
      }
      .enhanced-tiptap-editor h3 {
        font-size: 1.17em;
        margin: 0.83em 0;
      }
      .enhanced-tiptap-editor h4 {
        font-size: 1em;
        margin: 1.12em 0;
      }
      .enhanced-tiptap-editor h5 {
        font-size: 0.83em;
        margin: 1.5em 0;
      }
      .enhanced-tiptap-editor h6 {
        font-size: 0.75em;
        margin: 1.67em 0;
      }
      .enhanced-tiptap-editor blockquote {
        border-left: 4px solid ${theme.palette.primary.light};
        margin-left: 0;
        margin-right: 0;
        padding-left: 1em;
        font-style: italic;
        color: ${theme.palette.text.secondary};
      }
      .enhanced-tiptap-editor pre {
        background-color: ${theme.palette.mode === 'dark' ? '#2d2d2d' : '#f5f5f5'};
        border-radius: 4px;
        padding: 0.75em;
        overflow-x: auto;
      }
      .enhanced-tiptap-editor code {
        font-family: monospace;
        background-color: ${theme.palette.mode === 'dark' ? '#2d2d2d' : '#f5f5f5'};
        padding: 0.2em 0.4em;
        border-radius: 3px;
        font-size: 0.9em;
      }
      .enhanced-tiptap-editor img {
        max-width: 100%;
        height: auto;
      }
      .enhanced-tiptap-editor .youtube-video {
        max-width: 100%;
        aspect-ratio: 16/9;
      }
      .enhanced-tiptap-editor a {
        color: ${theme.palette.primary.main};
        text-decoration: underline;
      }
      .enhanced-tiptap-editor ul[data-type="taskList"] {
        list-style-type: none;
        padding-left: 0;
      }
      .enhanced-tiptap-editor ul[data-type="taskList"] li {
        display: flex;
        align-items: flex-start;
        margin-bottom: 0.5em;
      }
      .enhanced-tiptap-editor ul[data-type="taskList"] li > label {
        margin-right: 0.5em;
        user-select: none;
      }
      .enhanced-tiptap-editor ul[data-type="taskList"] li > div {
        flex: 1;
      }
      .enhanced-tiptap-editor table {
        border-collapse: collapse;
        margin: 1em 0;
        overflow: hidden;
        table-layout: fixed;
        width: 100%;
      }
      .enhanced-tiptap-editor table td,
      .enhanced-tiptap-editor table th {
        border: 2px solid ${theme.palette.divider};
        box-sizing: border-box;
        min-width: 1em;
        padding: 0.5em;
        position: relative;
        vertical-align: top;
      }
      .enhanced-tiptap-editor table th {
        background-color: ${theme.palette.mode === 'dark' ? '#333' : '#f5f5f5'};
        font-weight: bold;
        text-align: left;
      }
      .enhanced-tiptap-editor hr {
        border: none;
        border-top: 2px solid ${theme.palette.divider};
        margin: 2em 0;
      }
    `}</style>
  </Box>
);
};

export default EnhancedTiptapEditor;