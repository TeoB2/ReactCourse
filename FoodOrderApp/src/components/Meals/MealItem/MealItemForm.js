//import components
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = props => {
    //form for add meal to the cart with input component
    return  (
                <form className={classes.form}>
                    <Input label="Amount" input={{
                        id: 'amount_' + props.id,
                        type: 'number',
                        min: '1',
                        max: '5',
                        step: '1',
                        defaultValue: '1'
                    }} />
                    <button>+ Add</button>
                </form>
            );
};

//export component
export default MealItemForm;