import React from 'react';
import './PostItem.scss';
import Button from '../Button/Button';

export interface PostItemProps {
  id: string;
  title: string;
  date: string;
  brief: string;
  slug: string;
}

const PostItem: React.FC<PostItemProps> = ({ title, date, brief, slug }) => {
  const postUrl = `https://ugneadomaityte.hashnode.dev//${slug}`;

  return (
    <a href={postUrl} className="post-item">
      <div>
        <h2 className="post-title title title-small pb-2">{title}</h2>
        <p className="post-excerpt text text-small truncate">{brief}</p>
      </div>
      <div className='post-bottom-box flex justify-between pt-7'>
        <p className="post-date text text-small pt-1">{date}</p>
        <Button>Read</Button>
      </div>
    </a>
  );
};

export default PostItem;
