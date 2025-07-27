# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# AuthApp - Secure Authentication System

A modern, responsive authentication system built with React, TypeScript, and Tailwind CSS. Features role-based access control, form validation, and secure session management using Local Storage and Session Storage.

## 🚀 Features

### Authentication
- **Sign Up & Login** functionality with comprehensive form validation
- **Role-based access control** (Admin and Regular User)
- **Secure session management** using Local Storage and Session Storage
- **Protected routes** with automatic redirects
- **Password validation** with strength requirements

### User Management
- **Admin Dashboard** with user management capabilities
- **User profiles** with editable information
- **Settings page** with preferences and security options
- **Analytics dashboard** (Admin only)

### UI/UX
- **Mobile responsive design** with Tailwind CSS
- **Modern, clean interface** with smooth animations
- **Loading states** and error handling
- **Lazy loading** for optimal performance
- **Toast notifications** and feedback

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0 + TypeScript
- **Styling**: Tailwind CSS 4.1.11
- **Routing**: React Router DOM
- **Build Tool**: Vite 7.0.4
- **State Management**: React Context API
- **Storage**: Local Storage & Session Storage

## 📦 Installation & Setup

1. **Clone or navigate to the project directory**
   ```bash
   cd "f:\Programming\SEM 5 all sub\Full Stack web\CIE_2"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5174/`

## 🎯 Demo Accounts

The application comes with pre-configured demo accounts for testing:

### Administrator Account
- **Email**: `admin@example.com`
- **Password**: `Admin123!`
- **Access**: Full admin privileges including user management and analytics

### Regular User Account
- **Email**: `user@example.com`
- **Password**: `User123!`
- **Access**: Standard user features and dashboard

## 📱 Pages & Routes

### Public Routes
- **/** - Landing page with feature showcase
- **/login** - User authentication
- **/signup** - New user registration

### Protected Routes (Authenticated Users)
- **/dashboard** - Main dashboard with stats and quick actions
- **/dashboard/profile** - User profile management
- **/dashboard/settings** - User preferences and security settings

### Admin-Only Routes
- **/dashboard/users** - User management interface
- **/dashboard/analytics** - System analytics and performance metrics

## 🔐 Security Features

### Password Requirements
- Minimum 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number

### Session Management
- **Local Storage**: Persists user data across browser sessions
- **Session Storage**: Manages authentication tokens for current session
- **Automatic cleanup**: Clears all data on logout
- **Session validation**: Checks authentication state on app load

### Form Validation
- **Real-time validation** with immediate feedback
- **Email format validation** using regex patterns
- **Password strength checking**
- **Confirm password matching**
- **Required field validation**

## 🎨 UI Components

### Authentication Components
- **Login Form**: Responsive login with show/hide password
- **SignUp Form**: Comprehensive registration with user type selection
- **Protected Route**: Route guard component for access control

### Dashboard Components
- **Dashboard Layout**: Responsive sidebar navigation
- **Stats Cards**: Interactive metric displays
- **User Management Table**: Sortable, filterable user list
- **Analytics Charts**: Visual data representation
- **Settings Panels**: Organized preference sections

## 📊 Data Storage Structure

### Local Storage
```javascript
// User data persistence
auth_user: {
  id: string,
  email: string,
  name: string,
  userType: 'admin' | 'user',
  createdAt: string
}

// Registered users database (mock)
registered_users: User[]

// User passwords (mock - in production, use secure backend)
password_[email]: string
```

### Session Storage
```javascript
// Authentication session token
auth_session: string
```

## 🔄 State Management

The application uses React Context API for global state management:

```typescript
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
```

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Performance Optimizations

- **Lazy Loading**: Route-based code splitting
- **Memoization**: Optimized re-renders with React.memo
- **Bundle Splitting**: Automatic vendor chunk separation
- **Image Optimization**: Optimized asset loading
- **CSS Purging**: Unused Tailwind classes removed in production

## 🎯 Future Enhancements

- [ ] Two-factor authentication (2FA)
- [ ] OAuth integration (Google, GitHub)
- [ ] Real-time notifications
- [ ] Advanced user permissions
- [ ] Data export functionality
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Progressive Web App (PWA) features

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   - The dev server will automatically find an available port
   - Current server: `http://localhost:5174/`

2. **Authentication not persisting**
   - Check browser's Local Storage settings
   - Ensure cookies/storage are enabled

3. **Build errors**
   - Run `npm install` to ensure all dependencies are installed
   - Check TypeScript errors with `npm run lint`

## 📝 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Login.tsx       # Login form component
│   ├── SignUp.tsx      # Registration form component
│   ├── ProtectedRoute.tsx  # Route protection
│   └── DashboardLayout.tsx # Dashboard layout
├── contexts/           # React Context providers
│   └── AuthContext.tsx # Authentication state management
├── pages/              # Page components (lazy loaded)
│   ├── Home.tsx        # Landing page
│   ├── Dashboard.tsx   # Main dashboard
│   ├── Profile.tsx     # User profile
│   ├── Settings.tsx    # User settings
│   ├── Users.tsx       # User management (admin)
│   └── Analytics.tsx   # Analytics dashboard (admin)
├── types/              # TypeScript type definitions
│   └── auth.ts         # Authentication types
├── utils/              # Utility functions
│   ├── authStorage.ts  # Storage management
│   └── validation.ts   # Form validation
└── App.tsx             # Main application component
```

## 👨‍💻 Development

This project was built following modern React best practices:

- **TypeScript** for type safety
- **Context API** for state management
- **Custom hooks** for reusable logic
- **Component composition** for flexibility
- **Responsive design** principles
- **Accessibility** considerations

---

**Built with ❤️ using React + TypeScript + Tailwind CSS**

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
