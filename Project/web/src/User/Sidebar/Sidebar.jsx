import React from "react";
import "./sidebar.css";
import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h1 className="sidebarTitle">Dash Board</h1>
          <ul className="sidebarList">
            <Link to="/User" className="sidebarLink">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/User/Package" className="sidebarLink">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Package
              </li>
            </Link>
            <Link to="/User/SearchClass" className="sidebarLink">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Search Class
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
