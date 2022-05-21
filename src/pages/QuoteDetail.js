import {Route, useParams} from "react-router-dom";
import {Fragment} from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
    {id: 'q1', author: 'someName1', text: 'Some text1'},
    {id: 'q2', author: 'someName2', text: 'Some text2'},
    {id: 'q3', author: 'someName3', text: 'Some text3'},

]


const QuoteDetail = () => {
    const params = useParams()
    const quote = DUMMY_QUOTES.find((item) => item.id === params.quoteID)
    if (!quote) {
        return <p>No quote found</p>
    }
    return (
        <Fragment>
            <HighlightedQuote author={quote.author} text={quote.text}/>
            <Route path={'/quotes/:quoteID/comments'} component={Comments}/>
        </Fragment>
    )
}

export default QuoteDetail
