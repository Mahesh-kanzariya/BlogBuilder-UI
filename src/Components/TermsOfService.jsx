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

import {
    Assignment,
    Check,
    ExpandMore,
    Gavel,
    PrivacyTip,
    Warning,
} from "@mui/icons-material";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControlLabel,
    Paper,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bbLogo from "../Images/bb_logo_bgless.png";

const TermsOfService = ({ onAccept }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [accepted, setAccepted] = useState(false);
  const [expanded, setExpanded] = useState("");

  const navigate = useNavigate();
  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : "");
  };

  const handleAccept = () => {
    if (accepted) {
      navigate("/signup");
    }
  };

  const sections = [
    {
      id: "usage",
      title: "Usage Guidelines",
      icon: <Assignment sx={{ color: theme.palette.primary.main }} />,
      content: `
        1. Content must be original or properly attributed
        2. No harmful, offensive, or illegal content
        3. Respect intellectual property rights
        4. No spam or automated posting
        5. Keep personal information private
      `,
    },
    {
      id: "privacy",
      title: "Privacy Policy",
      icon: <PrivacyTip sx={{ color: theme.palette.secondary.main }} />,
      content: `
        1. We collect minimal personal data
        2. Your email is used for account purposes only
        3. Content is stored securely
        4. You can request data deletion
        5. We don't share data with third parties
      `,
    },
    {
      id: "copyright",
      title: "Copyright Information",
      icon: <Gavel sx={{ color: theme.palette.error.main }} />,
      content: `
        1. You retain rights to your content
        2. Grant us license to display content
        3. Must have rights to posted content
        4. We may remove infringing content
        5. DMCA compliance procedures
      `,
    },
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
                  Please review our terms carefully before proceeding
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
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="body1"
              paragraph
              sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              Welcome to our blog creation service. These terms establish the
              rules for using our platform. By accepting these terms, you agree
              to comply with all guidelines and policies.
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
                    <Typography
                      component="div"
                      sx={{
                        whiteSpace: "pre-line",
                        "& span": {
                          display: "block",
                          mb: 1.5,
                          fontSize: "1.05rem",
                          lineHeight: 1.7,
                        },
                      }}
                    >
                      {section.content}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </Box>

          <Divider sx={{ my: 4 }} />

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  color="primary"
                  sx={{ transform: "scale(1.1)" }}
                />
              }
              label={
                <Typography sx={{ fontWeight: 500 }}>
                  I have read and agree to the Terms of Service
                </Typography>
              }
            />

            <AnimatePresence>
              {!accepted && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Typography
                    variant="body2"
                    color="error"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      p: 1,
                      bgcolor: "error.light",
                      color: "error.contrastText",
                      borderRadius: 1,
                    }}
                  >
                    <Warning fontSize="small" />
                    Please accept the terms to continue
                  </Typography>
                </motion.div>
              )}
            </AnimatePresence>

            <Button
              variant="contained"
              size="large"
              disabled={!accepted}
              onClick={handleAccept}
              startIcon={<Check />}
              sx={{
                mt: 2,
                py: 1.5,
                fontSize: "1.1rem",
                transition: "all 0.3s ease",
                transform: accepted ? "scale(1)" : "scale(0.95)",
                opacity: accepted ? 1 : 0.7,
                boxShadow: accepted ? "0 4px 12px rgba(0,0,0,0.15)" : "none",
                "&:hover": {
                  transform: accepted ? "scale(1.02)" : "scale(0.95)",
                  boxShadow: accepted ? "0 6px 15px rgba(0,0,0,0.2)" : "none",
                },
              }}
            >
              Accept Terms
            </Button>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default TermsOfService;
