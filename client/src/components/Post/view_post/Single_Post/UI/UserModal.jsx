import PropTypes from 'prop-types';
import UserAvatar from "./UserAvatar";

export default function UserModal({ show, post, onClose }) {
  if (!show) return null;

  return (
    <div className="post-modal-overlay">
      <div className="post-modal">
        <div className="post-modal-content">
          <div className="post-modal-header">
            <h5 className="post-modal-title">User Profile</h5>
            <button 
              className="post-modal-close"
              onClick={onClose}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
          <div className="post-modal-body">
            <UserAvatar user={post.user} size={80} />
            <h6 className="post-modal-username">{post.user?.name || `user-${post.userId}`}</h6>
            <p className="post-modal-text">More functionality coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

UserModal.propTypes = {
  show: PropTypes.bool.isRequired,
  post: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
    }),
    userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

UserModal.defaultProps = {
  show: false,
  post: {
    user: {},
    userId: '',
  },
  onClose: () => {},
};