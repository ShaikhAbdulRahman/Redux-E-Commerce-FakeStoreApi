import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
// import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Details = () => {
  //   const select = useSelector((state) => state.commonReducer.product);

  const recieved = useLocation();
  const item = recieved.state;
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Card>
          <CardContent>
            <Grid item xs={12} textAlign={"center"}>
              <img src={item.image} alt={item.image} height={250} width={220} />
              <h1 style={{ fontWeight: 500 }}>Title: {item.title}</h1>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: -3 }}>
              <p style={{ fontSize: 40, color: "red", marginBottom: -10 }}>
                ₹ : {item.price}
              </p>
              <h2 style={{ fontWeight: 500, marginTop: 15 }}>
                Category: {item.category}
              </h2>
              <Typography
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  opacity: "80%",
                  display: "inline-flex",
                }}
              >
                Description:
              </Typography>
              <Typography sx={{ display: "inline", opacity: "100%" }}>
                {" "}
                {item.description}
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign={"center"} sx={{ marginTop: 4 }}>
              <Link to={"/"}>
                <Button variant="contained">Back</Button>
              </Link>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Details;
