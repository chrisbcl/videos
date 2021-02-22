import { useEffect, useState } from 'react';
import youtube, { YoutubeVideo } from '../api/youtube';
import { Video } from '../interfaces/video';
import { youtubeItemToVideo } from '../utils/utils';

export const useVideos = (defaultSearch?: string) => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        if (defaultSearch) {
            searchVideos(defaultSearch);
        }
    }, [defaultSearch]);

    const searchVideos = async (input: string) => {
        try {
            const { data } = await youtube.get('/search', { params: { q: input } });
            const items = data.items as YoutubeVideo[];
            const newVideos = items.map((item) => youtubeItemToVideo(item));
            setVideos(newVideos);
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return {
        videos,
        searchVideos,
        fetchingVideosError: errorMessage
    };
};
