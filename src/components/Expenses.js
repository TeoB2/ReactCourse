//Import components and css
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseItem from "./ExpenseItem";
import "../css/Expenses.css";

//Expenses component in arrow method
const Expenses = (props) =>
{
  let expenses = props.expenses;
  let yearFilter = props.yearFilterSelected;

  //Check if there are a year filter
  if(yearFilter.length > 0)
  {
    expenses = props.expenses.filter(expense => {
      return expense.date.getFullYear().toString() === yearFilter
    });
  }

  //Cycle all expenses
  let expense;
  if(typeof expenses != "undefined" && expenses.length > 0)
  {
    expense = expenses.map(expense => (<Card className={"expenses"} key={expense.id}><ExpenseDate date={expense.date}/><ExpenseItem title={expense.title} amount={expense.amount} id={expense.id}/></Card>));
  }
  else
  {
    expense = <div className={"expenses"}><p >No expenses found</p></div>;
  }
  

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