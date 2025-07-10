import React, { useState, useEffect } from 'react';
import { FEATURES_DATA } from './constants/featuresData';
import { fetchFeatureData } from './services/featureDataService';
import MobilePopup from './components/MobilePopup';
import FeatureGrid from './components/FeatureGrid';
import ResultView from './components/ResultView';
import "./FeaturePanel.css";

const FeaturePanel = ({ onSearch, onBackToMain, searchTerm, isMobile = false, isQuickAccess = false }) => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState(null);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const [showMobilePopup, setShowMobilePopup] = useState(false);

  const handleFeatureClick = async (feature) => {
    console.log('=== FEATURE CLICKED ===', feature.name, { isMobile, isQuickAccess });
    
    setShowMobileDropdown(false);
    setSelectedFeature(feature);
    setIsLoading(true);
    setError(null);
    setSearchResults(null);
    
    if (isMobile) {
      setShowMobilePopup(true);
    }
    
    try {
      const data = await fetchFeatureData(feature);
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data. Please try again.');
      setSearchResults(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShare = async () => {
    if (!searchResults) return;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: searchResults.title,
          text: searchResults.content,
          url: searchResults.shareUrl
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(`${searchResults.title}\n\n${searchResults.content}\n\n${searchResults.shareUrl}`);
      alert('Content copied to clipboard!');
    }
  };

  const handleRedirect = () => {
    if (searchResults && searchResults.redirectUrl) {
      window.open(searchResults.redirectUrl, '_blank');
    }
  };

  const handleBack = () => {
    setSelectedFeature(null);
    setSearchResults(null);
    setIsLoading(false);
    setError(null);
    setShowMobilePopup(false);
    setShowMobileDropdown(false);
    if (onBackToMain) onBackToMain();
  };

  const closeMobilePopup = () => {
    setShowMobilePopup(false);
    setSelectedFeature(null);
    setSearchResults(null);
    setIsLoading(false);
    setError(null);
  };

  const handleRetry = () => {
    if (selectedFeature) {
      handleFeatureClick(selectedFeature);
    }
  };

  const handleToggleDropdown = () => {
    setShowMobileDropdown(!showMobileDropdown);
  };

  // Debug logging
  useEffect(() => {
    console.log('=== FEATURE PANEL STATE ===', {
      isMobile,
      showMobilePopup,
      selectedFeature: selectedFeature?.name,
      isLoading,
      searchResults: !!searchResults,
      error
    });
  }, [isMobile, showMobilePopup, selectedFeature, isLoading, searchResults, error]);

  // Mobile Popup - Highest Priority
  if (isMobile && showMobilePopup) {
    return (
      <MobilePopup 
        show={showMobilePopup}
        onClose={closeMobilePopup}
        selectedFeature={selectedFeature}
        isLoading={isLoading}
        error={error}
        searchResults={searchResults}
        onRetry={handleRetry}
        onShare={handleShare}
        onRedirect={handleRedirect}
      />
    );
  }

  // Mobile Quick Access
  if (isQuickAccess && isMobile) {
    return (
      <div className="mobile-quick-access">
        <div className="quick-access-list">
          {FEATURES_DATA.map((feature) => (
            <button
              key={feature.id}
              className="quick-access-item"
              onClick={() => handleFeatureClick(feature)}
            >
              <div className="quick-access-icon">
                <feature.icon size={16} />
              </div>
              <div className="quick-access-content">
                <span className="quick-access-title">{feature.name}</span>
                <span className="quick-access-desc">{feature.description}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Desktop search results
  if (!isMobile && selectedFeature && (isLoading || searchResults || error)) {
    return (
      <ResultView 
        selectedFeature={selectedFeature}
        isLoading={isLoading}
        error={error}
        searchResults={searchResults}
        onBack={handleBack}
        onRetry={handleRetry}
        onShare={handleShare}
        onRedirect={handleRedirect}
      />
    );
  }

  // Default feature panel
  return (
    <div className={`feature-panel ${isMobile ? 'mobile-feature-panel' : ''}`}>
      <FeatureGrid 
        features={FEATURES_DATA}
        isMobile={isMobile}
        showMobileDropdown={showMobileDropdown}
        onToggleDropdown={handleToggleDropdown}
        onFeatureClick={handleFeatureClick}
      />
    </div>
  );
};

export default FeaturePanel;
