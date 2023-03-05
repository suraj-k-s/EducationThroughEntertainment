import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import axios from "axios";
import React, { Component } from "react";
import "./Material.css";
export default class Material extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryData: [],
      scategoryData: [],
      materialData: [],
      categoryId: "",
      subcategory_id: "",
      studyId: "",
      caption: "",
      description: "",
      video: "",
      columns: [
        {
          field: "id",
          headerName: "ID",
          width: 80,
        },
        {
          field: "subcategory_name",
          headerName: "Category",
          width: 150,
        },
        {
          field: "material_caption",
          headerName: "Caption",
          width: 180,
        },
        {
          field: "description",
          headerName: "description",
          width: 180,
        },
        {
          field: "vedio_file",
          headerName: "File",
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
                  onClick={() => this.categoryDelete(params.row.material_id)}
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
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/Material/Deletematerial.php?id="+id
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
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/Material/Getmaterial.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ materialData: data });
      });
    
  }

  onChangeCategory = (e) =>
  {
    axios
      .get(
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/Subcategory/AjaxSubCategory.php?id="+e.target.value
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ scategoryData: data });
      });
  };

  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  inputVideo = (e) => {
    this.setState({ video: e.target.files[0] });
  };

  saveData = (e) => {
    e.preventDefault();


    const formData = new FormData();

    formData.append('study',this.state.studyId);
    formData.append('caption',this.state.caption);
    formData.append('desc',this.state.description);
    formData.append('video',this.state.video);


    axios({

      method: "POST",
      url: "http://localhost/EducationThroughEntertainment/Project/api/Admin/Material/InsertMaterial.php",
      data: formData,
      headers:{ "Content-Type": "multipart/form-data"},
      })
      .then(function (response){
        alert(response.data)
        console.log(response);
      })
      .catch(function (response){

        console.log(response);
      });

  };

  render() {
    return (
      <div className="mt">
        <h1 className="categoryTitle">Add Metrial</h1>
        <form className="materialForm">
          <div className="MaterialItem">
            <label> Class</label>
            <select name="classId" id="classId" onChange={this.onChangeCategory}>
              <option value="">-----Select Class------</option>
              {this.state.categoryData.map((result) => (
                <option value={result.category_id}>
                  {result.category_name}
                </option>
              ))}
            </select>
          </div>
          <div className="MaterialItem">
            <label> Study Category</label>
            <select name="studyId" id="studyId" onChange={this.inputSet}>
              <option value="">-----Select Sub Category------</option>
              {this.state.scategoryData.map((result) => (
                <option value={result.subcategory_id}>
                  {result.subcategory_name}
                </option>
              ))}
            </select>
          </div>
          <div className="MaterialItem">
            <label> Caption</label>
            <input type="text" name="caption" onChange={this.inputSet} />
          </div>
          <div className="MaterialItem">
            <label> Description</label>
            <textarea name="description" onChange={this.inputSet}></textarea>
          </div>
          <div className="MaterialVideo">
            <label> Vedio</label>
            <input type="file" name="video" onChange={this.inputVideo} />
          </div>

          <button className="categoryButton" onClick={this.saveData}>Save</button>
        </form>
        <div className="categoryList">
          <DataGrid
            rows={this.state.materialData}
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
