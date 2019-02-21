import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from '../components/App';

// let Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;
let Router = BrowserRouter;
let rootRoute = () => {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default rootRoute();
