import React from "react";
import { Badge, Grid, IconButton, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { setSearchTerm } from "../redux/action";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Nav = () => {
  const cart = useSelector((state) => state.commonReducer.cart);

  const location = useLocation();
  const showNavbar = location.pathname !== "/cart";

  const dispatch = useDispatch();
  const handleSearch = (item) => {
    const type = "SEARCH";
    const payload = item;
    const action = { type, payload };
    dispatch(action);
  };

  return (
    <>
      {showNavbar && (
        <Box sx={{marginTop:13}}>
          <AppBar sx={{height:75}}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 3 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" }, mr: 3 }}>
              <Link to="/" style={{color:"white",textDecoration:"none"}}>
                E-Commerce
              </Link>    
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  type="Search"
                  onChange={(e) => handleSearch(e.target.value)}
                  sx={{ mr: 30 }}
                />
              </Search>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { md: "flex" } }}>
              <Grid container spacing={2}>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={4.5}>
                    <Link to="/cart">
                     <IconButton  sx={{ height: 53,color:"white"}}>
                      <Badge color="secondary" badgeContent={cart.length}>
                        <ShoppingCartOutlinedIcon sx={{fontSize:33}}/>
                      </Badge>
                    </IconButton>
                    </Link>
                  </Grid>
                  <Grid item xs={5}>
                    <IconButton color="inherit" sx={{ height: 53 }}>
                      <AccountCircleIcon fontSize="large" />
                    </IconButton>
                  </Grid>
              </Grid>
                </Box>
            </Toolbar>
          </AppBar>
        </Box>
      )}
    </>
  );
};

export default Nav;
