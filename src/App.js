import {Redirect, Route, Switch} from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path={'/'} exact={true}>
                    <Redirect to={'/quotes'}/>
                </Route>
                <Route path={'/quotes'} component={AllQuotes} exact={true}/>
                <Route path={'/quotes/:quoteID'} component={QuoteDetail}/>
                <Route path={'/new-quote'} component={NewQuote}/>
                <Route path={'*'} component={NotFound}/>
            </Switch>
        </Layout>
    );
}

export default App;
