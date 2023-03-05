import { DeleteOutline } from "@material-ui/icons";
import { DataGrid } from "@material-ui/data-grid";

import React, { Component } from "react";
import "./Staff.css";
import axios from "axios";
export default class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryData: [],
      scategoryData: [],
      StaffData: [],
      materialData: [],
      categoryId: "",
      category: "",
      name: "",
      category: "",
      uname:"",
      contact: "",
      Email: "",
      file: "",
      Password: "",
      columns: [
        {
          field: "id",
          headerName: "ID",
          width: 80,
        },
        {
          field: "s_name",
          headerName: "Name",
          width: 150,
        },
        {
          field: "s_photo",
          headerName: "Photo",
          width: 180,
        },
        {
          field: "s_email",
          headerName: "Email",
          width: 180,
        },
        {
          field: "s_contact",
          headerName: "Contact",
          width: 150,
        },
        {
          field: "date",
          headerName: "Date",
          width: 180,
        },
        {
          field: "action",
          headerName: "Action",
          width: 130,
          renderCell: (params) => {
            return (
              <>
                <DeleteOutline
                  className="categoryListDelete"
                  onClick={() => this.categoryDelete(params.row.staffreg_id)}
                />
              </>
            );
          },
        },
      ],
    };
  }
  categoryDelete = (id) => {
    axios
      .post(
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/Staff/Delstaff.php?id=" +
          id
      )
      .then((response) => {
        if (response.data === "Success") {
          this.componentDidMount();
        } else {
          alert("Failed");
        }
      });
  };
  componentDidMount() {
    axios
      .get(
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/Staff/GetStaff.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ StaffData: data });
      });
  }

  onChangeCategory = (e) => {};

  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  inputVideo = (e) => {
    this.setState({ video: e.target.files[0] });
  };
  saveData = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("Name", this.state.Name);
    formData.append("Contact", this.state.contact);
    formData.append("Email", this.state.Email);
    formData.append("file", this.state.file);
    formData.append("uname", this.state.uname);
    formData.append("Password", this.state.Password);

    axios({
      method: "POST",
      url: "http://localhost/EducationThroughEntertainment/Project/api/Admin/Staff/InsertStaff.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        alert(response.data);
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
  };
  render() {
    return (
      <div className="category">
        <h1 className="categoryTitle">New Staff</h1>
        <form className="categoryForm">
          <div className="categoryItem">
            <label>Name</label>
            <input
              type="text"
              onChange={this.inputSet}
              placeholder="Name"
              name="Name"
            />
          </div>
          
          <div className="categoryItem">
            <label>Contact</label>
            <input
              type="text"
              onChange={this.inputSet}
              placeholder="contact"
              name="contact"
            />
          </div>
          <div className="categoryItem">
            <label>Email</label>
            <input
              type="text"
              onChange={this.inputSet}
              placeholder="Email"
              name="Email"
            />
          </div>
          <div className="categoryItem">
            <label>Photo</label>
            <input
              type="file"
              onChange={this.inputSet}
              placeholder="file"
              name="file"
            />
          </div>
          <div className="categoryItem">
            <label>Username</label>
            <input
              type="text"
              onChange={this.inputSet}
              placeholder="Username"
              name="uname"
            />
          </div>
          <div className="categoryItem">
            <label>Password</label>
            <input
              type="text"
              onChange={this.inputSet}
              placeholder="Password"
              name="Password"
            />
          </div>
          <button onClick={this.saveData} className="categoryButton">
            Save
          </button>
        </form>
        <div className="categoryList">
          <DataGrid
            rows={this.state.StaffData}
            columns={this.state.columns}
            pageSize={20}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </div>
    );
  }
}
