import PropTypes from "prop-types";
import ReactionButtons from "../UI/ReactionButtons";
import ViewsCounter from "../UI/ViewsCounter";

export default function PostActions({ 
  post,
  currentLikes,
  currentDislikes,
  userLiked,
  userDisliked,
  likeAnimation,
  dislikeAnimation,
  onLike,
  onDislike,
  onComments 
}) {
  return (
    <div className="post-actions">
      <ReactionButtons
        currentLikes={currentLikes}
        currentDislikes={currentDislikes}
        userLiked={userLiked}
        userDisliked={userDisliked}
        likeAnimation={likeAnimation}
        dislikeAnimation={dislikeAnimation}
        onLike={onLike}
        onDislike={onDislike}
        onComments={onComments}
      />
      
      <ViewsCounter views={post.views} />
    </div>
  );
}

// PropTypes validation
PostActions.propTypes = {
  post: PropTypes.shape({
    views: PropTypes.number.isRequired
  }).isRequired,
  currentLikes: PropTypes.number.isRequired,
  currentDislikes: PropTypes.number.isRequired,
  userLiked: PropTypes.bool.isRequired,
  userDisliked: PropTypes.bool.isRequired,
  likeAnimation: PropTypes.bool.isRequired,
  dislikeAnimation: PropTypes.bool.isRequired,
  onLike: PropTypes.func.isRequired,
  onDislike: PropTypes.func.isRequired,
  onComments: PropTypes.func.isRequired
};