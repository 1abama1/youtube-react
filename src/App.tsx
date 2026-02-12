import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './pages/Feed';
import VideoDetail from './pages/VideoDetail';
import SearchFeed from './pages/SearchFeed';
import Library from './pages/Library';
import History from './pages/History';
import WatchLater from './pages/WatchLater';
import LikedVideos from './pages/LikedVideos';
import './App.css';

import { InteractionProvider } from './context/InteractionContext';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <InteractionProvider>
      <Router basename="/youtube-react">
        <div className="app-container">
          <Header toggleSidebar={toggleSidebar} />
          <div className="main-content">
            <Sidebar isOpen={isSidebarOpen} />
            <div className="page-wrapper">
              <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/trending" element={<Feed category="trending" />} />
                <Route path="/subscriptions" element={<Feed category="subscriptions" />} />
                <Route path="/library" element={<Library />} />
                <Route path="/history" element={<History />} />
                <Route path="/watch-later" element={<WatchLater />} />
                <Route path="/liked" element={<LikedVideos />} />
                <Route path="/music" element={<Feed category="music" />} />
                <Route path="/gaming" element={<Feed category="gaming" />} />
                <Route path="/movies" element={<Feed category="movies" />} />
                <Route path="/sports" element={<Feed category="sports" />} />
                <Route path="/video/:id" element={<VideoDetail />} />
                <Route path="/search/:searchTerm" element={<SearchFeed />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </InteractionProvider>
  );
}

export default App;
