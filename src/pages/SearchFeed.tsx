import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { videos } from '../utils/mockData';
import './Feed.css'; // Reusing Feed.css for grid

const SearchFeed = () => {
    const [findVideos, setFindVideos] = useState<any[]>([]);
    const { searchTerm } = useParams();

    useEffect(() => {
        // Mock search logic
        const lowerSearch = searchTerm?.toLowerCase() || '';
        const filtered = videos.filter(v =>
            v.snippet.title.toLowerCase().includes(lowerSearch) ||
            v.snippet.channelTitle.toLowerCase().includes(lowerSearch)
        );
        // If empty, show all but with a message
        if (filtered.length === 0) {
            setFindVideos(videos); // Just show something
        } else {
            setFindVideos(filtered);
        }
    }, [searchTerm]);

    return (
        <div style={{ padding: '20px', minHeight: '95vh' }}>
            <h2 style={{ fontWeight: 900, color: 'white', marginBottom: '3px' }}>
                Результаты поиска для <span style={{ color: '#FC1503' }}>{searchTerm}</span>
            </h2>
            <div className="video-grid">
                {findVideos.map((item, idx) => (
                    <VideoCard
                        key={idx}
                        id={item.id.videoId}
                        title={item.snippet.title}
                        thumbnail={item.snippet.thumbnails.high.url}
                        channelTitle={item.snippet.channelTitle}
                        viewCount="1M"
                        publishedAt="Mock Date"
                    />
                ))}
            </div>
        </div>
    );
};

export default SearchFeed;
