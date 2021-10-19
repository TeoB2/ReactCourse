//Import components
import React from "react";
import Expenses from "./components/Expenses";

//App component
function App() {
  //constant with expenses to pass to pass to Expenses component (static data)
  const expenses = [
    {
      id: "e1",
      title: "Toilette Paper",
      amount: 294.67,
      date: new Date(2021, 1, 25),
    },
    { id: "e2", title: "New TV", amount: 294.67, date: new Date(2021, 2, 28) },
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

  //I create a div where inside there are a h2 tag and another div with Expenses component for print the expenses before.
  //At Expenses component pass one element of expenses constant
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Prima applicazione con React"),
    React.createElement(
      "div",
      {},
      React.createElement(Expenses, { expense: expenses[0] }),
      React.createElement(Expenses, { expense: expenses[1] }),
      React.createElement(Expenses, { expense: expenses[2] }),
      React.createElement(Expenses, { expense: expenses[3] })
    )
  );
}

//export component
export default App;
