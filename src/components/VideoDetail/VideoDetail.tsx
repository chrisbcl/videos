import React from 'react';

interface VideoDetailProps {
    title: string;
    description: string;
    source: string;
}

const VideoDetail = ({ title, description, source }: VideoDetailProps) => {
    return (
        <div>
            <div className='ui embed'>
                <iframe title='video player' src={source} />
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;
