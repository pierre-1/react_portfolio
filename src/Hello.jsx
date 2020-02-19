import React from "react";

const Hello = () => {
  return (
    
    <div className="hero-image" style={{ background: 'url("/src/images/Boston City Flow.jpg")', backgroundSize: 'cover', height: '100vh'}} >
      <div className="hero-text" style={{ position: "relative", zIndex: "999" }}>
        <p>Welcome to my first page coded in React! Have fun exploring and get in touch if you have any questions.</p>
      </div>
    </div>
  );
};

export default Hello;
