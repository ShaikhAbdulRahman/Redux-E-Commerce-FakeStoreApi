import { Button, Card, CardContent, Grid, Rating } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Productitem = ({ item }) => {
  const dispatch=useDispatch();

  const handleCart=(item)=>{
    const type = "ADD-TO-CART";
    const payload=item;
    const action={type,payload};
    dispatch(action)
  };
  const navigate=useNavigate();
  const gotoDetails=(item)=>{
    navigate("/details",{state:item})
  }
  return (
    <Grid item xs={3} textAlign="center" sx={{ margin: "-11px", marginLeft: "6px" }}>
      <Card sx={{ margin: 1,marginBottom:4, height: 470}}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid onClick={()=>gotoDetails(item)} item xs={12}>
              <img src={item.image} alt={item.image} height={210} width={210} />
            </Grid>
            <Grid onClick={()=>gotoDetails(item)} item xs={12} sx={{ marginLeft: -2 }}>
              <h4>{item.title.slice(0, 22) + "..."}</h4>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ fontSize: 25, marginLeft: "-17px", marginTop: -5 }}
            >
              <p>₹ {item.price}</p>
            </Grid>
            <Grid item xs={3} sx={{ marginTop: -2.7 }}>
              <p>
                <del>₹{item.price}</del>{" "}
              </p>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "-30px", marginLeft: -8 }}>
              <Rating value={item.rating.rate} />
            </Grid>
            <Grid item xs={12}>
              <Button onClick={()=>handleCart(item)} variant="contained" color="error" fullWidth>
                Add to cart
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Buy
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>

    
  );
};

export default Productitem;
