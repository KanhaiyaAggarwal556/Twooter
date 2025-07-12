import { createContext, useEffect, useReducer, useState } from "react";
import PropTypes from "prop-types"; // <-- Add this import
PostsProvider.propTypes = {
  children: PropTypes.node.isRequired, // <-- Add this validation
};
export const PostList = createContext({
  postList: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
});
const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITITAL_POST") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};
export default function PostsProvider({ children }) {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);
  const [fetching, setFetching] = useState(false);
  
  const addInititalPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITITAL_POST",
      payload: {
        posts,
      },
    });
  };
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {
        addInititalPost(data.posts);
        setFetching(false);
      });
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <PostList.Provider
      value={{ postList: postList, fetching, addPost, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
}
