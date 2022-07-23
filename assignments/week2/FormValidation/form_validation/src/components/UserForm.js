import { useReducer } from 'react';

const UserForm = () => {
    const action = {
        type: "SET_EMAIL"
    }
    switch (action.type) {
        case "SET_EMAIL":
            // This block of code will be reached because action.type === "SET_EMAIL"
            console.log("SET_EMAIL switch code block fired");
            break;
        case "SET_PASSWORD":
            // This block of code will NOT be reached because action.type !== "SET_PASSWORD"
            console.log("SET_PASSWORD switch code block fired");
            break;
        case "SET_EMAIL_ERROR":
            // This block of code will NOT be reached because action.type !== "SET_EMAIL_ERROR"
            console.log("SET_EMAIL_ERROR switch code block fired");
            break;
        default:
            // The default case is triggered when none of the stated cases above are triggered 
            console.log("default case fired")
    }

const initialState = {
    email: '',
    password: ''
};
 
// REMEMBER the action will look like: {type: "DO_SOMETHING", payload: "some_value"}
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_EMAIL":
            return {
                ...state,
                email: action.payload
            }
        case "SET_PASSWORD":
            return {
                ...state,
                password: action.payload
            }
        default:
            return state;
    }
}
 
    const [state, dispatch] = useReducer(reducer, initialState);
   
    const handleEmailChange = (e) => {
        dispatch({
            type: "SET_EMAIL", 
            payload: e.target.value 
        });
    }
    const handlePasswordChange = (e) => {
        dispatch({
            type: "SET_PASSWORD",
            payload: e.target.value
        })
    }
 
    return (
        <div>
            <h1>{JSON.stringify(state)}</h1> {/* display current value of state */}
            <div>
                <label>
                    <span>Email</span>
                    <input
                        id="name"
                        value={state.email}
                        onChange={(e) => handleEmailChange(e)}
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Password</span>
                    <input
                        id="password"
                        value={state.password}
                        onChange={(e) => handlePasswordChange} 
                    />
                </label>
            </div>
        </div>
    );
};

export default UserForm;
