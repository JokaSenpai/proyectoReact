import React, { useEffect, useState } from "react";
import CardComponent from "../CardComponent/CardComponent";
import "./CardListComponent.css";
import { Link } from "react-router-dom";

// FIREBASE
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

function CardListComponent() {
  const [figuresData, setFiguresData] = useState([]);
  

  useEffect(() => {
   const getFigures = async () =>{
    const q = query(collection(db,"figures"));
    const querySnapshot = await getDocs(q); 

    const docs = [];
    
    querySnapshot.forEach((doc) =>{
      docs.push({...doc.data(), id: doc.id });
    });
    setFiguresData(docs);


   };
   getFigures();


  }, []);
  
  return (
    <div className="Card-list">
      {figuresData.map((fig) => {
        return (
          
            <CardComponent  data={fig} key={fig.id} />
   
        );
      })}
    </div>
  );
}

export default CardListComponent;
