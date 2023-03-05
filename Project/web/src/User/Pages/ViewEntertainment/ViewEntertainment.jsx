import React, { Component } from "react";
import ReactPlayer from "react-player";
import axios from "axios";

export default class ViewEntertainment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mid: window.sessionStorage.getItem("file-id"),
    };
  }
  renderQuestion() {
    window.location='/User/';
  }
  render() {
    return (
      <div>
        <ReactPlayer
          controls
          url={this.state.mid}
          onEnded={() => this.renderQuestion()}
        />
      </div>
    );
  }
}
