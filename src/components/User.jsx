import React from 'react'
import "../styles/components/User.css"

function User(props) {
    return (
        <div className='usercard-comments' key={props.id}>
            <img src={props.user.image.png} alt="" />
            <div>{props.user.username}</div>
            {/* <div>{props.comments.createdAt}</div>
            <div>{props.comments.content}</div> */}
        </div>
    )
}

export default User 