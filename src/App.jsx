import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import Posts from './pages/Posts';

const App = () => (
  <ThemeProvider>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Layout>
    </Router>
  </ThemeProvider>
);

export default App;