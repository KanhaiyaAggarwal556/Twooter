import PropTypes from 'prop-types';

export default function PostTags({ tags }) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="post-tags">
      {tags.map((tag) => (
        <span className="post-tag" key={tag}>
          #{tag}
        </span>
      ))}
    </div>
  );
}

PostTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

PostTags.defaultProps = {
  tags: [],
};
