import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import CreateNew from "./Screens/CreateNew";
import Editors from "./Screens/Editors";
function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route exact path="/" component={CreateNew}></Route>
          <Route exact path="/editor/:id" component={Editors}></Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
