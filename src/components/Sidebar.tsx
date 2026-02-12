import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, PlaySquare, Clock, ThumbsUp, Library, History, Film, Gamepad2, Trophy, Music2 } from 'lucide-react';
import { useInteraction } from '../context/InteractionContext';
import { videos } from '../utils/mockData';
import './Sidebar.css';

const categories = [
    { name: 'Главная', icon: <Home size={20} />, id: 'home', path: '/' },
    { name: 'Тренды', icon: <Compass size={20} />, id: 'trending', path: '/trending' },
    { name: 'Подписки', icon: <PlaySquare size={20} />, id: 'subscriptions', path: '/subscriptions' },
];

const library = [
    { name: 'Библиотека', icon: <Library size={20} />, id: 'library', path: '/library' },
    { name: 'История', icon: <History size={20} />, id: 'history', path: '/history' },
    { name: 'Смотреть позже', icon: <Clock size={20} />, id: 'watch-later', path: '/watch-later' },
    { name: 'Понравилось', icon: <ThumbsUp size={20} />, id: 'liked', path: '/liked' },
];

const explore = [
    { name: 'Музыка', icon: <Music2 size={20} />, id: 'music', path: '/music' },
    { name: 'Игры', icon: <Gamepad2 size={20} />, id: 'gaming', path: '/gaming' },
    { name: 'Фильмы', icon: <Film size={20} />, id: 'movies', path: '/movies' },
    { name: 'Спорт', icon: <Trophy size={20} />, id: 'sports', path: '/sports' },
];

interface SidebarProps {
    isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
    const location = useLocation();
    const currentPath = location.pathname;
    const { subscribedChannels } = useInteraction();

    // extract unique subscribed channels info from mock data
    const subscribedList = videos
        .filter(v => subscribedChannels.includes(v.snippet.channelId))
        .reduce((acc, current) => {
            const x = acc.find(item => item.snippet.channelId === current.snippet.channelId);
            if (!x) {
                return acc.concat([current]);
            } else {
                return acc;
            }
        }, [] as typeof videos);


    return (
        <aside className={`sidebar ${!isOpen ? 'collapsed' : ''}`}>
            <div className="sidebar-section">
                {categories.map((cat) => (
                    <Link key={cat.id} to={cat.path} style={{ textDecoration: 'none' }}>
                        <div className={`sidebar-item ${currentPath === cat.path || (cat.path === '/' && currentPath === '/') ? 'active-item' : ''}`}>
                            <span className="sidebar-icon">{cat.icon}</span>
                            <span className="sidebar-text">{cat.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
            <hr className="sidebar-divider" />

            {subscribedList.length > 0 && (
                <>
                    <div className="sidebar-section">
                        <h3 className="section-title">Подписки</h3>
                        {subscribedList.map((video) => (
                            <Link key={video.snippet.channelId} to={`/channel/${video.snippet.channelId}`} style={{ textDecoration: 'none' }}>
                                <div className="sidebar-item">
                                    <span className="sidebar-icon">
                                        <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#555', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.8rem' }}>
                                            {video.snippet.channelTitle.charAt(0)}
                                        </div>
                                    </span>
                                    <span className="sidebar-text">{video.snippet.channelTitle}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <hr className="sidebar-divider" />
                </>
            )}

            <div className="sidebar-section">
                <h3 className="section-title">Вы</h3>
                {library.map((item) => (
                    <Link key={item.id} to={item.path} style={{ textDecoration: 'none' }}>
                        <div className={`sidebar-item ${currentPath === item.path ? 'active-item' : ''}`}>
                            <span className="sidebar-icon">{item.icon}</span>
                            <span className="sidebar-text">{item.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
            <hr className="sidebar-divider" />
            <div className="sidebar-section">
                <h3 className="section-title">Навигатор</h3>
                {explore.map((item) => (
                    <Link key={item.id} to={item.path} style={{ textDecoration: 'none' }}>
                        <div className={`sidebar-item ${currentPath === item.path ? 'active-item' : ''}`}>
                            <span className="sidebar-icon">{item.icon}</span>
                            <span className="sidebar-text">{item.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
