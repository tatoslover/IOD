import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Paper,
  Chip,
  useTheme,
  Tabs,
  Tab
} from '@mui/material';
import BitcoinRates from '../components/Lab1/BitcoinRates';
import BitcoinRatesAdvanced from '../components/Lab1/BitcoinRatesAdvanced';
import ApiStatus from '../components/Lab1/ApiStatus';
import BitcoinRatesWithCustomHook from '../components/Lab2/BitcoinRatesWithCustomHook';
import BitcoinRatesWithEmoji from '../components/Lab3/BitcoinRatesWithEmoji';
import EmojiMoodSwitcher from '../components/Lab3/EmojiMoodSwitcher';
import EmojiDisplay from '../components/Lab3/EmojiDisplay';
import NavigationDemo from '../components/Lab4/NavigationDemo';

const BitcoinRatesPage = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'basic',
      label: 'Basic Rates',
      icon: '📊',
      color: '#667eea',
      component: <BitcoinRates />,
      description: 'Simple useEffect hook with custom Bitcoin price fetching hook.',
      features: ['useEffect for API calls', 'useReducer for state management', 'Error handling and cleanup', 'AbortController for request cancellation']
    },
    {
      id: 'custom-hook',
      label: 'Custom Hook',
      icon: '🔧',
      color: '#28a745',
      component: <BitcoinRatesWithCustomHook />,
      description: 'Demonstrates Exercise 2: Custom hook with useReducer for complex state management.',
      features: ['Custom useBitcoinPrice hook', 'useReducer implementation', 'Enhanced error handling', 'Professional UI design']
    },
    {
      id: 'advanced',
      label: 'Advanced Manager',
      icon: '🚀',
      color: '#764ba2',
      component: <BitcoinRatesAdvanced />,
      description: 'Complex multi-currency management with advanced state handling.',
      features: ['Multiple currency tracking', 'Favorites system', 'Auto-refresh functionality', 'Statistics and sorting']
    },
    {
      id: 'context',
      label: 'With Context',
      icon: '🎭',
      color: '#8e44ad',
      component: <BitcoinRatesWithEmoji />,
      description: 'Integration with global emoji context for mood sharing.',
      features: ['Context API integration', 'Global state sharing', 'Real-time mood updates', 'Cross-component communication']
    },
    {
      id: 'navigation',
      label: 'Navigation Demo',
      icon: '🧭',
      color: '#17a2b8',
      component: <NavigationDemo />,
      description: 'Demonstrates Exercise 4: React Router navigation and multi-page structure.',
      features: ['useNavigate hook', 'useLocation tracking', 'Programmatic navigation', 'Route information display']
    },
    {
      id: 'mood',
      label: 'Mood Controller',
      icon: '😊',
      color: '#9b59b6',
      component: <EmojiMoodSwitcher />,
      description: 'Global mood management affecting all components.',
      features: ['Context Provider pattern', 'Custom useEmoji hook', 'Mood history tracking', 'Advanced state management']
    }
  ];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

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
          Bitcoin Rates Dashboard
        </Typography>
        <Typography variant="h5" sx={{
          opacity: 0.95,
          mb: 4,
          maxWidth: 600,
          mx: 'auto'
        }}>
          Comprehensive cryptocurrency price tracking with React Hooks and Context integration
        </Typography>
      </Paper>

      {/* Current Mood Section */}
      <Paper elevation={2} sx={{ p: 4, mb: 6, textAlign: 'center', borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: '#2c3e50' }}>
          Current Market Mood
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mb: 2 }}>
          <EmojiDisplay size="xlarge" />
        </Box>
        <Typography variant="h6" color="text.primary" sx={{ mb: 2 }}>
          The market is feeling: <EmojiDisplay size="small" showName={true} inline={true} />
        </Typography>
        <Typography variant="body1" color="text.primary" sx={{ fontStyle: 'italic', opacity: 0.8 }}>
          This mood is shared across all components and pages through React Context!
        </Typography>
      </Paper>

      {/* Tab Navigation */}
      <Paper
        elevation={2}
        sx={{
          mb: 4,
          borderRadius: 2,
          background: 'linear-gradient(135deg, #667eea08, #764ba205)',
          border: '2px solid #667eea40'
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{
            '& .MuiTabs-indicator': {
              display: 'none'
            },
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 600,
              minHeight: 64,
              color: '#667eea',
              '&.Mui-selected': {
                background: 'linear-gradient(45deg, #d2691e, #be5f19)',
                color: 'white',
                borderRadius: 1,
                margin: 1,
              }
            }
          }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={tab.id}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </Box>
              }
            />
          ))}
        </Tabs>
      </Paper>

      {/* Tab Content */}
      <Card
        elevation={3}
        sx={{
          background: 'linear-gradient(135deg, #667eea15, #764ba208)',
          border: '2px solid #667eea40',
          borderTop: `4px solid ${tabs[activeTab].color}`,
          mb: 4
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom sx={{
            fontWeight: 600,
            color: tabs[activeTab].color,
            mb: 3
          }}>
            {tabs[activeTab].label}: {
              tabs[activeTab].id === 'basic' ? 'Lab 1' :
              tabs[activeTab].id === 'custom-hook' ? 'Lab 2' :
              tabs[activeTab].id === 'advanced' ? 'Lab 2 Extended' :
              tabs[activeTab].id === 'context' ? 'Lab 3' :
              tabs[activeTab].id === 'navigation' ? 'Lab 4' :
              'Lab 3'
            }
          </Typography>

          {/* API Status for Bitcoin-related tabs */}
          {(tabs[activeTab].id === 'basic' || tabs[activeTab].id === 'custom-hook' || tabs[activeTab].id === 'advanced' || tabs[activeTab].id === 'context') && (
            <ApiStatus />
          )}

          <Typography variant="body1" sx={{
            mb: 3,
            color: '#1a1a1a',
            lineHeight: 1.7,
            fontSize: '1.1rem',
            fontWeight: 500
          }}>
            {tabs[activeTab].description}
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#667eea', textAlign: 'center' }}>
              Key Features:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
              {tabs[activeTab].features.map((feature, index) => (
                <Chip
                  key={index}
                  label={feature}
                  sx={{
                    backgroundColor: tabs[activeTab].color,
                    color: 'white',
                    fontWeight: 500
                  }}
                />
              ))}
            </Box>
          </Box>

          {tabs[activeTab].component}
        </CardContent>
      </Card>


    </Container>
  );
};

export default BitcoinRatesPage;
