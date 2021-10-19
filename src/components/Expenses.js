//Import components and css
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseItem from "./ExpenseItem";
import "../css/Expenses.css";

//Expenses component in arrow method
const Expenses = (props) =>
{
  //Returns Card component container with inside ExpenseDate and ExprenseItem components. 
  //At ExpenseDate and ExprenseItem components pass date, title and amount through props.expense
  //which I previously passed from the App component
  return (
    <Card className="expenses">
      <ExpenseDate date={props.expense.date}/>
      <ExpenseItem title={props.expense.title} amount={props.expense.amount}/>
    </Card>
  );
}

//Export component
export default Expenses;