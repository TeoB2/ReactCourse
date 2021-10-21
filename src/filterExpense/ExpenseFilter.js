//Import component and css
import React from "react";
import ExpenseFilterSelect from "../filterExpense/ExpenseFilterSelect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid, Row, Col } from 'react-bootstrap';
import "../css/ExpenseFilter.css";

//ExpenseFilter component in arrow method
const ExpenseFilter = (props) => {
    //Constant with all expenses
    const expenses = props.expenses;

    //Arrow method for open-close expenses filter
    const openCloseExpenseFilter = () => {
        let arrowDownExpenseFilter = document.getElementById("arrowDownExpenseFilter");
        let arrowUpExpenseFilter = document.getElementById("arrowUpExpenseFilter");
        let expenseFilter = document.getElementById("expenseFilter");
        
        //Close panel
        if(arrowDownExpenseFilter.classList.contains("d-none"))
        {
        arrowDownExpenseFilter.classList.remove("d-none");
        arrowUpExpenseFilter.classList.add("d-none");
        expenseFilter.classList.add("d-none");
        }
        //Open panel
        else if(arrowUpExpenseFilter.classList.contains("d-none"))
        {
        arrowDownExpenseFilter.classList.add("d-none");
        arrowUpExpenseFilter.classList.remove("d-none");
        expenseFilter.classList.remove("d-none");
        }

        return true;
    };


    //Arrow method for pass year to the parent component
    const yearFilterSelected = (year) => {
        //I pass year to the parent component
        props.onSetYearFilter(year);
    };

    //Returns an expense filter, for now only the year
    return (
        <div className="expense-filter">
          <Row>
            <Col xs={10}>
              <h3 className="m-0">Expense Filter</h3>
              </Col>
            <Col xs={2} className="d-flex justify-content-end align-items-center">
              <FontAwesomeIcon icon={faChevronDown} id="arrowDownExpenseFilter" className="h3 cursorHandler m-0" title="Click for show expense filter" onClick={openCloseExpenseFilter}/>
              <FontAwesomeIcon icon={faChevronUp} id="arrowUpExpenseFilter" className="h3 cursorHandler d-none m-0" title="Click for hide expense filter" onClick={openCloseExpenseFilter}/>
            </Col>
          </Row>
          <Row className="d-none mt-4" id="expenseFilter">
            <ExpenseFilterSelect expenses={expenses} onSetYearFilter={yearFilterSelected}/>
          </Row>
      </div>
    );
};


//Export component
export default ExpenseFilter;