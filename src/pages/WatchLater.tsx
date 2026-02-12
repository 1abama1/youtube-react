import { Clock } from 'lucide-react';
import { useInteraction } from '../context/InteractionContext';
import { videos } from '../utils/mockData';
import VideoCard from '../components/VideoCard';

const WatchLater = () => {
    const { watchLater } = useInteraction();

    const watchLaterVideos = watchLater.map(id => videos.find(v => v.id.videoId === id)).filter(v => v !== undefined);

    if (watchLaterVideos.length === 0) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh', color: 'white' }}>
                <Clock size={100} style={{ marginBottom: '20px', color: '#FC1503' }} />
                <h2>Смотреть позже</h2>
                <p>Сохраняйте видео, чтобы посмотреть позже.</p>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ color: 'white', marginBottom: '20px' }}>Смотреть позже</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                {watchLaterVideos.map((item: any, idx) => (
                    <VideoCard
                        key={idx}
                        id={item.id.videoId}
                        title={item.snippet.title}
                        thumbnail={item.snippet.thumbnails.high.url}
                        channelTitle={item.snippet.channelTitle}
                        viewCount="100 тыс."
                        publishedAt="1 день назад"
                    />
                ))}
            </div>
        </div>
    );
};

export default WatchLater;
