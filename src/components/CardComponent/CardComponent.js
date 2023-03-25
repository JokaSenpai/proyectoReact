import React, {useContext} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./CardComponent.css";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";


const CardComponent = ({ data }) => {



  const {addToCart} = useContext(CartContext);

  const handleClick = () => {
    addToCart(data);
  }

  return (
    <Card sx={{ maxWidth: 345, height: "100%" }}>
      <CardActionArea>
        <Link to={`/detail/${data.id}`}>
        <CardMedia component="img" className="img-size" image={data.img} alt={data.id} />
        </Link>
       
        <CardContent className="nose">
        <Link to={`/detail/${data.id}`}>
          <Typography gutterBottom variant="h5" component="div">
          {data.Nombre}
          </Typography>
          </Link>
          <Typography className="body2" variant="body2" color="text.secondary">
            Categoria:{data.Categoria}
          </Typography>
          <Typography className="body2" variant="body2" color="text.secondary">
            Descripcion:{data.Descripcion}
          </Typography>
          <Typography className="body2" variant="body2" color="text.secondary">
            Personaje:{data.Personaje}
          </Typography>
          <Typography className="body2" variant="body2" color="text.secondary">
            Tamaño (cm2):{data.Tamaño}
          </Typography>
          <Typography className="body3" variant="body2" color="text.secondary">
            Precio (en USD):{data.Precio}
          </Typography>
         
          <div className="button-Cart" onClick={handleClick}>
            <span className="button-text">Agregar al carro</span>
          </div>
  
         
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
