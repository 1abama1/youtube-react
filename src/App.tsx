import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './pages/Feed';
import VideoDetail from './pages/VideoDetail';
import SearchFeed from './pages/SearchFeed';
import './App.css';

function App() {
  return (
    <Router basename="/youtube-react">
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="page-wrapper">
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/video/:id" element={<VideoDetail />} />
              <Route path="/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
