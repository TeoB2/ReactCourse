//Import component and css
import React from "react";
import ExpenseForm from "./ExpenseForm";
import "../css/NewExpense.css";

//NewExpense component in arrow method
const NewExpense = (props) => {
  //Arrow method for pass data from child to parent
  const saveExpenseDataHandler = (enteredExpenseData) => {
      //I pass expenseData to the parent component
      props.onAddExpense(enteredExpenseData);
  };

  //Returns div with inside ExpenseForm component.
  //At ExpenseForm components pass expenses through props.expenses
  //which I previously passed from the App component
  //onSaveExpenseData is a listener that if is inserted a new expense
  //take it from his child recall a saveExpenseDataHandler function
  return (
    <div className="new-expense">
      <ExpenseForm expenses={props.expenses} onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

//Export component
export default NewExpense;
