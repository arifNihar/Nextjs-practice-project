import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'
import React from 'react'

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full min-h-screen ml-60 bg-indigo-50">
        <Header />
        {children}
      </main>
    </div>
  )
};
