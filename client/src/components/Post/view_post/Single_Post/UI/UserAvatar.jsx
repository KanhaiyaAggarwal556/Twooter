import PropTypes from 'prop-types';

export default function UserAvatar({ user, size = 40 }) {
  const avatarStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };

  if (user?.avatar) {
    return (
      <div className="post-user-avatar">
        <img 
          src={user.avatar} 
          alt="User avatar" 
          className="post-avatar-img"
          style={avatarStyle}
        />
      </div>
    );
  }

  return (
    <div className="post-user-avatar">
      <div className="user-icon" style={avatarStyle}>
        <svg 
          width={size * 0.6} 
          height={size * 0.6} 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      </div>
    </div>
  );
}

UserAvatar.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
  }),
  size: PropTypes.number,
};

UserAvatar.defaultProps = {
  user: null,
  size: 40,
};