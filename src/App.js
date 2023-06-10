import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Test from "./pages/Test";

const App = () => {
  return (
    <Switch>
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
