import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import axios from "axios";
import React, { Component } from "react";

export default class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryData: [],
      questionlevel_id:"",
      categoryId:"",
      levelData: [],
      scategoryData: [],
      questionlevel_id: "",
      mlevel:"",
      questionlevel_name: "",
      questionbundle_id:"",
      qstn:"",
      qData:[],
      image:"",
      columns: [
        {
          field: "id",
          headerName: "ID",
          width: 130,
        },
        {
          field: "name",
          headerName: "Question Bundle",
          width: 180,
        },
        {
          field: "questionlevel_name",
          headerName: "Level",
          width: 180,
        },
        {
          field: "question",
          headerName: "Questions",
          width: 180,
        },
        {
          field: "qimage",
          headerName: "image",
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
                  onClick={() => this.categoryDelete(params.row.question_id)}
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
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/Question/DeleteAnswer.php?id="+id
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
      "http://localhost/EducationThroughEntertainment/Project/api/Admin/Question/GetQuestions.php"
    )
    .then((response) => response.data)
    .then((data) => {
      this.setState({ qData: data });
    });
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
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/QuestionLevel/GetQl.php"
      )
      .then((response) => response.data)
      .then((data) => {
        
        this.setState({ categoryData: data });
      });

    axios
      .get(
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/QuestionAnswer/GetQuestionAnswer.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ mediaData: data });
      });

    axios
      .get(
        "http://localhost/EducationThroughEntertainment/Project/api/Admin/Questionbundle/GetQuestionBundle.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ levelData: data });
      });
  }
  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  inputVideo = (e) => {
    this.setState({ image: e.target.files[0] });
  };
  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  saveData = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("study", this.state.categoryId);
    formData.append("caption", this.state.mlevel);
    formData.append("video", this.state.image);
    formData.append("desc", this.state.qstn);

    axios({

      method: "POST",
      url: "http://localhost/EducationThroughEntertainment/Project/api/Admin/Question/InsertQuestion.php",
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
        <h1 className="categoryTitle">Add Questions</h1>
        <form className="materialForm">
          <div className="MaterialItem">
            <label> Level</label>
            <select name="categoryId" id="categoryId" onChange={this.inputSet}>
              <option value="">-----Select Category------</option>
              {this.state.categoryData.map((result) => (
                <option value={result.questionlevel_id}>
                  {result.questionlevel_name}
                </option>
              ))}
            </select>
          </div>
          <div className="MaterialItem">
            <label> QuestionBundle</label>
            <select name="mlevel" id="mlevel" onChange={this.inputSet}>
              <option value="Class"> -------Select Name---------</option>
              {this.state.levelData.map((result) => (
                <option value={result.questionbundle_id}>{result.name}</option>
              ))}
            </select>
          </div>
          <div className="MaterialItem">
          <label>Image</label>
            <input
              type="file"
              onChange={this.inputVideo}
              placeholder="No"
              name="image"
            />

            
          </div>
          <div className="MaterialItem">
            <label> Question</label>
            <input
              type="text"
              onChange={this.inputSet}
              placeholder="No"
              name="qstn"
            />
          </div>
          <button onClick={this.saveData} className="categoryButton">
            Save
          </button>
        </form>
        <div className="categoryList">
          <DataGrid
            rows={this.state.qData}
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
