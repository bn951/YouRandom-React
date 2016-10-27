import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import './Video.css';

//const panelTitle = (<h3>Video Title</h3>);

class Video extends Component {

  render() {
    if(this.props.videoID) {
      return (
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">{this.props.videoTitle}</h3>
          </div>
          <div className="panel-body text-center">
            <iframe id="video" src={'https://www.youtube.com/embed/' + this.props.videoID + '?autoplay=1'}frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="panel-footer text-right">
            <Button bsStyle="primary" onClick={this.props.execRequest}>Next</Button>
          </div>
        </div>
      );
    } else {
      return(
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Loading</h3>
          </div>
          <div className="panel-body text-center">
            Loading...
          </div>
          <div className="panel-footer text-right">
            <Button bsStyle="primary" disabled>Next</Button>
          </div>
        </div>
      );
    }
  }
}

export default Video;
