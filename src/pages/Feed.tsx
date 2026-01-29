import VideoCard from '../components/VideoCard';
import './Feed.css';

const MOCK_VIDEOS = [
    {
        id: '1',
        title: 'Как создать YouTube-клон на React + TypeScript',
        thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop',
        channelTitle: 'Техно Мир',
        viewCount: '1.2 млн',
        publishedAt: '2 дня назад',
    },
    {
        id: '2',
        title: 'Лучшие настройки VS Code в 2026 году',
        thumbnail: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop',
        channelTitle: 'Код и Кофе',
        viewCount: '850 тыс.',
        publishedAt: '5 часов назад',
    },
    {
        id: '3',
        title: 'Путешествие по Камчатке: Дикая природа',
        thumbnail: 'https://images.unsplash.com/photo-1533240332313-0dbf26453950?q=80&w=600&auto=format&fit=crop',
        channelTitle: 'National Geog',
        viewCount: '3.4 млн',
        publishedAt: '1 месяц назад',
    },
    {
        id: '4',
        title: 'Минимализм в дизайне интерфейсов',
        thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop',
        channelTitle: 'Дизайн Ревью',
        viewCount: '45 тыс.',
        publishedAt: '12 часов назад',
    },
    {
        id: '5',
        title: 'Обзор нового процессора от Apple',
        thumbnail: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=600&auto=format&fit=crop',
        channelTitle: 'Гаджет Тайм',
        viewCount: '2.1 млн',
        publishedAt: '1 неделю назад',
    },
    {
        id: '6',
        title: 'История создания интернета',
        thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
        channelTitle: 'Наука Сегодня',
        viewCount: '127 тыс.',
        publishedAt: '3 дня назад',
    },
];

const Feed = () => {
    return (
        <div className="feed-container">
            <div className="category-bar">
                {['Все', 'Музыка', 'Игры', 'Фильмы', 'Новости', 'Спорт', 'Технологии', 'Дизайн'].map((cat) => (
                    <button key={cat} className="category-pill">{cat}</button>
                ))}
            </div>
            <div className="video-grid">
                {MOCK_VIDEOS.map((video) => (
                    <VideoCard key={video.id} {...video} />
                ))}
            </div>
        </div>
    );
};

export default Feed;
