import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import genericPhoto from "../../imgs/sinStock.png"


const CardComponent = ( { data })=> {
return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={genericPhoto}
          alt={data.id}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name};
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.company.catchPhrase}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardComponent;