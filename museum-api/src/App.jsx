import React from "react";
import { Route, Switch } from "react-router-dom";
// import Landing from "./Pages/Home";
import Home from "./Pages/Home";
import { links } from "./util/consts";
// import Navbar from "./Components/Navbar";

function App() {
  
  return (
    // <div className="App">
    //   <Landing />
    // </div>
    <>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {links
          .filter((link) => link.text !== "Home")
          .map((link) => {
            const { id, url, page } = link;
            return (
              <Route key={id} path={url}>
                {page}
              </Route>
            );
          })}
      </Switch>
    </>
  );
}

export default App;
