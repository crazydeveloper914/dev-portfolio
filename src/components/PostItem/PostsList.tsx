import React from 'react';
import PostItem, {PostItemProps} from './PostItem';

interface PostsListProps {
  posts: PostItemProps[];
}

const PostsList: React.FC<PostsListProps> = ({ posts }) => {
  return (
    <div className="posts-list">
      {posts.map(post => (
        <PostItem 
          key={post.id} 
          {...post}
        />
      ))}
    </div>
  );
};

export default PostsList;
