import React from 'react'
import profileImg from "../assets/avatars/image-juliusomo.png"
import "../styles/components/AddComment.css"
const AddComment = () => {
    return (
        <div className='addcomment'>
            <img src={profileImg} alt='user' className='userimage-addcomment'/>
            <input type="text" placeholder='Add a Comment...' className='textbox-addcomment'/>
            <button className='send-addcomment'>SEND</button>
        </div>
    )
}

export default AddComment;