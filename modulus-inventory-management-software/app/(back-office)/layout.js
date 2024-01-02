"use client";

import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'
import React, { useState } from 'react';

export default function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="flex">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <main className="w-full min-h-screen ml-0 lg:ml-60 bg-indigo-50">
        <Header setShowSidebar={setShowSidebar} />
        {children}
      </main>
    </div>
  )
};
