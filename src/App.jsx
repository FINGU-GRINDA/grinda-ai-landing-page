import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Company from './pages/Company';
import Contact from './pages/Contact';
import AIStore from './pages/AIStore';
import RindaTech from './pages/RindaTech';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';
import AdminDashboard from './pages/admin/AdminDashboard';
import { YouTube, Rinda, Finance } from './pages/Solutions';
import './App.css';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="company" element={<Company />} />
          <Route path="contact" element={<Contact />} />
          <Route path="ai-store" element={<AIStore />} />
          <Route path="rinda-tech" element={<RindaTech />} />
          <Route path="insights" element={<Insights />} />
          <Route path="insights/:id" element={<InsightDetail />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="solutions">
            <Route path="youtube" element={<YouTube />} />
            <Route path="rinda" element={<Rinda />} />
            <Route path="finance" element={<Finance />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
