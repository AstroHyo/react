
//유튜브 썸네일 가져오는 코드
function VideoThumbnail({ videoUrl }) {
    const videoId = videoUrl.split("=")[1];
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;
  
    return <img src={thumbnailUrl} alt="Thumbnail" width="80%" />;
  }

  export default VideoThumbnail;