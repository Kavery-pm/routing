import { Route, Switch } from "react-router-dom";
import AllQuotes from "./pages/allquotes";
import NewQuote from "./pages/new-quote";
import QuoteDetail from "./pages/Quote-detail";
function App() {
  return (
    <Switch>
      <Route path="/quotes">
        <AllQuotes></AllQuotes>
      </Route>
      <Route path="/quotes/:quoteId">
        <QuoteDetail></QuoteDetail>
      </Route>
      <Route path="/new-quote">
        <NewQuote></NewQuote>
      </Route>
    </Switch>
  );
}

export default App;
