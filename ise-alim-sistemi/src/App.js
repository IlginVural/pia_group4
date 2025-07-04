import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import Jobs from './pages/admin/Jobs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path ="/AdminDashboard" element={<AdminDashboard />} />
        <Route path ="/Jobs" element={<Jobs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;