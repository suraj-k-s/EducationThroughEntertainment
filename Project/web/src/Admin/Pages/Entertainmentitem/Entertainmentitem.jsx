import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import axios from "axios";
import React, { Component } from "react";

export default class Entertainmentitem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryData: [],
      EfileData: [],
      mediaData: [],
      EntertainmentData: [],
      packageData: [],
      categoryId: "",
      entertainmentId: "",
      description: "",
      typeId: "",
      video: "",
      columns: [
        {
          field: "id",
          headerName: "ID",
          width: 130,
        },
        {
          field: "category_name",
          headerName: "Class",
          width: 180,
        },
        {
          field: "entertainment_type",
          headerName: "Entertainment",
          width: 180,
        },
        {
          field: "name",
          headerName: "Media",
          width: 180,
        },
        {
          field: "file",
          headerName: "File",
          width: 180,
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
                  onClick={() => this.categoryDelete(params.row.Efile_id)}
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
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/Entertainmentitem.php/DeleteEntertainment.php?id=" +
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
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/Category/GetCategory.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ categoryData: data });
      });
    axios
      .get(
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/Entertainment/Getentertainment.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ EntertainmentData: data });
      });
    axios
      .get(
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/Mediatype/GetMedia.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ mediaData: data });
      });
    axios
      .get(
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/Entertainmentitem.php/GetEntertainmentFile.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ EfileData: data });
      });
  }

  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  inputVideo = (e) => {
    this.setState({ video: e.target.files[0] });
  };

  saveData = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("category", this.state.categoryId);
    formData.append("entertainment", this.state.entertainmentId);
    formData.append("type", this.state.typeId);
    formData.append("file", this.state.video);

    axios({
      method: "POST",
      url: "http://localhost/EducationThroughEntertainment/Project/api/Admin/Entertainmentitem.php/InsertItem.php",
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
      <div className="mt">
        <h1 className="categoryTitle">Add Entertainment</h1>
        <form className="materialForm">
          <div className="MaterialItem">
            <label> Class</label>
            <select name="categoryId" id="categoryId" onChange={this.inputSet}>
              <option value="">-----Select Class------</option>
              {this.state.categoryData.map((result) => (
                <option value={result.category_id}>
                  {result.category_name}
                </option>
              ))}
            </select>
          </div>
          <div className="MaterialItem">
            <label> Entertainment Category</label>
            <select
              name="entertainmentId"
              id="entertainmentId"
              onChange={this.inputSet}
            >
              <option value="">-----Select Entertainment type------</option>
              {this.state.EntertainmentData.map((result) => (
                <option value={result.entertainment_id}>
                  {result.entertainment_type}
                </option>
              ))}
            </select>
          </div>
          <div className="MaterialItem">
            <label> Media Category</label>
            <select name="typeId" id="typeId" onChange={this.inputSet}>
              <option value="">-----Select Media ategory------</option>
              {this.state.mediaData.map((result) => (
                <option value={result.etype_id}>{result.name}</option>
              ))}
            </select>
          </div>
          <div className="MaterialItem">
            <label> Vedio</label>
            <input type="file" name="video" onChange={this.inputVideo} />
          </div>
          <button className="categoryButton" onClick={this.saveData}>
            Save
          </button>
        </form>
        <div className="categoryList">
          <DataGrid
            rows={this.state.EfileData}
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
