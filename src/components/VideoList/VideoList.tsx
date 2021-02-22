import React from 'react';
import { Video } from '../../interfaces/video';
import VideoItem from '../VideoItem/VideoItem';

interface VideoListProps {
    videos: Video[];
    onVideoSelect: (id: string) => void;
}

const VideoList = ({ videos, onVideoSelect }: VideoListProps) => {
    return (
        <div className='ui relaxed divided list' style={{ marginTop: 0 }}>
            {videos.map(({ id, description, title, thumbnail }) => (
                <VideoItem key={id} id={id} thumbnail={thumbnail} title={title} onSelect={onVideoSelect} />
            ))}
        </div>
    );
};

export default VideoList;
