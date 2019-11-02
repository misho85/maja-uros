import React from 'react';

const Map = () => (
  <div
    style={{
      height: '70vh',
      width: '100%',
    }}
  >
    <iframe
      title="Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.626240991564!2d20.41991941575127!3d44.82917848361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a657292222553%3A0x754963171ffdce65!2sAMPHORA!5e0!3m2!1sen!2sus!4v1572659063778!5m2!1sen!2sus"
      width="100%"
      height="100%"
      frameBorder="0"
      style={{
        border: 0,
        boxShadow: `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)`,
      }}
      allowFullScreen
    />
  </div>
);

export default Map;
