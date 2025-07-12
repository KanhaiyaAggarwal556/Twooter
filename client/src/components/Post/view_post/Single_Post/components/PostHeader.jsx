import PropTypes from "prop-types";
import UserAvatar from "../UI/UserAvatar";
import PostDropdown from "./PostDropDown";

export default function PostHeader({
  post,
  showDropdown,
  setShowDropdown,
  onUserClick,
  onDelete,
}) {
  return (
    <div className="post-header">
      <div className="post-user-info" onClick={(e)=> e.stopPropagation(onUserClick)}>
        <UserAvatar user={post.user} size={40} />
        <div className="post-user-name">
          <strong>{post.user?.name || `user-${post.userId}`}</strong>
        </div>
      </div>

      <PostDropdown
        show={showDropdown}
        setShow={setShowDropdown}
        onDelete={onDelete}
      />
    </div>
  );
}

PostHeader.propTypes = {
  post: PropTypes.shape({
    user: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
    }),
    userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  showDropdown: PropTypes.bool.isRequired,
  setShowDropdown: PropTypes.func.isRequired,
  onUserClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
