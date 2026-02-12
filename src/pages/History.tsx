import { History as HistoryIcon } from 'lucide-react';
import { useInteraction } from '../context/InteractionContext';
import { videos } from '../utils/mockData';
import VideoCard from '../components/VideoCard';

const History = () => {
    const { watchHistory } = useInteraction();

    const historyVideos = watchHistory.map(historyId =>
        videos.find(v => v.id.videoId === historyId)
    ).filter(v => v !== undefined);

    if (historyVideos.length === 0) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh', color: 'white' }}>
                <HistoryIcon size={100} style={{ marginBottom: '20px', color: '#FC1503' }} />
                <h2>История просмотра</h2>
                <p>Видео, которые вы смотрели, будут здесь.</p>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ color: 'white', marginBottom: '20px' }}>История просмотра</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                {historyVideos.map((item: any, idx) => (
                    <VideoCard
                        key={idx}
                        id={item.id.videoId}
                        title={item.snippet.title}
                        thumbnail={item.snippet.thumbnails.high.url}
                        channelTitle={item.snippet.channelTitle}
                        viewCount="100 тыс."
                        publishedAt="1 день назад" // Mock data doesn't have localized date yet generally
                    />
                ))}
            </div>
        </div>
    );
};

export default History;
