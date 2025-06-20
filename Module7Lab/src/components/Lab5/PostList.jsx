import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
  Alert,
  Paper,
  Skeleton,
  IconButton,
  Tooltip,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Article,
  Person,
  Refresh
} from '@mui/icons-material';
import EmojiDisplay from '../Lab3/EmojiDisplay';

const PostList = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(6);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [limit]);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handleRefresh = () => {
    fetchPosts();
  };



  const PostSkeleton = () => (
    <Card elevation={2}>
      <CardContent>
        <Skeleton variant="text" width="60%" height={32} />
        <Skeleton variant="text" width="30%" height={24} sx={{ mb: 2 }} />
        <Skeleton variant="rectangular" height={80} sx={{ mb: 2 }} />
        <Skeleton variant="text" width="40%" />
      </CardContent>
    </Card>
  );

  const PostCard = ({ post }) => (
    <Card
      elevation={3}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        background: 'linear-gradient(135deg, #667eea15, #764ba208)',
        border: '2px solid #667eea40',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 15px 40px #667eea30',
          border: '2px solid #667eea',
        },
        borderTop: '4px solid #667eea'
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Article sx={{ mr: 1, color: '#667eea' }} />
          <Typography variant="h6" component="h2" sx={{
            fontWeight: 600,
            color: '#667eea',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
            lineHeight: 1.3
          }}>
            {post.title}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
          <Person sx={{ fontSize: 16, color: '#667eea' }} />
          <Chip
            label={`User ${post.userId}`}
            size="small"
            sx={{
              backgroundColor: '#667eea',
              color: 'white',
              fontWeight: 500
            }}
          />
          <Chip
            label={`Post #${post.id}`}
            size="small"
            sx={{
              backgroundColor: '#764ba2',
              color: 'white',
              fontWeight: 500
            }}
          />
        </Box>

        <Typography
          variant="body1"
          sx={{
            color: '#1a1a1a',
            lineHeight: 1.7,
            fontSize: '1rem',
            fontWeight: 500
          }}
        >
          {post.body}
        </Typography>
      </CardContent>
    </Card>
  );

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
          Posts Collection
        </Typography>
        <Typography variant="h5" sx={{
          opacity: 0.95,
          mb: 4,
          maxWidth: 600,
          mx: 'auto'
        }}>
          Demonstrating Material-UI cards with API integration and responsive design
        </Typography>
      </Paper>

      {/* Controls */}
      <Paper
        elevation={2}
        sx={{
          p: 4,
          mb: 6,
          borderRadius: 2,
          background: 'linear-gradient(135deg, #667eea08, #764ba205)',
          border: '2px solid #667eea40'
        }}
      >
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 2
        }}>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Posts Limit</InputLabel>
            <Select
              value={limit}
              label="Posts Limit"
              onChange={handleLimitChange}
            >
              <MenuItem value={3}>3 posts</MenuItem>
              <MenuItem value={6}>6 posts</MenuItem>
              <MenuItem value={9}>9 posts</MenuItem>
              <MenuItem value={12}>12 posts</MenuItem>
              <MenuItem value={20}>20 posts</MenuItem>
            </Select>
          </FormControl>

          <Tooltip title="Refresh Posts">
            <IconButton
              onClick={handleRefresh}
              disabled={loading}
              color="primary"
              sx={{
                '&:hover': {
                  transform: 'rotate(180deg)',
                },
                transition: 'transform 0.3s ease',
              }}
            >
              <Refresh />
            </IconButton>
          </Tooltip>
        </Box>

        {loading && (
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <CircularProgress size={20} sx={{ mr: 1 }} />
            <Typography variant="body2" color="text.secondary">
              Loading posts...
            </Typography>
          </Box>
        )}
      </Paper>

      {/* Error State */}
      {error && (
        <Alert
          severity="error"
          sx={{ mb: 4 }}
          action={
            <Button color="inherit" size="small" onClick={handleRefresh}>
              Retry
            </Button>
          }
        >
          Error loading posts: {error}
        </Alert>
      )}

      {/* Posts Grid/List */}
      <Grid
        container
        spacing={3}
        sx={{
          '& .MuiGrid-item': {
            display: 'flex'
          }
        }}
      >
        {loading ? (
          // Loading Skeletons
          Array.from({ length: limit }).map((_, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
            >
              <PostSkeleton />
            </Grid>
          ))
        ) : (
          // Actual Posts
          posts.map((post) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={post.id}
            >
              <PostCard post={post} />
            </Grid>
          ))
        )}
      </Grid>


    </Container>
  );
};

export default PostList;
