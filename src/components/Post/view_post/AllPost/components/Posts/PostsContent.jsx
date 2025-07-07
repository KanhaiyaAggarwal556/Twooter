import React from 'react';
import HomeSection from '../Sections/HomeSection';
import MessagesSection from '../Sections/MessagesSection';

const PostsContent = ({ activeSection, postList, fetching }) => {
  return (
    <div className="posts-content">
      <HomeSection 
        isActive={activeSection === 'home'}
        postList={postList}
        fetching={fetching}
      />
      <MessagesSection 
        isActive={activeSection === 'messages'}
      />
    </div>
  );
};

export default PostsContent;