import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "someName", text: "Some text1" },
  { id: "q2", author: "someName1", text: "Some text2" },
  { id: "q3", author: "someName2", text: "Some text3" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};
export default AllQuotes;
