import React, { useContext, useEffect, useState } from "react";
import Post from "./post";
import { PostList as PostListData } from "../Store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
import Footer from "./Footer";
export default function Posts() {
  const { postList, fetching } = useContext(PostListData);
  // const [datafetched,setDataFetched] = useState(false);
  // if(!datafetched){
  // fetch("https://dummyjson.com/posts")
  //   .then((res) => res.json())
  //   .then(data=>{
  //     addInititalPost(data.posts);
  //   });
  //   setDataFetched(true);
  // }
  // const handleGetPostsClick = () => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then(data=>{
  //       addInititalPost(data.posts);
  //     });
  //     setDataFetched(true);
  // };

  
  return (
    <div className="mini-container">
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && (
        <WelcomeMessage
        //onGetPostClick= {handleGetPostsClick}
        />
      )}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
}
