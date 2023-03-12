import React from 'react'
import { useState, useEffect } from 'react';
import CardComponent from '../../components/CardComponent/CardComponent';
import { Link } from 'react-router-dom';

// FIREBASE
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs} from "firebase/firestore";

function FigurasAnime() {
  const [figuresData, setFiguresData] = useState([]);

  useEffect(() => {
    const getFigures = async () =>{
    const q = query(collection(db,"figures"), where("Categoria", "==", "Anime"));
    const docs =[];
    const querySnapshot = await getDocs(q);
 

    querySnapshot.forEach((doc) =>{
      docs.push({...doc.data(), id: doc.id });
    });
    setFiguresData(docs);

   };
   getFigures();
},[]);

return ( 


        <div className="Card-list">
         { figuresData.map((data) => {
            return (
            <Link to={`/detail/${data.id}`} key={data.id}>
            <CardComponent  data={data}/>
            </Link> 
            ); 
          }) }
          </div>
       
    
);

}

export default FigurasAnime