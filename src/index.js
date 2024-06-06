import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import GlobalStyles from './globalStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer autoClose={3000}/>
    <GlobalStyles/>
    <Home />
  </React.StrictMode>
);
