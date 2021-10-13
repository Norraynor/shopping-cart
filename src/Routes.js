import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import ShoppingCart from "./components/ShoppingCart";

function Routes() {
  const [item,setItem] = useState("")
  const [count,setCount] = useState(0);
  function receiveItem(data){
    setItem(data);
    console.log("shop changed item")
  }
  function receiveCount(data){
    setCount(data);
  }
  return (
      <BrowserRouter>
        <Nav count={count}/>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/shop" render={(props)=> <Shop {...props} addItem={receiveItem}/>}/>
            <Route exact path="/shopping-cart" render={(props)=> <ShoppingCart {...props} itemName={item} data={receiveCount}/>}/>
        </Switch>
      </BrowserRouter>
  );
}

export default Routes;