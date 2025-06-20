import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MUINavbar from './MUINavbar';
import EmojiDisplay from '../Lab3/EmojiDisplay';

const MUILayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.background.default
    }}>
      {/* Enhanced Navbar from Lab 4 -> Lab 5 */}
      <MUINavbar />

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 3,
          backgroundColor: theme.palette.background.default,
          minHeight: 'calc(100vh - 140px)', // Account for navbar and footer
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
          <Outlet />
        </Container>
      </Box>

      {/* Enhanced Footer with MUI */}
      <Paper
        component="footer"
        elevation={3}
        sx={{
          mt: 'auto',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: 3,
          px: 2,
          borderRadius: 0,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Module 7 Lab - React Hooks, Context API & MUI Demo
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Data provided by CoinGecko API • Posts from JSONPlaceholder
              </Typography>
            </Box>

            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              flexDirection: isMobile ? 'column' : 'row'
            }}>
              {/* Current Mood Display */}
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 2,
                px: 2,
                py: 1
              }}>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Current Mood:
                </Typography>
                <EmojiDisplay size="small" showName={true} inline={true} />
              </Box>

              {/* Lab Badges */}
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              </Box>
            </Box>
          </Box>

          {/* Lab Evolution Info */}
          <Box
            sx={{
              mt: 2,
              pt: 2,
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
            }}
          >
            <Typography variant="caption" sx={{ opacity: 0.7, fontStyle: 'italic' }}>
              Evolution: Lab 1 (Hooks) → Lab 2 (Advanced Hooks) → Lab 3 (Context) → Lab 4 (Router) → Lab 5 (MUI)
            </Typography>
          </Box>
        </Container>
      </Paper>
    </Box>
  );
};

export default MUILayout;
