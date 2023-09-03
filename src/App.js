import React from "react";
import Landing from "./components/Landing";
import { configStore } from "./Store/configStore";
import { Provider } from "react-redux";
import { Grid } from "@mui/material";

function App() {
  const myStore = configStore()
  return (
    <Provider store={myStore}>
      <Grid container spacing={2} sx={{bgcolor:"#E3E2E2"}}>
        <Grid item xs={12}>
          <Landing />
        </Grid>
      </Grid>
    </Provider>
  );
}

export default App;
