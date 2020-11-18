import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import '../css/Post.css';
import '../hashtagColor.tsx';

function Post({ profile = "", name, date = "Jun 17", mediaUrl, text }: { profile: string, name: string, date: string, mediaUrl: string, text: string }) {
    let socialname = name.split(" ").join("").toLowerCase();
    return (
        <div className="holder">
            <div className="topline">
                <img src = {profile} alt = "Profile Picture"/>
                <strong>{name}</strong>
                <p>@{socialname} | {date}</p>
            </div>
            <div className="text" id = "text">
                <p>{text}</p>
            </div>
            <div className="media">
                <img src = {mediaUrl} alt = ""/>
            </div>
            <div className="bottomline">
                <ChatBubbleOutlineIcon /><p>17</p>
                <FavoriteBorderIcon /><p>8</p>
            </div>
        </div>
    )
}

export default Post
