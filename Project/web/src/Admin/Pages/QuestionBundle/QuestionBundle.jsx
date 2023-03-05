import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import axios from "axios";
import React, { Component } from "react";
import "./QuestionBundle.css";
export default class QuestionBundle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryData: [],
      levelData: [],
      mediaData: [],
      mcaptionId: "",
      mlevel: "",
      No: "",
      Name: "",
      columns: [
        {
          field: "id",
          headerName: "ID",
          width: 100,
        },
        {
          field: "material_caption",
          headerName: "Meterial",
          width: 150,
        },
        {
          field: "questionlevel_name",
          headerName: "level",
          width: 150,
        },
        {
          field: "no_ofquestions",
          headerName: "No.of.quetions",
          width: 200,
        },
        {
          field: "name",
          headerName: "Name",
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
                  onClick={() =>
                    this.categoryDelete(params.row.questionbundle_id)
                  }
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
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/Questionbundle/DeleteQuestionbundle.php?id="+id
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
      mcaptionId: this.state.mcaptionId,
      mlevel: this.state.mlevel,
      No: this.state.No,
      Name: this.state.Name,
    };
    axios
      .post(
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/Questionbundle/InsertQuestionbundle.php",
        dat
      )
      .then((response) => {
        if (response.data === "Success") {
          this.componentDidMount();
          console.log(response.data);
        } else {
          alert("Failed");
        }
      });
  };

  componentDidMount() {
    
    axios
    .get(
      "http://localhost/EducationThroughEntertainment/Project/api/Admin/Questionbundle/GetQuestionBundle.php"
    )
    .then((response) => response.data)
    .then((data) => {
      this.setState({ mediaData: data });
    });
    
    axios
      .get(
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/Material/Getmaterial.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ categoryData: data });
      });
    axios
      .get(
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/QuestionLevel/GetQl.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ levelData: data });
      });
      
  }
  render() {
    return (
      <div className="category">
        <h1 className="categoryTitle">New Question Bundle</h1>
        <form className="categoryForm">
          <div className="categoryItem">
            <label> Metrial</label>
            <select name="mcaptionId" id="mcaptionId" onChange={this.inputSet}>
              <option value="Class">
                {" "}
                -------Select meterial caption---------
              </option>
              {this.state.categoryData.map((result) => (
                <option value={result.material_id}>
                  {result.material_caption}
                </option>
              ))}
            </select>
          </div>
          <div className="categoryItem">
            <label> Level</label>
            <select name="mlevel" id="mlevel" onChange={this.inputSet}>
              <option value="Class"> -------Select level---------</option>
              {this.state.levelData.map((result) => (
                <option value={result.questionlevel_id}>
                  {result.questionlevel_name}
                </option>
              ))}
            </select>
          </div>
          <div className="categoryItem">
            <label>Number of Questions</label>
            <input
              type="text"
              onChange={this.inputSet}
              placeholder="No"
              name="No"
            />
          </div>
          <div className="categoryItem">
            <label>Name</label>
            <input type="text" onChange={this.inputSet} name="Name" />
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
      </div>
    );
  }
}
