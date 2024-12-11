import { useLayoutEffect, useState } from 'react'
import tasks from "./model"


function App() {

  const currentTasks = tasks.filter((task) => task.state.includes("in_progress") || task.state.includes("backlog"));
  const completedTasks = tasks.filter((task) => task.state.includes("completed"));

  return (
    <> <header className="bg-success"><h3>Task Manager</h3></header>
      <main><h4>Current Tasks: {currentTasks.length}</h4>
        <ul className="list-unstyled">
          {currentTasks.map((task) => {
            return (
              <li key={task.id} className="list-unstyled">
                <h5><b>{task.title}</b><span className="ms-5 text-white bg-danger">{task.state}</span></h5>
                <div>Priority: {task.priority}</div>
                <div>Est. Time: {task.estimatedTime}</div>
              </li>
            )
          })}
        </ul>

        <hr />
        <h4>Completed Tasks:{completedTasks.length}</h4>
        <ul className="list-unstyled">
          {completedTasks.map((task) => {

            return (<li key={task.id} className="list-unstyled">
              <h5><b>{task.title}</b><span className="ms-5 text-white bg-success">{task.state}</span></h5>
              <div>Priority: {task.priority}</div>
              <div>Est. Time: {task.estimatedTime}</div>
            </li>)
          })}
        </ul>
      </main>

    </>
  )
}
export default App


