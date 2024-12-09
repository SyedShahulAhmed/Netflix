import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase'; 
import Home from './pages/Home'; 
import Login from './pages/Login';
import HomePage from './pages/HomePage'; 
import './index.css'; 
import Player from './pages/Player';

const AuthHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isNavigating, setIsNavigating] = React.useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!isNavigating) { 
        if (user) {
          if (location.pathname === '/login') {
            navigate('/homepage', { replace: true }); 
          }
        } else {
          if (location.pathname !== '/login') {
            navigate('/', { replace: true });
          }
        }
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    setIsNavigating(false);
  }, [location]);

  return null;
};

const Main = () => (
  <BrowserRouter>
    <AuthHandler /> 
    <Routes>
      <Route path="/" element={<Home />} /> {/* Default home page */}
      <Route path="/login" element={<Login />} /> {/* Login page */}
      <Route path="/homepage" element={<HomePage />} /> {/* Authenticated page */}
      <Route path='/player/:id' element={<Player/>}/>
      <Route path="*" element={<div>404 - Page Not Found</div>} /> {/* Fallback */}
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
