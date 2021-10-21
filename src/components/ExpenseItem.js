//Import component and css
import React, {useState} from "react";
import "../css/ExpenseItem.css";

//ExpenseItem component in arrow method
const ExpenseItem = props => 
{
  //Dynamic id for input
  const inputId = "newTitle_" + props.id

  //Constant with previous title and js method for update expense title after click button
  const [title, setTitle] = useState(props.title);

  //Function in arrow method call when button is clicked
  const clickHandler = () =>
  {
    //Confirm change title
    if(!window.confirm("Are you sure to change title?"))
    {
      return false;
    }

    //Get new title value
    let newTitle = document.getElementById(inputId).value;

    //If new title is empty return an alert
    if(typeof newTitle == "undefined" || newTitle.length <= 0)
    {
      alert("Please insert a valid title!");

      return false;
    }

    //Call method for change expense title and update it without refresh the page
    setTitle(newTitle);

    //Clear input tag
    document.getElementById(inputId).value = null;

    return true;
  };

  //Returns a div tagged h2 with inside that can change to button click and a div with price amount (JSX)
  return (
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <input type="text" id={inputId} placeholder="Insert new title"></input>
        <button type="button" className="btn btn-primary" onClick={clickHandler}>Change title</button>
      </div>
  );
}

//Export component
export default ExpenseItem;
