import React, { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import loginIcon from '../Assets/user.svg';
import axios from "axios";
import uiImg from '../Assets/reg.svg';
import './login.css';
import { Link  } from "react-router-dom";

export default class UserRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryData: [],
      user_name : "",
      user_email : "",
      user_uname : "",
      user_password : "",
      sel_cat : "",
      user_photo : "",
      redirect: false
    };
  }

  saveData = (e) => {
    e.preventDefault();


    const formData = new FormData();

    formData.append('name',this.state.user_name);
    formData.append('email',this.state.user_email);
    formData.append('uname',this.state.user_uname);
    formData.append('password',this.state.user_password);
    formData.append('cat',this.state.sel_cat);
    formData.append('photo',this.state.user_photo);


    axios({

      method: "POST",
      url: "http://localhost/EducationThroughEntertainment/Project/api/User/NewUser.php",
      data: formData,
      headers:{ "Content-Type": "multipart/form-data"},
      })
      .then(function (response){
        if(response.data)
        {
          window.location='/';
        }
      });

  };




  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  inputPhoto = (e) => {
    this.setState({ user_photo: e.target.files[0] });
  };

  componentDidMount() {
    axios
      .get(
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/Category/GetCategory.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ categoryData: data });
      });
  }

  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
            <img className="icon-img" src={loginIcon} alt="icon" />
            <Form >
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="text" name="user_name" onChange={this.inputSet}  placeholder="Enter Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" name="user_email" onChange={this.inputSet} placeholder="Enter Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicUname">
                <Form.Control type="text"  name="user_uname" onChange={this.inputSet} placeholder="Enter Username" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" onChange={this.inputSet}  name="user_password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="file" onChange={this.inputPhoto}  name="user_photo" />
              </Form.Group> 
              <select className="custom-select mb-3 w-100 p-1 text-center form-select" onChange={this.inputSet}  name="sel_cat" >
                  <option value="">Select Category</option>
                  {this.state.categoryData.map((result,key) => (
                <option value={result.category_id} key={key}>
                  {result.category_name}
                </option>
              ))}
              </select>
              <Button variant="primary w-100 button-primary" onClick={this.saveData} type="submit">
                Signup
              </Button>
              <div className="text-left mt-3">
                <Link to="/">
                  {" "}
                  <small className="back"> Back to Home</small>
                </Link>
              </div>
            </Form>
          </Col>
          <Col lg={8} md={6} sm={12}>
            <img className="w-100" src={uiImg} />
          </Col>
        </Row>
      </Container>
    );
}
}
