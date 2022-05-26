import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import React, { Suspense } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="centered">
          <LoadingSpinner />
        </div>
      }
    >
      <Layout>
        <Switch>
          <Route path={"/"} exact={true}>
            <Redirect to={"/quotes"} />
          </Route>
          <Route path={"/quotes"} component={AllQuotes} exact={true} />
          <Route path={"/quotes/:quoteID"} component={QuoteDetail} />
          <Route path={"/new-quote"} component={NewQuote} />
          <Route path={"*"} component={NotFound} />
        </Switch>
      </Layout>
    </Suspense>
  );
}

export default App;
