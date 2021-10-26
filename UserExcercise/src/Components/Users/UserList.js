import React from "react";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UserList = props => {
   
    return (
        <Card cssClass={styles.users}>
         {props.users.length > 0 && <ul>{props.users.map(user => <li key={user.id}>{user.name} ({user.age} years old)</li>)}</ul>}
        </Card>
    );
};


export default UserList;