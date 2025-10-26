import React, { useState } from 'react';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryWidget = () => {
  const [images, setImages] = useState([
    { 
      id: 1, 
      url: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300&h=200&fit=crop&auto=format',
      placeholder: 'Image 1'
    },
    { 
      id: 2, 
      url: 'https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=300&h=200&fit=crop&auto=format',
      placeholder: 'Image 2'
    },
    { 
      id: 3, 
      url: 'https://images.unsplash.com/photo-1606788075762-3b1d80d78e21?w=300&h=200&fit=crop&auto=format',
      placeholder: 'Image 3'
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const addImage = () => {
    const newImage = {
      id: images.length + 1,
      url: `https://images.unsplash.com/photo-${Date.now()}?w=300&h=200&fit=crop&auto=format`,
      placeholder: `Image ${images.length + 1}`
    };
    setImages([...images, newImage]);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {/* Header with Add Image Button */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Gallery</h3>
        <button
          onClick={addImage}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
        >
          <Plus size={18} />
          <span className="text-sm font-medium">ADD IMAGE</span>
        </button>
      </div>

      {/* Main Image Display with Arrows */}
      <div className="relative mb-6">
        <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
          <img
            src={images[currentIndex]?.url}
            alt={images[currentIndex]?.placeholder}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border border-gray-300 rounded-lg p-2 shadow-md transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft size={20} className="text-gray-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border border-gray-300 rounded-lg p-2 shadow-md transition-all duration-200 hover:scale-110"
            >
              <ChevronRight size={20} className="text-gray-700" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Grid with Hover Effects */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 border border-gray-200 group cursor-pointer"
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={image.url}
              alt={image.placeholder}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className={`absolute inset-0 border-2 transition-all duration-200 ${
              index === currentIndex ? 'border-blue-500' : 'border-transparent'
            }`}></div>
          </div>
        ))}
        
        {/* Add Image Button in Grid */}
        <button
          onClick={addImage}
          className="aspect-square rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-400 transition-all duration-200 hover:bg-gray-50"
        >
          <Plus size={20} className="mb-1" />
          <span className="text-xs font-medium">ADD IMAGE</span>
        </button>
      </div>
    </div>
  );
};

export default GalleryWidget;