import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Route path="/Login" exact>
        <Login />
      </Route>
    </Switch>
  );
};

export default App;
