import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import ShoppingCart from "./components/ShoppingCart";

function Routes() {
  const [items,setItems] = useState([])
  const [count,setCount] = useState(0);
  useEffect(()=>{
    setCount(items.length);
  },[count])

  function receiveItems(data){
    setItems(data);
  }
  function receiveCount(data){
    setCount(data);
  }
  return (
      <BrowserRouter basename={"shopping-cart/"}>
        <Nav count={count}/>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/shop" render={(props)=> <Shop {...props} addItems={receiveItems} count={receiveCount} currentItems={items}/>}/>
            <Route exact path="/cart" render={(props)=> <ShoppingCart {...props} items={items} changeItems={receiveItems} count={receiveCount}/>}/>
        </Switch>
      </BrowserRouter>
  );
}

export default Routes;