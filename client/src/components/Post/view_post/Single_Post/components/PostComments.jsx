import PropTypes from "prop-types";

export default function PostComments({ showComments }) {
  if (!showComments) return null;

  return (
    <div className="post-comments">
      <p className="post-no-comments">No comments yet...</p>
    </div>
  );
}

// PropTypes validation
PostComments.propTypes = {
  showComments: PropTypes.bool.isRequired
};