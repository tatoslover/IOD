import React, { useState } from 'react';
import {
  Container,
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Alert,
  CircularProgress,
  Card,
  CardContent,
  Chip,
  useTheme,
  useMediaQuery,
  InputAdornment,
  IconButton
} from '@mui/material';
import {
  Login as LoginIcon,
  Email,
  Lock,
  Visibility,
  VisibilityOff
} from '@mui/icons-material';
import EmojiDisplay from '../Lab3/EmojiDisplay';

const MUILoginForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setLoginSuccess(true);
    }, 2000);
  };

  const resetForm = () => {
    setFormData({
      email: '',
      password: '',
      rememberMe: false
    });
    setErrors({});
    setLoginSuccess(false);
    setShowPassword(false);
  };



  if (loginSuccess) {
    return (
      <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ overflow: 'hidden' }}>
          <Box
            sx={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              p: 3,
              textAlign: 'center'
            }}
          >
            <EmojiDisplay size="xlarge" />
            <Typography variant="h4" sx={{ mt: 2, fontWeight: 600 }}>
              Login Successful!
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, opacity: 0.9 }}>
              Welcome back! You have successfully logged in.
            </Typography>
          </Box>

          <CardContent sx={{ p: 4 }}>
            <Alert severity="success" sx={{ mb: 3 }}>
              <Typography variant="body2">
                Authentication completed successfully
              </Typography>
            </Alert>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Login Details:
              </Typography>
              <Chip
                label={`Email: ${formData.email}`}
                color="primary"
                sx={{ mb: 1, mr: 1 }}
              />
              <Chip
                label={`Remember Me: ${formData.rememberMe ? 'Yes' : 'No'}`}
                color="secondary"
              />
            </Box>

            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={resetForm}
              sx={{ mt: 2 }}
            >
              Login Again
            </Button>
          </CardContent>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header Section */}
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
          Lab 5: MUI Login
        </Typography>
        <Typography variant="h5" sx={{
          opacity: 0.95,
          mb: 4,
          maxWidth: 600,
          mx: 'auto'
        }}>
          Enhanced form with Material-UI components
        </Typography>
      </Paper>

      {/* Login Form Section */}
      <Paper elevation={3} sx={{ overflow: 'hidden' }}>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr',
          gap: 0
        }}>
          {/* Login Form */}
          <Box sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 600, color: '#2c3e50' }}>
              Sign In
            </Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                fullWidth
                margin="normal"
                id="email"
                name="email"
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                error={!!errors.email}
                helperText={errors.email}
                disabled={isSubmitting}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email color="action" />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                margin="normal"
                id="password"
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleInputChange}
                error={!!errors.password}
                helperText={errors.password}
                disabled={isSubmitting}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock color="action" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 2 }}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    name="rememberMe"
                    color="primary"
                    disabled={isSubmitting}
                  />
                }
                label="Remember me"
                sx={{ mb: 3 }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={isSubmitting}
                startIcon={isSubmitting ? <CircularProgress size={20} /> : <LoginIcon />}
                sx={{ mb: 2, py: 1.5 }}
              >
                {isSubmitting ? 'Signing In...' : 'Sign In'}
              </Button>
            </Box>
          </Box>

          {/* Demo Credentials */}
          <Box sx={{
            p: 4,
            backgroundColor: '#f5f5f5',
            borderLeft: isMobile ? 'none' : `1px solid #e0e0e0`,
            borderTop: isMobile ? `1px solid #e0e0e0` : 'none'
          }}>
            <Typography variant="h6" gutterBottom sx={{ mb: 3, fontWeight: 600, color: '#2c3e50' }}>
              Demo Credentials
            </Typography>

            <Alert severity="info" sx={{ mb: 3 }}>
              <Typography variant="body2" gutterBottom>
                <strong>Use these credentials to test the login:</strong>
              </Typography>
              <Typography variant="body2">
                Email: demo@example.com<br />
                Password: password123
              </Typography>
            </Alert>

            <Typography variant="body2" color="text.primary" sx={{ mt: 2, opacity: 0.8 }}>
              Any valid email format and password (6+ characters) will work for this demo.
            </Typography>

            <Box sx={{
              mt: 3,
              p: 2,
              backgroundColor: 'white',
              borderRadius: 1,
              border: '1px solid #e0e0e0'
            }}>
              <Typography variant="subtitle2" gutterBottom sx={{ color: '#2c3e50' }}>
                Current Application Mood:
              </Typography>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                justifyContent: 'center',
                py: 1
              }}>
                <EmojiDisplay size="medium" showName={true} />
              </Box>
              <Typography variant="caption" color="text.primary" sx={{ display: 'block', textAlign: 'center', mt: 1, opacity: 0.8 }}>
                Powered by React Context API
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default MUILoginForm;
