import React, { Component } from 'react'
import "./topbar.css"
import { NotificationsNone ,Language , Settings} from '@material-ui/icons';

export default class Topbar extends Component {
    logout = (e) =>{


        window.localStorage.clear();
        window.sessionStorage.clear();
        window.location='/';
    
    
      }
    render() {
        return (
            <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className="logo">Education Through Entertainment</span>
                </div>
                <div className="topright">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer" onClick={this.logout}>
                        <Settings/>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/220px-Elon_Musk_Royal_Society_%28crop1%29.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
        )
    }
}
