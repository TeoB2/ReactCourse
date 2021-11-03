//import components
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

//array with meals available
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvailableMeals = () => {

    //cycle of all meals
    const mealsList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price} id={meal.id} />);

    //unordinate list of available meals inside Card component
    return  (
                <section className={classes.meals}>
                    <Card>
                        <ul>
                            {mealsList}
                        </ul>
                    </Card>
                </section>
            );
}

//export component
export default AvailableMeals;