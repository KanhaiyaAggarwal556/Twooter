import { useState } from "react";
import PropTypes from "prop-types";
import PostHeader from "./components/PostHeader";
import PostContent from "./components/PostContent";
import PostActions from "./components/PostActions";
import PostComments from "./components/PostComments";
import UserModal from "./UI/UserModal";
import { samplePost } from "./data/sampleData";
import "./style/post.css";

export default function Post({ post = samplePost, onDelete }) {
  // State management
  const [showDropdown, setShowDropdown] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Reaction states
  const [likeAnimation, setLikeAnimation] = useState(false);
  const [dislikeAnimation, setDislikeAnimation] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(post.reactions.likes);
  const [currentDislikes, setCurrentDislikes] = useState(
    post.reactions.dislikes
  );
  const [userLiked, setUserLiked] = useState(false);
  const [userDisliked, setUserDisliked] = useState(false);

  // Event handlers
  const handleLike = () => {
    if (userDisliked) {
      setCurrentDislikes((prev) => prev - 1);
      setUserDisliked(false);
    }

    if (userLiked) {
      setCurrentLikes((prev) => prev - 1);
      setUserLiked(false);
    } else {
      setCurrentLikes((prev) => prev + 1);
      setUserLiked(true);
    }

    setLikeAnimation(true);
    setTimeout(() => setLikeAnimation(false), 600);
  };

  const handleDislike = () => {
    if (userLiked) {
      setCurrentLikes((prev) => prev - 1);
      setUserLiked(false);
    }

    if (userDisliked) {
      setCurrentDislikes((prev) => prev - 1);
      setUserDisliked(false);
    } else {
      setCurrentDislikes((prev) => prev + 1);
      setUserDisliked(true);
    }

    setDislikeAnimation(true);
    setTimeout(() => setDislikeAnimation(false), 600);
  };

  const handleDelete = () => {
    setIsDeleting(true);
    setShowDropdown(false);

    setTimeout(() => {
      setIsDeleted(true);
      if (onDelete) {
        onDelete(post.id);
      }
    }, 300);
  };

  const handleComments = () => {
    setShowComments(!showComments);
  };

  const handleUserClick = () => {
    setShowUserModal(true);
  };

  // Don't render if deleted
  if (isDeleted) {
    return null;
  }

  return (
    <>
      <div className={`post-card ${isDeleting ? "deleting" : ""}`}>
        <div className="post-card-body">
          <PostHeader
            post={post}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
            onUserClick={handleUserClick}
            onDelete={handleDelete}
          />

          <PostContent post={post} />

          <PostActions
            post={post}
            currentLikes={currentLikes}
            currentDislikes={currentDislikes}
            userLiked={userLiked}
            userDisliked={userDisliked}
            likeAnimation={likeAnimation}
            dislikeAnimation={dislikeAnimation}
            onLike={handleLike}
            onDislike={handleDislike}
            onComments={handleComments}
          />

          <PostComments showComments={showComments} />
        </div>
      </div>

      <UserModal
        show={showUserModal}
        post={post}
        onClose={() => setShowUserModal(false)}
      />
    </>
  );
}

// PropTypes validation
Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    user: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      username: PropTypes.string,
    }).isRequired,
    content: PropTypes.string.isRequired,
    timestamp: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date),
    ]).isRequired,
    reactions: PropTypes.shape({
      likes: PropTypes.number.isRequired,
      dislikes: PropTypes.number.isRequired,
    }).isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        user: PropTypes.shape({
          name: PropTypes.string.isRequired,
          avatar: PropTypes.string,
        }).isRequired,
        content: PropTypes.string.isRequired,
        timestamp: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.instanceOf(Date),
        ]).isRequired,
      })
    ),
    image: PropTypes.string,
    video: PropTypes.string,
  }),
  onDelete: PropTypes.func,
};

// Default props (optional, since you're using default parameters)
Post.defaultProps = {
  post: samplePost,
  onDelete: null,
};
