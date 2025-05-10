// import {
//     Check,
//     Copyright,
//     ExpandMore,
//     Policy,
//     Security,
//     Warning,
// } from '@mui/icons-material';
// import {
//     Accordion,
//     AccordionDetails,
//     AccordionSummary,
//     Box,
//     Button,
//     Checkbox,
//     Container,
//     Divider,
//     FormControlLabel,
//     Paper,
//     Typography,
//     useMediaQuery,
//     useTheme,
// } from '@mui/material';
// import { AnimatePresence, motion } from 'framer-motion';
// import React, { useState } from 'react';

// const TermsOfService = ({ onAccept }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const [accepted, setAccepted] = useState(false);
//   const [expanded, setExpanded] = useState('');

//   const handleAccordionChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : '');
//   };

//   const handleAccept = () => {
//     if (accepted) {
//       onAccept?.();
//     }
//   };

//   const sections = [
//     {
//       id: 'usage',
//       title: 'Usage Guidelines',
//       icon: <Policy />,
//       content: `
//         1. Content must be original or properly attributed
//         2. No harmful, offensive, or illegal content
//         3. Respect intellectual property rights
//         4. No spam or automated posting
//         5. Keep personal information private
//       `,
//     },
//     {
//       id: 'privacy',
//       title: 'Privacy Policy',
//       icon: <Security />,
//       content: `
//         1. We collect minimal personal data
//         2. Your email is used for account purposes only
//         3. Content is stored securely
//         4. You can request data deletion
//         5. We don't share data with third parties
//       `,
//     },
//     {
//       id: 'copyright',
//       title: 'Copyright Information',
//       icon: <Copyright />,
//       content: `
//         1. You retain rights to your content
//         2. Grant us license to display content
//         3. Must have rights to posted content
//         4. We may remove infringing content
//         5. DMCA compliance procedures
//       `,
//     },
//   ];

//   return (
//     <Container maxWidth="md" sx={{ py: 4 }}>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Paper
//           elevation={3}
//           sx={{
//             p: 4,
//             background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
//             color: 'white',
//             mb: 4,
//             borderRadius: 2,
//           }}
//         >
//           <Typography variant="h4" gutterBottom fontWeight="bold">
//             Terms of Service
//           </Typography>
//           <Typography variant="subtitle1">
//             Please review our terms carefully before proceeding
//           </Typography>
//         </Paper>

//         <Paper elevation={2} sx={{ p: 3 }}>
//           <Box sx={{ mb: 4 }}>
//             <Typography variant="body1" paragraph>
//               Welcome to our blog creation service. These terms establish the rules for using our platform.
//               By accepting these terms, you agree to comply with all guidelines and policies.
//             </Typography>
//           </Box>

//           <Box sx={{ mb: 4 }}>
//             {sections.map((section) => (
//               <motion.div
//                 key={section.id}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <Accordion
//                   expanded={expanded === section.id}
//                   onChange={handleAccordionChange(section.id)}
//                   sx={{
//                     mb: 2,
//                     '&:before': { display: 'none' },
//                     background: expanded === section.id ? 'rgba(0, 0, 0, 0.02)' : 'transparent',
//                     transition: 'all 0.3s ease',
//                   }}
//                 >
//                   <AccordionSummary
//                     expandIcon={<ExpandMore />}
//                     sx={{
//                       '&:hover': {
//                         backgroundColor: 'rgba(0, 0, 0, 0.04)',
//                       },
//                     }}
//                   >
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                       {section.icon}
//                       <Typography variant="h6">{section.title}</Typography>
//                     </Box>
//                   </AccordionSummary>
//                   <AccordionDetails>
//                     <Typography
//                       component="div"
//                       sx={{
//                         whiteSpace: 'pre-line',
//                         '& span': {
//                           display: 'block',
//                           mb: 1,
//                         },
//                       }}
//                     >
//                       {section.content}
//                     </Typography>
//                   </AccordionDetails>
//                 </Accordion>
//               </motion.div>
//             ))}
//           </Box>

//           <Divider sx={{ my: 3 }} />

//           <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={accepted}
//                   onChange={(e) => setAccepted(e.target.checked)}
//                   color="primary"
//                 />
//               }
//               label="I have read and agree to the Terms of Service"
//             />

//             <AnimatePresence>
//               {!accepted && (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: 'auto' }}
//                   exit={{ opacity: 0, height: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <Typography
//                     variant="body2"
//                     color="error"
//                     sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
//                   >
//                     <Warning fontSize="small" />
//                     Please accept the terms to continue
//                   </Typography>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <Button
//               variant="contained"
//               size="large"
//               disabled={!accepted}
//               onClick={handleAccept}
//               startIcon={<Check />}
//               sx={{
//                 mt: 2,
//                 transition: 'all 0.3s ease',
//                 transform: accepted ? 'scale(1)' : 'scale(0.95)',
//                 opacity: accepted ? 1 : 0.7,
//               }}
//             >
//               Accept Terms
//             </Button>
//           </Box>
//         </Paper>
//       </motion.div>
//     </Container>
//   );
// };

// export default TermsOfService;

//===========================================================================

// import {
//     Assignment,
//     Check,
//     ExpandMore,
//     Gavel,
//     PrivacyTip,
//     Warning,
// } from "@mui/icons-material";
// import {
//     Accordion,
//     AccordionDetails,
//     AccordionSummary,
//     Box,
//     Button,
//     Checkbox,
//     Container,
//     Divider,
//     FormControlLabel,
//     Paper,
//     Typography,
//     useMediaQuery,
//     useTheme,
// } from "@mui/material";
// import { AnimatePresence, motion } from "framer-motion";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import bbLogo from "../Images/bb_logo_bgless.png";

// const TermsOfService = ({ onAccept }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const [accepted, setAccepted] = useState(false);
//   const [expanded, setExpanded] = useState("");

//   const navigate = useNavigate();
//   const handleAccordionChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : "");
//   };

//   const handleAccept = () => {
//     if (accepted) {
//       navigate("/signup");
//     }
//   };

//   const sections = [
//     {
//       id: "usage",
//       title: "Usage Guidelines",
//       icon: <Assignment sx={{ color: theme.palette.primary.main }} />,
//       content: `
//         1. Content must be original or properly attributed
//         2. No harmful, offensive, or illegal content
//         3. Respect intellectual property rights
//         4. No spam or automated posting
//         5. Keep personal information private
//       `,
//     },
//     {
//       id: "privacy",
//       title: "Privacy Policy",
//       icon: <PrivacyTip sx={{ color: theme.palette.secondary.main }} />,
//       content: `
//         1. We collect minimal personal data
//         2. Your email is used for account purposes only
//         3. Content is stored securely
//         4. You can request data deletion
//         5. We don't share data with third parties
//       `,
//     },
//     {
//       id: "copyright",
//       title: "Copyright Information",
//       icon: <Gavel sx={{ color: theme.palette.error.main }} />,
//       content: `
//         1. You retain rights to your content
//         2. Grant us license to display content
//         3. Must have rights to posted content
//         4. We may remove infringing content
//         5. DMCA compliance procedures
//       `,
//     },
//   ];

//   return (
//     <Container maxWidth="md" sx={{ py: 4 }}>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Paper
//           elevation={3}
//           sx={{
//             position: "relative",
//             overflow: "hidden",
//             borderRadius: 3,
//             mb: 4,
//           }}
//         >
//           {/* Background gradient with overlay */}
//           <Box
//             sx={{
//               background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
//               p: 6,
//               color: "white",
//               position: "relative",
//               "&::before": {
//                 content: '""',
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 background:
//                   "radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, transparent 60%)",
//               },
//             }}
//           >
//             <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 3 }}>
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 0.5, type: "spring" }}
//               >
//                 <Box
//                   sx={{
//                     width: 80,
//                     height: 80,
//                     boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
//                     backgroundColor: "white",
//                     borderRadius: "50%",
//                     overflow: "hidden",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <Box
//                     component="img"
//                     src={bbLogo}
//                     alt="Blog Builder Logo"
//                     sx={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "contain",
//                     }}
//                   />
//                 </Box>
//               </motion.div>
//               <Box>
//                 <Typography variant="h3" fontWeight="bold" gutterBottom>
//                   Terms of Service
//                 </Typography>
//                 <Typography variant="h6" sx={{ opacity: 0.9 }}>
//                   Please review our terms carefully before proceeding
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>
//         </Paper>

//         <Paper
//           elevation={2}
//           sx={{
//             p: 4,
//             borderRadius: 2,
//             boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
//           }}
//         >
//           <Box sx={{ mb: 4 }}>
//             <Typography
//               variant="body1"
//               paragraph
//               sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
//             >
//               Welcome to our blog creation service. These terms establish the
//               rules for using our platform. By accepting these terms, you agree
//               to comply with all guidelines and policies.
//             </Typography>
//           </Box>

//           <Box sx={{ mb: 4 }}>
//             {sections.map((section, index) => (
//               <motion.div
//                 key={section.id}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//               >
//                 <Accordion
//                   expanded={expanded === section.id}
//                   onChange={handleAccordionChange(section.id)}
//                   sx={{
//                     mb: 2,
//                     border: `1px solid ${theme.palette.divider}`,
//                     borderRadius: "8px !important",
//                     "&:before": { display: "none" },
//                     background:
//                       expanded === section.id
//                         ? "rgba(0, 0, 0, 0.02)"
//                         : "transparent",
//                     transition: "all 0.3s ease",
//                     boxShadow:
//                       expanded === section.id
//                         ? "0 4px 12px rgba(0,0,0,0.05)"
//                         : "none",
//                   }}
//                 >
//                   <AccordionSummary
//                     expandIcon={<ExpandMore />}
//                     sx={{
//                       "&:hover": {
//                         backgroundColor: "rgba(0, 0, 0, 0.04)",
//                       },
//                     }}
//                   >
//                     <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//                       {section.icon}
//                       <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                         {section.title}
//                       </Typography>
//                     </Box>
//                   </AccordionSummary>
//                   <AccordionDetails>
//                     <Typography
//                       component="div"
//                       sx={{
//                         whiteSpace: "pre-line",
//                         "& span": {
//                           display: "block",
//                           mb: 1.5,
//                           fontSize: "1.05rem",
//                           lineHeight: 1.7,
//                         },
//                       }}
//                     >
//                       {section.content}
//                     </Typography>
//                   </AccordionDetails>
//                 </Accordion>
//               </motion.div>
//             ))}
//           </Box>

//           <Divider sx={{ my: 4 }} />

//           <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={accepted}
//                   onChange={(e) => setAccepted(e.target.checked)}
//                   color="primary"
//                   sx={{ transform: "scale(1.1)" }}
//                 />
//               }
//               label={
//                 <Typography sx={{ fontWeight: 500 }}>
//                   I have read and agree to the Terms of Service
//                 </Typography>
//               }
//             />

//             <AnimatePresence>
//               {!accepted && (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <Typography
//                     variant="body2"
//                     color="error"
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 1,
//                       p: 1,
//                       bgcolor: "error.light",
//                       color: "error.contrastText",
//                       borderRadius: 1,
//                     }}
//                   >
//                     <Warning fontSize="small" />
//                     Please accept the terms to continue
//                   </Typography>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <Button
//               variant="contained"
//               size="large"
//               disabled={!accepted}
//               onClick={handleAccept}
//               startIcon={<Check />}
//               sx={{
//                 mt: 2,
//                 py: 1.5,
//                 fontSize: "1.1rem",
//                 transition: "all 0.3s ease",
//                 transform: accepted ? "scale(1)" : "scale(0.95)",
//                 opacity: accepted ? 1 : 0.7,
//                 boxShadow: accepted ? "0 4px 12px rgba(0,0,0,0.15)" : "none",
//                 "&:hover": {
//                   transform: accepted ? "scale(1.02)" : "scale(0.95)",
//                   boxShadow: accepted ? "0 6px 15px rgba(0,0,0,0.2)" : "none",
//                 },
//               }}
//             >
//               Accept Terms
//             </Button>
//           </Box>
//         </Paper>
//       </motion.div>
//     </Container>
//   );
// };

// export default TermsOfService;


//====================================================================


import {
    Assignment,
    ArrowForward,
    ExpandMore,
    Gavel,
    PrivacyTip,
    Article,
    Security,
    Support,
} from "@mui/icons-material";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Container,
    Divider,
    Paper,
    Typography,
    useMediaQuery,
    useTheme,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bbLogo from "../Images/bb_logo_bgless.png";

const TermsOfService = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [expanded, setExpanded] = useState("");

  const navigate = useNavigate();
  
  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : "");
  };

  const handleGoToSignup = () => {
    navigate("/signup");
  };

  const sections = [
    {
      id: "usage",
      title: "Usage Guidelines",
      icon: <Assignment sx={{ color: theme.palette.primary.main }} />,
      content: [
        "All submitted content must be original or properly attributed to its source according to fair use guidelines.",
        "Users are prohibited from posting harmful, offensive, discriminatory, or illegal content that violates local, state, or federal laws.",
        "Intellectual property rights must be respected. Do not post copyrighted material without proper authorization.",
        "Spam, excessive self-promotion, and automated posting are not permitted on the platform.",
        "Personal information about other individuals should not be shared without explicit consent.",
        "Users must maintain appropriate conduct and refrain from harassing or threatening behavior.",
        "The platform reserves the right to remove content that violates these guidelines without prior notice."
      ]
    },
    {
      id: "privacy",
      title: "Privacy Policy",
      icon: <PrivacyTip sx={{ color: theme.palette.secondary.main }} />,
      content: [
        "We collect minimal personal data necessary for account creation and platform functionality.",
        "Your email address is used for account verification, communications, and recovery purposes only.",
        "All user content is stored securely using industry-standard encryption and security protocols.",
        "You may request complete deletion of your account and associated data at any time through the account settings.",
        "We do not share or sell your personal information with third parties for marketing purposes.",
        "Cookies and similar technologies are used to enhance your experience and provide analytics.",
        "We may disclose information if required by law or to protect our rights or the safety of others."
      ]
    },
    {
      id: "copyright",
      title: "Copyright Information",
      icon: <Gavel sx={{ color: theme.palette.error.main }} />,
      content: [
        "You retain all ownership rights to content you create and post on our platform.",
        "By posting content, you grant us a non-exclusive, worldwide, royalty-free license to display and promote that content on our services.",
        "You must have the legal right to post any content you upload, including text, images, and other media.",
        "We follow DMCA (Digital Millennium Copyright Act) procedures and will remove infringing content upon proper notification.",
        "Repeated copyright violations may result in account termination.",
        "To report copyright infringement, please contact our designated copyright agent with the required information."
      ]
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: <Security sx={{ color: theme.palette.warning.main }} />,
      content: [
        "The platform is provided 'as is' without warranties of any kind, whether express or implied.",
        "We are not responsible for user-generated content or any damages resulting from your use of the service.",
        "Our liability is limited to the maximum extent permitted by applicable law.",
        "We do not guarantee uninterrupted, secure, or error-free operation of our services.",
        "You acknowledge that we are not responsible for any loss of data or damages resulting from technical failures.",
        "We reserve the right to modify, suspend, or discontinue any aspect of the service at any time."
      ]
    },
    {
      id: "termination",
      title: "Account Termination",
      icon: <Article sx={{ color: theme.palette.info.main }} />,
      content: [
        "We reserve the right to suspend or terminate accounts that violate these terms of service.",
        "You may terminate your account at any time through the account settings.",
        "Upon termination, your access to the service will be revoked immediately.",
        "We may retain certain information as required by law or for legitimate business purposes.",
        "Content you've published may remain accessible even after account termination.",
        "We reserve the right to refuse service to anyone for any reason at our discretion."
      ]
    },
    {
      id: "support",
      title: "Support and Dispute Resolution",
      icon: <Support sx={{ color: theme.palette.success.main }} />,
      content: [
        "For customer support inquiries, please contact us through our help center or support email.",
        "All disputes arising from these terms shall be resolved through arbitration according to the laws of [Jurisdiction].",
        "You agree to attempt to resolve any issues directly with us before pursuing legal action.",
        "Any claim must be filed within one year after the cause of action arose.",
        "Class action waivers apply - you agree to resolve disputes individually, not as part of a class action.",
        "These terms constitute the entire agreement between you and the platform regarding the service."
      ]
    }
  ];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper
          elevation={3}
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 3,
            mb: 4,
          }}
        >
          {/* Background gradient with overlay */}
          <Box
            sx={{
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
              p: 6,
              color: "white",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, transparent 60%)",
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 3 }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={bbLogo}
                    alt="Blog Builder Logo"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </motion.div>
              <Box>
                <Typography variant="h3" fontWeight="bold" gutterBottom>
                  Terms of Service
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.9 }}>
                  Legal documentation governing the use of our platform
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>

        <Paper
          elevation={2}
          sx={{
            p: 4,
            borderRadius: 2,
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          }}
        >
          <Box 
            sx={{ 
              mb: 4, 
              p: 3,
              bgcolor: theme.palette.background.default,
              borderRadius: 2,
              border: `1px solid ${theme.palette.divider}`
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              color="primary"
              fontWeight="600"
            >
              IMPORTANT LEGAL NOTICE
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              Welcome to our blog creation service. By accessing or using our platform, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These terms establish the complete agreement between you and our company regarding your use of our services.
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              These terms were last updated on May 1, 2025. We reserve the right to modify these terms at any time, with changes becoming effective immediately upon posting. Your continued use of the service constitutes acceptance of the modified terms.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Accordion
                  expanded={expanded === section.id}
                  onChange={handleAccordionChange(section.id)}
                  sx={{
                    mb: 2,
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: "8px !important",
                    "&:before": { display: "none" },
                    background:
                      expanded === section.id
                        ? "rgba(0, 0, 0, 0.02)"
                        : "transparent",
                    transition: "all 0.3s ease",
                    boxShadow:
                      expanded === section.id
                        ? "0 4px 12px rgba(0,0,0,0.05)"
                        : "none",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    sx={{
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.04)",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      {section.icon}
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {section.title}
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List disablePadding>
                      {section.content.map((item, idx) => (
                        <ListItem 
                          key={idx} 
                          alignItems="flex-start"
                          sx={{ 
                            py: 1,
                            px: 0,
                            borderBottom: idx < section.content.length - 1 ? `1px solid ${theme.palette.divider}` : 'none'
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <Typography variant="body1" fontWeight="600" color="text.secondary">
                              {idx + 1}.
                            </Typography>
                          </ListItemIcon>
                          <ListItemText 
                            primary={item} 
                            primaryTypographyProps={{ 
                              variant: "body1", 
                              sx: { lineHeight: 1.7, fontSize: "1.05rem" } 
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </Box>

          <Divider sx={{ my: 4 }} />

          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              p: 3,
              bgcolor: 'rgba(0, 0, 0, 0.02)',
              borderRadius: 2,
              border: `1px solid ${theme.palette.divider}`
            }}
          >
            <Typography 
              variant="body1" 
              align="center" 
              paragraph
              sx={{ 
                maxWidth: '90%',
                mb: 3,
                fontStyle: 'italic',
                color: theme.palette.text.secondary
              }}
            >
              By proceeding to signup, you acknowledge that you have read, understood, and agree to abide by all terms and conditions outlined in this document.
            </Typography>
            
            <Button
              variant="contained"
              size="large"
              onClick={handleGoToSignup}
              endIcon={<ArrowForward />}
              sx={{
                py: 1.5,
                px: 4,
                fontSize: "1.1rem",
                transition: "all 0.3s ease",
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
                },
              }}
            >
              Continue to Signup
            </Button>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default TermsOfService;
