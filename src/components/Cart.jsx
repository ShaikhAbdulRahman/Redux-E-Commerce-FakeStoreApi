import { Button, Card, CardContent, Grid } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReplyIcon from "@mui/icons-material/Reply";

const Cart = ({ item, index }) => {
  const dispatch = useDispatch();
  const select = useSelector((state) => state.commonReducer.cart);

  const handleRemove = (item) => {
    const shouldRemove = window.confirm("Item removed from the cart!!!");
    if (shouldRemove) {
      const type = "REMOVE";
      const payload = item;
      const action = { type, payload };
      dispatch(action);
    }
  };

  const handleIncrease = (index) => {
    const updatedCart = [...select];
    updatedCart[index].quantity += 1;
    updatedCart[index].totalPrice =
      updatedCart[index].price * updatedCart[index].quantity;
    dispatch({ type: "INCREMENT", payload: updatedCart });
  };

  const handleDecrease = (index) => {
    const updatedCart = [...select];
    updatedCart[index].quantity = Math.max(updatedCart[index].quantity - 1, 1);
    updatedCart[index].totalPrice =
      updatedCart[index].price * updatedCart[index].quantity;
    dispatch({ type: "DECREMENT", payload: updatedCart });
  };
  return (
    <Grid container spacing={1} sx={{ marginTop: 4, bgcolor: "silver" }}>
      <Grid
        item
        xs={2}
        sx={{ marginTop: -1.5, marginBottom: 3, marginLeft: 2 }}
      >
        <Link to="/">
          <Button variant="contained" fullWidth>
            <ReplyIcon />
          </Button>
        </Link>
      </Grid>
      {select.map((item, index) => (
        <Grid item xs={12} key={index}>
          <Card sx={{ margin: 2, marginTop: -1, height: 200 }}>
            <CardContent>
              <Grid item xs={1}>
                <img src={item.image} alt="" height={150} width={170} />
              </Grid>
              <Grid item xs={1} sx={{ marginLeft: 30, marginTop: -20 }}>
                <p>₹ {item.totalPrice}</p>
              </Grid>
              <Grid item xs={8} sx={{ marginLeft: 30 }}>
                <p>{item.description.slice(0, 180)}</p>
              </Grid>
              <Button
                sx={{
                  marginTop: -25,
                  position: "sticky",
                  marginLeft: 131,
                  width: 150,
                }}
                onClick={() => handleRemove(index)}
                variant="contained"
                color="error"
              >
                Remove
                <DeleteIcon />
              </Button>
              <div style={{ marginLeft: 1040 }}>
                <Button
                  onClick={() => handleIncrease(index)}
                  sx={{ marginTop: -17 }}
                  variant="outlined"
                >
                  +
                </Button>
                <p style={{ marginLeft: 80, marginTop: -86 }}>
                  {item.quantity}
                </p>
                <Button
                  onClick={() => handleDecrease(index)}
                  sx={{ marginLeft: 13, marginTop: -10 }}
                  variant="outlined"
                >
                  -
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cart;
