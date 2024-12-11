import { useLayoutEffect, useState } from 'react'
import tasks from "./model"



function App() {

  const currentTasks = tasks.filter((task) => task.state.includes("in_progress") || task.state.includes("backlog"));
  const completedTasks = tasks.filter((task) => task.state.includes("completed"));

  return (
    <> <header className="bg-success p-3"><h3>Task Manager</h3></header>
      <main className="p-3"><h4>Current Tasks: {currentTasks.length}</h4>
        <ul className="list-unstyled">
          {currentTasks.map((task) => {
            if (task.state.includes("in_progress")) {
              return (
                <li key={task.id} className="list-unstyled">
                  <h5><b>{task.title}</b><span className="ms-5 text-white bg-warning p-1">{task.state}</span></h5>
                  <div>Priority: {task.priority}</div>
                  <div>Est. Time: {task.estimatedTime}</div>
                </li>)
            } else {
              return (
                <li key={task.id} className="list-unstyled">
                  <h5><b>{task.title}</b><span className="ms-5 text-white bg-danger p-1">{task.state}</span></h5>
                  <div>Priority: {task.priority}</div>
                  <div>Est. Time: {task.estimatedTime}</div>
                </li>
              )
            }
          })}
        </ul>
        <hr />
        <h4>Completed Tasks: {completedTasks.length}</h4>
        <ul className="list-unstyled">
          {completedTasks.map((task) => {

            return (<li key={task.id} className="list-unstyled">
              <h5><b>{task.title}</b><span className="ms-5 text-white bg-success p-1">{task.state}</span></h5>
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


