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
  if(typeof yearFilter != "undefined")
  {
    for(let i = 0; i < expenses.length; i++)
    {
      if(typeof expenses[i] == "undefined" || expenses[i].date == "undefined" || expenses[i].length <= 0)
      {
        continue; 
      }
  
      let date = new Date(expenses[i].date);
      let year = date.getFullYear();
  
      //If the expense year is the same or there aren't a filter year class remain empty
      if(year == yearFilter || yearFilter.length <= 0)
      {
        expenses[i].class = "";
      }
      //Else update class with "d-none"
      else
      {
        expenses[i].class = "d-none";
      }      
    }
  }


  //Cycle all expenses
  const expense = expenses.map(expense => (<Card className={"expenses " + expense.class} key={expense.id}><ExpenseDate date={expense.date}/><ExpenseItem title={expense.title} amount={expense.amount} id={expense.id}/></Card>));

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