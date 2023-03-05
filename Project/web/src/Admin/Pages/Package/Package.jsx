import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import axios from 'axios';
import React, { Component } from 'react'
import "./Package.css";
export default class Package extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryData: [],
      packageData: [],
      categoryId: "",
      subCategoryName: "",
      duration: "",
      packageName: "",
      columns: [
        {
          field: "id",
          headerName: "ID",
          width: 80,
        },
        {
          field: "category_name",
          headerName: "Category",
          width: 150,
        },
        {
          field: "package_amount",
          headerName: "Package Amount",
          width: 180,
        },
        {
          field: "package_name",
          headerName: "Package Name",
          width: 180,
        },
        {
          field: "duration",
          headerName: "Duration",
          width: 150,
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
                  onClick={() => this.categoryDelete(params.row.package_id)}
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
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/package/Deletepackage.php?id="+id
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
      duration: this.state.duration,
      package: this.state.packageName,
    };
console.log(dat)
    axios
      .post(
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/package/Insertpackage.php",
        dat
      )
      .then((response) => {
        
          this.componentDidMount();
          alert(response.data)
         
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
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/package/Getpackage.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ packageData: data });
      });
    }
    render() {
        return (
            <div className="Package">
        <h1 className="categoryTitle">New Package</h1>
        <form className="categoryForm">
        <div className="categoryItem"> 
              <label> Class
                  </label>
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
            <label>  Package Amount</label>
            <input
              type="text"
              name="subCategoryName"
              onChange={this.inputSet}
            />
          </div>
         
          <div className="categoryItem">
            <label> duration</label>
            <input
              type="text"
              name="duration"
              onChange={this.inputSet}
            />
          </div>
          <div className="categoryItem">
            <label> Package Name</label>
            <input
              type="text"
              name="packageName"
              onChange={this.inputSet}
            />
          </div>
          <button onClick={this.saveData} className="categoryButton">
            Save
          </button>
        </form>
        <div className="categoryList">
          <DataGrid
            rows={this.state.packageData}
            columns={this.state.columns}
            pageSize={20}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
        <div className="categoryList">
          
        </div>
      </div>
        )
    }
}
