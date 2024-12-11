import { useLayoutEffect, useState } from 'react'
import "./model"


function App() {
  const tasks = [
    {
      id: 1,
      title: "Implementare la homepage",
      priority: 1,
      estimatedTime: 120,
      state: "completed"
    },
    {
      id: 2,
      title: "Sviluppare il menu di navigazione",
      priority: 2,
      estimatedTime: 60,
      state: "completed"
    },
    {
      id: 3,
      title: "Creare il footer del sito",
      priority: 3,
      estimatedTime: 30,
      state: "completed"
    },
    {
      id: 4,
      title: "Ottimizzare le performance",
      priority: 1,
      estimatedTime: 180,
      state: "completed"
    },
    {
      id: 5,
      title: "Scrivere test per i componenti",
      priority: 2,
      estimatedTime: 90,
      state: "completed"
    },
    {
      id: 6,
      title: "Implementare la pagina dei contatti",
      priority: 3,
      estimatedTime: 60,
      state: "completed"
    },
    {
      id: 7,
      title: "Aggiungere animazioni CSS",
      priority: 2,
      estimatedTime: 30,
      state: "backlog"
    },
    {
      id: 8,
      title: "Integrare l'API di autenticazione",
      priority: 1,
      estimatedTime: 120,
      state: "in_progress"
    },
    {
      id: 9,
      title: "Aggiornare la documentazione",
      priority: 3,
      estimatedTime: 60,
      state: "backlog"
    },
    {
      id: 10,
      title: "Rifattorizzare il codice CSS",
      priority: 2,
      estimatedTime: 90,
      state: "in_progress"
    }
  ];

  function currentTasks() {
    let current = tasks.map((task, index) => {
      if (task.state.includes("backlog")) {
        return (
          <ul className="list-unstyled">
            <li key={task.id}><b>{task.title}</b><span className="ms-5 bg-danger text-white">{task.state}</span></li>
            <li key={task.id}>Priority: {task.priority}</li>
            <li key={task.id}>Est. Time: {task.estimatedTime}</li>
          </ul>
        )
      } else if (task.state.includes("in_progress")) {
        return (
          <ul className="list-unstyled">
            <li key={task.id}><b>{task.title}</b><span className="ms-5 bg-warning text-white">{task.state}</span></li>
            <li key={task.id}>Priority: {task.priority}</li>
            <li key={task.id}>Est. Time: {task.estimatedTime}</li>
          </ul>
        )
      }

    })
    return current
  }

  function completedTasks() {
    let completed = tasks.map((task, index) => {
      if (task.state.includes("completed")) {
        return (
          <ul className="list-unstyled">
            <li key={task.id}><b>{task.title}</b><span className="ms-5 text-white bg-success">{task.state}</span></li>
            <li key={task.id}>Priority: {task.priority}</li>
            <li key={task.id}>Est. Time: {task.estimatedTime}</li>
          </ul>
        )
      }
    })
    return completed
  }

  return (
    <> <header className="bg-success"><h3>Task Manager</h3></header>
      <main><h5>Current Tasks:{ }</h5>
        {currentTasks()}
        <hr />
        <h5>Completed Tasks</h5>
        {completedTasks()}



      </main>

    </>
  )
}
export default App


