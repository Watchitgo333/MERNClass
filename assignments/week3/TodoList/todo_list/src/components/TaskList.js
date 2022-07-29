import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';

const TaskList = (props) => {

    const {taskArr, setTaskArr, id, taskContent, taskComplete} = props
    const [inState, setInState] = useState('');

    const taskCompleteFunction = (e) => {
        const complete = true
        const incomplete = false
        const newTaskList = taskArr.map((task, index)=>{
            // if(task.taskId === e.target.id){
                // console.log(true)
                if(taskComplete) {
                    const updateTask = {...task, taskComplete:incomplete}
                    console.log(updateTask)
                    return updateTask
                } else {
                    const updateTask = {...task, taskComplete:complete}
                    console.log(updateTask)
                    return updateTask
                }
            // }
        })
        setTaskArr(newTaskList)
        // const complete = true
        // const incomplete = false
        // const newTaskList = taskArr.map((task)=> {
        //     // console.log(task.taskCompleted===true)
        //     // console.log(id, task.taskId)
        //     // console.log(e.target.id)
        //     console.log(task.taskId)
        //         if(taskComplete) {
        //             const updateTask = {...task, taskComplete:incomplete}
        //             return updateTask
        //         } else {
        //             const updateTask = {...task, taskComplete:complete}
        //             return updateTask
        //     }
        // })
        // setTaskArr(newTaskList)
    }


    const deleteHandler = () => {
        const newTaskList = taskArr.filter((task)=> task.taskId !== id)
        setTaskArr(newTaskList)
    }



    return (
        <div>
            <input className="form-check-input m-2" type="checkbox" id={id} value={taskComplete} onClick={taskCompleteFunction} />
            <label style={{textDecoration: taskComplete ? 'line-through' : null}} className="form-check-label m-2">{taskContent}</label>
            <Button className="m-2" variant="dark" onClick={deleteHandler}>Delete</Button>
        </div>
    )
}

export default TaskList;