import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import './Feed.css'; // Reuse grid styles

const SearchFeed = () => {
    const { searchTerm } = useParams();

    const SEARCH_RESULTS = [
        {
            id: 'S1',
            title: `Результаты поиска для: ${searchTerm}`,
            thumbnail: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=600&auto=format&fit=crop',
            channelTitle: 'Поиск Видео',
            viewCount: '100',
            publishedAt: 'Только что',
        },
        {
            id: '1',
            title: 'Как создать YouTube-клон на React + TypeScript',
            thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop',
            channelTitle: 'Техно Мир',
            viewCount: '1.2 млн',
            publishedAt: '2 дня назад',
        },
    ];

    return (
        <div className="feed-container">
            <h2 style={{ marginBottom: '20px' }}>Результаты поиска для: <span style={{ color: 'var(--accent-blue)' }}>{searchTerm}</span></h2>
            <div className="video-grid">
                {SEARCH_RESULTS.map((video) => (
                    <VideoCard key={video.id} {...video} />
                ))}
            </div>
        </div>
    );
};

export default SearchFeed;
