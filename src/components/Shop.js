import { useEffect, useState } from 'react';
import '../styles/Shop.css';

import Product from "./Product";

function Shop(props) {
    const items= [
        {
            name: "Teen Banana",
            img: "https://media.istockphoto.com/photos/green-plantain-picture-id138001887?k=20&m=138001887&s=612x612&w=0&h=UGD5rUs37gxxPlNnFliHm001nyf4QNCjmo7nuOAlY0o=",
            price: 1,
            count: 0            
        },
        {
            name: "Banana",
            img: "https://static.turbosquid.com/Preview/2014/07/03__18_47_33/banana_03.jpgbde52cae-2ae2-483f-bf01-645136084da8Larger.jpg",
            price: 200,
            count: 0
        },
        {
            name: "Dead Banana",
            img: "https://media.istockphoto.com/photos/rotten-banana-picture-id519714894?s=612x612",
            price: 1000000,
            count: 0          
        }        
    ]
    const [itemsArr,setItemsArr] = useState(props.currentItems);
    useEffect(()=>{
      function handleChange(props){
        props.addItems(itemsArr);
        countItems();
      }
      handleChange(props);
    },[itemsArr])

    function addItem(item,count){
        checkCart(item.name,count);
        //props.addItem(item);
    }
    function countItems(){
      props.count(itemsArr.length);
    }
    
    function checkCart(itemName,count){
      if(itemName === ""){
        return false;
      }
      let newItems = itemsArr;
      let itemExists= itemsArr.filter((obj)=>{
        return obj.name===itemName;
      })
      if(itemExists.length>0){
        newItems=itemsArr.map(element=>{
          if(element.name === itemName){
            element.count=parseInt(element.count);
            element.count+=parseInt(count);
          }
          return element;
        })
      }
      else{
        newItems =itemsArr.concat({name: itemName, count:count});
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
  