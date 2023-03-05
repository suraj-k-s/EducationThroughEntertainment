import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import axios from "axios";
import React, { Component } from "react";
import "./Mediatype.css";
export default class Mediatype extends Component {
    constructor(props) {
      super(props);
      this.state = {
        categoryData: [],
        mediaData: [],
        categoryId : "",
        subCategoryName : "",
        columns: [
          {
            field: "id",
            headerName: "ID",
            width: 130,
          },
          {
            field: "entertainment_type",
            headerName: "Category",
            width: 260,
          },
          {
            field: "name",
            headerName: "Media type",
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
                    onClick={() => this.categoryDelete(params.row.etype_id)}
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
          "http://localhost/EducationThroughEntertainment/Project/api/Admin/Mediatype/Deletemediatype.php?id="+id
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
        subCategoryName : this.state.subCategoryName,
      };
  
      axios
        .post(
          "http://localhost/EducationThroughEntertainment/Project/api/Admin/Mediatype/Insretmediatype.php",
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
          "http://localhost/EducationThroughEntertainment/Project/api/Admin/Entertainment/Getentertainment.php"
        )
        .then((response) => response.data)
        .then((data) => {
          this.setState({ categoryData: data });
        });
        axios
        .get(
          "http://localhost/EducationThroughEntertainment/Project/api/Admin/Mediatype/GetMedia.php"
        )
        .then((response) => response.data)
        .then((data) => {
          this.setState({ mediaData: data });
        });
    }
  render() {
    return (
      <div className="category">
        <h1 className="categoryTitle">New Media</h1>
        <form className="categoryForm">
         
          <div className="categoryItem">
            <label> Entertainmet Category</label>
            <select name="categoryId" id="categoryId" onChange={this.inputSet}>
              <option value="Class"> -------Select Media Type---------</option>
              { 
              this.state.categoryData.map((result)=>(<option value={result.entertainment_id}>{result.entertainment_type}</option>))
             }
            </select>
          </div>
          <div className="categoryItem">
            <label>Media Type</label>
            <input type="text" name="subCategoryName" onChange={this.inputSet} />
          </div>
          <button onClick={this.saveData} className="categoryButton">
            Save
          </button>
        </form>
        <div className="categoryList">
          <DataGrid
            rows={this.state.mediaData}
            columns={this.state.columns}
            pageSize={9}
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
