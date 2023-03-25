import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardComponent from "../../components/CardComponent/CardComponent";
import "./CardDetails.css";

// FIREBASE
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs, documentId } from "firebase/firestore";



const CardDetails = () => {
  const [figureData, setFigureData] = useState([]);
  let { id } = useParams();

  useEffect(() => {
      const getFigure = async () =>{
      const q = query(collection(db,"figures"), where(documentId(), "==", id));
      const docs =[];
      const querySnapshot = await getDocs(q);
   

      querySnapshot.forEach((doc) =>{
        docs.push({...doc.data(), id: doc.id });
      });
      setFigureData(docs);

     };
     getFigure();
  },[id]);

  return (  

          <div className="divDetails">
           { figureData.map((data) => {
              return  <CardComponent key={data.id} data={data}/>;
            }) }
            </div>
         
      
  );
};

export default CardDetails;
