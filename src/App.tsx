import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Details } from "./Pages/Details";
import { Home } from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
