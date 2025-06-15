# Next.js Portfolio Project

A modern Next.js application demonstrating key features of the App Router architecture.

## Features Demonstrated

- **File-based Routing**: Automatic route generation based on folder structure
- **Nested Layouts**: Shared UI components across multiple pages
- **Server Components**: Default server-side rendering for optimal performance
- **Client Components**: Interactive components using React hooks
- **Data Fetching**: Async server components with API integration
- **Dynamic Routes**: URL parameters with `[id]` syntax
- **Error Boundaries**: Graceful error handling with error.jsx
- **Search Parameters**: URL query string integration

## Project Structure

```
src/
├── app/
│   ├── about/          # About page with nested layout
│   ├── dash/           # Dashboard with feature examples
│   ├── posts/          # Posts list with data fetching
│   │   ├── [id]/       # Dynamic route for individual posts
│   │   └── error.jsx   # Error boundary
│   ├── layout.js       # Root layout with NavBar
│   └── page.js         # Home page
└── components/
    ├── NavBar.jsx      # Navigation with active states
    └── PostsLimit.jsx  # Client component for post limits
```

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to explore:

- **Home**: Overview of Next.js features
- **Posts**: Data fetching with JSONPlaceholder API
- **Dashboard**: Feature demonstrations
- **About**: Page structure explanation

## API Integration

The Posts section demonstrates:
- Server-side data fetching from JSONPlaceholder
- Dynamic routing for individual posts
- Client-server component interaction
- Error handling for failed requests
