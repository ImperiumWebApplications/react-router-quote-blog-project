import { Route, useParams, useRouteMatch } from "react-router-dom";
import { Fragment, useEffect } from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { Link } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  console.log("Demo console log for the sake of testing the commit author");
  const params = useParams();
  const match = useRouteMatch();
  const { quoteID } = params;
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteID);
  }, [sendRequest, quoteID]);

  if (status === "pending") {
    return (
      <div className={"centered"}>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className={"centered"}>{error}</p>;
  }
  if (!loadedQuote.text) {
    return <p>No Quote Found</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`} component={Comments} />
    </Fragment>
  );
};

export default QuoteDetail;
