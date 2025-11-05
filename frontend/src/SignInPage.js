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
    width: '375px',
    height: '812px',
    minWidth: '375px',
    minHeight: '812px',
    maxWidth: '375px',
    maxHeight: '812px',
    border: '0',
    borderRadius: 30,
    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
    background: '#ffffff',
    overflow: 'hidden',
  };

  return (
    <div style={containerStyle}>
      <iframe
        title="Sign In"
        src="/assets/sign-in-11-235.html"
        style={frameStyle}
        sandbox="allow-scripts allow-same-origin"
        loading="eager"
        ref={(el) => {
          if (!el) return;
          // Ensure no scaling: set exact pixel ratio and disable zoom within frame
          el.addEventListener('load', () => {
            try {
              const doc = el.contentDocument;
              if (!doc) return;
              // Force 1:1 CSS pixel scale inside iframe
              const meta = doc.querySelector('meta[name="viewport"]');
              if (meta) {
                meta.setAttribute('content', 'width=375, height=812, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover');
              } else {
                const m = doc.createElement('meta');
                m.name = 'viewport';
                m.content = 'width=375, height=812, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover';
                doc.head.appendChild(m);
              }
              // Prevent external CSS interference by ensuring isolated document base styles
              const style = doc.createElement('style');
              style.textContent = `
                html, body { margin:0; padding:0; background:#ffffff; }
                *, *::before, *::after { box-sizing: border-box; }
              `;
              doc.head.appendChild(style);
            } catch (e) {
              // No-op if cross-origin or blocked
            }
          });
        }}
      />
    </div>
  );
}

export default SignInPage;
