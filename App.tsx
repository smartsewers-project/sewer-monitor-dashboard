import { useEffect } from 'react';

// The SewerWatch dashboard is a self-contained HTML page loaded via an iframe
// pointing to /index.html (in /public). For the Vite build we redirect the
// root to load the standalone dashboard HTML directly.
export default function App() {
  useEffect(() => {
    // Redirect to the standalone dashboard HTML
    window.location.replace('/index.html');
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'sans-serif', color: '#0d3d38', background: '#f0fdfa' }}>
      <p>Loading SewerWatch...</p>
    </div>
  );
}