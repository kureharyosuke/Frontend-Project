import React, { lazy, Suspense } from "react";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import NewsView from "../components/NewsView";
const AskView = lazy(() => import("../components/AskView"));
const JobsView = lazy(() => import("../components/JobsView"));

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Switch>
          <Route exact path="/" component={<NewsView />} />
          <Route path="/news" component={<NewsView />} />
          <Route path="/ask" component={<AskView />} />
          <Route path="/jobs" component={<JobsView />} />
        </Switch>
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
