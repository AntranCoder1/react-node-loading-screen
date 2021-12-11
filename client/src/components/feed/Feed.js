import React, { useEffect, useState } from 'react';
import Post from '../post/Post';
import './Feed.css';
import axios from 'axios';

const Feed = () => {

    const [video, setVideo] = useState([]);

    useEffect(() => {
        const getVideo = async () => {
            try {
                const res = await axios.get("/api/videos/1");
                setVideo(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getVideo();
    }, [video]);

    return (
        <div className="feed">
            { video.map((item) => (
                <Post key={item.id} video={item}/>
            )) }
        </div>
    )
}

export default Feed
