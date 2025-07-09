// UserAccount.jsx
import React from 'react';
import { User, LogIn, UserPlus, LogOut } from 'lucide-react';

const UserAccount = ({ 
  isUserMenuOpen, 
  setIsUserMenuOpen, 
  isLoggedIn, 
  onLogin, 
  onSignup, 
  onLogout 
}) => {
  return (
    <div className="user-menu">
      <button
        className="user-icon-button"
        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
      >
        <User size={24} />
      </button>

      {isUserMenuOpen && (
        <div className="user-dropdown">
          {isLoggedIn ? (
            <>
              <div className="user-info">
                <span>Welcome, User!</span>
              </div>
              <button onClick={onLogout} className="menu-item">
                <LogOut size={16} />
                Logout
              </button>
            </>
          ) : (
            <>
              <button onClick={onLogin} className="menu-item">
                <LogIn size={16} />
                Login
              </button>
              <button onClick={onSignup} className="menu-item">
                <UserPlus size={16} />
                Sign Up
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserAccount;