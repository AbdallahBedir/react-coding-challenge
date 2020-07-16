import React from "react";
import Layout from "./views/Layout";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
