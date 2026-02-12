import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useInteraction } from '../context/InteractionContext';

interface PlaylistModalProps {
    videoId: string;
    onClose: () => void;
}

const PlaylistModal: React.FC<PlaylistModalProps> = ({ videoId, onClose }) => {
    const { playlists, addToPlaylist, removeFromPlaylist, createPlaylist } = useInteraction();
    const [newPlaylistName, setNewPlaylistName] = useState('');

    const handleCreatePlaylist = () => {
        if (newPlaylistName.trim()) {
            createPlaylist(newPlaylistName);
            setNewPlaylistName('');
        }
    };

    // Prevent scrolling when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="modal-title">Сохранить в...</h3>
                    <button className="close-btn" onClick={onClose}>✕</button>
                </div>
                <div className="playlist-list">
                    {playlists.map(pl => (
                        <div key={pl.id} className="playlist-item" onClick={() => {
                            if (pl.videos.includes(videoId)) {
                                removeFromPlaylist(pl.id, videoId);
                            } else {
                                addToPlaylist(pl.id, videoId);
                            }
                        }}>
                            <input
                                type="checkbox"
                                checked={pl.videos.includes(videoId)}
                                readOnly
                                style={{ accentColor: '#3ea6ff', width: '20px', height: '20px', cursor: 'pointer' }}
                            />
                            <span>{pl.name}</span>
                        </div>
                    ))}
                </div>
                <div className="create-playlist-form">
                    <input
                        type="text"
                        className="playlist-input"
                        placeholder="Новый плейлист"
                        value={newPlaylistName}
                        onChange={(e) => setNewPlaylistName(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleCreatePlaylist()}
                    />
                    <button className="create-btn" onClick={handleCreatePlaylist}>Создать</button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default PlaylistModal;
