import { Library as LibraryIcon, ListVideo } from 'lucide-react';
import { useInteraction } from '../context/InteractionContext';
import { videos } from '../utils/mockData';
import VideoCard from '../components/VideoCard';
import { useState } from 'react';

const Library = () => {
    const { playlists } = useInteraction();
    const [selectedPlaylistId, setSelectedPlaylistId] = useState<string | null>(null);

    const selectedPlaylist = playlists.find(p => p.id === selectedPlaylistId);

    // Helper to get video data for playlist preview
    const getPlaylistCover = (videoIds: string[]) => {
        if (videoIds.length === 0) return null;
        const video = videos.find(v => v.id.videoId === videoIds[0]);
        return video ? video.snippet.thumbnails.high.url : null;
    };

    if (playlists.length === 0) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh', color: 'white' }}>
                <LibraryIcon size={100} style={{ marginBottom: '20px', color: '#FC1503' }} />
                <h2>Библиотека</h2>
                <p>Здесь будут ваши плейлисты.</p>
            </div>
        );
    }

    if (selectedPlaylist) {
        const playlistVideos = selectedPlaylist.videos.map(vid => videos.find(v => v.id.videoId === vid)).filter(v => v !== undefined);
        return (
            <div style={{ padding: '20px' }}>
                <button onClick={() => setSelectedPlaylistId(null)} style={{ color: '#aaa', marginBottom: '20px', cursor: 'pointer' }}>← Назад к библиотеке</button>
                <h2 style={{ color: 'white', marginBottom: '20px' }}>{selectedPlaylist.name}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                    {playlistVideos.map((item: any, idx) => (
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
        )
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ color: 'white', marginBottom: '20px' }}>Ваши плейлисты</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
                {playlists.map(playlist => {
                    const cover = getPlaylistCover(playlist.videos);
                    return (
                        <div key={playlist.id} onClick={() => setSelectedPlaylistId(playlist.id)} style={{ cursor: 'pointer' }}>
                            <div style={{
                                aspectRatio: '16/9',
                                backgroundColor: '#383838',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                                {cover ? (
                                    <img src={cover} alt={playlist.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    <ListVideo size={48} color="#aaa" />
                                )}
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                    background: 'rgba(0,0,0,0.8)',
                                    color: 'white',
                                    padding: '4px 8px',
                                    borderTopLeftRadius: '8px',
                                    fontSize: '0.9rem'
                                }}>
                                    {playlist.videos.length} видео
                                </div>
                            </div>
                            <h3 style={{ color: 'white', marginTop: '10px', fontSize: '1rem' }}>{playlist.name}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Library;
