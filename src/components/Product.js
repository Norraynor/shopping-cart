import { useState } from 'react';
import '../styles/Product.css';

function Product(props) {
    const [count,setCount] = useState(1);

    function handleClick(event){
        //add item to cart
        props.addItem(props.data,count)
    }
    function handleAdd(){
      let newCount=count;
      newCount++;
      setCount(newCount);
    }
    function handleSub(){
      let newCount=count;
      if(count>1){
        newCount--;
      }
      setCount(newCount);
    }
    function handleChange(event){
      setCount(event.target.value);
    }
    return (
      <div className="product">
        <h5>{props.data.name}</h5>
        <img src={props.data.img} alt={props.data.name}/>
        <p>Price: {props.data.price}$</p>
        <div id="amount">
          <button id="subtract" onClick={handleSub}>-</button>
          <input type="number" min="1" value={count} onChange={handleChange}/>
          <button id="add" onClick={handleAdd}>+</button>
        </div>
        <button onClick={handleClick}>Add to cart</button>
      </div>
    );
  }
  
  export default Product;
  