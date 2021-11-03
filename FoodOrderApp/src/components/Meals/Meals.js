//import components
import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
    //React.Fragment for don't add a div and inside MealsSummary and AvailableMeals components
    return  (
                <Fragment>
                    <MealsSummary />
                    <AvailableMeals />
                </Fragment>
            );
};

//export component
export default Meals;