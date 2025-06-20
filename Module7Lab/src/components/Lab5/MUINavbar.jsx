import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Chip,
  Container,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import {
  Home,
  CurrencyBitcoin,
  Login,
  Menu as MenuIcon,
  Mood,
  Close
} from '@mui/icons-material';
import EmojiDisplay from '../Lab3/EmojiDisplay';

const MUINavbar = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: <Home /> },
    { path: '/bitcoin-rates', label: 'Bitcoin Rates', icon: <CurrencyBitcoin /> },
    { path: '/login', label: 'Login', icon: <Login /> },
    { path: '/posts', label: 'Posts', icon: <Mood /> }
  ];

  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const NavigationButtons = () => (
    <>
      {navItems.map((item) => (
        <Button
          key={item.path}
          component={Link}
          to={item.path}
          color="inherit"
          startIcon={item.icon}
          variant={isActivePath(item.path) ? 'outlined' : 'text'}
          sx={{
            mx: 1,
            borderColor: isActivePath(item.path) ? 'rgba(255, 255, 255, 0.5)' : 'transparent',
            backgroundColor: isActivePath(item.path) ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          {item.label}
        </Button>
      ))}
    </>
  );

  return (
    <>
      <AppBar position="sticky" elevation={2}>
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* Brand */}
            <Box component={Link} to="/" sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              textDecoration: 'none',
              color: 'inherit',
              '&:hover': {
                transform: 'scale(1.05)',
              },
              transition: 'transform 0.3s ease',
            }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG3HuBlAUw3Wu-46hoogyANMHo1VC-tKnE1Q&s"
                alt="IOD Logo"
                style={{ width: '32px', height: '32px', borderRadius: '50%' }}
              />
              <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
                Module 7 Lab
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <NavigationButtons />

                {/* Mood Indicator */}
                <Chip
                  icon={<Mood />}
                  label={<EmojiDisplay size="small" showName={true} inline={true} />}
                  variant="outlined"
                  sx={{
                    color: 'white',
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '& .MuiChip-icon': {
                      color: 'white',
                    },
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    },
                  }}
                />
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmojiDisplay size="small" inline={true} />
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleMobileMenuToggle}
                  sx={{
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>


      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleMobileMenuToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" component="div">
            Menu
          </Typography>
          <IconButton onClick={handleMobileMenuToggle} sx={{ color: 'white' }}>
            <Close />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />
        <List>
          {navItems.map((item) => (
            <ListItem
              key={item.path}
              component={Link}
              to={item.path}
              onClick={handleMobileMenuToggle}
              sx={{
                backgroundColor: isActivePath(item.path) ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                borderLeft: isActivePath(item.path) ? '4px solid white' : '4px solid transparent',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{ color: 'white' }}
              />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', mt: 2 }} />
        <Box sx={{ p: 2 }}>
          <Typography variant="subtitle2" gutterBottom>
            Current Mood:
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmojiDisplay size="small" showName={true} inline={true} />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default MUINavbar;
