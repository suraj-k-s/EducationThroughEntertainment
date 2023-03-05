import React, { Component } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import axios from "axios";

export default class Entertainment extends Component {
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
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <span
                  className="categoryListDelete"
                  onClick={() => this.viewEntertainment(params.row.file)}
                >
                  View
                </span>
              </>
            );
          },
        },
      ],
    };
  }
  viewEntertainment = (id) => {
   
    window.sessionStorage.setItem('file-id', id);
        window.location='/User/ViewEntertainment';

  };

  componentDidMount() {
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
  }

  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  saveData = (e) => {
    e.preventDefault();

    axios
      .get(
        "http://localhost/EducationThroughEntertainment/Project/api/User/Entertainmentitem/GetEntertainmentFile.php?eid="+this.state.entertainmentId+"&tid="+this.state.typeId
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ EfileData: data });
      });
  };

  render() {
    return (
      <div className="mt">
        <h1 className="categoryTitle">Search Entertainment</h1>
        <form className="materialForm">
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
