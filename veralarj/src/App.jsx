import { useState } from 'react';
import './App.css';
import Layout from './layout/Layout';
import Home from './features/Home/Home';

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
