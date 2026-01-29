import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
    return (
        <motion.div
            className="video-card"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
        >
            <Link to={`/video/${id}`}>
                <div className="thumbnail-wrapper">
                    <img src={thumbnail} alt={title} className="thumbnail" />
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
            </Link>
        </motion.div>
    );
};

export default VideoCard;
