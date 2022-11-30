import React from 'react'
import AddComment from './components/AddComment.jsx'
import Comments from './components/Comments.jsx'
import "./styles/global.css"
function App() {
  return (
    <div>
      <Comments/>
      <AddComment/>
    </div>
  )
}

export default App