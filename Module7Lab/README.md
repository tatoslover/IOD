# Module 7 Lab - Advanced React Patterns

A comprehensive React application demonstrating advanced hooks, context management, routing, and Material-UI integration. This lab showcases professional React development patterns through practical cryptocurrency price tracking and mood management systems.

## 🎯 Overview

This project implements all Module 7 lab exercises in a single, cohesive application featuring real-time Bitcoin price tracking with emoji mood context integration. Built with modern React patterns and Material-UI for professional-grade user experience.

### Key Features

- **Custom Hooks** with `useReducer` for complex state management
- **Context API** for global state sharing across components
- **React Router** for multi-page navigation
- **Material-UI** with comprehensive custom theming
- **API Integration** with caching and rate limiting
- **Real-time Updates** with automatic refresh capabilities
- **Responsive Design** optimized for all screen sizes

## 🛠️ Technologies Used

### Core Technologies
- **React 19.1.0** - Component-based UI framework
- **React Router DOM 7.6.2** - Client-side routing
- **Material-UI 7.1.2** - Professional UI component library
- **Vite 6.3.5** - Fast build tool and development server

### Development Tools
- **ESLint** - Code quality and consistency
- **Emotion** - CSS-in-JS styling
- **AbortController** - Request cancellation and cleanup

### External APIs
- **CoinGecko API** - Real-time cryptocurrency price data

## 📁 Project Structure

```
src/
├── components/
│   ├── Lab1/                    # Exercise 1: Basic useEffect & API calls
│   │   ├── BitcoinRates.jsx     # Basic Bitcoin price fetcher
│   │   ├── BitcoinRatesAdvanced.jsx # Multi-currency management
│   │   └── ApiStatus.jsx        # API health monitoring
│   ├── Lab2/                    # Exercise 2: Custom hooks & useReducer
│   │   ├── BitcoinRatesWithCustomHook.jsx # Custom hook implementation
│   │   └── BitcoinRatesWithCustomHook.css
│   ├── Lab3/                    # Exercise 3: Context API integration
│   │   ├── EmojiDisplay.jsx     # Emoji context consumer
│   │   ├── EmojiMoodSwitcher.jsx # Mood management interface
│   │   └── BitcoinRatesWithEmoji.jsx # Context integration demo
│   ├── Lab4/                    # Exercise 4: React Router navigation
│   │   ├── NavigationDemo.jsx   # Routing demonstration
│   │   └── NavigationDemo.css
│   └── Lab5/                    # Exercise 5: Material-UI integration
│       ├── MUILayout.jsx        # App layout with navigation
│       ├── MUIHomePage.jsx      # Landing page
│       ├── MUILoginForm.jsx     # Form components
│       └── PostList.jsx         # Cards and grids demo
├── contexts/
│   ├── EmojiContext.jsx         # Global mood state management
│   └── emojiContextDefinition.js # Context definition
├── hooks/
│   ├── useBitcoinPrice.js       # Custom hook with useReducer
│   ├── useBitcoinDataManager.js # Advanced state management
│   └── useEmoji.js              # Context consumption hook
├── pages/
│   ├── BitcoinRatesPage.jsx     # Main lab demonstration page
│   └── Lab5/
│       └── MUIHomePage.jsx      # Home page content
├── theme/
│   └── muiTheme.js              # Custom Material-UI theme
├── constants/
│   └── emojiMoods.js            # Mood definitions
├── utils/
│   └── emojiUtils.js            # Helper functions
├── App.jsx                      # Main application component
├── App.css                      # Global styles
└── main.jsx                     # Application entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd IOD/Module7Lab
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📚 Lab Exercises

### Exercise 1: Basic Bitcoin Rates ✅
**Components:** `BitcoinRates.jsx`, `BitcoinRatesAdvanced.jsx`

Implements useEffect hook with cleanup and proper dependencies for fetching Bitcoin prices from CoinGecko API.

**Key Concepts:**
- useEffect lifecycle management
- API integration with error handling
- AbortController for request cleanup
- Dependency array optimization

### Exercise 2: Custom Hook + useReducer ✅
**Components:** `BitcoinRatesWithCustomHook.jsx`
**Custom Hook:** `useBitcoinPrice.js`

Extracts data synchronization into a reusable custom hook with useReducer for complex state management.

**Key Concepts:**
- Custom hook creation and reusability
- useReducer for complex state logic
- Action-based state updates
- API caching and rate limiting

### Exercise 3: Emoji Context Integration ✅
**Components:** `EmojiMoodSwitcher.jsx`, `BitcoinRatesWithEmoji.jsx`
**Context:** `EmojiContext.jsx`

Creates global emoji/mood context that updates across all components demonstrating cross-component state sharing.

**Key Concepts:**
- Context API setup and usage
- Provider pattern implementation
- useContext hook consumption
- Global state management

### Exercise 4: Multi-Page Navigation ✅
**Components:** `NavigationDemo.jsx`, `MUILayout.jsx`

Implements React Router for multi-page application with Home, Login, Bitcoin Rates, and Posts pages.

**Key Concepts:**
- React Router setup and configuration
- useNavigate and useLocation hooks
- Nested routing with Outlet
- Programmatic navigation

### Exercise 5: Material-UI Integration ✅
**Components:** All Lab5 components
**Theme:** `muiTheme.js`

Complete Material-UI implementation with custom theming, AppBar navigation, and responsive design.

**Key Concepts:**
- Material-UI component integration
- Custom theme creation with createTheme
- Component style overrides
- Responsive grid layouts
- Professional UI/UX patterns

## 🎨 Custom Theme Features

The application includes a comprehensive custom Material-UI theme:

- **Custom Color Palette** - Purple gradient brand colors
- **Typography System** - Professional font hierarchy
- **Component Overrides** - Buttons, Cards, Navigation, Forms
- **Gradient Styling** - Modern visual effects
- **Dark Mode Variant** - Complete dark theme implementation
- **Responsive Breakpoints** - Mobile-first design approach

## 🔧 Advanced Features

### API Management
- **Caching System** - 30-second cache to reduce API calls
- **Rate Limiting** - Prevents API quota exhaustion
- **Error Recovery** - Graceful failure handling
- **Request Cancellation** - Proper cleanup with AbortController

### State Management
- **Context Provider Pattern** - Global mood state
- **useReducer Implementation** - Complex state transitions
- **Custom Hook Patterns** - Reusable stateful logic
- **State Persistence** - Mood history tracking

### User Experience
- **Loading States** - Visual feedback during operations
- **Error Boundaries** - Graceful error handling
- **Responsive Design** - Mobile-optimized interface
- **Accessibility** - ARIA labels and keyboard navigation

## 🧪 Demo Features

### Bitcoin Price Tracking
- Real-time cryptocurrency prices
- Multiple currency support (USD, AUD, EUR, GBP, etc.)
- Automatic refresh capabilities
- Price history and favorites system

### Mood Management System
- 8 different emoji moods with colors
- Mood change history and statistics
- Cross-component mood sharing
- Advanced mood selection interface

### Navigation Showcase
- Programmatic routing demonstration
- Route information display
- Navigation state tracking
- Multi-page architecture

## 📖 Learning Outcomes

Upon completion, this lab demonstrates mastery of:

- **Advanced React Patterns** - Hooks, Context, Custom Hooks
- **State Management** - useReducer, Context API, Local State
- **API Integration** - Async operations, caching, error handling
- **Routing** - Multi-page applications, navigation patterns
- **UI Frameworks** - Material-UI, theming, responsive design
- **Performance** - Memoization, cleanup, optimization
- **Professional Development** - Code organization, reusability, maintainability

## 🔗 Resources

- [React Documentation](https://react.dev/)
- [Material-UI Documentation](https://mui.com/)
- [React Router Documentation](https://reactrouter.com/)
- [CoinGecko API](https://coingecko.com/api)
- [Vite Documentation](https://vitejs.dev/)

## 📄 License

This project is part of the Institute of Data curriculum and is intended for educational purposes.