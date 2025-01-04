import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css';
import { useState } from "react";

const initUser = {
    username: '',
    age: ''
}

const AddUser = (props) => {
    const [user, setUser] = useState(initUser);
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (user.username.trim().length === 0 || !user.age) {
            setError({title: 'Invalid values for user', message: 'Please enter a valid name and age (non-empty values)'})
            return;
        }
        props.userAdded(user);
        setUser(initUser);
    }

    const inputChangedHandler = (input, value) => {
        setUser((prevUser) => ({...prevUser, [input]: input === 'age' ? +value : value}))
    }

    const confirmErrorHandler = () => {
        setError(undefined);
    }

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={confirmErrorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">User name</label>
                    <input id="username" type="text" value={user.username} onChange={(event) => inputChangedHandler('username', event.target.value)}></input>

                    <label htmlFor="age">Age (years)</label>
                    <input id="age" type="number" min={1} value={user.age} onChange={(event) => inputChangedHandler('age', event.target.value)}></input>

                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser;