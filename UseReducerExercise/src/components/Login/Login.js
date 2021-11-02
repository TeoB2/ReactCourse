import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../Input/Input';

const emailReducer = (state, action) => {
  if(action.type === "USER_INPUT")
  {
    return {value: action.val, isValid: action.val.includes("@")};
  }

  if(action.type === "INPUT_BLUR")
  {
    return {value: state.value, isValid: state.value.includes("@")};
  }

  return {value: '', isValid: false};
};

const passwordReducer = (state, action) => {
  if(action.type === "USER_INPUT")
  {
    return {value: action.val, isValid: action.val.trim().length > 6};
  }

  if(action.type === "INPUT_BLUR")
  {
    return {value: state.value, isValid: state.value.trim().length > 6};
  }

  return {value: '', isValid: false};
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null});
  const [passswordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null});

  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passswordState;

  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();


  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500);

    return () => {
      console.log('CLEANUP');
     clearTimeout(identifier);
    };
 }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type: "USER_INPUT", val: event.target.value});

    //setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes('@') && passswordState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: "USER_INPUT", val: event.target.value});

    //setEnteredPassword(event.target.value);

    setFormIsValid(
      (emailState.isValid && passswordState.isValid)
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: "INPUT_BLUR"});
    //setEmailIsValid(emailState.isValid);
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: "INPUT_BLUR"});
    //setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid)
    {
      authCtx.onLogin(emailState.value, passswordState.value);
    }
    else if(!emailIsValid)
    {
      emailInputRef.current.focus();
    }
    else
    {
      passwordInputRef.current.focus();
    }
    
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input ref={emailInputRef} id="email" type="email" value={emailState.value} label="E-mail" isValid={emailIsValid} onChange={emailChangeHandler} onBlur={validateEmailHandler}/>
        <Input ref={passwordInputRef} id="password" type="password" value={passswordState.value} label="Password" isValid={passwordIsValid} onChange={passwordChangeHandler} onBlur={validatePasswordHandler}/>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
