import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { videos } from '../utils/mockData';
import { CheckCircle, ThumbsUp, ThumbsDown, UserCheck } from 'lucide-react';
import VideoCard from '../components/VideoCard';
import CustomPlayer from '../components/CustomPlayer';
import { useInteraction } from '../context/InteractionContext';
import rickRollVideo from '../assets/videos/rickroll.mp4';
import './VideoDetail.css';

const VideoDetail = () => {
    const { id } = useParams();
    const [videoDetail, setVideoDetail] = useState<any>(null);
    const [relatedVideos, setRelatedVideos] = useState<any[]>([]);

    const { toggleLike, isLiked, toggleSubscribe, isSubscribed } = useInteraction();

    useEffect(() => {
        const foundVideo = videos.find(v => v.id.videoId === id) || videos[0];
        setVideoDetail(foundVideo);
        setRelatedVideos(videos);
    }, [id]);

    if (!videoDetail?.snippet) return <div>Загрузка...</div>;

    const { snippet: { title, channelId, channelTitle, description }, id: { videoId } } = videoDetail;
    const liked = isLiked(videoId);
    const subscribed = isSubscribed(channelId);

    return (
        <div className="video-detail-container" style={{ minHeight: '95vh', padding: '20px' }}>
            <div className="video-content">
                <div className="player-wrapper">
                    <CustomPlayer src={rickRollVideo} autoPlay={true} />
                </div>
                <h5 className="detail-title">
                    {title}
                </h5>
                <div className="video-meta">
                    <Link to={`/channel/${channelId}`} style={{ textDecoration: 'none' }}>
                        <div className="channel-info">
                            <div className="channel-avatar-large">
                                {channelTitle.charAt(0)}
                            </div>
                            <div className="channel-details">
                                <h6 className="channel-name-detail" style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    {channelTitle}
                                    <CheckCircle size={14} color="gray" />
                                </h6>
                                <span className="subscriber-count">1.2 млн подписчиков</span>
                            </div>
                        </div>
                    </Link>
                    <div className="video-actions">
                        <button
                            className={`subscribe-btn ${subscribed ? 'subscribed' : ''}`}
                            onClick={(e) => {
                                e.preventDefault();
                                toggleSubscribe(channelId);
                            }}
                        >
                            {subscribed ? (
                                <>
                                    <UserCheck size={18} style={{ marginRight: '5px' }} /> Вы подписаны
                                </>
                            ) : (
                                <>
                                    Подписаться
                                </>
                            )}
                        </button>
                        <button
                            className={`action-btn ${liked ? 'active' : ''}`}
                            onClick={() => toggleLike(videoId)}
                        >
                            <ThumbsUp size={20} fill={liked ? "white" : "none"} />
                            {liked ? "Вам понравилось" : "Нравится"}
                        </button>
                        <button className="action-btn">
                            <ThumbsDown size={20} />
                        </button>
                    </div>
                </div>
                <div className="video-description">
                    <p className="description-text">{description}</p>
                </div>
            </div>

            <div className="related-videos">
                {relatedVideos.map((item, idx) => (
                    <VideoCard
                        key={idx}
                        id={item.id.videoId}
                        title={item.snippet.title}
                        thumbnail={item.snippet.thumbnails.high.url}
                        channelTitle={item.snippet.channelTitle}
                        viewCount="100 тыс."
                        publishedAt="1 день назад"
                    />
                ))}
            </div>
        </div>
    );
};

export default VideoDetail;
