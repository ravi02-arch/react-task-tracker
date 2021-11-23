import Header from './components/Header'
import { useState, Component } from "react"
import Tasks from './components/Tasks';

function App() {
  
  const [tasks, setTasks] = useState([
      {
          'id':1,
          'text': 'Doctors Appointment',
          'day': 'Feb 5th at 2:30',
          'reminder': true,
      },
      {
          'id':2,
          'text': 'Meeting at school',
          'day': 'Feb 6th at 1:30',
          'reminder': true,
      },
      {
          'id':3,
          'text': 'Food Shopping',
          'day': 'Feb 7th at 2:30',
          'reminder': true,
      },
      
  
  ])

  // const deleteTask = (id) => {
  //   console.log('delete', id)
  // }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className='container'>
     <Header / >
     <Tasks tasks={tasks} onDelete={deleteTask} / >
    </div>
  )
}



export default App;
