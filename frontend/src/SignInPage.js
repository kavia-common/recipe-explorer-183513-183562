import React from 'react';

/**
 * PUBLIC_INTERFACE
 * SignInPage renders the pixel-perfect Sign In screen produced from Figma.
 * We use an iframe to load the static HTML from public/assets to ensure no React/CSS resets
 * interfere with absolute positioning or global styles.
 */
function SignInPage() {
  // Inline styles ensure the iframe centers the 375x812 design on any viewport.
  const containerStyle = {
    width: '100%',
    minHeight: '100vh',
    background: '#f9fafb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
  };

  const frameStyle = {
    width: 375,
    height: 812,
    border: '0',
    borderRadius: 30,
    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
    background: '#ffffff',
  };

  return (
    <div style={containerStyle}>
      <iframe
        title="Sign In"
        src="/assets/sign-in-11-235.html"
        style={frameStyle}
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
}

export default SignInPage;
