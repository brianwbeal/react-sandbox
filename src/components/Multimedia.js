import React, { Component } from 'react';

export class Multimedia extends Component {
  state = {

  }

  render() {
    return (
      <div>
        <h3>Multimedia</h3>
        <h4>audio</h4>
        <audio
          controls
          src="./track.mp3"
        >
        </audio> 

        <h4>video</h4>
        <video controls autoPlay={false} width="400">
          <source 
            src="./video.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
    )
  }
};

export default Multimedia;
