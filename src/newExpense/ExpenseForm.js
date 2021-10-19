//Import component and css
import React, { useState } from "react";
import "../css/ExpenseForm.css";

//ExpenseForm component in arrow method
const ExpenseForm = (props) => {
    //Constants with previous title, amount and date and js method for update them
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //titleChangeHandler function in arrow method
    const titleChangeHandler = (event) => {
        
        //Constants with new title value and all expenses
        const newExpense = event.target.value;
        const expenses = props.expenses;

        //Call method for change expense title and update it without refresh the page
        setEnteredTitle(newExpense);

        //Variable with title warning (empty string)
        let warningTitle = "";

        //Cycle all expenses for see if there is another expense with this title
        for(let i = 0; i < expenses.length; i++)
        {
            //If an expense object hasn't title I continue
            if(typeof expenses[i] == "undefined" || typeof expenses[i].title == "undefined" || expenses[i].title.length <= 0)
            {
                continue;
            }
            
            //If a title is different from the new, I continue
            if(expenses[i].title.toLowerCase().trim() !== newExpense.toLowerCase().trim())
            {
                continue;
            }

            //Constants with month, year and day modify for a correct display for the user
            const month = expenses[i].date.toLocaleString('en-EN', {month: 'long'});
            const day = expenses[i].date.toLocaleString('en-EN', {day: '2-digit'});
            const year = expenses[i].date.getFullYear();

            //Concatenate a warning string with the date of the expense already made with the same title
            warningTitle += "You have already entered this expense on " + month + " " + day + " " + year + "\n";
        }

        //Selector on DOM item with warning title 
        let elementWarningTitle = document.getElementById("warningTitle");

        //If warningTitle is empty I add the class "d-none" at elemnt with id "warningTitle"
        //else I remove the class "d-none" for show the message
        if(typeof warningTitle == "undefined" && warningTitle.length <= 0)
        {
            elementWarningTitle.classList.add("d-none");
        }
        else
        {
            elementWarningTitle.classList.remove("d-none");
        }

        //Set string at DOM element with id "warningTitle", also if is empty
        elementWarningTitle.innerHTML = warningTitle;
    };


    //amountChangeHandler function in arrow method
    const amountChangeHandler = (event) => {
        //Constant with new amount value
        const newAmount = event.target.value;

        //Call method for change expense amount and update it without refresh the page
        setEnteredAmount(newAmount);
    }


    //dateChangeHandler function in arrow method
    const dateChangeHandler = (event) => {
        //Constant with new date value
        const newDate = event.target.value;

        //Call method for change expense date and update it without refresh the page
        setEnteredDate(newDate);
    }


    //formSubmitHandler function in arrow method
    const formSubmitHandler = (event) => {
        //Delete all default behaviour
        event.preventDefault();

        //Constant with new amount value
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            data: new Date(enteredDate)
        }

        console.log(expenseData);
    };

    //Returns to where we can enter an expense
    return <form onSubmit={formSubmitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label for="newTitle">Title</label>
                <input type="text" id="newTitle" onChange={titleChangeHandler} required />
            </div>
            <div className="new-expense__control">
                <label for="newAmount">Amount</label>
                <input type="number" min="0.01" step="0.01" id="newAmount" onChange={amountChangeHandler} required />
            </div>
            <div className="new-expense__control">
                <label for="newDate">Date</label>
                <input type="date" id="newDate" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} required />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
        <div id="warningTitle" className="d-none warningTitle"></div>
    </form>;
};

//Export component
export default ExpenseForm;