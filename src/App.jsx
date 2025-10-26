import React from 'react';
import ProfileWidget from './components/ProfileWidget';
import GalleryWidget from './components/GalleryWidget';
import './index.css';

function App() {
  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(180deg, #373E44 -100%, #191B1F 100%)',
        boxShadow: '10px 10px 40px 10px rgba(0, 0, 0, 0.5)'
      }}
    >
      <div className="container mx-auto px-6 py-8">
        <div className="flex">
          <div 
            className="w-1/2 hidden lg:block rounded-xl border-2 border-blue-500"
            style={{
              backgroundColor: 'rgba(97, 97, 97, 0.82)'
            }}
          ></div>
          
          <div className="w-full lg:w-1/2 space-y-8 lg:pl-8">
            <ProfileWidget />
            <GalleryWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;