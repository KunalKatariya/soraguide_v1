import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Personalize from './pages/Personalize';
import PlanningInfo from './pages/PlanningInfo';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import AddressRegistration from './pages/guides/AddressRegistration';
import SuicaGuide from './pages/guides/SuicaGuide';
import TrashGuide from './pages/guides/TrashGuide';
import MovingGuide from './pages/guides/MovingGuide';
import { AuthProvider } from './context/AuthContext';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personalize" element={<Personalize />} />
            <Route path="/planning-info" element={<PlanningInfo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/guide/address" element={<AddressRegistration />} />
            <Route path="/guide/suica" element={<SuicaGuide />} />
            <Route path="/guide/trash" element={<TrashGuide />} />
            <Route path="/guide/moving/:type" element={<MovingGuide />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
