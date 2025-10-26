import React from 'react';
import ProfileWidget from './components/ProfileWidget';
import GalleryWidget from './components/GalleryWidget';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-poppins">
      <div className="container mx-auto px-6 py-8">
        <div className="flex">
          {/* Left half - empty but responsive */}
          <div className="w-1/2 hidden lg:block"></div>
          
          {/* Right half - widgets with exact alignment */}
          <div className="w-full lg:w-1/2 space-y-8">
            <ProfileWidget />
            <GalleryWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;