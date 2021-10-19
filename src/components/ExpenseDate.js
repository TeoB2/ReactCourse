//Import css
import "../css/ExpenseDate.css";

//ExpenseDate component
function ExpenseDate(props)
{
    //Constants with month, year and day modify for a correct display for the user
    //Props.date is passed from Expenses component
    const month = props.date.toLocaleString('en-EN', {month: 'long'});
    const day = props.date.toLocaleString('en-EN', {day: '2-digit'});
    const year = props.date.getFullYear();

    //Returns a div with inside another div with the costants before (JSX)
    return (
        <div className="expense-date">
            <div className="expense-date__month">
                {month}
            </div>
            <div className="expense-date__year">
                {year}
            </div>
            <div className="expense-date__day">
                {day}
            </div>
        </div>
      );
}

//Export component
export default ExpenseDate;