import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likeVideo, commentVideo } from '../Redux/Action';

const VideoPlayer = () => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const dispatch = useDispatch();

  const post = useSelector((state) => state.videos.selectedVideo);

  useEffect(() => {
    const storedLikes = localStorage.getItem(`likes_${likes}`);
    const storedComments = localStorage.getItem(`comments_${comments}`);

    setLikes(storedLikes ? parseInt(storedLikes, 10) : 0);
    setComments(storedComments ? parseInt(storedComments, 10) : 0);
  }, []);

  const handleLike = () => {
    setLikes((prevLikes) => {
      const newLikes = prevLikes + 1;
      localStorage.setItem(`likes_${likes}`, newLikes.toString());
      return newLikes;
    });
  };

  const handleComment = () => {
    setComments((prevComments) => {
      const newComments = prevComments + 1;
      localStorage.setItem(`comments_${comments}`, newComments.toString());
      return newComments;
    });
  };

  if (!post) {
    return <div>No video selected</div>;
  }

  const { title, description, mediaUrl } = post.submission;

  return (
    <>
      <div className="video-player">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <video controls className="mt-4">
          <source src={mediaUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex space-x-4">
        <button className="flex items-center" onClick={handleLike}>
          <span role="img" aria-label="Like">👍</span>
          <span className="ml-2">{likes}</span>
        </button>
        <button className="flex items-center" onClick={handleComment}>
          <span role="img" aria-label="Comment">💬</span>
          <span className="ml-2">{comments}</span>
        </button>
      </div>
    </>
  );
};

export default VideoPlayer;
