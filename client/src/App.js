import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound";
import LoginButton from "./components/loginButton";

const App = () => {
  return (
    <div className="App">
        <LoginButton></LoginButton>
    </div>
  );
}

export default App;
