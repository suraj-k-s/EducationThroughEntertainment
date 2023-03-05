import React, { Component } from "react";
import Featuredinfo from "../../Featuredinfo/Featuredinfo"
import axios from 'axios';

export default class Package extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            packageData : [],
        }
    }
    componentDidMount() {
          axios
          .get(
            "http://localhost/EducationThroughEntertainment/Project/api/Admin/package/Getpackage.php"
          )
          .then((response) => response.data)
          .then((data) => {
            this.setState({ packageData: data });
          });
        }
  render() {
    return (
     <div className="home">
         
         {this.state.packageData.map((result,key) => (
                <Featuredinfo  title={result.package_name} id={result.package_id} key={key} dur={result.duration} amt={result.package_amount}/>
              ))}
     </div>
    );
  }
}
