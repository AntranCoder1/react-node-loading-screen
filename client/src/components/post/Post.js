import React from 'react';
import './Post.css';

const Post = () => {
    return (
        <div className="post">
            <div className="postImgContainer">
                <img src="https://i.ibb.co/MGBtHF4/3.png" alt="" className="postImg" />
                <span className="postDuration">8:00:00</span>
            </div>
            <div className="postInfoContainer">
                <img className="postAvatar" src="https://images.pexels.com/photos/3149036/pexels-photo-3149036.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                <div className="postInfo">
                    <span className="postTitle">Watch my amazing day in job</span>
                    <span className="postChannel">It Professor</span>
                    <span className="postDetail">420K views • 2 days ago</span>
                </div>
            </div>
        </div>
    )
}

export default Post
