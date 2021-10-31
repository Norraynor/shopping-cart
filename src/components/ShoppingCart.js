import '../styles/ShoppingCart.css';


function ShoppingCart(props) {
  //get item and increase amount ---return number of items  
  //functions for clearing cart, updating items list, deleting item
  function clearCart(){
    //delete all items
    updateItemList([]);
  }
  function removeItem(event){
    //delete one item
    let newList=props.items.filter((item)=>{
      if(item.name!==event.target.id){
        return item;
      }
    })    
    updateItemList(newList);
  }
  function increaseCount(event){
    //increase count of item    
    let newList = props.items.map((item)=>{
      if(item.name ===event.target.id){
        item.count++;
      }
      return item;
    })
    updateItemList(newList);
  }
  function decreaseCount(event){
    //decrease count of item
    let newList = props.items.map((item)=>{
      if(item.name ===event.target.id){
        item.count--;
      }
      return item;
    })
    updateItemList(newList);
  }
  function updateItemList(items,count=items.length){
    props.changeItems(items);
    countItems(count);
  }
  function countItems(count){
    props.count(count);
  }
  return (
    <div className="shopping-cart">
      
      <h1>Shopping Cart</h1>
      {
        props.items.map(element=>{
            return (
              <div className="cart-product" key={element.name}>
                <h3>{element.name}</h3>
                <h4>{element.count}</h4>
                <button id={element.name} onClick={decreaseCount}>-</button>
                <button id={element.name} onClick={increaseCount}>+</button>
                <button id={element.name} onClick={removeItem}>del</button>
              </div>
              )
          })      
      }
      <button id="clear" onClick={clearCart}>CLEAR CART</button>  
    </div>
  );
}

export default ShoppingCart;
