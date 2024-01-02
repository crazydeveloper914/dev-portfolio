import React from 'react';
import './PostItem.scss';
import Button from '../Button/Button';

export interface PostItemProps {
  id: number;
  title: string;
  date: string;
  excerpt: string;
}

const PostItem: React.FC<PostItemProps> = ({ title, date, excerpt }) => {
  return (
    <div className="post-item">
      <h2 className="post-title title title-small">{title}</h2>
      <p className="post-excerpt text text-small">{excerpt}</p>
      <div className='post-bottom-box flex justify-between pt-7'>
        <p className="post-date text text-small pt-1">{date}</p>
        <Button>Read</Button>
      </div>
    </div>
  );
};

export default PostItem;
