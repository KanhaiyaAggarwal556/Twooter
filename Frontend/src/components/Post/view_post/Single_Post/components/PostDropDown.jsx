import PropTypes from "prop-types";

export default function PostDropdown({ show, setShow, onDelete }) {
  return (
    <div className="post-menu">
      <div 
        className="three-dots-menu"
        onClick={() => setShow(!show)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="1"/>
          <circle cx="19" cy="12" r="1"/>
          <circle cx="5" cy="12" r="1"/>
        </svg>
      </div>
      
      {show && (
        <div className="post-dropdown-menu">
          <button className="post-dropdown-item" onClick={onDelete}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="3,6 5,6 21,6"/>
              <path d="M19,6v14a2,2 0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2v2"/>
              <line x1="10" y1="11" x2="10" y2="17"/>
              <line x1="14" y1="11" x2="14" y2="17"/>
            </svg>
            Delete Post
          </button>
        </div>
      )}
    </div>
  );
}

// PropTypes validation
PostDropdown.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};