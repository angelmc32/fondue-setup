import React from 'react';
import AppRouter from './routes/AppRouter';
import Layout from './components/layout/Layout';
import './styles/styles.css';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <AppRouter />
      </Layout>
    </div>
  );
};

export default App;
