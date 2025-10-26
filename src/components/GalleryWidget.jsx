import React, { useState } from 'react';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryWidget = () => {
  const [images, setImages] = useState([
    { 
      id: 1, 
      url: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=150&h=150&fit=crop&auto=format',
      placeholder: 'Image 1'
    },
    { 
      id: 2, 
      url: 'https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=150&h=150&fit=crop&auto=format',
      placeholder: 'Image 2'
    },
    { 
      id: 3, 
      url: 'https://images.unsplash.com/photo-1606788075762-3b1d80d78e21?w=150&h=150&fit=crop&auto=format',
      placeholder: 'Image 3'
    },
    { 
      id: 4, 
      url: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=150&h=150&fit=crop&auto=format',
      placeholder: 'Image 4'
    },
    { 
      id: 5, 
      url: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=150&h=150&fit=crop&auto=format',
      placeholder: 'Image 5'
    },
    { 
      id: 6, 
      url: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=150&h=150&fit=crop&auto=format',
      placeholder: 'Image 6'
    },
  ]);

  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 3;

  const addImage = () => {
    const newImage = {
      id: images.length + 1,
      url: `https://images.unsplash.com/photo-${Date.now()}?w=150&h=150&fit=crop&auto=format`,
      placeholder: `Image ${images.length + 1}`
    };
    setImages([...images, newImage]);
  };

  const nextPage = () => {
    if ((currentPage + 1) * imagesPerPage < images.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentImages = images.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage
  );

  const totalPages = Math.ceil(images.length / imagesPerPage);

  return (
    <div 
      className="rounded-lg p-6 text-white"
      style={{
        backgroundColor: 'rgba(54, 60, 67, 1)',
        boxShadow: '5.67px 5.67px 3.78px 0px rgba(0, 0, 0, 0.4)'
      }}
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-white">Gallery</h3>
        <div className="flex items-center gap-3">
          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`p-2 border border-gray-500 rounded-lg transition-all duration-200 ${
                currentPage === 0 
                  ? 'text-gray-500 cursor-not-allowed' 
                  : 'text-white hover:bg-gray-700 hover:border-gray-400'
              }`}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextPage}
              disabled={currentPage >= totalPages - 1}
              className={`p-2 border border-gray-500 rounded-lg transition-all duration-200 ${
                currentPage >= totalPages - 1
                  ? 'text-gray-500 cursor-not-allowed' 
                  : 'text-white hover:bg-gray-700 hover:border-gray-400'
              }`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
          
          <button
            onClick={addImage}
            className="flex items-center gap-2 px-4 py-2 border border-gray-500 rounded-lg text-white hover:bg-gray-700 hover:border-gray-400 transition-all duration-200"
          >
            <Plus size={16} />
            <span className="text-sm font-medium">ADD IMAGE</span>
          </button>
        </div>
      </div>

      <div className="flex gap-4 justify-center">
        {currentImages.map((image) => (
          <div
            key={image.id}
            className="flex flex-col items-center"
          >
            <div className="w-28 h-28 rounded-lg overflow-hidden bg-gray-600 border border-gray-500">
              <img
                src={image.url}
                alt={image.placeholder}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
              />
            </div>
            <span className="text-sm text-gray-300 mt-2">{image.placeholder}</span>
          </div>
        ))}
        
        {currentImages.length < imagesPerPage && (
          <button
            onClick={addImage}
            className="flex flex-col items-center justify-center w-28 h-28 rounded-lg border-2 border-dashed border-gray-500 text-gray-400 hover:text-white hover:border-gray-400 transition-all duration-200 hover:bg-gray-700"
          >
            <Plus size={24} className="mb-2" />
            <span className="text-xs font-medium">ADD IMAGE</span>
          </button>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-4">
          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentPage ? 'bg-white' : 'bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryWidget;