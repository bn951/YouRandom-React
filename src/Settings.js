import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Settings.css';

class Settings extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  open() {
    this.setState({
      showModal: true
    });
  }

  close() {
    this.setState({
      showModal: false
    });
  }

  handleChange(e) {
    this.close();
    this.props.setCategory(e.target.value);
  }

  render() {
    return (
      <div>
        <Button id="settingsButton" bsStyle="link" onClick={this.open}>Settings</Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Settings</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Categories: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <select value={this.props.categoryID} onChange={this.handleChange}>
              <option value={0}>Most Popular</option>
              <option value={32}>Action/Adventure</option>
              <option value={31}>Anime/Animations</option>
              <option value={2}>Autos & Vehicles</option>
              <option value={33}>Classics</option>
              <option value={34}>Comedy</option>
              <option value={35}>Documentary</option>
              <option value={36}>Drama</option>
              <option value={27}>Education</option>
              <option value={24}>Entertainment</option>
              <option value={37}>Family</option>
              <option value={1}>Film & Animation</option>
              <option value={38}>Foreign</option>
              <option value={20}>Gaming</option>
              <option value={39}>Horror</option>
              <option value={26}>Howto & Style</option>
              <option value={30}>Movies</option>
              <option value={10}>Music</option>
              <option value={25}>News & Politics</option>
              <option value={29}>Nonprofits & Activism</option>
              <option value={22}>People & Blogs</option>
              <option value={15}>Pets & Animals</option>
              <option value={28}>Science & Technology</option>
              <option value={40}>Sci-Fi/Fantasy</option>
              <option value={42}>Shorts</option>
              <option value={18}>Short Movies</option>
              <option value={43}>Shows</option>
              <option value={17}>Sports</option>
              <option value={41}>Thriller</option>
              <option value={44}>Trailers</option>
              <option value={21}>Videoblogging</option>
            </select>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="default" onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Settings;
