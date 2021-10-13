import '../styles/Product.css';

function Product(props) {
    function handleClick(event){
        //add item to cart
        props.addItem(props.data.name)
    }
    return (
      <div className="product">
        <h5>{props.data.name}</h5>
        <img src={props.data.img} alt={props.data.name}/>
        <p>Price: {props.data.price}$</p>
        <button onClick={handleClick}>Add to cart</button>
      </div>
    );
  }
  
  export default Product;
  