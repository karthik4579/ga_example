// src/App.jsx
import React from 'react';
import ga4react from './analytics';

function App() {
  const handleClick = () => {
    ga4react.gtag('event', 'button_click', {
      event_category: 'engagement',
      event_label: 'Click Me Button',
    });
    alert('Button clicked!');
    console.log('Button click event sent to GA4');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to My Simple React App</h1>
      <p>This is a one-page app with Google Analytics 4 tracking.</p>
      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Click Me
      </button>
    </div>
  );
}

export default App;