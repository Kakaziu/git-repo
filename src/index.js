import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import GlobalStyles from './globalStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IssuesPage from './pages/IssuesPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <ToastContainer autoClose={3000}/>
      <GlobalStyles/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/repos/:repo' element={<IssuesPage/>}/>
      </Routes>
    </BrowserRouter>
);
