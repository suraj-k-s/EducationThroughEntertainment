import React, { Component } from "react";
import axios from "axios";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import swal from "sweetalert";

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionData: [],
      mid: sessionStorage.getItem("material-id"),
      uid: sessionStorage.getItem("userid"),
      answer: "",
      id: "",
    };
  }

  saveData = (e) => {
    e.preventDefault();

    axios
      .get(
        "http://localhost/EducationThroughEntertainment/Project/api/User/Answer/SubmitAsnwer.php?qid=" +
          e.target.value +
          "&uid=" +
          this.state.uid +
          "&answer=" +
          this.state.answer
      )
      .then((response) => {

        if(response.data==="Correct")
        {
            swal({
                title: "Correct",
                text: "Your Answer is Correct its Entertainment Time Lets Enjoy",
                icon: "success",
              }).then((willDelete) => {
                if (willDelete) {
                    window.location='/User/Entertainment';
                }
              });
        }
        else if(response.data==="Incorrect")
        {
            swal({
                title: "Incorrect",
                text: "Your Answer is Incorrect",
                icon: "warning",
                dangerMode: true,
              });
        }

       
        // <Navigate to="/Entertainment" replace={true} />;
      });
  };

  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  componentDidMount() {
    axios
      .get(
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/Question/QuestionById.php?id=" +
          this.state.mid
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ questionData: data });
        console.log(data);
      });
  }
  render() {
    return (
      <div className="home" style={{ marginLeft: "220px" }}>
        {this.state.questionData.map((data, key) => (
          <Form>
            <img
              style={{ margin: "20px", marginLeft: "30px" }}
              src={data.qimage}
              width="150"
              height="150"
              align="center"
            />
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Question
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={data.question} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="2">
                Option 1
              </Form.Label>
              <Col sm="10">
                <div key="inline-radio" className="mb-4">
                  <Form.Check
                    onChange={this.inputSet}
                    inline
                    label={data.right_answer}
                    name="answer"
                    type="radio"
                    value={data.right_answer}
                    id="inline-radio-1"
                  />
                </div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="2">
                Option 2
              </Form.Label>
              <Col sm="10">
                <div key="inline-radio" className="mb-4">
                  <Form.Check
                    onChange={this.inputSet}
                    inline
                    label={data.wrong_answer1}
                    name="answer"
                    type="radio"
                    value={data.wrong_answer1}
                    id="inline-radio-1"
                  />
                </div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="2">
                Option 3
              </Form.Label>
              <Col sm="10">
                <div key="inline-radio" className="mb-4">
                  <Form.Check
                    onChange={this.inputSet}
                    inline
                    label={data.wrong_answer2}
                    name="answer"
                    type="radio"
                    value={data.wrong_answer2}
                    id="inline-radio-1"
                  />
                </div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="2">
                Option 4
              </Form.Label>
              <Col sm="10">
                <div key="inline-radio" className="mb-4">
                  <Form.Check
                    onChange={this.inputSet}
                    inline
                    label={data.wrong_answer3}
                    name="answer"
                    type="radio"
                    value={data.wrong_answer3}
                    id="inline-radio-1"
                  />
                </div>
              </Col>
            </Form.Group>
            <Button
              variant="primary w-40 button-primary"
              onClick={this.saveData}
              value={data.question_id}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        ))}
      </div>
    );
  }
}
