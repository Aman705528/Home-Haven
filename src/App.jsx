import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { AuthProvider } from './context/AuthContext.jsx';
import Login from './components/Login.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import MainLayout from './components/MainLayout.jsx'; // 1. Import the layout
import HomePage from './components/HomePage.jsx';
import Dashboard from './components/Dashboard.jsx';
import ListingsPage from './components/ListingsPage.jsx';
import SearchPropertiesPage from './components/SearchPropertiesPage.jsx';
import NeighborhoodsPage from './components/NeighborhoodsPage.jsx';
import ContactUs from './components/ContactUs.jsx';
import AboutUs from './components/AboutUs.jsx';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />
          
          {/* 2. Use MainLayout to wrap all protected routes */}
          <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
            {/* 3. These child routes will render inside MainLayout's <Outlet> */}
            <Route index element={<HomePage />} /> {/* 'index' makes this the default for "/" */}
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="listings" element={<ListingsPage />} />
            <Route path="search" element={<SearchPropertiesPage />} />
            <Route path="neighborhoods" element={<NeighborhoodsPage />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="AboutUs" element={<AboutUs />} />
          </Route>
          
          {/* Redirect any unknown path to the main page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
