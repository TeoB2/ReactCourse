//import components
import React, { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    //React.Fragment for don't add a div and inside Header and Meals components
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

//export component
export default App;
