// RightSidebar.jsx - MOBILE ICONS ONLY VERSION
import React, { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, User } from 'lucide-react';
import Search from './Search';
import UserAccount from './UserAccount';
import MobileSearch from './MobileSearch';
import SearchResults from './SearchResults';
import { useSearch, useAuth } from './hooks';
import './styles.css';

const RightSidebar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isMobileUserMenuOpen, setIsMobileUserMenuOpen] = useState(false);
  const mobileUserMenuRef = useRef(null);
  const mobileSearchRef = useRef(null);

  const {
    searchTerm,
    setSearchTerm,
    isSearchFocused,
    setIsSearchFocused,
    suggestions,
    currentView,
    searchRef,
    handleSearch,
    handleSuggestionClick,
    handleBackToMain
  } = useSearch();

  const {
    isUserMenuOpen,
    setIsUserMenuOpen,
    isLoggedIn,
    handleLogin,
    handleSignup,
    handleLogout
  } = useAuth();

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      console.log('Mobile check:', mobile, 'Window width:', window.innerWidth);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle mobile search opening
  const handleMobileSearchOpen = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('=== MOBILE SEARCH BUTTON CLICKED ===');
    setIsMobileSearchOpen(true);
  };

  // Handle mobile user menu toggle
  const handleMobileUserMenuToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('=== MOBILE USER MENU BUTTON CLICKED ===');
    setIsMobileUserMenuOpen(!isMobileUserMenuOpen);
  };

  // Handle clicking outside mobile user menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileUserMenuOpen && 
          mobileUserMenuRef.current && 
          !mobileUserMenuRef.current.contains(event.target)) {
        setIsMobileUserMenuOpen(false);
      }
    };

    if (isMobileUserMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileUserMenuOpen]);

  // Mobile menu item handlers
  const handleMobileLogin = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleLogin();
    setIsMobileUserMenuOpen(false);
  };

  const handleMobileSignup = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleSignup();
    setIsMobileUserMenuOpen(false);
  };

  const handleMobileLogout = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleLogout();
    setIsMobileUserMenuOpen(false);
  };

  const renderMainContent = () => {
    return <div style={{ padding: '20px', color: 'white' }}>Main Content Here</div>;
  };

  // ==========================================
  // MOBILE-ONLY RENDER - Show only icons
  // ==========================================
  if (isMobile) {
    return (
      <div className="right-sidebar mobile-only">
        {/* Mobile Header - Only Icons */}
        <div className="right-sidebar__header mobile-icons-only">
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
          onSuggestionClick={handleSuggestionClick}
        />

        {/* NO MAIN CONTENT ON MOBILE - Only icons visible */}
      </div>
    );
  }

  // ==========================================
  // DESKTOP RENDER - Full functionality
  // ==========================================
  return (
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
          onSuggestionClick={handleSuggestionClick}
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
      {currentView === 'main' ? (
        renderMainContent()
      ) : (
        <SearchResults 
          searchTerm={searchTerm}
          onBackToMain={handleBackToMain}
        />
      )}
    </div>
  );
};

export default RightSidebar;