//home page Card component

import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActions, CardHeader } from "@mui/material";
// import cloth from "../../static/assets/productImg/1.jpg";

// todo: change to feature product card
export default function SeasonalProductCard(props) {
  const { title, name, url } = props;
  const navigate = useNavigate();
  const getDetals = (name) => {
    console.log(name);
    // todo: change state with firebase 
    navigate("/products", { state: { name } });
  };
  return (
    <Card sx={{ width: 345 }}>
      <CardHeader
        title={title}
        sx={{ backgroundColor: "#e0e0e0", textAlign: "left" }}
      />
      <CardContent>
        <CardMedia
          component="img"
          height="300"
          image={url}
          alt="green iguana"
        />
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onFocus={() => getDetals(name)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
