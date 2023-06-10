import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Test from "./pages/Test";
import Api from "./pages/MainPageComponent/Api";
import { Fragment } from "react";

const App = () => {
  return (
    <Switch>
      {/* <Api /> */}
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Route path="/Login" exact>
        <Login />
      </Route>
      <Route path="/Test" exact>
        <Test />
      </Route>
    </Switch>
  );
};

export default App;
