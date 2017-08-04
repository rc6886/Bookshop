import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import BookDetail from './components/bookdetail';
import BookshopHome from './components/bookshophome';

const Navbar = () => {
  return (
    <nav className="navbar navbar-toggle-md navbar-inverse bg-inverse fixed-top">
      <Link to="/" className="navbar-brand">
        Bookshop
      </Link>
    </nav>
  );
};

export const BookshopRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Route exact path="/" component={BookshopHome} />
          <Route path="/book/:id" component={BookDetail} />
        </div>
      </div>
    </Router>
  );
};

ReactDOM.render(<BookshopRouter />, document.getElementById("app"));