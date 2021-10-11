import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import ShoppingCart from "./components/ShoppingCart";

function Routes() {
  return (
      <BrowserRouter>
        <Nav/>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/shop" component={Shop}/>
            <Route exact path="/shopping-cart" component={ShoppingCart}/>
        </Switch>
      </BrowserRouter>
  );
}

export default Routes;