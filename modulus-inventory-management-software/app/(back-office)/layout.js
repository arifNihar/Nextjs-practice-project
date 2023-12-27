import Header from '@/components/dashboard/Header'
import React from 'react'

export default function Layout({children}) {
  return (
    <div className="flex">
      <div className="w-56 min-h-screen text-indigo-100 bg-indigo-950">Sidebar</div>
      <main className="w-full min-h-screen bg-indigo-50">
        <Header />
        {children}
      </main>
    </div>
  )
};
