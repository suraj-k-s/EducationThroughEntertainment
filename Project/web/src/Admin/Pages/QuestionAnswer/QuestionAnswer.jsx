import { DeleteOutline } from "@material-ui/icons";
import axios from "axios";
import React, { Component } from "react";
import "./QuestionAnswer.css";
export default class QuestionAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryData: [],
      bundleData: [],
      qid:"",
      rans:"",
      wans1:"",
      wans2:"",
      wans3:"",
    };
  }
  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  componentDidMount() {
    axios
      .get(
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/Questionbundle/GetQuestionBundle.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ bundleData: data });
      });
  }
  onChangeCategory = (e) => {
    axios
      .get(
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/QuestionAnswer/AjaxQuestionAnswer.php?id=" +
          e.target.value
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ categoryData: data });
      });
  };
  saveData = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("question_id", this.state.qid);
    formData.append("right_answer", this.state.rans);
    formData.append("wrong_answer1", this.state.wans1);
    formData.append("wrong_answer2", this.state.wans2);
    formData.append("wrong_answer3", this.state.wans3);

    axios({

      method: "POST",
      url: "http://localhost/EducationThroughEntertainment/Project/api/Admin/QuestionAnswer/InsertQuestionAnswer.php",
      data: formData,
      headers:{ "Content-Type": "multipart/form-data"},
      })
      .then(function (response){
        alert(response.data)
        console.log(response);
      })
      .catch(function (response){

        console.log(response);
      });

  };
  render() {
    return (
      <div className="category">
        <h1 className="categoryTitle">Answer</h1>
        <form className="categoryForm">
          <div className="categoryItem">
            <label>Question</label>

            <select
              name="qbId"
              id="qbId"
              onChange={this.onChangeCategory}
            >
              <option value="">-----Select Question bundle------</option>
              {this.state.bundleData.map((result) => (
                <option value={result.questionbundle_id}>{result.name}</option>
              ))}
            </select>
          </div>
          <div className="categoryItem">
            <label>Question</label>

            <select name="qid" id="qid" onChange={this.inputSet}>
              <option value="">-----Select Question------</option>
              {this.state.categoryData.map((result) => (
                <option value={result.question_id}>{result.question}</option>
              ))}
            </select>
          </div>
          <div className="categoryItem">
            <label>Correct Answer</label>
            <input
              type="text"
              onChange={this.inputSet}
              placeholder="Name"
              name="rans"
            />
          </div>
          <div className="categoryItem">
            <label>Wrong Answer 1</label>
            <input
              type="text"
              onChange={this.inputSet}
              placeholder="Name"
              name="wans1"
            />
          </div>
          <div className="categoryItem">
            <label>Wrong Answer 2</label>
            <input
              type="text"
              onChange={this.inputSet}
              placeholder="Name"
              name="wans2"
            />
          </div>
          <div className="categoryItem">
            <label>Wrong Answer 3</label>
            <input
              type="text"
              onChange={this.inputSet}
              placeholder="Name"
              name="wans3"
            />
          </div>

          <button onClick={this.saveData} className="categoryButton">
            Save
          </button>
        </form>
        <div className="categoryList"></div>
      </div>
    );
  }
}
