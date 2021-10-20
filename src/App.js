//Import components
import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./newExpense/NewExpense";

//App component
function App() {
  //Variable with expenses to pass to pass to Expenses component
  let expenses = [
    {
      id: "e1",
      title: "Toilette Paper",
      amount: 294.67,
      date: new Date(2021, 1, 25),
    },
    { 
      id: "e2", 
      title: "New TV", 
      amount: 294.67, 
      date: new Date(2021, 2, 28) 
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 7, 12),
    },
    {
      id: "e4",
      title: "New Desktop",
      amount: 294.67,
      date: new Date(2021, 2, 6),
    },
  ];

  //Constant with previous expenses and js method for update expense after insert a new expense
  const [expensesUpdated, setExpenses] = useState(expenses);

  //Arrow method recall when comes inserted a new expense
  const addExpenseDataHandler = (expense) => {
    //Constant with a new expense, comes add id and date object
    const expenseData = {
      id: "e" + (expenses.length + 1),
      ...expense,
      date: new Date(expense.data)
    };

    //Concat this new expense with previous expenses
    expenses = expenses.concat(expenseData); 

    //Call method for change expenses variable and update list without refresh the page
    setExpenses(expenses);
  };

  expenses = expensesUpdated;

  //I create a div where inside there are a h2 tag and another two div with NewExpense for insert a new expense and Expenses components for print the expenses before.
  //A NewExpense component pass expenses constant and Expenses component pass one element of expenses constant (from child to parent)
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Prima applicazione con React"),
    React.createElement(
      "div",
      {},
      React.createElement(NewExpense, {expenses: expenses, onAddExpense: addExpenseDataHandler})
    ),
    React.createElement(
      "div",
      {},
      React.createElement(Expenses, { expenses: expenses})
    )
  );
}

//export component
export default App;
