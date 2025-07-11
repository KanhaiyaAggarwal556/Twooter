// RightSidebar.jsx - Updated to show Login/SignUp pages
import React, { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, User, Grid3X3, X } from 'lucide-react';
import Search from './Search';
import UserAccount from './UserAccount';
import MobileSearch from './MobileSearch';
import SearchResults from './SearchResults';
import FeaturePanel from './FeaturePanel/FeaturePanel';
import { useSearch, useAuth } from './hooks';
import ChatBot from './ChatBot';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const RightSidebar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isMobileUserMenuOpen, setIsMobileUserMenuOpen] = useState(false);
  const [isMobileFeaturePanelOpen, setIsMobileFeaturePanelOpen] = useState(false);
  const [currentView, setCurrentView] = useState('main');
  const [searchResults, setSearchResults] = useState(null);
  
  // Add ChatBot state
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);
  
  const mobileUserMenuRef = useRef(null);
  const mobileSearchRef = useRef(null);
  const mobileFeaturePanelRef = useRef(null);
  const navigate = useNavigate();

  const {
    searchTerm,
    setSearchTerm,
    isSearchFocused,
    setIsSearchFocused,
    suggestions,
    searchRef,
    handleSearch: originalHandleSearch,
    handleSuggestionClick,
    handleBackToMain: originalBackToMain
  } = useSearch();

  const {
    isUserMenuOpen,
    setIsUserMenuOpen,
    isLoggedIn,
    handleLogout
  } = useAuth();

  // ChatBot toggle handler
  const handleChatBotToggle = () => {
    setIsChatBotOpen(!isChatBotOpen);
  };

  // Enhanced back to main handler
  const handleBackToMain = () => {
    setCurrentView('main');
    setSearchResults(null);
    setIsMobileFeaturePanelOpen(false);
    if (originalBackToMain) {
      originalBackToMain();
    }
  };

  // Login/SignUp handlers - Updated to show components
  const handleLogin = () => {
    setCurrentView('login');
    setIsUserMenuOpen(false);
    setIsMobileUserMenuOpen(false);
    setIsMobileFeaturePanelOpen(false);
  };

  const handleSignup = () => {
    setCurrentView('signup');
    setIsUserMenuOpen(false);
    setIsMobileUserMenuOpen(false);
    setIsMobileFeaturePanelOpen(false);
  };

  // Handle successful login/signup
  const handleLoginSuccess = (userData) => {
    // Handle successful login - you can update auth state here
    console.log('Login successful:', userData);
    setCurrentView('main');
    // You might want to update the auth state here
  };

  const handleSignupSuccess = (userData) => {
    // Handle successful signup - you can update auth state here
    console.log('Signup successful:', userData);
    setCurrentView('main');
    // You might want to update the auth state here
  };

  // Enhanced search handler
  const handleSearch = async (query) => {
    setSearchTerm(query);
    setCurrentView('search');
    setIsMobileSearchOpen(false);
    setIsMobileFeaturePanelOpen(false);
    
    try {
      const results = await originalHandleSearch(query);
      setSearchResults(results);
    } catch (error) {
      setSearchResults({
        query: query,
        results: [
          { id: 1, title: `Result for "${query}"`, description: 'This is a mock search result' },
          { id: 2, title: `Another result for "${query}"`, description: 'This is another mock result' }
        ]
      });
    }
  };

  // Enhanced search handler for feature panel
  const handleFeatureSearch = (query) => {
    handleSearch(query);
  };

  // Enhanced suggestion click handler
  const handleSuggestionClickEnhanced = (suggestion) => {
    handleSuggestionClick(suggestion);
    handleSearch(suggestion);
  };

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle mobile search opening
  const handleMobileSearchOpen = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileSearchOpen(true);
    setIsMobileFeaturePanelOpen(false);
  };

  // Handle mobile user menu toggle
  const handleMobileUserMenuToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileUserMenuOpen(!isMobileUserMenuOpen);
    setIsMobileFeaturePanelOpen(false);
  };

  // Handle mobile feature panel toggle
  const handleMobileFeaturePanelToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileFeaturePanelOpen(!isMobileFeaturePanelOpen);
    setIsMobileUserMenuOpen(false);
  };

  // Handle clicking outside mobile menus
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileUserMenuOpen && 
          mobileUserMenuRef.current && 
          !mobileUserMenuRef.current.contains(event.target)) {
        setIsMobileUserMenuOpen(false);
      }
      
      if (isMobileFeaturePanelOpen && 
          mobileFeaturePanelRef.current && 
          !mobileFeaturePanelRef.current.contains(event.target)) {
        setIsMobileFeaturePanelOpen(false);
      }
    };

    if (isMobileUserMenuOpen || isMobileFeaturePanelOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileUserMenuOpen, isMobileFeaturePanelOpen]);

  // Mobile menu item handlers
  const handleMobileLogin = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate("/login")
  };

  const handleMobileSignup = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate("/signup")
  };

  const handleMobileLogout = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleLogout();
    setIsMobileUserMenuOpen(false);
  };

  // Enhanced main content renderer
  const renderMainContent = () => {
    switch (currentView) {
      case 'search':
        return (
          <SearchResults 
            searchTerm={searchTerm}
            searchResults={searchResults}
            onBackToMain={handleBackToMain}
          />
        );
      case 'login':
        return (
          <Login 
            onLoginSuccess={handleLoginSuccess}
            onBackToMain={handleBackToMain}
            onSwitchToSignup={handleSignup}
          />
        );
      case 'signup':
        return (
          <SignUp 
            onSignupSuccess={handleSignupSuccess}
            onBackToMain={handleBackToMain}
            onSwitchToLogin={handleLogin}
          />
        );
      case 'main':
      default:
        return (
          <FeaturePanel
            onSearch={handleFeatureSearch}
            onBackToMain={handleBackToMain}
            searchTerm={searchTerm}
            isMobile={isMobile}
          />
        );
    }
  };

  // ==========================================
  // MOBILE-ONLY RENDER - Show only icons + floating feature button
  // ==========================================
  if (isMobile) {
    return (
      <>
        {/* Mobile Header - Only Icons */}
        <div className="mobile-header-icons-container">
          <div className="mobile-header-spacer"></div>
          
          <div className="mobile-header-icons">
            {/* Mobile Search Button */}
            <button
              ref={mobileSearchRef}
              className="mobile-search-icon"
              onClick={handleMobileSearchOpen}
              onTouchEnd={handleMobileSearchOpen}
              onMouseDown={(e) => e.preventDefault()}
              aria-label="Open search"
              type="button"
              style={{
                WebkitTapHighlightColor: 'transparent',
                touchAction: 'manipulation',
                userSelect: 'none'
              }}
            >
              <SearchIcon size={24} />
            </button>

            {/* Mobile User Menu */}
            <div className="mobile-user-menu" ref={mobileUserMenuRef}>
              <button
                className="mobile-user-icon"
                onClick={handleMobileUserMenuToggle}
                onTouchEnd={handleMobileUserMenuToggle}
                onMouseDown={(e) => e.preventDefault()}
                aria-label="User menu"
                type="button"
                style={{
                  WebkitTapHighlightColor: 'transparent',
                  touchAction: 'manipulation',
                  userSelect: 'none'
                }}
              >
                <User size={24} />
              </button>

              {/* Mobile User Dropdown */}
              {isMobileUserMenuOpen && (
                <div className="user-dropdown">
                  {isLoggedIn ? (
                    <>
                      <div className="user-info">
                        <span>Welcome, User!</span>
                      </div>
                      <button 
                        onClick={handleMobileLogout} 
                        className="menu-item"
                        type="button"
                      >
                        <User size={16} />
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <button 
                        onClick={handleMobileLogin} 
                        className="menu-item"
                        type="button"
                      >
                        <User size={16} />
                        Login
                      </button>
                      <button 
                        onClick={handleMobileSignup} 
                        className="menu-item"
                        type="button"
                      >
                        <User size={16} />
                        Sign Up
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Search Component - Only shows when opened */}
        <MobileSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isMobileSearchOpen={isMobileSearchOpen}
          setIsMobileSearchOpen={setIsMobileSearchOpen}
          onSearch={handleSearch}
          suggestions={suggestions}
          onSuggestionClick={handleSuggestionClickEnhanced}
        />

        {/* Mobile Main Content - Shows search results, login, signup, or feature panel */}
        {(currentView === 'search' || currentView === 'login' || currentView === 'signup') && !isMobileSearchOpen && (
          <div className="mobile-main-content">
            {renderMainContent()}
          </div>
        )}

        {/* Mobile Feature Panel Button - Floating at bottom right */}
        {/* <div className="mobile-feature-panel-wrapper" ref={mobileFeaturePanelRef}>
          <button
            className="mobile-feature-panel-button"
            onClick={handleMobileFeaturePanelToggle}
            onTouchEnd={handleMobileFeaturePanelToggle}
            onMouseDown={(e) => e.preventDefault()}
            aria-label="Features"
            type="button"
            style={{
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation',
              userSelect: 'none'
            }}
          >
            {isMobileFeaturePanelOpen ? <X size={24} /> : <Grid3X3 size={24} />}
          </button>

          {isMobileFeaturePanelOpen && (
            <div className="mobile-feature-panel-overlay">
              <div className="mobile-feature-panel-content">
                <div className="mobile-feature-panel-header">
                  <h3>Features</h3>
                  <button
                    className="mobile-feature-panel-close"
                    onClick={handleMobileFeaturePanelToggle}
                    aria-label="Close features"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="mobile-feature-panel-body">
                  <FeaturePanel
                    onSearch={handleFeatureSearch}
                    onBackToMain={handleBackToMain}
                    searchTerm={searchTerm}
                    isMobile={true} 
                    isQuickAccess={false}
                  />
                </div>
              </div>
            </div>
          )}
        </div> */}

        {/* ChatBot for Mobile */}
        <ChatBot
          isOpen={isChatBotOpen}
          onToggle={handleChatBotToggle}
          position="bottom-left"
        />
      </>
    );
  }

  // ==========================================
  // DESKTOP RENDER - Full functionality
  // ==========================================
  return (
    <>
      <div className="right-sidebar">
        {/* Desktop Header */}
        <div className="right-sidebar__header">
          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            isSearchFocused={isSearchFocused}
            setIsSearchFocused={setIsSearchFocused}
            onSearch={handleSearch}
            suggestions={suggestions}
            onSuggestionClick={handleSuggestionClickEnhanced}
            searchRef={searchRef}
          />

          <UserAccount
            isUserMenuOpen={isUserMenuOpen}
            setIsUserMenuOpen={setIsUserMenuOpen}
            isLoggedIn={isLoggedIn}
            onLogin={handleLogin}
            onSignup={handleSignup}
            onLogout={handleLogout}
          />
        </div>

        {/* Desktop Content */}
        <div className="right-sidebar__content">
          {renderMainContent()}
        </div>
      </div>
      
      {/* ChatBot for Desktop */}
      <ChatBot
        isOpen={isChatBotOpen}
        onToggle={handleChatBotToggle}
        position="bottom-right"
      />
    </>
  );
};

export default RightSidebar;