import { YoutubeVideo } from '../api/youtube';
import { Video } from '../interfaces/video';

export const youtubeItemToVideo = (item: YoutubeVideo): Video => ({
    source: `https://www.youtube.com/embed/${item.id.videoId}`,
    description: item.snippet.description,
    id: item.id.videoId,
    thumbnail: item.snippet.thumbnails.medium.url,
    title: item.snippet.title
});
