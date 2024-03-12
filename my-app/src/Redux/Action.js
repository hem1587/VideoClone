// actions.js
export const setVideos = (videos, currentPage, totalPages) => ({
  type: 'SET_VIDEOS',
  
  payload: {
    videos,
    currentPage,
    totalPages,
  },
});

export const selectVideo = (video) => ({
  type: 'SELECT_VIDEO',
  payload: {
    video,
  },
});
export const likeVideo = (postId) => ({
  type: "LIKE_VIDEO",
  payload: {
    postId,
  },
});

export const commentVideo = (postId, comment) => ({
  type: "COMMENT_VIDEO",
  payload: {
    postId,
    comment,
  },
});