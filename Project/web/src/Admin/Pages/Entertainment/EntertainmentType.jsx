import "./Entertainmenttype.css";
import axios from 'axios';
import React, { Component } from 'react'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

export default class EntertainmentType extends Component {
    
        constructor(props) {
          super(props);
          this.state = {
            Etype: "",
            EcategoryData : [],
      columns: [
        {
          field: "id",
          headerName: "ID",
          width: 130,
        },
        {
          field: "entertainment_type",
          headerName: "Entertainmet Type",
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
                  onClick={() => this.categoryDelete(params.row.entertainment_id)}
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
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/EntertainmentCategory/deleteentertainmentcategory.php?id="+id
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
            Etype: this.state.Etype,
          };
      
          axios
            .post(
              "http://localhost/EducationThroughEntertainment/Project/api/Admin/Entertainment/InsertEntertainment.php",
              dat
            )
            .then((response) => {
              if (response.data === "Success") {
                alert("Success");
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
              this.setState({ EcategoryData: data });
            });
        }
      
        cancelCourse = () => { 
          document.getElementById("categoryForm").reset();
        }
      
    render() {
        return (
            <div className="Etype">
               <h1 className="EntertainmentTitle">New Type</h1>
        <form className="EtypeForm">
          <div className="categoryEtype">
            <label>Type</label>
            <input
              type="text"
              onChange={this.inputSet}
              
              name="Etype"
            />
          </div>
          <button onClick={this.saveData} className="EtypeButton">
            Save
          </button>
        </form>
        <div className="categoryList">
          <DataGrid
            rows={this.state.EcategoryData}
            columns={this.state.columns}
            pageSize={9}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
            </div>
        )
    }
}
