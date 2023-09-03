import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Productitem from "./Productitem";

const Product = () => {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const searchTerm=useSelector((state)=>state.commonReducer.searchTerm)

  const getApi = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
    const type = "PRODUCT";
    const payload = result.data;
    const action = { type, payload };
    dispatch(action);
  };
  useEffect(() => {
    getApi();
  },[]);

  return (
    <Grid container spacing={0}>
      {data
        .filter((item)=>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((item) => {
        return <Productitem item={item} />;
      })}
    </Grid>
  );
};

export default Product;
