function Video() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden'
    }}>
      <video 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          transform: 'translate(-50%, -50%)',
          zIndex: -1
        }}
        autoPlay
        loop
        muted
      >
        <source src="../images/Aura.mp4" type="video/mp4" />
      </video>
      
      {/* 其他內容疊加在影片上方 */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1>您的內容</h1>
      </div>
    </div>
  );
}

export default Video;