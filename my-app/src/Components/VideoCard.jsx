// src/components/VideoCard.js
import React from 'react';

const VideoCard = ({ video, onSelectVideo }) => {
  const { creator, submission, reaction, comment } = video;
  console.log(creator,submission)

  return (
    <div className="max-w-md mx-auto overflow-hidden bg-white rounded-md shadow-md mb-4 cursor-pointer" onClick={() => onSelectVideo(video)}>
      <img src={submission.thumbnail} alt={submission.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{submission.title}</h3>
        <p className="text-gray-600 mb-4">{submission.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={creator.pic} alt={creator.name} className="w-8 h-8 rounded-full mr-2" />
            <span className="text-gray-700">{creator.name}</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <span className="text-gray-700">{reaction.count}</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M5 8a1 1 0 011-1h1V5a5 5 0 1110 0v2h1a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{comment.count}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
