import PropTypes from "prop-types";
import PostMedia from "./PostMedia";
import PostTags from "./PostTags";

export default function PostContent({ post }) {
  return (
    <div className="post-content">
      <h5 className="post-title">{post.title}</h5>
      <p className="post-body">{post.body}</p>
      
      <PostMedia media={post.media} />
      <PostTags tags={post.tags} />
    </div>
  );
}

// PropTypes validation
PostContent.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    media: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        type: PropTypes.oneOf(['image', 'video']).isRequired,
        url: PropTypes.string.isRequired,
        alt: PropTypes.string
      }),
      PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.oneOf(['image', 'video']).isRequired,
          url: PropTypes.string.isRequired,
          alt: PropTypes.string
        })
      )
    ]),
    tags: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          name: PropTypes.string.isRequired,
          color: PropTypes.string
        })
      )
    ])
  }).isRequired
};