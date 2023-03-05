import "./userList.css"
import axios from "axios";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import React, { Component } from 'react'

export default class UserList extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData : [],
            columns : [
                { 
                    field: 'id', 
                    headerName: 'ID', 
                    width: 90 
                },
                {
                    field: 'stud_name',
                    headerName: 'User',
                    width: 200,
                    renderCell : (params)=>{
                        return(
                            <div className="userListUser">
                                <img className="userListImage" src={params.row.stud_photo} alt=""/>
                                {params.row.stud_name}
                            </div>
                        )
                    }
                },
                {
                    field: 'stud_email',
                    headerName: 'Email',
                    width: 200,
                },
                {
                    field: 'category_name',
                    headerName: 'Category',
                    width: 200,
                },
                
                {
                    field: 'action',
                    headerName: 'Action',
                    width: 150,
                    renderCell : (params)=>{
                        return(
                            <>                                
                                <DeleteOutline className="userListDelete" onClick={()=>this.userDelete(params.row.stud_id)}/>
                            </>
                        )
                    }
        
                },
              ],
        }
    }
    userDelete = (id) => {
        axios
          .post(
            "http://localhost/EducationThroughEntertainment/Project/api/User/DeleteUser.php?id="+id
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
            "http://localhost/EducationThroughEntertainment/Project/api/User/UserList.php"
          )
          .then((response) => response.data)
          .then((data) => {
            this.setState({ userData: data });
          });
      }
    render() {
        return (
            <div className="userList">
            <DataGrid
                rows={this.state.userData}
                columns={this.state.columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
        )
    }
}
