import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import PropTypes from "prop-types"; // <-- Add this import
import { PostList } from "@store/post-list-store";

export default function Post({ post }) {
  const { deletePost } = useContext(PostList);
  return (
    <>
      <div className="card w-75 mb-4 post">
        <div className="card-body">
          <div className="userId ">
            <div className="item">
              <BiUserCircle />
            </div>
            <div className="item">user-{post.userId}</div>
          </div>
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark"
            onClick={() => deletePost(post.id)}
            key={post.id}
          >
            <AiFillDelete />
          </span>
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          <div className="d-flex justify-content-between">
            <span className="d-grid gap-2 d-md-flex justify-content-md-end">
              {post.tags.map((tag) => (
                <span className="badge text-bg-light" key={tag}>
                  {tag}
                </span>
              ))}
            </span>
            <div className="Views">
              <div className="item1">
                <div className="item ">
                  <AiFillLike />
                </div>
                <div className="item">{post.reactions.likes}</div>
              </div>
              <div className="item2">
                <div className="item">
                  <AiFillDislike />
                </div>
                <div className="item">{post.reactions.dislikes}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    reactions: PropTypes.shape({
      likes: PropTypes.number,
      dislikes: PropTypes.number,
    }).isRequired,
  }).isRequired,
};