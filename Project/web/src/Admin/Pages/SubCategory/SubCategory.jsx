import React, { Component } from "react";
import "./SubCategory.css";
import axios from "axios";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

export default class SubCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryData: [],
      scategoryData: [],
      categoryId: "",
      subCategoryName: "",
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
          field: "subcategory_name",
          headerName: "Sub Category",
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
                  onClick={() => this.categoryDelete(params.row.subcategory_id)}
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
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/Subcategory/deletesubcategory.php?id="+id
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
      categoryId: this.state.categoryId,
      subCategoryName: this.state.subCategoryName,
    };

    axios
      .post(
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/SubCategory/InsertSubCategory.php",
        dat
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
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/Category/GetCategory.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ categoryData: data });
      });
      axios
      .get(
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/Subcategory/Getsubcategory.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ scategoryData: data });
      });
  }

  render() {
    return (
      <div className="category">
        <h1 className="categoryTitle">New SubCategory</h1>
        <form className="categoryForm">
          <div className="categoryItem">
            <label> Class Category</label>
            <select name="categoryId" id="categoryId" onChange={this.inputSet}>
              <option value="">-----Select Category------</option>
              {this.state.categoryData.map((result) => (
                <option value={result.category_id}>
                  {result.category_name}
                </option>
              ))}
            </select>
          </div>
          <div className="categoryItem">
            <label> Study Category</label>
            <input
              type="text"
              name="subCategoryName"
              onChange={this.inputSet}
            />
          </div>
          <button className="categoryButton" onClick={this.saveData}>
            Save
          </button>
        </form>
        <div className="categoryList">
          <DataGrid
            rows={this.state.scategoryData}
            columns={this.state.columns}
            pageSize={20}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
        <div className="categoryList"></div>
      </div>
        
    );
  }
}
