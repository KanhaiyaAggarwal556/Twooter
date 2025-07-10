import React from 'react';
import { X, Share2, ExternalLink } from 'lucide-react';

const MobilePopup = ({ 
  show, 
  onClose, 
  selectedFeature, 
  isLoading, 
  error, 
  searchResults, 
  onRetry, 
  onShare, 
  onRedirect 
}) => {
  if (!show) return null;

  return (
    <div className="mobile-popup-overlay">
      <div className="mobile-popup-backdrop" onClick={onClose}></div>
      
      <div className="mobile-popup-container">
        <div className="mobile-popup-header">
          <h2 className="mobile-popup-title">{selectedFeature?.name || 'Feature'}</h2>
          <button 
            onClick={onClose} 
            className="mobile-popup-close"
            aria-label="Close popup"
          >
            <X size={24} />
          </button>
        </div>

        <div className="mobile-popup-content">
          {isLoading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p className="loading-text">
                Getting {selectedFeature?.name.toLowerCase()}...
              </p>
            </div>
          ) : error ? (
            <div className="error-container">
              <div className="error-icon">⚠️</div>
              <h3 className="error-title">Oops! Something went wrong</h3>
              <p className="error-message">{error}</p>
              <button 
                onClick={onRetry}
                className="try-again-button"
              >
                Try Again
              </button>
            </div>
          ) : searchResults ? (
            <div className="mobile-popup-result">
              <div className="result-icon">
                {selectedFeature?.icon && <selectedFeature.icon size={24} />}
              </div>
              {searchResults.imageUrl && (
                <img 
                  src={searchResults.imageUrl} 
                  alt={searchResults.title} 
                  className="mobile-popup-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              )}
              <h3 className="result-title">{searchResults.title}</h3>
              <div className="result-text">
                {searchResults.content}
              </div>
              <div className="mobile-popup-buttons">
                <button 
                  onClick={onRetry}
                  className="popup-button primary"
                >
                  Get Another
                </button>
                <button 
                  onClick={onShare}
                  className="popup-button secondary"
                >
                  <Share2 size={16} />
                  Share
                </button>
                <button 
                  onClick={onRedirect}
                  className="popup-button secondary"
                >
                  <ExternalLink size={16} />
                  More Info
                </button>
              </div>
            </div>
          ) : (
            <div className="loading-container">
              <p>Preparing your {selectedFeature?.name.toLowerCase()}...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobilePopup;