import PropTypes from 'prop-types';

export default function PostMedia({ media }) {
  if (!media) return null;

  return (
    <div className="post-media">
      {media.type === 'image' && (
        <img 
          src={media.url} 
          alt="Post media" 
          className="post-media-img"
        />
      )}
      {media.type === 'video' && (
        <video 
          controls 
          className="post-media-video"
        >
          <source src={media.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}

PostMedia.propTypes = {
  media: PropTypes.shape({
    type: PropTypes.oneOf(['image', 'video']).isRequired,
    url: PropTypes.string.isRequired,
  }),
};
