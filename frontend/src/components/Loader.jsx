import React from 'react';
import '../assets/styles/loader.css'; // Import the CSS file for styling

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner">
        {/* Add multiple divs for spinner segments */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
