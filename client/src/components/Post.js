import React from 'react';
import { Avatar} from "@material-ui/core"
import './Post.css';
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons"
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Post({profilePic, image, username, timestamp, message }) {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar src={profilePic} className="post_avatar" />
                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>{/*new Date(timestamp?.toDate()).toUTCString()*/}</p>
                </div>
            </div>
    
            <div className="post_buttom">
                <p>{message}</p>
            </div>
            
            <div className="post_image">
                <img src={image} alt="" />
            </div> 

             <div className="post_options">
                <ThumbUpIcon />
                <p>Like</p>
            </div>
           
            <div className="post_options">
                <ChatBubbleOutlineIcon />
                <p>Comment</p>
            </div>

            <div className="post_options">
                <NearMeIcon />
                <p>Share</p>
            </div>

            <div className="post_options">
                <AccountCircleIcon />
                <ExpandMoreOutlined/>
            </div> 

        </div>
    )
}

export default Post;
