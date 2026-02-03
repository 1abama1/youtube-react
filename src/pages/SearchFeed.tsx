import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import internetHistoryImg from '../assets/images/internet_history.png';
import reactCodingImg from '../assets/images/react_coding.png';
import './Feed.css'; // Reuse grid styles

const SearchFeed = () => {
    const { searchTerm } = useParams();

    const SEARCH_RESULTS = [
        {
            id: 'S1',
            title: `Результаты поиска для: ${searchTerm}`,
            thumbnail: internetHistoryImg,
            channelTitle: 'Поиск Видео',
            viewCount: '100',
            publishedAt: 'Только что',
        },
        {
            id: '1',
            title: 'Как создать YouTube-клон на React + TypeScript',
            thumbnail: reactCodingImg,
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
