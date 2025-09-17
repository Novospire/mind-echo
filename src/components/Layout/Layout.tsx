import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import MedicalDisclaimer from '../Legal/MedicalDisclaimer';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MedicalDisclaimer />
      
      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full">
        <aside className="lg:w-64 lg:flex-shrink-0">
          <Navigation />
        </aside>
        
        <main className="flex-1 p-4 lg:p-8">
          <div className="max-w-4xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Layout;