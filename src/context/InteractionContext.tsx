import React, { createContext, useContext, useState, useEffect } from 'react';

interface Playlist {
    id: string;
    name: string;
    videos: string[];
}

interface InteractionContextType {
    likedVideos: string[];
    subscribedChannels: string[];
    watchHistory: string[];
    watchLater: string[];
    playlists: Playlist[];
    toggleLike: (videoId: string) => void;
    toggleSubscribe: (channelId: string) => void;
    addToHistory: (videoId: string) => void;
    toggleWatchLater: (videoId: string) => void;
    createPlaylist: (name: string) => void;
    addToPlaylist: (playlistId: string, videoId: string) => void;
    removeFromPlaylist: (playlistId: string, videoId: string) => void;
    isLiked: (videoId: string) => boolean;
    isSubscribed: (channelId: string) => boolean;
    isInWatchLater: (videoId: string) => boolean;
}

const InteractionContext = createContext<InteractionContextType | undefined>(undefined);

export const useInteraction = () => {
    const context = useContext(InteractionContext);
    if (!context) {
        throw new Error('useInteraction must be used within an InteractionProvider');
    }
    return context;
};

export const InteractionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [likedVideos, setLikedVideos] = useState<string[]>(() => {
        const saved = localStorage.getItem('likedVideos');
        return saved ? JSON.parse(saved) : [];
    });

    const [subscribedChannels, setSubscribedChannels] = useState<string[]>(() => {
        const saved = localStorage.getItem('subscribedChannels');
        return saved ? JSON.parse(saved) : [];
    });

    const [watchHistory, setWatchHistory] = useState<string[]>(() => {
        const saved = localStorage.getItem('watchHistory');
        return saved ? JSON.parse(saved) : [];
    });

    const [watchLater, setWatchLater] = useState<string[]>(() => {
        const saved = localStorage.getItem('watchLater');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('likedVideos', JSON.stringify(likedVideos));
    }, [likedVideos]);

    useEffect(() => {
        localStorage.setItem('subscribedChannels', JSON.stringify(subscribedChannels));
    }, [subscribedChannels]);

    useEffect(() => {
        localStorage.setItem('watchHistory', JSON.stringify(watchHistory));
    }, [watchHistory]);

    useEffect(() => {
        localStorage.setItem('watchLater', JSON.stringify(watchLater));
    }, [watchLater]);

    const toggleLike = (videoId: string) => {
        setLikedVideos(prev =>
            prev.includes(videoId)
                ? prev.filter(id => id !== videoId)
                : [...prev, videoId]
        );
    };

    const toggleSubscribe = (channelId: string) => {
        setSubscribedChannels(prev =>
            prev.includes(channelId)
                ? prev.filter(id => id !== channelId)
                : [...prev, channelId]
        );
    };

    const addToHistory = (videoId: string) => {
        setWatchHistory(prev => {
            const newHistory = prev.filter(id => id !== videoId);
            return [videoId, ...newHistory];
        });
    };

    const toggleWatchLater = (videoId: string) => {
        setWatchLater(prev =>
            prev.includes(videoId)
                ? prev.filter(id => id !== videoId)
                : [...prev, videoId]
        );
    };

    const isLiked = (videoId: string) => likedVideos.includes(videoId);
    const isSubscribed = (channelId: string) => subscribedChannels.includes(channelId);
    const isInWatchLater = (videoId: string) => watchLater.includes(videoId);

    // Playlists logic
    const [playlists, setPlaylists] = useState<Playlist[]>(() => {
        const saved = localStorage.getItem('playlists');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('playlists', JSON.stringify(playlists));
    }, [playlists]);

    const createPlaylist = (name: string) => {
        const newPlaylist: Playlist = {
            id: Date.now().toString(),
            name,
            videos: []
        };
        setPlaylists(prev => [...prev, newPlaylist]);
    };

    const addToPlaylist = (playlistId: string, videoId: string) => {
        setPlaylists(prev => prev.map(pl => {
            if (pl.id === playlistId) {
                if (pl.videos.includes(videoId)) return pl;
                return { ...pl, videos: [...pl.videos, videoId] };
            }
            return pl;
        }));
    };

    const removeFromPlaylist = (playlistId: string, videoId: string) => {
        setPlaylists(prev => prev.map(pl => {
            if (pl.id === playlistId) {
                return { ...pl, videos: pl.videos.filter(id => id !== videoId) };
            }
            return pl;
        }));
    };

    return (
        <InteractionContext.Provider value={{
            likedVideos,
            subscribedChannels,
            watchHistory,
            watchLater,
            playlists,
            toggleLike,
            toggleSubscribe,
            addToHistory,
            toggleWatchLater,
            createPlaylist,
            addToPlaylist,
            removeFromPlaylist,
            isLiked,
            isSubscribed,
            isInWatchLater
        }}>
            {children}
        </InteractionContext.Provider>
    );
};
