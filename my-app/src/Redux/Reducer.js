// reducers.js
import { combineReducers } from 'redux';

const initialVideosState = {
  videos: [],
  selectedVideo: null,
  currentPage: 0,
  totalPages: null, // Initialize totalPages as null
};

const videosReducer = (state = initialVideosState, action) => {
  switch (action.type) {
    case 'SET_VIDEOS':
      return {
        ...state,
        videos: action.payload.videos,
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPages !== undefined ? action.payload.totalPages : state.totalPages,
      };
    case 'SELECT_VIDEO':
      return {
        ...state,
        selectedVideo: action.payload.video,
      };
      case "LIKE_VIDEO":
      const likedVideos = state.videos.map((video) =>
        video.postId === action.payload.postId ? { ...video, reaction: { count: video.reaction.count + 1 } } : video
      );
      localStorage.setItem('videos', JSON.stringify(likedVideos));
      return {
        ...state,
        videos: likedVideos,
      };
    case "COMMENT_VIDEO":
      const commentedVideos = state.videos.map((video) =>
        video.postId === action.payload.postId
          ? { ...video, comment: [...(video.comment || []), action.payload.comment] }
          : video
      );
      localStorage.setItem('videos', JSON.stringify(commentedVideos));
      return {
        ...state,
        videos: commentedVideos,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  videos: videosReducer,
});

export default rootReducer;
