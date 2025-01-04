import Card from "../UI/Card";
import classes from './UsersList.module.css';

const UsersList = (props) => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map(user => <li key={user.id}><strong>{user.username}</strong> (<span>{user.age} years old</span>)</li>)}
            </ul>
        </Card>
    );
}

export default UsersList;