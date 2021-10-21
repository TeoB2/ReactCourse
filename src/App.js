//Import components
import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./newExpense/NewExpense";
import ExpenseFilter from "./filterExpense/ExpenseFilter";

//App component
function App() {
  //Variable with expenses to pass to pass to Expenses component
  let expenses = [
    {
      id: "e1",
      title: "Toilette Paper",
      amount: 294.67,
      date: new Date(2021, 1, 25),
      class: ""
    },
    { 
      id: "e2", 
      title: "New TV", 
      amount: 294.67, 
      date: new Date(2021, 2, 28),
      class: "" 
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 7, 12),
      class: ""
    },
    {
      id: "e4",
      title: "New Desktop",
      amount: 294.67,
      date: new Date(2019, 2, 6),
      class: ""
    },
  ];

  let expensesOrig = expenses;

  //Constant with previous expenses and js method for update expense after insert a new expense
  const [expensesUpdated, setExpenses] = useState(expenses);
  const [expensesOrigUpdated, setExpensesOrig] = useState(expenses);
  const [yearFilterSelected, setYearFilterSelected] = useState('');

  //Arrow method recall when comes inserted a new expense
  const addExpenseDataHandler = (expense) => {
    //Constant with a new expense, comes add id and date object
    const expenseData = {
      id: "e" + (expenses.length + 1),
      ...expense,
      date: new Date(expense.data),
    };

    //Concat this new expense with previous expenses
    expenses = expenses.concat(expenseData); 
    expensesOrig = expenses;
    
    //Call method for change expenses variable and update list without refresh the page
    setExpenses(expenses);
    setExpensesOrig(expenses);
  };

  expenses = expensesUpdated;

  //Year for filter expenses
  const yearFilter = (year) => {
    setYearFilterSelected(year);

    //Check if is been added a new expense
    let expenseOrigTmp = expensesOrig;
    if(expensesOrig.length != expensesOrigUpdated.length)
    {
      expenseOrigTmp = expensesOrigUpdated;
    }
    
    setExpenses(expenseOrigTmp);
};

  //I create a div where inside there are a h2 tag and another three div with NewExpense for insert a new expense, ExpenseFilter for filter expense and Expenses components for print the expenses before.
  //A NewExpense component pass expenses constant and take a new expense (from child to parent), ExpenseFilter pass expenses constant and take a yearFilter (from child to parent) and Expenses component pass expenses constant and yearFilterSelected
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
      React.createElement(ExpenseFilter, {expenses: expenses, onSetYearFilter: yearFilter})
    ),
    React.createElement(
      "div",
      {},
      React.createElement(Expenses, { expenses: expenses, yearFilterSelected: yearFilterSelected})
    )
  );
}

//export component
export default App;
