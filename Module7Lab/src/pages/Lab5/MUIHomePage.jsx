import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Paper,
  Chip,
  useTheme
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EmojiDisplay from '../../components/Lab3/EmojiDisplay';

const MUIHomePage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const labFeatures = [
    {
      id: 'hooks',
      title: 'React Hooks',
      description: 'useEffect for lifecycle management, useReducer for complex state, custom hooks for reusable logic',
      color: '#667eea'
    },
    {
      id: 'context',
      title: 'Context API',
      description: 'Global state management, emoji mood system, cross-component state sharing',
      color: '#764ba2'
    },
    {
      id: 'routing',
      title: 'React Router',
      description: 'Client-side routing, navigation, form handling, page transitions',
      color: '#8e44ad'
    },
    {
      id: 'material-ui',
      title: 'Material-UI',
      description: 'Component library, responsive design, theme system, form validation',
      color: '#9b59b6'
    }
  ];

  const allFeatures = [
    { name: 'API Integration', desc: 'Real-time Bitcoin price data', category: 'Data' },
    { name: 'Error Handling', desc: 'Graceful failure management', category: 'Reliability' },
    { name: 'Loading States', desc: 'User feedback during operations', category: 'UX' },
    { name: 'Form Validation', desc: 'Enhanced input validation', category: 'Forms' },
    { name: 'Responsive Design', desc: 'Mobile-first approach', category: 'Design' },
    { name: 'State Persistence', desc: 'Local storage integration', category: 'Data' },
    { name: 'Async Operations', desc: 'Non-blocking API calls', category: 'Performance' },
    { name: 'Context Integration', desc: 'Global emoji mood system', category: 'State' },
    { name: 'Custom Hooks', desc: 'Reusable stateful logic', category: 'Architecture' },
    { name: 'Component Composition', desc: 'Modular UI patterns', category: 'Architecture' }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Hero Section */}
      <Paper
        elevation={6}
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          p: { xs: 4, md: 6 },
          mb: 6,
          borderRadius: 3,
          textAlign: 'center'
        }}
      >
        <Typography variant="h2" component="h1" sx={{
          fontWeight: 700,
          mb: 2,
          fontSize: { xs: '2.5rem', md: '3.5rem' }
        }}>
          Welcome to Module 7 Lab
        </Typography>
        <Typography variant="h5" sx={{
          opacity: 0.95,
          mb: 4,
          maxWidth: 600,
          mx: 'auto'
        }}>
          A comprehensive journey through React Hooks, Context API, Routing, and Material-UI
        </Typography>

      </Paper>

      {/* Current Mood Section */}
      <Paper elevation={2} sx={{ p: 4, mb: 6, textAlign: 'center', borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: '#2c3e50' }}>
          Current Application Mood
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mb: 2 }}>
          <EmojiDisplay size="xlarge" />
        </Box>
        <Typography variant="h6" color="text.primary" sx={{ mb: 2 }}>
          The entire application is feeling: <EmojiDisplay size="small" showName={true} inline={true} />
        </Typography>
        <Typography variant="body1" color="text.primary" sx={{ fontStyle: 'italic', opacity: 0.8 }}>
          This mood is set globally using React Context and updates across all pages and components!
        </Typography>
      </Paper>

      {/* Core Technologies */}
      <Typography variant="h3" component="h2" gutterBottom sx={{
        textAlign: 'center',
        mb: 4,
        fontWeight: 600,
        color: '#2c3e50'
      }}>
        Core Technologies
      </Typography>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {labFeatures.map((lab) => (
          <Grid item xs={12} sm={6} md={3} key={lab.id}>
            <Card
              elevation={2}
              sx={{
                height: '100%',
                transition: 'all 0.3s ease',
                border: `2px solid ${lab.color}40`,
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: `0 8px 25px ${lab.color}30`,
                  border: `2px solid ${lab.color}`,
                },
                borderTop: `4px solid ${lab.color}`
              }}
            >
              <CardContent sx={{ p: 2.5 }}>
                <Typography variant="h6" component="h3" sx={{
                  fontWeight: 600,
                  mb: 1,
                  color: lab.color
                }}>
                  {lab.title}
                </Typography>
                <Typography variant="body2" sx={{
                  color: theme.palette.text.primary,
                  opacity: 0.8,
                  lineHeight: 1.5
                }}>
                  {lab.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Module 7 Lab Exercises */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 2,
          background: 'linear-gradient(135deg, #667eea08 0%, #764ba205 100%)',
          border: '2px solid #667eea40',
          mb: 6
        }}
      >
        <Typography variant="h4" gutterBottom sx={{
          textAlign: 'center',
          fontWeight: 600,
          color: theme.palette.primary.main,
          mb: 4
        }}>
          Module 7 Lab Exercises
        </Typography>

        <Grid container spacing={3}>
          {/* Exercise 1 */}
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%', border: '2px solid #28a745' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#28a745' }}>
                    Exercise 1: Basic Bitcoin Rates
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ mb: 2, color: theme.palette.text.primary }}>
                  <strong>Requirements:</strong> Complete BitcoinRates component to fetch and display Bitcoin price in selected currency using useEffect hook with cleanup and dependencies.
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, fontStyle: 'italic' }}>
                  API: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${'{currency}'}
                </Typography>
                <Typography variant="body2" sx={{ color: '#28a745', fontWeight: 500 }}>
                  Implemented with custom useBitcoinPrice hook, useReducer for state management, and AbortController for cleanup
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Exercise 2 */}
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%', border: '2px solid #28a745' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#28a745' }}>
                    Exercise 2: Custom Hook + useReducer
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ mb: 2, color: theme.palette.text.primary }}>
                  <strong>Requirements:</strong> Update BitcoinRates to use custom hook for external data synchronization. Extension: Implement useReducer for internal state management.
                </Typography>
                <Typography variant="body2" sx={{ color: '#28a745', fontWeight: 500 }}>
                  Implemented useBitcoinPrice custom hook with useReducer for complex state management (loading, success, error states)
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Exercise 3 */}
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%', border: '2px solid #28a745' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#28a745' }}>
                    Exercise 3: Emoji Context Integration
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ mb: 2, color: theme.palette.text.primary }}>
                  <strong>Requirements:</strong> Modify Emoji component from Module 6 Exercise 3 and create context for storing current emoji/mood. Display emoji from BitcoinRates component.
                </Typography>
                <Typography variant="body2" sx={{ color: '#28a745', fontWeight: 500 }}>
                  Implemented EmojiContext with comprehensive mood system, BitcoinRatesWithEmoji component, and cross-component state sharing
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Exercise 4 */}
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%', border: '2px solid #28a745' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#28a745' }}>
                    Exercise 4: Multi-Page App with Routing
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ mb: 2, color: theme.palette.text.primary }}>
                  <strong>Requirements:</strong> Create app with 3 pages (Home, Login, Bitcoin Rates) using existing components. Include navbar for navigation.
                </Typography>
                <Typography variant="body2" sx={{ color: '#28a745', fontWeight: 500 }}>
                  Implemented React Router with Home, Login, Bitcoin Rates, and Posts pages. Navigation through MUILayout component.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Exercise 5 */}
          <Grid item xs={12}>
            <Card elevation={2} sx={{ border: '2px solid #28a745' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#28a745' }}>
                    Exercise 5: Material-UI Integration + Extensions
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ mb: 2, color: theme.palette.text.primary }}>
                  <strong>Requirements:</strong> Update Exercise 4 solution to use MUI components for styling. Use AppBar for navigation and MUI form components. Extensions: Include PostList component with MUI cards/grids, create custom theme using createTheme.
                </Typography>
                <Typography variant="body2" sx={{ color: '#28a745', fontWeight: 500, mb: 2 }}>
                  Comprehensive custom theme implementation with custom colors, typography, component overrides, gradients, and both light/dark theme variants.
                </Typography>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  <Grid item xs={12} sm={6} md={3}>
                    <Chip label="AppBar Navigation" variant="outlined" sx={{ width: '100%' }} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Chip label="MUI Form Components" variant="outlined" sx={{ width: '100%' }} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Chip label="PostList with Cards/Grids" variant="outlined" sx={{ width: '100%' }} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Chip label="Comprehensive Custom Theme" variant="outlined" sx={{ width: '100%' }} />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, p: 3, backgroundColor: '#f0f8ff', borderRadius: 2, border: '1px solid #cce7ff' }}>
          <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 600, mb: 2 }}>
            🎯 Implementation Highlights
          </Typography>
          <Box component="ul" sx={{ pl: 2, m: 0 }}>
            <Box component="li" sx={{ mb: 1 }}>
              <Typography variant="body2">
                <strong>Advanced Custom Hooks:</strong> useBitcoinPrice with useReducer, useBitcoinDataManager for complex state
              </Typography>
            </Box>
            <Box component="li" sx={{ mb: 1 }}>
              <Typography variant="body2">
                <strong>Comprehensive Context:</strong> EmojiContext with mood history, statistics, and cross-component sharing
              </Typography>
            </Box>
            <Box component="li" sx={{ mb: 1 }}>
              <Typography variant="body2">
                <strong>Professional API Integration:</strong> CoinGecko API with error handling and request cancellation
              </Typography>
            </Box>
            <Box component="li" sx={{ mb: 1 }}>
              <Typography variant="body2">
                <strong>Advanced MUI Implementation:</strong> Comprehensive custom theme with createTheme, responsive design, extensive component overrides
              </Typography>
            </Box>
            <Box component="li" sx={{ mb: 1 }}>
              <Typography variant="body2">
                <strong>Enhanced Features:</strong> Multi-currency tracking, favorites system, auto-refresh functionality
              </Typography>
            </Box>
            <Box component="li" sx={{ mb: 1 }}>
              <Typography variant="body2">
                <strong>Production-Ready Patterns:</strong> Proper cleanup, race condition prevention, error boundaries
              </Typography>
            </Box>
          </Box>
        </Box>


      </Paper>

      {/* Getting Started Section */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 2,
          background: 'linear-gradient(135deg, #e8f5e8 0%, #ffffff 100%)',
          border: '2px solid #28a745',
          mb: 6
        }}
      >
        <Typography variant="h4" gutterBottom sx={{
          textAlign: 'center',
          fontWeight: 600,
          color: '#28a745',
          mb: 3
        }}>
          🚀 Getting Started
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', mb: 3, color: theme.palette.text.primary }}>
          Explore the interactive demonstrations of advanced React patterns by navigating through the application.
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => navigate('/bitcoin-rates')}
              sx={{
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #5a6fd8, #6a4190)',
                }
              }}
            >
              Bitcoin Dashboard
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => navigate('/posts')}
              sx={{
                borderColor: '#28a745',
                color: '#28a745',
                '&:hover': {
                  borderColor: '#1e7e34',
                  backgroundColor: 'rgba(40, 167, 69, 0.08)',
                }
              }}
            >
              Posts Gallery
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => navigate('/login')}
              sx={{
                borderColor: theme.palette.secondary.main,
                color: theme.palette.secondary.main,
                '&:hover': {
                  borderColor: theme.palette.secondary.dark,
                  backgroundColor: theme.palette.secondary.main + '08',
                }
              }}
            >
              Login Form
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* All Features Demonstrated */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 2,
          background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
          border: '1px solid #e0e0e0'
        }}
      >
        <Typography variant="h4" gutterBottom sx={{
          textAlign: 'center',
          fontWeight: 600,
          color: theme.palette.primary.main,
          mb: 4
        }}>
          Features Demonstrated
        </Typography>
        <Grid container spacing={2}>
          {allFeatures.map((feature) => (
            <Grid item xs={12} sm={6} md={4} key={feature.name}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: theme.palette.grey[50],
                  border: `1px solid ${theme.palette.divider}`,
                  borderLeft: `4px solid ${theme.palette.primary.main}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main + '08',
                    borderColor: theme.palette.primary.main,
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                  }
                }}
              >
                <Typography variant="subtitle2" sx={{
                  fontWeight: 600,
                  color: theme.palette.primary.main,
                  mb: 0.5
                }}>
                  {feature.name}
                </Typography>
                <Typography variant="body2" sx={{
                  color: theme.palette.text.primary,
                  opacity: 0.8,
                  fontSize: '0.875rem'
                }}>
                  {feature.desc}
                </Typography>
                <Chip
                  label={feature.category}
                  size="small"
                  sx={{
                    mt: 1,
                    fontSize: '0.75rem',
                    height: 20,
                    backgroundColor: theme.palette.primary.main + '20',
                    color: theme.palette.primary.main
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default MUIHomePage;
