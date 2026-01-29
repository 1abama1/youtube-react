import { Home, Compass, PlaySquare, Clock, ThumbsUp, Library, History, Film, Gamepad2, Trophy, Music2 } from 'lucide-react';
import './Sidebar.css';

const categories = [
    { name: 'Главная', icon: <Home size={20} />, id: 'home' },
    { name: 'Тренды', icon: <Compass size={20} />, id: 'trending' },
    { name: 'Подписки', icon: <PlaySquare size={20} />, id: 'subscriptions' },
];

const library = [
    { name: 'Библиотека', icon: <Library size={20} />, id: 'library' },
    { name: 'История', icon: <History size={20} />, id: 'history' },
    { name: 'Просмотрено', icon: <Clock size={20} />, id: 'watch-later' },
    { name: 'Понравилось', icon: <ThumbsUp size={20} />, id: 'liked' },
];

const explore = [
    { name: 'Музыка', icon: <Music2 size={20} />, id: 'music' },
    { name: 'Игры', icon: <Gamepad2 size={20} />, id: 'gaming' },
    { name: 'Фильмы', icon: <Film size={20} />, id: 'movies' },
    { name: 'Спорт', icon: <Trophy size={20} />, id: 'sports' },
];

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-section">
                {categories.map((cat) => (
                    <div key={cat.id} className="sidebar-item active-item">
                        <span className="sidebar-icon">{cat.icon}</span>
                        <span className="sidebar-text">{cat.name}</span>
                    </div>
                ))}
            </div>
            <hr className="sidebar-divider" />
            <div className="sidebar-section">
                <h3 className="section-title">Вы</h3>
                {library.map((item) => (
                    <div key={item.id} className="sidebar-item">
                        <span className="sidebar-icon">{item.icon}</span>
                        <span className="sidebar-text">{item.name}</span>
                    </div>
                ))}
            </div>
            <hr className="sidebar-divider" />
            <div className="sidebar-section">
                <h3 className="section-title">Навигатор</h3>
                {explore.map((item) => (
                    <div key={item.id} className="sidebar-item">
                        <span className="sidebar-icon">{item.icon}</span>
                        <span className="sidebar-text">{item.name}</span>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
