import React, { Component } from "react";
import "./category.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";
import { DataGrid } from "@material-ui/data-grid";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      categoryData: [],
      columns: [
        {
          field: "id",
          headerName: "ID",
          width: 130,
        },
        {
          field: "category_name",
          headerName: "Category",
          width: 260,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <DeleteOutline
                  className="categoryListDelete"
                  onClick={() => this.categoryDelete(params.row.category_id)}
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
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/Category/DeleteCategory.php?id="+id
      )
      .then((response) => {
        if (response.data === "Success") {
          this.componentDidMount();
        } else {
          alert("Failed");
        }
      });
  };

  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  saveData = (e) => {
    e.preventDefault();

    var dat = {
      category: this.state.category,
    };

    axios
      .post(
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/Category/InsertCategory.php",
        dat
      )
      .then((response) => {
        if (response.data === "Success") {
          this.cancelCourse();
          this.componentDidMount();
        } else {
          alert("Failed");
        }
      });
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

  cancelCourse = () => {
    document.getElementById("categoryForm").reset();
  };

  render() {
    return (
      <div className="category">
        <h1 className="categoryTitle">New Category</h1>
        <form className="categoryForm" id="categoryForm">
          <div className="categoryItem">
            <label>Category</label>
            <input
              type="text"
              onChange={this.inputSet}
              placeholder="category"
              name="category"
            />
          </div>
          <button onClick={this.saveData} className="categoryButton">
            Save
          </button>
        </form>
        <div className="categoryList">
          <DataGrid
            rows={this.state.categoryData}
            columns={this.state.columns}
            pageSize={9}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </div>
    );
  }
}
