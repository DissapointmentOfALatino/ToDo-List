import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { MdDeleteOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import './App.css'

function App() {

  const [isCompleteScreen, setIsCompleteScreen] = useState(false);

  return(
    <>
      <h1>My Todos</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input type="text" placeholder="What's the task title?" />
          </div>
          <div className="todo-input-item">
            <label>Description</label>
            <input type="text" placeholder="What's the task description?" />
          </div>
          <div className="todo-input-item">
            <button type="button" className="primaryBtn">Submit+</button>
          </div>
        </div>

        <div className="btn-area">
          <button className={`secondaryBtn ${isCompleteScreen===false && 'active'}`} 
          onClick={() => setIsCompleteScreen(false)}>To Do</button>
          <button className={`secondaryBtn ${isCompleteScreen===true && 'active'}`} 
          onClick={() => setIsCompleteScreen(true)}>Completed</button>
        </div>

        <div className="todo-list">
          <div className="todo-list-item">

            <div>
              <h3>Task 1</h3>
              <p>Description</p>
            </div>

            <div>
              <MdDeleteOutline className="icon" title="Do you want to delete?"/>
              <FaCheck className="check-icon" title="Do you want to complete?"/>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
