import React, { useEffect, useState } from 'react';
import './TopBar.css';
import {
    Mic,
    Search,
    VideoCall,
    Apps,
    Notifications,
} from "@material-ui/icons";
import axios from 'axios';

const TopBar = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get("/api/user/1");
                setUser(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getUser();
    }, [user]);

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
                <img className="topImg" src={user.avatar} alt="" />
            </div>
        </div>
    )
}

export default TopBar
