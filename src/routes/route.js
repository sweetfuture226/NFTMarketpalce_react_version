import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Explorer from "../staticPages/explorerPage/explorer";
import Home from "../staticPages/homePage/home";
import ItemVersion from "../staticPages/itemVersion/itemVersion";
import ProductPage from "../staticPages/productPages/productPage";
import ProductPageV2 from "../staticPages/productPages/productPageV2";
import ProductPageV3 from "../staticPages/productPages/productPageV3";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/explore" component={Explorer} exact />
            <Route path="/item-versions" component={ItemVersion} exact />
            <Route path="/product-page" component={ProductPage} exact />
            <Route path="/product-page-v2" component={ProductPageV2} exact />
            <Route path="/product-page-v3" component={ProductPageV3} exact />
            <Route path="/notFound" />
            <Redirect from="*" to="/notFound" />
        </Switch>
    );
};
export default Routes;