import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import rickRollVideo from '../assets/videos/rickroll.mp4';
import './VideoCard.css';

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
    const hoverTimerRef = useRef<any>(null);
    const navigate = useNavigate();
    const Player = ReactPlayer as any;

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

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleCardClick = () => {
        navigate(`/video/${id}`);
    };

    return (
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
                    <Player
                        url={rickRollVideo}
                        playing={shouldPlay}
                        muted
                        playsinline
                        preload="metadata"
                        width="100%"
                        height="100%"
                        className="video-preview"
                        onReady={() => console.log(`[VideoCard ${id}] Player Ready`)}
                        onStart={() => {
                            console.log(`[VideoCard ${id}] Video Started Playing`);
                            setIsVideoActive(true);
                        }}
                        onError={(e: any) => console.error(`[VideoCard ${id}] Player Error:`, e)}
                        config={{
                            file: {
                                attributes: {
                                    muted: true,
                                    playsInline: true,
                                    style: {
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }
                                }
                            }
                        }}
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
            </div>
        </motion.div>
    );
};

export default VideoCard;
