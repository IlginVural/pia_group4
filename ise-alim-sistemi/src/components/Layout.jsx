import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 64 }}> {/* Navbar sabit olduğu için içerik altına boşluk */}
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
