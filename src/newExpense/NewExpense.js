//Import component and css
import React from "react";
import ExpenseForm from "./ExpenseForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/NewExpense.css";
import { Grid, Row, Col } from 'react-bootstrap';


//NewExpense component in arrow method
const NewExpense = (props) => {
  //Arrow method for pass data from child to parent
  const saveExpenseDataHandler = (enteredExpenseData) => {
      //I pass expenseData to the parent component
      props.onAddExpense(enteredExpenseData);
  };


  //Arrow method for open-close the insertion of new expenses
  const openCloseAddExpensePanel = () => {
    let arrowDownAddExpense = document.getElementById("arrowDownAddExpense");
    let arrowUpAddExpense = document.getElementById("arrowUpAddExpense");
    let addNewExpensePanel = document.getElementById("addNewExpensePanel");
    
    //Close panel
    if(arrowDownAddExpense.classList.contains("d-none"))
    {
      arrowDownAddExpense.classList.remove("d-none");
      arrowUpAddExpense.classList.add("d-none");
      addNewExpensePanel.classList.add("d-none");
    }
    //Open panel
    else if(arrowUpAddExpense.classList.contains("d-none"))
    {
      arrowDownAddExpense.classList.add("d-none");
      arrowUpAddExpense.classList.remove("d-none");
      addNewExpensePanel.classList.remove("d-none");
    }

    return true;
  };


  //Returns div with inside ExpenseForm component.
  //At ExpenseForm components pass expenses through props.expenses
  //which I previously passed from the App component
  //onSaveExpenseData is a listener that if is inserted a new expense
  //take it from his child recall a saveExpenseDataHandler function
  return (
    <div className="new-expense">
      <Row>
        <Col xs={10}>
          <h3 className="m-0">Add Expense</h3>
        </Col>
        <Col xs={2} className="d-flex justify-content-end align-items-center">
          <FontAwesomeIcon icon={faChevronDown} id="arrowDownAddExpense" className="h3 cursorHandler m-0" title="Click for add a new expense" onClick={openCloseAddExpensePanel}/>
          <FontAwesomeIcon icon={faChevronUp} id="arrowUpAddExpense" className="h3 cursorHandler d-none m-0" title="Click for close add new expense panel" onClick={openCloseAddExpensePanel}/>
        </Col>
      </Row>
      <Row className="d-none mt-4" id="addNewExpensePanel">
        <ExpenseForm expenses={props.expenses} onSaveExpenseData={saveExpenseDataHandler} />
      </Row>
    </div>
  );
};

//Export component
export default NewExpense;
