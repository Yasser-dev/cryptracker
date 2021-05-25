import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/currencies/:id" component={Details} exact />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
