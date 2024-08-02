import React from "react";

function Mp4About() {
  return (
    <div style={{maxWidth:"1200px", margin:"auto" , marginTop:"30px"}}>
      <video
        style={{ borderRadius: "16px" }}
        width="100%"
        height="auto"
        autoPlay
        loop
        muted
      >
        <source src="/motion.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Mp4About;
