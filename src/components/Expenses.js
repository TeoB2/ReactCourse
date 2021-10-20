//Import components and css
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseItem from "./ExpenseItem";
import "../css/Expenses.css";

//Expenses component in arrow method
const Expenses = (props) =>
{
  let expenses = props.expenses;
  //Cycle all expenses
  const expense = expenses.map(expense => (<Card className="expenses" key={expense.id}> <ExpenseDate date={expense.date}/> <ExpenseItem title={expense.title} amount={expense.amount} id={expense.id}/> </Card>));

  //Returns Card component container with inside ExpenseDate and ExprenseItem components. 
  //At ExpenseDate and ExprenseItem components pass date, title and amount through props.expenses
  //which I previously passed from the App component
  return (
    <div>
      {expense}
    </div>
    
  );
}

//Export component
export default Expenses;