import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import UserList from "./Pages/UserList/UserList";
import Category from "./Pages/Category/Category";
import QuestionLevel from "./Pages/QuestionLevel/QuestionLevel";
import EntertainmentType from "./Pages/Entertainment/EntertainmentType";
import SubCategory from "./Pages/SubCategory/SubCategory";
import Material from "./Pages/Material/Material";
import Package from "./Pages/Package/Package";
import QuestionBundle from "./Pages/QuestionBundle/QuestionBundle";
import Questions from "./Pages/Questions/Questions";
import Staff from "./Pages/Staff/Staff";
import Mediatype from "./Pages/Package/MediaType/Mediatype";
import Entertainmentitem from "./Pages/Entertainmentitem/Entertainmentitem";
import Staffassign from "./Pages/Package/Staffassign/Staffassign";
import QuestionAnswer from "./Pages/QuestionAnswer/QuestionAnswer";
import "./admin.css";

export default class AdminRoute extends Component {
  render() {
    return (
      <>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Users" element={<UserList />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/QuestionLevel" element={<QuestionLevel />} />
            <Route path="/EntertainmentType" element={<EntertainmentType />} />
            <Route path="/SubCategory" element={<SubCategory />} />
            <Route path="/Material" element={<Material />} />
            <Route path="/Package" element={<Package />} />
            <Route path="/QuestionBundle" element={<QuestionBundle />} />
            <Route path="/Question" element={<Questions />} />
            <Route path="/Staff" element={<Staff />} />
            <Route path="/Mediatype" element={<Mediatype />} />
            <Route path="/Entertainmentitem" element={<Entertainmentitem />} />
            <Route path="/Staffasign" element={<Staffassign />} />
            <Route path="/QuestionAnswer" element={<QuestionAnswer />} />
          </Routes>
        </div>
      </>
    );
  }
}
