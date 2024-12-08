import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex overflow-x-hidden h-screen w-full">
      <div className="w-[20%] ">
        <Navbar />
      </div>
      <div className="w-[80%] overflow-x-hidden overflow-y-scroll flex">
        <Outlet />
      </div>
    </div>
  );
}
