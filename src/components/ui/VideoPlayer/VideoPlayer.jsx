const VideoPlayer = ({url}) => {
  return (
    <video width="100%" controls>
      <source
        type="video/mp4"
        src={url}
      />
      <source
        src={url}
        type="video/ogg"
      ></source>
    </video>
  );
}

export default VideoPlayer