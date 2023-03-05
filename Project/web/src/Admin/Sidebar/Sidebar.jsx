import React from 'react'
import "./sidebar.css"
import {LineStyle, Timeline, TrendingUp} from '@material-ui/icons';
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h1 className="sidebarTitle">Dash Board</h1>
                    <ul className="sidebarList">
                    <Link to="/Admin" className="sidebarLink">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon"/>
                                Home
                            </li>
                        </Link>
                        <Link to="/Admin/Users" className="sidebarLink">
                            <li className="sidebarListItem">
                                <Timeline className="sidebarIcon"/>
                                User
                            </li>
                        </Link>
                        <Link to="/Admin/Category" className="sidebarLink">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon"/>
                                Category
                            </li>
                        </Link>
                        <Link to="/Admin/QuestionLevel" className="sidebarLink">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon"/>
                                Question Level
                            </li>
                        </Link>
                        <Link to="/Admin/EntertainmentType" className="sidebarLink">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon"/>
                                Entertainment Type
                            </li>
                        </Link>
                        <Link to="/Admin/SubCategory" className="sidebarLink">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon"/>
                                Sub Category 
                            </li>
                        </Link>
                        <Link to="/Admin/Material" className="sidebarLink">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon"/>
                                Add Metetial
                            </li>
                        </Link>
                        <Link to="/Admin/Package" className="sidebarLink">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon"/>
                                Add Package
                            </li>
                        </Link>
                        <Link to="/Admin/QuestionBundle" className="sidebarLink">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon"/>
                                Add QuestionBundle
                            </li>
                        </Link>
                        <Link to="/Admin/Question" className="sidebarLink">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon"/>
                                Add Question
                            </li>
                        </Link>
                        {/* <Link to="/Admin/Staff" className="sidebarLink">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon"/>
                                Add Staffs
                            </li>
                        </Link> */}
                        
                        <Link to="/Admin/Mediatype" className="sidebarLink">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon"/>
                                Add Media Type
                            </li>
                        </Link>
                        <Link to="/Admin/Entertainmentitem" className="sidebarLink">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon"/>
                                Add Entertainment
                            </li>
                        </Link>
                        {/* <Link to="/Admin/Staffasign" className="sidebarLink">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon"/>
                                Asign Staff
                            </li>
                        </Link> */}
                        <Link to="/Admin/QuestionAnswer" className="sidebarLink">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon"/>
                                Answer
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
