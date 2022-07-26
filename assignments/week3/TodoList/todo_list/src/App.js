
import './App.css';
import TodoList from './components/TaskForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskForm from './components/TaskForm';
import {useState} from 'react';
import TaskList from './components/TaskList';


function App() {

  const [taskArr, setTaskArr] = useState([]);
  return (
    <div className="App">
      <TaskForm taskArr={taskArr} setTaskArr={setTaskArr}/>
      {
        taskArr.map((task, key) => {
          return <TaskList key={key} taskArr={taskArr} setTaskArr={setTaskArr} id={task.taskId} taskContent={task.taskContent} taskCompleted={task.taskCompleted} />
        })
      }
    </div>
  );
}

export default App;
