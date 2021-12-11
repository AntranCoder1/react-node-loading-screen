import React from 'react';
import './TopBar.css';
import {
    Mic,
    Search,
    VideoCall,
    Apps,
    Notifications,
} from "@material-ui/icons";

const TopBar = () => {
    return (
        <div className="topbar">
            <div className="topLeft">
                <img className="logo" src="https://i.ibb.co/KDtnJVY/logo.png" alt="" />
                <span className="logoText">AnTube</span>
            </div>
            <div className="topCenter">
                <div className="topSearch">
                    <input type="text" placeholder="Search" />
                    <div className="topSearchIconContainer">
                        <Search className="topSearchIcon" />
                    </div>
                    <Mic />
                </div>
            </div>
            <div className="topRight">
                <VideoCall className="topIcon" />
                <Apps className="topIcon" />
                <Notifications className="topIcon" />
                <img className="topImg" src="https://i.pinimg.com/564x/22/9a/bf/229abfaf85c12dbc104c4d42f357d9d1.jpg" alt="" />
            </div>
        </div>
    )
}

export default TopBar
