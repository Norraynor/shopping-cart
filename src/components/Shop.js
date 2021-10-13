import { useEffect, useState } from 'react';
import '../styles/Shop.css';

import Product from "./Product";

function Shop(props) {
    const items= [
        {
            name: "Teen Banana",
            img: "https://media.istockphoto.com/photos/green-plantain-picture-id138001887?k=20&m=138001887&s=612x612&w=0&h=UGD5rUs37gxxPlNnFliHm001nyf4QNCjmo7nuOAlY0o=",
            price: 1            
        },
        {
            name: "Banana",
            img: "https://static.turbosquid.com/Preview/2014/07/03__18_47_33/banana_03.jpgbde52cae-2ae2-483f-bf01-645136084da8Larger.jpg",
            price: 200
        },
        {
            name: "Dead Banana",
            img: "https://media.istockphoto.com/photos/rotten-banana-picture-id519714894?s=612x612",
            price: 1000000            
        }        
    ]
    const [item,setItem] = useState("");
    const [itemsArr,setItemsArr] = useState([]);
    function addItem(itemName){
        setItem(itemName);
        //props.addItem(item);
    }
    //dodac count do listy items... checkCart powinien zaktualizowac liste wg count... ustawic liczbe dla Nav... dodac liste do shopping cart
    function checkCart(){
    let newItems = [];
    if(itemsArr.includes(item)){
      newItems=itemsArr.map(element=>{
        if(element.name === props.itemName){
          element.count++;
        }
        return element;
      })
    }
    else{
      setItem({name: props.itemName, count:1});
      newItems.concat(item)
    }
    setItemsArr(newItems);
  }
    return (
      <div className="shop">
        <h1>Banana Shop</h1>
        <div className="products">
        {
            items.map((item)=>{
                return <Product key={item.name} data={item} addItem={addItem}/>
            })
        }
        </div>
      </div>
    );
  }
  
  export default Shop;
  