import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Package from "./Pages/Package/Package";
import Home from "./Pages/Home/Home";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import "./user.css";
import SearchClass from "./Pages/SearchClass/SearchClass";
import ViewMateril from "./Pages/ViewMaterial/ViewMateril";
import Question from "./Pages/Question/Question";
import Entertainment from "./Pages/Entertainment/Entertainment";
import ViewEntertainment from "./Pages/ViewEntertainment/ViewEntertainment";


export default class UserRoute extends Component {
    render() {
        return (
            <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/package" element={<Package />} />
                <Route exact path="/SearchClass" element={<SearchClass />} />
                <Route exact path="/ViewMateril" element={<ViewMateril />} />
                <Route exact path="/Question" element={<Question />} />
                <Route exact path="/Entertainment" element={<Entertainment />} />
                <Route exact path="/ViewEntertainment" element={<ViewEntertainment />} />
              </Routes>
            </div>
          </>
        )
    }
}
