import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate,Link } from 'react-router-dom';
import VideoList from './Components/VideoList';
import VideoPlayer from './Components/VideoPlayer';
import Pagination from './Components/Pagination';
import { setVideos, selectVideo } from './Redux/Action';
import axios from 'axios';
import "./App.css"


const API_URL = 'https://internship-service.onrender.com/videos';

const App = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos.videos);
  const selectedVideo = useSelector((state) => state.videos.selectedVideo);
  const currentPage = useSelector((state) => state.videos.currentPage);
  const totalPages = useSelector((state) => state.videos.totalPages);
  console.log(totalPages,currentPage)

  useEffect(() => {
    fetchVideos(0);
  }, []);

  const fetchVideos = async (page) => {
    try {
      const response = await axios.get(`${API_URL}?page=${page}`);
      const { posts,postId } = response.data.data;
      console.log(postId)
      const totalPages = Math.ceil(posts.length / 4);
      dispatch(setVideos(posts, page, totalPages));
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };



  const handleSelectVideo = (post) => {
    console.log('Selected Video:', post); 
    dispatch(selectVideo(post));
  };
  
  const handlePageChange = (newPage) => {
    fetchVideos(newPage);
  };

  return (
    <Router>
      <div className="container ">
      <nav className="bg-gray-800 p-4 text-white">
      <div className="navbar">
      <a href="/">Home</a>
      <a href="/video">Video</a>
     
    </div>
        </nav>
        <h1 className="text-4xl font-bold mb-4"></h1>
        <Routes>
          <Route
            path="/"
            element={(
              <div>
                <VideoList videos={videos} onSelectVideo={handleSelectVideo} />
                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
              </div>
            )}
          />
          <Route
            path="/video"
            element={<VideoPlayer post={selectedVideo} />}
          />
          
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
