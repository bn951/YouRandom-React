import React, {Component} from 'react';
import './App.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Video from './Video';
import Description from './Description'
import Settings from './Settings';
import 'whatwg-fetch';

class App extends Component {
  constructor() {
    super();
    this.state = {
      categoryID: 0
    };
    this.execRequest = this.execRequest.bind(this);
    this.setCategory = this.setCategory.bind(this);
  }

  execRequest() {
    let that = this;
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=us&videoCategoryId=" + this.state.categoryID + "&maxResults=50&fields=items(contentDetails%2Cid%2Csnippet)&key=AIzaSyAG6QJDbA_oM94AIB618d4cQcjikQlWBQY").then(function(response) {
      return response.json();
    }).then(function(json) {
      let i = Math.floor(Math.random() * (json.items.length + 1));
      that.setState({
        videoID: json.items[i].id,
        videoDesc: json.items[i].snippet.description,
        videoTitle: json.items[i].snippet.title,
        channelTitle: json.items[i].snippet.channelTitle,
        channelID: json.items[i].snippet.channelId
      });
      console.log(that.state);
    });

    console.log("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=us&videoCategoryId=" + this.state.categoryID + "&maxResults=50&fields=items(contentDetails%2Cid%2Csnippet)&key=AIzaSyAG6QJDbA_oM94AIB618d4cQcjikQlWBQY");
  }

  setCategory(catID) {
    this.setState({
      categoryID: catID
    }, this.execRequest);
  }

  componentDidMount() {
    this.execRequest();
  }

  render() {
    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#"><span className="logo">|></span>YouRandom</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1}><Settings categoryID={this.state.categoryID} setCategory={this.setCategory} execRequest={this.execRequest}></Settings></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Grid>
          <Row className="show-grid">
            <Col md={8}>
              <Video videoID={this.state.videoID} videoTitle={this.state.videoTitle} execRequest={this.execRequest} ></Video>
            </Col>
            <Col md={4}>
              <Description channelTitle={this.state.channelTitle} channelID={this.state.channelID} videoDesc={this.state.videoDesc}></Description>
            </Col>
          </Row>
        </Grid>
      </div>
  );
  }
}

export default App;
