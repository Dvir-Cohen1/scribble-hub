import React from "react";
import RouterWrapper from "./routes/Routes";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import PostsProvider from "./context/Posts.context";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <PostsProvider>
        <RouterWrapper />
      </PostsProvider>
    </ThemeProvider>
  );
};

export default App;
