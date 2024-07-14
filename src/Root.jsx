// src/Root.jsx
import { BrowserRouter } from 'react-router-dom';
import App from './App';

function Root() {
  return (
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/<repository-name>' : '/'}>
      <App />
    </BrowserRouter>
  );
}

export default Root;
