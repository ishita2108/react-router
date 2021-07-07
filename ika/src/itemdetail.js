import React,{useState,  useEffect} from 'react';
import './App.css';

function Item({match}) {
    
    useEffect(()=>{
        fetchItem();
        console.log(match);
    },[]);

    const [item, setItem] = useState({item:{}})
    

    const fetchItem = async() =>{
        const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        const item = await fetchItem.json();
        setItem(item.data)
        console.log(item.data)
    };

  return (
    <div >
        <h1>{item.item.name}</h1>
        <h3>{item.item.description}</h3>
    </div>
  );
}

export default Item;
