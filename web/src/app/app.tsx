import Layout from '@web/app/components/layout';
import Login from '@web/app/pages/login';
import Register from '@web/app/pages/register';
import Welcome from '@web/app/pages/welcome';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
};

export default App;