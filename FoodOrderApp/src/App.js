//import components
import React, { Fragment } from "react";
import Header from "./components/Layout/Header";

function App() {
  return (
    //React.Fragment for don't add a div and Header component
    <Fragment>
      <Header />
    </Fragment>
  );
}

//export component
export default App;
