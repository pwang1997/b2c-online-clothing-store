//List detail page component

import React from "react";
import {
  Card,
  Box,
  Typography,
  Button,
  CardContent,
  CardActions,
  CardMedia,
  Rating,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProductCard(props) {
  const {
    id,
    title,
    price,
    lastPrice,
    orderPrice,
    score,
    describe,
    url,
    starscore,
  } = props;

  const navigate = useNavigate();
  const card = (
    <>
      <CardContent>
        <CardMedia
          component={"img"}
          height={"280"}
          image={url}
          alt="Clothing Img"
        />
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          sx={{
            display: "-webkit-box",
            textOverflow: "ellipsis",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
          color="text.secondary"
          gutterBottom
        >
          {describe}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Rating name="read-only" defaultValue={starscore} readOnly />
          <Box>{score}</Box>
        </Box>
        <Box
          sx={{
            margin: "8px 0",
            display: "flex",
            justifyContent: "space-evenly",
            height: 28,
            fontSize: 16,
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#f50057",
              color: "#e1f5fe",
              height: 28,
              width: 74,
              fontSize: 16,
              lineHeight: "28px",
            }}
          >
            20% off
          </Box>
          <Box sx={{ color: "#f50057" }}>Top Deal</Box>
        </Box>
        <Typography variant="body1">
          ${price?.split(".")[0]}
          <sup>{price?.split(".")[1]}</sup>
        </Typography>
        <Typography variant="body2">
          Last Price: <del>${lastPrice}</del>
        </Typography>
        <Typography sx={{ display: "flex" }} color="text.secondary">
          FREE shipping on order over ${orderPrice}.
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small" onFocus={() => toDetals(props)}>
          Details
        </Button>
        <Button variant="contained">Add to Cart</Button>
      </CardActions>
    </>
  );

  const toDetals = (data) => {
    // todo: change navigate path
    navigate(`${id}`, { state: { data } });
    console.log(data);
  };

  return (
    <Box sx={{ width: 280 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
