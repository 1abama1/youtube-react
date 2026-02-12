import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import rickRollVideo from '../assets/videos/rickroll.mp4';
import './VideoCard.css';
import { MoreVertical, Clock, ListPlus } from 'lucide-react';
import { useInteraction } from '../context/InteractionContext';
import PlaylistModal from './PlaylistModal';

interface VideoCardProps {
    id: string;
    title: string;
    thumbnail: string;
    channelTitle: string;
    viewCount: string;
    publishedAt: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ id, title, thumbnail, channelTitle, viewCount, publishedAt }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [shouldPlay, setShouldPlay] = useState(false);
    const [isVideoActive, setIsVideoActive] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showPlaylistModal, setShowPlaylistModal] = useState(false);
    const hoverTimerRef = useRef<any>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const navigate = useNavigate();

    const { addToHistory, toggleWatchLater, isInWatchLater } = useInteraction();
    const isWatchLater = isInWatchLater(id);

    useEffect(() => {
        if (shouldPlay && videoRef.current) {
            videoRef.current.play().catch(() => { });
        } else if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }, [shouldPlay]);

    useEffect(() => {
        if (isHovered) {
            // YouTube-style delay before starting playback (500ms)
            // This also prevents "play() interrupted by pause()" errors
            hoverTimerRef.current = setTimeout(() => {
                setShouldPlay(true);
            }, 500);
        } else {
            if (hoverTimerRef.current) {
                clearTimeout(hoverTimerRef.current);
            }
            setShouldPlay(false);
            setIsVideoActive(false);
        }

        return () => {
            if (hoverTimerRef.current) {
                clearTimeout(hoverTimerRef.current);
            }
        };
    }, [isHovered]);

    // Close menu when clicking outside (simple implementation for now, ideally use a click-outside hook)
    useEffect(() => {
        const closeMenu = () => setShowMenu(false);
        if (showMenu) {
            window.addEventListener('click', closeMenu);
        }
        return () => window.removeEventListener('click', closeMenu);
    }, [showMenu]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleCardClick = () => {
        addToHistory(id);
        navigate(`/video/${id}`);
    };

    const handleMenuClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    };

    const handleAddToPlaylistClick = () => {
        setShowMenu(false);
        setShowPlaylistModal(true);
    };

    return (
        <>
            <motion.div
                className="video-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleCardClick}
            >
                <div className="thumbnail-wrapper">
                    <img
                        src={thumbnail}
                        alt={title}
                        className={`thumbnail ${isVideoActive ? 'hidden' : ''}`}
                    />
                    <div className={`video-preview-wrapper ${isVideoActive ? 'visible' : ''}`}>
                        <video
                            ref={videoRef}
                            src={rickRollVideo}
                            muted
                            playsInline
                            preload="metadata"
                            className="video-preview"
                            onPlay={() => setIsVideoActive(true)}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <span className="duration-badge">12:34</span>
                </div>
                <div className="video-info">
                    <div className="channel-avatar">
                        {channelTitle.charAt(0)}
                    </div>
                    <div className="video-text">
                        <h3 className="video-title">{title}</h3>
                        <p className="channel-name">{channelTitle}</p>
                        <p className="video-stats">
                            {viewCount} просмотров • {publishedAt}
                        </p>
                    </div>
                    <div className="more-options-container">
                        <button className="more-options-btn" onClick={handleMenuClick}>
                            <MoreVertical size={20} />
                        </button>
                        {showMenu && (
                            <div className="menu-dropdown" onClick={(e) => e.stopPropagation()}>
                                <button className="menu-item" onClick={() => {
                                    toggleWatchLater(id);
                                    setShowMenu(false);
                                }}>
                                    <Clock size={18} />
                                    {isWatchLater ? 'Удалить из "Смотреть позже"' : 'Смотреть позже'}
                                </button>
                                <button className="menu-item" onClick={(e) => {
                                    e.stopPropagation();
                                    handleAddToPlaylistClick();
                                }}>
                                    <ListPlus size={18} />
                                    Добавить в плейлист
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
            {showPlaylistModal && (
                <PlaylistModal
                    videoId={id}
                    onClose={() => setShowPlaylistModal(false)}
                />
            )}
        </>
    );
};

export default VideoCard;
