import React from 'react';
import Post from '../../../Single_Post/post';
import WelcomeMessage from '../../../WelcomeMessage';
import LoadingSpinner from '../../../Loading/LoadingSpinner';

const HomeSection = ({ isActive, postList, fetching }) => {
  return (
    <div className={`section home-section ${isActive ? 'active' : ''}`}>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && (
        <WelcomeMessage />
      )}
      {!fetching && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default HomeSection;