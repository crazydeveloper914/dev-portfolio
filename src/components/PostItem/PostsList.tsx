import React from 'react';
import PostItem, {PostItemProps} from './PostItem';

interface PostsListProps {
  posts: PostItemProps[];
}

const PostsList: React.FC<PostsListProps> = ({ posts }) => {
  return ( 
    <div className="posts-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
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
