import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { ThumbsUp, Share2, MoreHorizontal } from 'lucide-react';
import VideoCard from '../components/VideoCard';
import rickRollVideo from '../assets/videos/Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster).mp4';
import './VideoDetail.css';

const RELATED_VIDEOS = [
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
];

const VideoDetail = () => {
    const { id } = useParams();
    const Player = ReactPlayer as any;

    return (
        <div className="video-detail-container">
            <div className="video-content">
                <div className="player-wrapper">
                    <Player
                        url={rickRollVideo}
                        className="react-player"
                        width="100%"
                        height="100%"
                        controls
                        playing
                    />
                </div>
                <h1 className="detail-title">Как создать YouTube-клон на React + TypeScript (Часть {id})</h1>
                <div className="video-meta">
                    <div className="channel-info">
                        <div className="channel-avatar">Т</div>
                        <div className="channel-details">
                            <h4 className="channel-name-detail">Техно Мир</h4>
                            <p className="subscriber-count">1.4 млн подписчиков</p>
                        </div>
                        <button className="subscribe-btn">Подписаться</button>
                    </div>
                    <div className="video-actions">
                        <button className="action-btn"><ThumbsUp size={20} /> 125К</button>
                        <button className="action-btn"><Share2 size={20} /> Поделиться</button>
                        <button className="action-btn hide-mobile"><MoreHorizontal size={20} /></button>
                    </div>
                </div>
                <div className="video-description glass-morphism">
                    <p className="description-text">
                        В этом видео мы разберем основные принципы создания современных интерфейсов на React.
                        Мы изучим, как использовать TypeScript для повышения надежности кода и Vite для быстрой сборки.
                        #react #typescript #webdev
                    </p>
                </div>
                <div className="comments-section">
                    <h3>142 комментария</h3>
                    <div className="add-comment">
                        <div className="user-avatar-small">A</div>
                        <input type="text" placeholder="Введите комментарий..." />
                    </div>
                </div>
            </div>
            <div className="related-videos">
                <h3 className="section-title">Похожие видео</h3>
                {RELATED_VIDEOS.map((video) => (
                    <VideoCard key={video.id} {...video} />
                ))}
            </div>
        </div>
    );
};

export default VideoDetail;
