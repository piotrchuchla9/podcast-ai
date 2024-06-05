
import Layout from './components/layout';
import Welcome from './pages/welcome';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
};

export default App;