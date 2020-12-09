import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
// import PricingSheet from "./containers/PricingSheet";
import DynamicTable from "./containers/DynamicTable"

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/create-pricesheet">
        <DynamicTable/>
      </Route>
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound/>
      </Route>
    </Switch>
  );
}