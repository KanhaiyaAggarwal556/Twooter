import React, { useContext, useState } from 'react';
import { PostList as PostListData } from '@store/post-list-store';
import { useScrollDetection } from '../hooks/useScrollDetection';
import DynamicHeader from './Header/DynamicHeader';
import PostsContent from './Posts/PostsContent';
import styles from '../styles/Posts.module.css';

export default function Posts() {
  const { postList, fetching } = useContext(PostListData);
  const [activeSection, setActiveSection] = useState('home');
  const isScrolled = useScrollDetection(50);
  
  const handleSectionToggle = (section) => {
    setActiveSection(section);
  };
  
  return (
    <div className={styles.postsContainer}>
      <DynamicHeader 
        isScrolled={isScrolled}
        activeSection={activeSection}
        onSectionToggle={handleSectionToggle}
      />
      <PostsContent 
        activeSection={activeSection}
        postList={postList}
        fetching={fetching}
      />
    </div>
  );
}
