import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import {nanoid} from 'nanoid';

const TaskForm = (props) => {

    const {taskArr, setTaskArr} = props;

    const [taskContent, setTaskContent] = useState('');
    const [taskComplete, setTaskComplete] = useState(false);
    // const [taskArr, setTaskArr] = useState([]);


    const createTask = (e) => {
        e.preventDefault();

        const newTask = {
            taskId: nanoid(),
            taskContent,
            taskComplete
        };
        
        setTaskArr([...taskArr, newTask]);
        setTaskContent('')
        setTaskComplete(false)

        // console.log(taskContent, newTask.taskContent, newTask.taskId)
        console.log(taskContent)


        
    };
    

    return(
        <div className='container col-4'>
            <h3>React Task List</h3>
            <Form onSubmit={createTask}>
                <Form.Group className='mb-3 d-flex flex-column'>
                    <Form.Label className='align-self-start'>Add a Task:</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter task content" value={taskContent} onChange={(e)=>setTaskContent(e.target.value)}/>
                    <Button className='col-4 mt-2' variant="primary" type="submit">Add</Button>
                </Form.Group>
            </Form>
            <div>
                <h4 className='align-self-start'>Tasks:</h4>
            </div>
        </div>
    )

}

export default TaskForm;