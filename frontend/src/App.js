import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import SignInPage from './SignInPage';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Apply theme to document element (kept for template consistency, but non-intrusive)
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Simple path check without adding react-router dependency
  const currentPath = useMemo(() => window.location.pathname, []);
  const isSignIn = currentPath === '/sign-in' || currentPath === '/' || currentPath === '/index.html';

  if (isSignIn) {
    return (
      <div className="App">
        <header className="App-header" style={{ background: 'transparent', minHeight: 'auto' }}>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            style={{ position: 'fixed', top: 16, right: 16, zIndex: 10 }}
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </header>
        <SignInPage />
      </div>
    );
  }

  // Fallback content (not used since default is sign-in)
  return (
    <div className="App">
      <header className="App-header">
        <p>Recipe Explorer</p>
        <h1 style={{ position: 'absolute', left: -9999, top: 'auto', width: 1, height: 1, overflow: 'hidden' }}>
          Recipe Explorer
        </h1>
      </header>
    </div>
  );
}

export default App;
