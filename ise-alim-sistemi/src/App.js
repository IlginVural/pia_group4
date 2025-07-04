import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import Jobs from './pages/admin/Jobs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path ="/AdminDashboard" element={<AdminDashboard />} />
        <Route path ="/Jobs" element={<Jobs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;