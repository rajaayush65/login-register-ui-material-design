import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";

import "./App.css";

import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Menubar from "./components/MenuBar";

import { Container } from "@material-ui/core";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Menubar />
        <Container maxWidth="xl">
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/posts" component={Posts} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
