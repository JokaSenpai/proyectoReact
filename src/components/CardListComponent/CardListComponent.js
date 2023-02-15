import React, { useEffect, useState } from "react";
import CardComponent from "../CardComponent/CardComponent";
import "./CardListComponent.css";
import { Link } from "react-router-dom";

function CardListComponent() {
  const [prod, setProds] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setProds(json));
  }, []);
  return (
    <div className="Card-list">
      {prod.map((prod) => {
        return (
          <Link to={`/detail/${prod.id}`}>
            <CardComponent key={prod.id} data={prod}  />
          </Link>
        );
      })}
    </div>
  );
}

export default CardListComponent;
