import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./firebase";
import Header from './Header'

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const {currentUser} = useContext(AuthContext);
  console.log(currentUser)
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
            <div>
                <Header></Header>
                <RouteComponent {...routeProps} />
            </div>
        ) : (
            <Redirect to={"/"} />
        )
      }
    />
  );
};


export default PrivateRoute