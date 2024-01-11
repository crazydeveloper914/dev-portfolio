import React, { useEffect, useState } from 'react';
import PostItem, {PostItemProps} from './PostItem';

const PostsList: React.FC = () => {
  const [posts, setPosts] = useState<PostItemProps[]>([]);

  useEffect(() => {
    fetch('https://api.hashnode.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          {
            user(username: "ugnead") {
              publication {
                posts {
                  _id
                  title
                  brief
                  dateAdded
                  slug
                }
              }
            }
          }
        `,
      }),
    })
      .then(response => response.json())
      .then(data => {
        const extractedPosts = data.data.user.publication.posts.map((post: any) => ({
          id: post._id,
          title: post.title,
          date: new Date(post.dateAdded).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
          excerpt: post.brief,
          slug: post.slug
        }));
        setPosts(extractedPosts);
      })
      .catch(error => console.error('Error fetching Hashnode posts:', error));
  }, []);

  return (
    <div className="posts-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 pb-10">
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
