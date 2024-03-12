// VideoList.js
import React from 'react';
import { Link } from 'react-router-dom';

const VideoList = ({ videos, onSelectVideo }) => {
  return (
    <div className="video-list">
      {videos.map((video) => (
        <div key={video.postId} className="video-card mb-4">
          <Link to="/video" className="video-link" onClick={() => onSelectVideo(video)}>
            <div className="video-card-inner">
              <img src={video.submission.thumbnail} alt={video.submission.title} className="video-thumbnail" />
              <div className="video-details">
                <h2 className="video-title">{video.submission.title}</h2>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
