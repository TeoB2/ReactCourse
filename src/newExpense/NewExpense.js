//Import component and css
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/NewExpense.css";
import { Grid, Row, Col } from 'react-bootstrap';


//NewExpense component in arrow method
const NewExpense = (props) => {

  //Constants with openAddExpensePanel and js method for update him
  const [openAddExpensePanel, setOpenAddExpensePanel] = useState(false);
  
  //Arrow method for pass data from child to parent
  const saveExpenseDataHandler = (enteredExpenseData) => {
      //I pass expenseData to the parent component
      props.onAddExpense(enteredExpenseData);
  };


  //Arrow method for open-close the insertion of new expenses
  const openCloseAddExpensePanel = () => {
    if(openAddExpensePanel)
    {
      //Update openAddExpensePanel flag in false
      setOpenAddExpensePanel(false);
    }
    else
    {
      //Update openAddExpensePanel flag in true
      setOpenAddExpensePanel(true);
    }

    return true;
  };

  //Constants with Code for add expense panel and arrow
  const addExpensePanel = <Row className="mt-4" id="addNewExpensePanel"><ExpenseForm expenses={props.expenses} onSaveExpenseData={saveExpenseDataHandler} /></Row>;
  const arrowDownAddExpense = <FontAwesomeIcon icon={faChevronDown} id="arrowDownAddExpense" className="h3 cursorHandler m-0" title="Click for add a new expense" onClick={openCloseAddExpensePanel}/>;
  const arrowUpAddExpense = <FontAwesomeIcon icon={faChevronUp} id="arrowUpAddExpense" className="h3 cursorHandler m-0" title="Click for close add new expense panel" onClick={openCloseAddExpensePanel}/>;

  //Returns div with inside ExpenseForm component.
  //At ExpenseForm components pass expenses through props.expenses
  //which I previously passed from the App component
  //onSaveExpenseData is a listener that if is inserted a new expense
  //take it from his child recall a saveExpenseDataHandler function
  return (
    <div className="new-expense">
      <Row>
        <Col xs={2} />
        <Col xs={8}>
          <h3 className="m-0">Add Expense</h3>
        </Col>
        <Col xs={2} className="d-flex justify-content-end align-items-center">
          {openAddExpensePanel ? arrowUpAddExpense : arrowDownAddExpense}
          <p>{openAddExpensePanel}</p>
        </Col>
      </Row>
      {openAddExpensePanel ? addExpensePanel : ''}
    </div>
  );
};

//Export component
export default NewExpense;
