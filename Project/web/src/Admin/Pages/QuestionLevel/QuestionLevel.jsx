import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import axios from "axios";
import React, { Component } from "react";
import "./Questionlevel.css";

export default class QuestionLevel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Qlevel: "",
        qlevelData : [],
        columns: [
          {
            field: "id",
            headerName: "ID",
            width: 130,
          },
          {
            field: "questionlevel_name",
            headerName: "Question level",
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
                    onClick={() => this.categoryDelete(params.row.questionlevel_id)}
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
          "http://localhost/EducationThroughEntertainment/Project/api/Admin/QuestionLevel/DeleteQl.php?id="+id
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
        Qlevel: this.state.Qlevel,
      };
      axios
      .post(
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/QuestionLevel/InsertQlevel.php",
        dat
      )
      .then((response) => {
        if (response.data === "Success") {
          alert("Success");
          this.componentDidMount();
        } else {
          alert("Failed");
        }
      });
  };
  componentDidMount() {
    axios
      .get(
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/QuestionLevel/GetQl.php",
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ qlevelData: data });
      });
  }

  cancelCourse = () => { 
    document.getElementById("categoryForm").reset();
  }


  render() {
    return (
      <div className="Level">
        <h1 className="Questionleveltitle">Question Level</h1>
        <form className="QlevelForm">
          <div className="Qlevels">
            <label>Level</label>
            <input
              type="text"
              onChange={this.inputSet}
              placeholder="Level"
              name="Qlevel"
            />
          </div>
          <button onClick={this.saveData} className="Qlevelbutton">
            Save
          </button>
        </form>
        <div className="categoryList">
          <DataGrid
            rows={this.state.qlevelData}
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
