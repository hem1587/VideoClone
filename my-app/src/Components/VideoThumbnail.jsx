import React from 'react';

const VideoThumbnail = ({ video, onSelectVideo }) => {
  const handleVideoClick = () => {
    onSelectVideo(video);
  };

  return (
    <div onClick={handleVideoClick}>
      <img src={video.submission.thumbnail} alt={video.submission.title} />
      <p>{video.submission.title}</p>
    </div>
  );
};

export default VideoThumbnail;