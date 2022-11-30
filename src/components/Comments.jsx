import React from 'react'
import "../styles/components/Comments.css"
import data from "../data.jsx"
import { useState } from "react"
import User from './User'

function Comments() {

    const [count, setCount] = useState();
    const upvotes = () => {
        setCount(count + 1)
    }
    const downvotes = () => {
        setCount(count - 1)
    }

    const TopBar = data.map((item) => {
        return <User {...item} />;
    });
    return (
        <div>
            <div className='all-comments'>
                <div className='votes-comments'>
                    <button onClick={upvotes}>+</button>
                    <div>{count}</div>
                    <button onClick={downvotes}>-</button>
                </div>
                <div className='topBar-comments'>
                    {TopBar}
                </div>
                <div>
                    <button>Reply</button>
                </div>
            </div>
        </div>
    )
}

export default Comments