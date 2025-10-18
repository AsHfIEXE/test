import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { Events } from './pages/Events';
import { Alerts } from './pages/Alerts';
import { Decoys } from './pages/Decoys';
import { Analytics } from './pages/Analytics';
import { Labels } from './pages/Labels';
import { Settings } from './pages/Settings';
import { ToastContainer } from './components/common/Toast';
import { useToast } from './hooks/useToast';
import { systemApi } from './services/api';
import { useStore } from './store/useStore';
import { seedDatabase } from './utils/seedData';

function App() {
  const { toasts, removeToast } = useToast();
  const { setSystemStatus } = useStore();

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        await seedDatabase();

        const status = await systemApi.getStatus();
        if (status) {
          setSystemStatus(status);
        }
      } catch (error) {
        console.error('Failed to load initial data:', error);
      }
    };

    loadInitialData();
  }, [setSystemStatus]);

  return (
    <Router>
      <ToastContainer toasts={toasts} onRemove={removeToast} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="events" element={<Events />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="decoys" element={<Decoys />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="labels" element={<Labels />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
