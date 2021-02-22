import React from 'react';

const VideoDetailEmpty = () => {
    return (
        <div className='dimmable' style={{ marginTop: '10px' }}>
            <div className='ui active inverted dimmer'>
                <div className='ui text loader'>Search something...</div>
            </div>
            <p></p>
        </div>
    );
};

export default VideoDetailEmpty;
