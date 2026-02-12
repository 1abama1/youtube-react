import { useEffect, useState } from 'react';
import VideoCard from '../components/VideoCard';
import { videos } from '../utils/mockData';
import './Feed.css';

interface FeedProps {
    category?: string;
}

const Feed = ({ category = "home" }: FeedProps) => {
    const [selectedCategory, setSelectedCategory] = useState(category);
    const [videoList, setVideoList] = useState<any[]>([]);

    useEffect(() => {
        setSelectedCategory(category);

        // In a real app, fetch based on category. using mock data for now.
        // If category is specific, could filter mock data.
        // For now, just shuffle or show same videos.
        setVideoList(videos);
    }, [category]);

    return (
        <div className="feed-container">
            <h2 style={{ padding: '0 16px', color: 'white', marginBottom: '20px', textTransform: 'capitalize' }}>
                {category === 'home' ? 'Рекомендации' : category} <span style={{ color: '#FC1503' }}>видео</span>
            </h2>
            <div className="video-grid">
                {videoList.map((item, idx) => (
                    <VideoCard
                        key={idx}
                        id={item.id.videoId}
                        title={item.snippet.title}
                        thumbnail={item.snippet.thumbnails.high.url}
                        channelTitle={item.snippet.channelTitle}
                        viewCount="1 млн" // Mock view count
                        publishedAt="1 день назад" // Mock date
                    />
                ))}
                {/* Duplicate to fill grid */}
                {videoList.map((item, idx) => (
                    <VideoCard
                        key={`dup-${idx}`}
                        id={item.id.videoId}
                        title={item.snippet.title}
                        thumbnail={item.snippet.thumbnails.high.url}
                        channelTitle={item.snippet.channelTitle}
                        viewCount="500 тыс."
                        publishedAt="2 дня назад"
                    />
                ))}
            </div>
        </div>
    );
};

export default Feed;
