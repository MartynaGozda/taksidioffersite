import React from 'react';
import YouTube from 'react-youtube';
 
class Video extends React.Component {
  render() {
    const opts = {
      height: '300',
      width: '100%',
      playerVars: {
          autoplay: 1
    
      },
    };
 
    return <YouTube videoId="YsTfydKBOXU" opts={opts}  onReady={this._onReady} />;
  }
 
  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default Video