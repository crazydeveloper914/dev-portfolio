import React, { useEffect, useState } from 'react';
import PostItem, {PostItemProps} from './PostItem';

const PostsList: React.FC = () => {
  const [posts, setPosts] = useState<PostItemProps[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/fetchPosts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
          {
            publication(host: "ugneadomaityte.hashnode.dev/") {
              posts(first: 4) {
                edges {
                  node {
                    id
                    title
                    brief
                    publishedAt
                    slug
                  }
                }
              }
            }
          }
        `,
      }),
    })
      .then(response => response.json())
      .then(data => {
        const extractedPosts = data.data.publication.posts.edges.map((edge: any) => {
          const post = edge.node;
          return {
            id: post.id,
            title: post.title,
            date: new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
            brief: post.brief,
            slug: post.slug
          };
        });      
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

