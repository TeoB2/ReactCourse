import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        const enteredNameRef = nameInputRef.current.value;
        const enteredAgeRef = ageInputRef.current.value;

        if(enteredNameRef.length <= 0 || enteredAge.length <= 0)
        {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non empty values)."
            });

            return false;
        }

        if(parseInt(enteredAgeRef) < 1)
        {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (> 0)."
            });

            return false;
        }

        props.onAddUser(enteredUsername, enteredAgeRef);

        setEnteredUsername('');
        setEnteredAge('');
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <React.Fragment>
            {error && <ErrorModal error={error} onErrorHandler={errorHandler} />}
            <Card cssClass={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername} ref={nameInputRef} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" min="1" step="1" onChange={ageChangeHandler} value={enteredAge} ref={ageInputRef} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </React.Fragment>
    )

};

export default AddUser;