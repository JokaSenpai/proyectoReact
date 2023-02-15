import React, { useEffect, useState } from 'react';
import CardComponent from '../CardComponent/CardComponent';
import "./CardListComponent.css"

function CardListComponent() {
    const [prod, setProds] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(json => setProds(json))
    },[]);
  return (
   
    <div className='Card-list'>
    {prod.map((prod)=>{
        return <CardComponent data={prod}/>
    })}
    </div>
    
    
 
    
  )
}

export default CardListComponent;