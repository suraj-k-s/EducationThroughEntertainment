import React, { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import loginIcon from "../Assets/user.svg";
import uiImg from "../Assets/login.svg";
import axios from "axios";
import "./login.css";
import { Link } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_uname : "",
      user_password : "",
      type : "",
      id : "",
    };
  }
  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  saveData = (e) => {e.preventDefault();

    
    axios
      .get(
        "http://localhost/EducationThroughEntertainment/Project/api/Login.php?username="+this.state.user_uname+"&password="+this.state.user_password
        ).then((response) => response.data)
    .then((data) => {
      if(JSON.stringify(data)==="[]")
      {
        alert("Invalid User");
      } 
      else if(data[1].type==="admin")
      {
        window.sessionStorage.setItem('admin-id', data[0].id);
        window.location='/Admin';
      }
      else if(data[1].type==="user")
      {
        window.sessionStorage.setItem('userid', data[0].id);
        window.location='/User';
      }
    });
  };

  render() {
    return (
      <>
        <Container className="mt-5">
          <Row>
            <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
              <img className="icon-img" src={loginIcon} alt="icon" />
              <Form>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Control type="text"  onChange={this.inputSet} name="user_uname" placeholder="Enter Username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password"  onChange={this.inputSet} name="user_password" placeholder="Password" />
                </Form.Group>
                <Button  onClick={this.saveData} variant="primary w-100 button-primary" type="submit">
                  Login
                </Button>
                <div className="text-left mt-3">
                  <Link to="/">
                    {" "}
                    <small className="back"> Back to Home</small>
                    
                  </Link>
                </div>
              </Form>{
              `${this.state.id}`
              }
            </Col>
            <Col lg={8} md={6} sm={12}>
              <img className="w-100" src={uiImg} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
