import React, { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import VideoList from '../VideoList/VideoList';
import VideoDetail from '../VideoDetail/VideoDetail';
import classes from './App.module.css';
import { useVideos } from '../../hooks/useVideos';
import { Video } from '../../interfaces/video';

const App = () => {
    const { videos, searchVideos, fetchingVideosError } = useVideos();
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

    useEffect(() => {
        if (videos.length) {
            setSelectedVideo(videos[0]);
        }
    }, [videos]);

    const onVideoSelect = (id: string) => {
        const video = videos.find(({ id: videoId }) => videoId === id);

        if (video) {
            setSelectedVideo(video);
        }
    };

    const videoDetail = selectedVideo ? (
        <VideoDetail
            source={selectedVideo.source}
            description={selectedVideo.description}
            title={selectedVideo.title}
        />
    ) : null;

    return (
        <div className='ui container'>
            <SearchBar onSubmit={searchVideos} />
            {fetchingVideosError ? <p style={{ color: 'red' }}>{fetchingVideosError}</p> : null}
            <div className={classes.VideoInfo}>
                {videoDetail}
                <VideoList videos={videos} onVideoSelect={onVideoSelect} />
            </div>
        </div>
    );
};

export default App;
