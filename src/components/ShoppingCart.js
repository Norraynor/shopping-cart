import '../styles/ShoppingCart.css';


function ShoppingCart(props) {
  //get item and increase amount ---return number of items  
  return (
    <div className="shopping-cart">
      
      <h1>Shopping Cart</h1>
      {
        props.items.map(element=>{
            return (
              <div className="cart-product" key={element.name}>
                <h2>{element.name}</h2>
                <h3>{element.count}</h3>
                <button>-</button>
                <button>+</button>
                <button>del</button>
              </div>
              )
          })        
      }
      {
        console.log(props.items)
      }
    </div>
  );
}

export default ShoppingCart;
