import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./style.css"

const CartWidget = () => {
    return (<button className="buttonCart">
    <FontAwesomeIcon icon={faCartShopping} className="cartIcon" />
    0
    </button>);



}


export default CartWidget;