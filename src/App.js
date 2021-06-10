import React, { Fragment } from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Body from "./Body/Body"

//Import CSS
import "../src/App.css"
import "../src/Articles/Articles.css"
import "../src/Footer/Footer.css";
import "../src/Header/Header.css";
import "../src/Navigation/Navigation.css";
import "../src/SearchBar/SearchBar.css";
import "../src/Articles/Articles.css";
import "../src/Body/Body.css"

function App() {

  return (
    <Fragment>
      <Header />
      <Body />
      <Footer />
    </Fragment>
  );
}

export default App;
