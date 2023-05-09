import { useState } from 'react';

const Test = () => {
  const [fadeIn, setFadeIn] = useState(false);

  const handleImageChange = () => {
    setFadeIn(true);
    setTimeout(() => {
      // Replace 'new-image.jpg' with the path to your new background image
      document.documentElement.style.setProperty('--background-image', 'url(/images/lazy.jpg)');
      setFadeIn(false);
    }, 500); // Adjust the timeout duration to match your CSS transition duration
  };

  return (
    <div className={`background-container ${fadeIn ? 'fade' : ''} ${fadeIn ? 'fade-in' : ''}`}>
      {/* Your component content here */}
      <button onClick={handleImageChange}>Change Background Image</button>
    </div>
  );
};

export default Test;
