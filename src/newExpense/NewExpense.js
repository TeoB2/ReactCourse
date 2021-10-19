//Import component and css
import React from "react";
import ExpenseForm from "./ExpenseForm";
import "../css/NewExpense.css";

//NewExpense component in arrow method
const NewExpense = (props) => {
  //Returns div with inside ExpenseForm component.
  //At ExpenseForm components pass expenses through props.expenses
  //which I previously passed from the App component
  return (
    <div className="new-expense">
      <ExpenseForm expenses={props.expenses} />
    </div>
  );
};

//Export component
export default NewExpense;
