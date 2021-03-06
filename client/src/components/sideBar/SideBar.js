import React from 'react';
import './SideBar.css';
import {
    Menu,
    Home,
    Explore,
    Subscriptions,
    VideoLibrary,
} from "@material-ui/icons";

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <Menu />
                <div className="sidebarItem active">
                    <Home />
                    <span>Home</span>
                </div>
                <div className="sidebarItem">
                    <Explore />
                    <span>Explore</span>
                </div>
                <div className="sidebarItem">
                    <Subscriptions />
                    <span>Subscriptions</span>
                </div>
                <div className="sidebarItem">
                    <VideoLibrary />
                    <span>Library</span>
                </div>
            </div>
        </div>
    )
}

export default SideBar
