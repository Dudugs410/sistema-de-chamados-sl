import React, { useRef } from 'react';

function CameraCapture() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const startCapture = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch(error => {
        console.error('Error accessing camera:', error);
      });
  };

  const captureImage = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const image = canvas.toDataURL('image/png');
    console.log('Captured image:', image);
  };

  return (
    <div>
      <video ref={videoRef}></video>
      <canvas ref={canvasRef}></canvas>
      <button onClick={startCapture}>Start capture</button>
      <button onClick={captureImage}>Capture image</button>
    </div>
  );
}

export default CameraCapture;
