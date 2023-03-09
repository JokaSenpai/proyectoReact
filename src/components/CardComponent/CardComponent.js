import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./CardComponent.css";

const CardComponent = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" className="img-size" image={data.img} alt={data.id} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {data.Nombre}
          </Typography>
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
