import React from 'react';
import classes from './VideoItem.module.css';

interface VideoItemProps {
    id: string;
    title: string;
    thumbnail: string;
    onSelect: (id: string) => void;
}

const VideoItem = ({ id, thumbnail, title, onSelect }: VideoItemProps) => {
    const onClick = () => {
        onSelect(id);
    };

    return (
        <div className={['item', classes.VideoItem].join(' ')} onClick={onClick}>
            <img className='ui image' alt={title} src={thumbnail} style={{ maxWidth: '180px' }} />
            <div className='content'>
                <div className='header'>{title}</div>
            </div>
        </div>
    );
};

export default VideoItem;
