import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root'; // Import Root instead of App
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root /> {/* Use Root component here */}
  </React.StrictMode>
);
