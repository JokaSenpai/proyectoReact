import React from "react";
import { useEffect, useState } from "react";

const ItemListContainer = ({children}) => {

    return (

        <main>
            <div>
               {children} 
            </div>
        </main>
    );


}

export default ItemListContainer;