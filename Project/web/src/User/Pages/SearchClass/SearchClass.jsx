import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import axios from "axios";
import React, { Component } from "react";
import ViewMateril from "../ViewMaterial/ViewMateril";

export default class SearchClass extends Component {
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
              field: "action",
              headerName: "Action",
              width: 130,
              renderCell: (params) => {
                return (
                  <>
                    <span
                      className="categoryListDelete"
                      onClick={() => this.viewMaterial(params.row.material_id)}
                    >View</span>
                  </>
                );
              },
            },
          ],
        };
      }


      viewMaterial = (id) => {

        window.sessionStorage.setItem('material-id', id);
        window.location='/User/ViewMateril';
            
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

      searchData = (e) => {
        e.preventDefault();
    
    
        axios
          .get(
            "http://localhost/EducationThroughEntertainment/Project/api/Admin/Material/GetMaterialById.php?id="+this.state.studyId
          )
          .then((response) => response.data)
          .then((data) => {
            this.setState({ materialData: data });
          });
        
    
      };
    
  render() {
    return (
      <div className="mt">
        <h1 className="categoryTitle">Add Metrial</h1>
        <form className="materialForm">
          <div className="MaterialItem">
            <label> Class</label>
            <select
              name="classId"
              id="classId"
              onChange={this.onChangeCategory}
            >
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
            {this.state.s}
          </div>

          <button className="categoryButton" onClick={this.searchData}>
            Save
          </button>
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
