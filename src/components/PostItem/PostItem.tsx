import React from 'react';

export interface PostItemProps {
  id: number;
  title: string;
  date: string;
  excerpt: string;
}

const PostItem: React.FC<PostItemProps> = ({ title, date, excerpt }) => {
  return (
    <div className="post-item">
      <h2 className="post-title">{title}</h2>
      <p className="post-date">{date}</p>
      <p className="post-excerpt">{excerpt}</p>
    </div>
  );
};

export default PostItem;
