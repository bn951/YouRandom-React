import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import './Description.css';

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      panelTitle: (<a href={'https://www.youtube.com/channel/' + nextProps.channelID} target='_blank'><h3>{ nextProps.channelTitle }</h3></a>)
    });
  }

  render() {
    if(this.props.channelTitle) {
      return (
        <Panel header={this.state.panelTitle}>
          {this.props.videoDesc}
        </Panel>
      );
    } else {
      return(
        <Panel header="Loading...">
          Loading...
        </Panel>
      );
    }
  }
}

export default Description;
