import "./index.css";
import { Box, Typography, Rating, Divider, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

//import { ArrowBackIosNewIcon } from "@mui/icons-material";
function PrdDetail() {
  const location = useLocation();
  const history = useNavigate();
  const [data, setData] = useState(location.state?.data);

  return (
    <Box sx={{ margin: "12px" }}>
      <Box sx={{ display: "flex", justifyContent: "start" }}>
        <Box sx={{ width: "35%" }}>
          <Box sx={{ display: "flex", marginBottom: "12px" }}>
            <Button variant="contained" onClick={() => history("/product")}>
              Back
            </Button>
          </Box>
          <img src={data?.url} className="img" />
        </Box>
        <Box sx={{ width: "65%", textAlign: "left", paddingLeft: "12px " }}>
          {/*Title*/}
          <Box className="header" sx={{ marginBottom: "12px" }}>
            <Typography variant="h1" sx={{ fontSize: "24px" }}>
              {data?.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "12px",
              }}
            >
              <Rating
                name="read-only"
                defaultValue={data?.starscore}
                readOnly
              />
              <Box>{data?.score} comments</Box>
            </Box>
          </Box>
          <Divider />
          {/*Price part*/}
          <Box className="main" sx={{ margin: "12px 0" }}>
            <Typography className="body-item">
              <span className="label">Price: </span> US${data?.price} - US$
              {data?.lastPrice}
            </Typography>
            <Typography className="body-item">
              <span className="label"> Describtion:</span>
              {data?.describe}
            </Typography>
            <Typography className="body-item">
              <span className="label">Size: </span>
              {"Moderate size order with regular size"}
            </Typography>
            <Typography className="body-item">
              <sapn className="label">Color:</sapn> {"Healther Navy"}
            </Typography>
            {/*Basic Info*/}
            <Box className="body-container ">
              <Typography variant="h5" sx={{ marginBottom: "20px" }}>
                Basic Information
              </Typography>
              <Typography className="body-item">
                <sapn className="label">Types of Fabric:</sapn> {"100% cotton"}
              </Typography>
              <Typography className="body-item">
                <sapn className="label">Instructions:</sapn>{" "}
                {
                  "For a child to be born with this disability indicates a defect in obstetric care."
                }
              </Typography>
              <Typography className="body-item">
                <sapn className="label">Country of origin:</sapn> {"China"}
              </Typography>
              <Box className="btn">
                <Button>Learn More</Button>
                <Button variant="contained">Add to Cart</Button>
              </Box>
            </Box>
            <Divider />
            {/*More Info*/}
            <Box className="body-container ">
              <Typography variant="h5" sx={{ marginBottom: "20px" }}>
                More Information
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <HomeIcon sx={{ fontSize: "80px" }} />
                <Box>
                  <Typography className="body-item-footer">
                    {" Small company"}
                  </Typography>
                  <Typography className="body-item-footer">
                    {
                      " The product is from a small business brand. Support small businesses."
                    }
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PrdDetail;
