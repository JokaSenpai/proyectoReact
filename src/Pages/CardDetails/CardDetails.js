import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardComponent from "../../components/CardComponent/CardComponent";
import "./CardDetails.css";

const CardDetails = () => {
  const [prod, setProd] = useState({});
  let { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setProd(json));
  }, [id, prod]);

  return (
    <div>
      <CardComponent key={prod.id} data={prod} />
    </div>
  );
};

export default CardDetails;
