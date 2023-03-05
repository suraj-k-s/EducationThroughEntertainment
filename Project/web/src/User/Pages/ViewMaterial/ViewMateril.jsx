import React, { Component } from "react";
import ReactPlayer from "react-player";
import axios from "axios";

export default class ViewMateril extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mid: sessionStorage.getItem("material-id"),
      viewData: [],
    };
  }
  renderQuestion() {
    window.location='/User/Question';
  }
  componentDidMount() {
    axios
      .get(
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/Material/MaterialId.php?id=" +
          this.state.mid
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ viewData: data });
        console.log(data);
      });
  }

  render() {
    return (
      <div className="home">
        <ReactPlayer
          controls
          url={this.state.viewData.map((data) => data.vedio_file)}
          onEnded={()=>this.renderQuestion()}
        />

      </div>
    );
  }
}
