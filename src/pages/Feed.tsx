import VideoCard from '../components/VideoCard';
import './Feed.css';
import reactCodingImg from '../assets/images/react_coding.png';
import vscodeSetupImg from '../assets/images/vscode_setup.png';
import kamchatkaImg from '../assets/images/kamchatka_nature.png';
import minimalistUiImg from '../assets/images/minimalist_ui.png';
import appleProcessorImg from '../assets/images/apple_processor.png';
import internetHistoryImg from '../assets/images/internet_history.png';

const MOCK_VIDEOS = [
    {
        id: '1',
        title: 'Как создать YouTube-клон на React + TypeScript',
        thumbnail: reactCodingImg,
        channelTitle: 'Техно Мир',
        viewCount: '1.2 млн',
        publishedAt: '2 дня назад',
    },
    {
        id: '2',
        title: 'Лучшие настройки VS Code в 2026 году',
        thumbnail: vscodeSetupImg,
        channelTitle: 'Код и Кофе',
        viewCount: '850 тыс.',
        publishedAt: '5 часов назад',
    },
    {
        id: '3',
        title: 'Путешествие по Камчатке: Дикая природа',
        thumbnail: kamchatkaImg,
        channelTitle: 'National Geog',
        viewCount: '3.4 млн',
        publishedAt: '1 месяц назад',
    },
    {
        id: '4',
        title: 'Минимализм в дизайне интерфейсов',
        thumbnail: minimalistUiImg,
        channelTitle: 'Дизайн Ревью',
        viewCount: '45 тыс.',
        publishedAt: '12 часов назад',
    },
    {
        id: '5',
        title: 'Обзор нового процессора от Apple',
        thumbnail: appleProcessorImg,
        channelTitle: 'Гаджет Тайм',
        viewCount: '2.1 млн',
        publishedAt: '1 неделю назад',
    },
    {
        id: '6',
        title: 'История создания интернета',
        thumbnail: internetHistoryImg,
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
