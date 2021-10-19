//Import component and css
import React, {useState} from "react";
import "../css/ExpenseItem.css";

//ExpenseItem component in arrow method
const ExpenseItem = props => 
{
  //Constant with previous title and js method for update expense title after click button
  const [title, setTitle] = useState(props.title)

  //Function in arrow method call when button is clicked
  const clickHandler = () =>
  {
    //Call method for change expense title and update it without refresh the page
    setTitle("foo");
  }

  //Returns a div tagged h2 with inside that can change to button click and a div with price amount (JSX)
  return (
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change title</button>
      </div>
  );
}

//Export component
export default ExpenseItem;
