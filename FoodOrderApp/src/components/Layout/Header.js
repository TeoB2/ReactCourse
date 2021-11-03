//import components
import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return  (
                //React.Fragment for don't add a div, header with HeaderCartButton component and an image
                <Fragment>
                    <header className={classes.header}>
                        <h1>ReactMeals</h1>
                        <HeaderCartButton />
                    </header>
                    <div className={classes["main-image"]}>
                        <img src={mealsImage} alt="A table full of delicious food" />
                    </div>
                </Fragment>
            )
};

//export component
export default Header;