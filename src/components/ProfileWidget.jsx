import React, { useState } from 'react';

const ProfileWidget = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabContent = {
    about: (
      <div className="space-y-4 text-gray-300">
        <p className="leading-relaxed text-[15px]">
          Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
        </p>
        <p className="leading-relaxed text-[15px]">
          I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a...
        </p>
      </div>
    ),
    experiences: (
      <div className="space-y-4 text-gray-300">
        <p className="leading-relaxed text-[15px]">
          Experiences content will appear here...
        </p>
      </div>
    ),
    recommended: (
      <div className="space-y-4 text-gray-300">
        <p className="leading-relaxed text-[15px]">
          Recommended content will appear here...
        </p>
      </div>
    )
  };

  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'recommended', label: 'Recommended' }
  ];

  return (
    <div 
      className="rounded-lg p-6 text-white"
      style={{
        boxShadow: '5.67px 5.67px 3.78px 0px rgba(0, 0, 0, 0.4)'
      }}
    >
      <div className="flex justify-center space-x-8 border-b border-gray-600 pb-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-[15px] font-medium transition-all duration-200 pb-2 px-4 rounded-lg ${
              activeTab === tab.id 
                ? 'text-white border-b-2 border-white' 
                : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="min-h-[160px]">
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default ProfileWidget;