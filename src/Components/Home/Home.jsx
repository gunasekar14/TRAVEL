import React from 'react';

// Import assets
import video from '../../Assets/video.mp4'; // Path to your video
import aeroplane from '../../Assets/abc.png'; // Path to your airplane image

const Home = () => {
  return (
    <div className='home flex container'>
      {/* Main text or heading */}
      <div className="mainText">
        <h1>Welcome to Our Flight Experience</h1>
      </div>

      {/* Flex container for video and image */}
      <div className="homeImages flex">
        {/* Video Background */}
        <div className="videoDiv">
          <video
            src={video} // Path to the video file
            autoPlay // Video will autoplay
            muted // Mute the video
            loop // Loop the video
            className='video' // Add custom CSS class to the video
            playsInline // Ensure the video plays inline on mobile (not full-screen)
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Airplane Image */}
        <img 
          src={aeroplane} 
          alt="Plane taking off" // Added descriptive alt text for accessibility
          className='plane' // Added CSS class for custom styling
        />
      </div>
    </div>
  );
};

export default Home;
