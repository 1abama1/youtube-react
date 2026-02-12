
import { ThumbsUp } from 'lucide-react';
import { useInteraction } from '../context/InteractionContext';
import { videos } from '../utils/mockData';
import VideoCard from '../components/VideoCard';
import './Feed.css'; // Reusing Feed grid styles

const LikedVideos = () => {
    const { likedVideos } = useInteraction();

    const likedVideoList = videos.filter(v => likedVideos.includes(v.id.videoId));

    if (likedVideoList.length === 0) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh', color: 'white' }}>
                <ThumbsUp size={100} style={{ marginBottom: '20px', color: '#FC1503' }} />
                <h2>Понравившиеся видео</h2>
                <p>Видео, которые вам понравились, будут здесь.</p>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ padding: '0 0px', color: 'white', marginBottom: '20px' }}>
                Понравившиеся <span style={{ color: '#FC1503' }}>видео</span>
            </h2>
            <div className="video-grid">
                {likedVideoList.map((item, idx) => (
                    <VideoCard
                        key={idx}
                        id={item.id.videoId}
                        title={item.snippet.title}
                        thumbnail={item.snippet.thumbnails.high.url}
                        channelTitle={item.snippet.channelTitle}
                        viewCount="1M"
                        publishedAt="Mock Date"
                    />
                ))}
            </div>
        </div>
    );
};

export default LikedVideos;
