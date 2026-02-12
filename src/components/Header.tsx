import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Menu, Bell, Video, User } from 'lucide-react';
import './Header.css';

interface HeaderProps {
    toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
        }
    };

    return (
        <header className="header glass-morphism">
            <div className="header-left">
                <button className="icon-btn" onClick={toggleSidebar}>
                    <Menu size={24} />
                </button>
                <div className="logo" onClick={() => navigate('/')}>
                    <div className="logo-icon"></div>
                    <span>YouTube</span>
                </div>
            </div>

            <form className="header-center" onSubmit={handleSearch}>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Введите запрос"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit" className="search-btn">
                        <Search size={20} />
                    </button>
                </div>
            </form>

            <div className="header-right">
                <button className="icon-btn hide-mobile">
                    <Video size={24} />
                </button>
                <button className="icon-btn hide-mobile">
                    <Bell size={24} />
                </button>
                <button className="profile-btn">
                    <User size={24} />
                </button>
            </div>
        </header>
    );
};

export default Header;
