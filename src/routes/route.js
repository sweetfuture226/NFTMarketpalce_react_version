import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../staticPages/homePage/home";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/notFound" />
            <Redirect from="*" to="/notFound" />
        </Switch>
    );
};
export default Routes;