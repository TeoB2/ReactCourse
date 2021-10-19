//Import css
import "../css/Card.css";

//Card component
function Card(props) {
  //Constant classes where I have concatenated "card" and props.className inherited from Expense component
  const classes = "card " + props.className;

  //Return a div with className created before with the content inherited from Expense component (this component is only a container)
  return <div className={classes}>{props.children}</div>;
}

//Export component
export default Card;
