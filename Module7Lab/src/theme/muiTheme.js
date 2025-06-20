import { createTheme } from '@mui/material/styles';

// Custom MUI Theme matching Module3LabPortfolio design
export const muiTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#667eea', // Purple color from gradient
      light: '#8a9cf2',
      dark: '#4c5bc4',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#764ba2', // Purple accent from gradient
      light: '#9966cc',
      dark: '#5a357a',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8f9fa', // Light gray background
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#495057',
    },
    error: {
      main: '#dc3545',
      light: '#e85a6b',
      dark: '#b02a37',
    },
    warning: {
      main: '#ffc107',
      light: '#ffcd39',
      dark: '#cc9a06',
    },
    info: {
      main: '#17a2b8',
      light: '#46b5c7',
      dark: '#0f7b8a',
    },
    success: {
      main: '#28a745',
      light: '#53b967',
      dark: '#1e7e34',
    },
    // Custom gradient colors
    gradient: {
      primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      accent: 'linear-gradient(45deg, #d2691e, #be5f19)',
      dark: 'linear-gradient(45deg, #24292e, #444d56)',
    },
    // Portfolio-specific colors
    portfolio: {
      rust: '#d2691e',
      rustDark: '#be5f19',
      blue: '#007bff',
      purple: '#667eea',
      purpleDark: '#764ba2',
      cardBg: '#f8f9fa',
      codeBg: '#2d3748',
      codeText: '#e2e8f0',
      outputBg: '#1a202c',
      outputText: '#68d391',
    },
  },
  typography: {
    fontFamily: [
      '"Segoe UI"',
      'Tahoma',
      'Geneva',
      'Verdana',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.1rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 15, // Increased from default 4 to match portfolio
  },
  spacing: 8,
  components: {
    // Override MUI component styles to match portfolio
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 20px',
          fontSize: '0.95rem',
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: 'none',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #d2691e, #be5f19)',
          color: '#ffffff',
          '&:hover': {
            background: 'linear-gradient(45deg, #be5f19, #aa560e)',
          },
        },
        outlined: {
          borderWidth: 2,
          borderColor: '#d2691e',
          color: '#d2691e',
          '&:hover': {
            borderWidth: 2,
            backgroundColor: 'rgba(210, 105, 30, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 15,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: 0,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 15,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        },
        elevation1: {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
        },
        elevation2: {
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
        },
        elevation3: {
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        },
        elevation6: {
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          borderRadius: 15,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          padding: '8px',
        },
        indicator: {
          display: 'none',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
          margin: '0 4px',
          minHeight: 48,
          transition: 'all 0.3s ease',
          color: '#495057',
          '&.Mui-selected': {
            background: 'linear-gradient(45deg, #d2691e, #be5f19)',
            color: '#ffffff',
            boxShadow: '0 4px 12px rgba(210, 105, 30, 0.3)',
          },
          '&:hover': {
            backgroundColor: 'rgba(210, 105, 30, 0.08)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
        colorPrimary: {
          background: 'linear-gradient(45deg, #d2691e, #be5f19)',
          color: '#ffffff',
        },
        colorSecondary: {
          backgroundColor: '#667eea',
          color: '#ffffff',
        },
        outlined: {
          borderColor: '#667eea',
          color: '#667eea',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#d2691e',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#d2691e',
              borderWidth: 2,
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#d2691e',
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          borderLeft: '4px solid',
        },
        standardInfo: {
          borderLeftColor: '#007bff',
          backgroundColor: '#f0f8ff',
        },
        standardSuccess: {
          borderLeftColor: '#28a745',
          backgroundColor: '#f0fff4',
        },
        standardWarning: {
          borderLeftColor: '#ffc107',
          backgroundColor: '#fffbf0',
        },
        standardError: {
          borderLeftColor: '#dc3545',
          backgroundColor: '#fff5f5',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          height: 6,
        },
        colorPrimary: {
          backgroundColor: 'rgba(210, 105, 30, 0.2)',
        },
        barColorPrimary: {
          background: 'linear-gradient(45deg, #d2691e, #be5f19)',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&::before': {
            content: '"▸"',
            color: '#d2691e',
            position: 'absolute',
            left: '8px',
          },
          paddingLeft: '28px',
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(45deg, #d2691e, #be5f19)',
          '&:hover': {
            background: 'linear-gradient(45deg, #be5f19, #aa560e)',
            transform: 'scale(1.1)',
          },
          transition: 'all 0.3s ease',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

// Dark theme variant matching the portfolio's dark code sections
export const darkMuiTheme = createTheme({
  ...muiTheme,
  palette: {
    ...muiTheme.palette,
    mode: 'dark',
    background: {
      default: '#1a202c', // Dark background like code output
      paper: '#2d3748', // Dark paper like code display
    },
    text: {
      primary: '#e2e8f0', // Light text like code display
      secondary: '#68d391', // Success green like output
    },
    primary: {
      main: '#d2691e',
      light: '#e88c4a',
      dark: '#a54a16',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#68d391', // Green accent for dark mode
      light: '#81e6a3',
      dark: '#4a9960',
      contrastText: '#000000',
    },
  },
  components: {
    ...muiTheme.components,
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#2d3748',
          border: '1px solid #4a5568',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#2d3748',
          border: '1px solid #4a5568',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: 0,
        },
      },
    },
  },
});

export default muiTheme;
