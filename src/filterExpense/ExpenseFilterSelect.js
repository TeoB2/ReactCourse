//Import component
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';

//ExpenseFilterSelect component in arrow method
const ExpenseFilterSelect = (props) => {
    //Constant with all expenses
    const expenses = props.expenses;


    //Constants with previous yearFilterSelected and js method for update them
    const [yearFilterSelected, setYearFilterSelected] = useState('');

    //Array with years selectable for the filter
    let yearsFilter = [];
    for(let i = 0; i < expenses.length; i++)
    {
        if(typeof expenses[i] == "undefined" || typeof expenses[i].date == "undefined" || expenses[i].date.length <= 0)
        {
            continue;
        }

        //Get year from date expense
        let date = expenses[i].date;
        date = new Date(date);
        let year = date.getFullYear();

        if(typeof year == "undefined" || year <= 0)
        {
            continue;
        }

        //If year is already in array I don't insert it
        let inArrayYear = inArray(year, yearsFilter);

        if(inArrayYear)
        {
            continue;
        }

        //Add year into yearsFilter array
        yearsFilter.push(year);
    }

    //I order the array from lower to higher
    yearsFilter.sort();


    //Function for check if value is in array
    function inArray(value, array)
    {
        if(typeof value == "undefined" || typeof array == "undefined")
        {
            return true;
        }

        for(let i = 0; i < array.length; i++) 
        {
            //If in array return true
            if(array[i] == value) 
            {
                return true;
            }
        }

        //If not in array return false
        return false;
    };

    //Update yearFilterSelected and pass it to the parent component
    const newYearFilterSelected = (event) => {
        setYearFilterSelected(event.target.value);
        props.onSetYearFilter(event.target.value);
    };

    //Cycle all expense years and insert it in a option tag
    const expenseYearsOption = yearsFilter.map(year => (<option key={year} value={year}>{year}</option>));

    //Returns the filters of the years
    return (
        <Col xs={12}>
            <Row>
                <Col xs={9} sm={9} md={10}>
                    <p className="m-0 d-flex justify-content-end align-items-center"><strong>Select year:</strong></p> 
                </Col>
                <Col xs={3} sm={3} md={2}>
                    <div className="m-0 d-flex justify-content-start align-items-center">
                        <select onChange={newYearFilterSelected}>
                            <option value=""></option>
                            {expenseYearsOption}
                        </select>
                    </div>
                </Col>
            </Row>
        </Col>
    );
};


//Export component
export default ExpenseFilterSelect;