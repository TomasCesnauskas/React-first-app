import { useState } from 'react'
import Header from './components/Header'
import  Tasks from './components/Tasks'


function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at school',
            day: 'Feb 6th',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shoping',
            day: 'Feb 5th',
            reminder: false,
        }
    ])
    //Delete function
    const deleteTask = (id) => {
        console.log('delete', id)
    }



    return (
        <div className="container">
            <Header title='Labas' />
            <Tasks tasks = {tasks} onDelete={deleteTask} />
        </div>
    );
}
export default App;
