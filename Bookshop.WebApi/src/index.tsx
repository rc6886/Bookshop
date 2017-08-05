import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import BookDetail from './components/book/bookdetail';
import BookshopHome from './components/book/bookshophome';
import Cart from './components/cart/cart';

const Navbar = () => {
  return (
    <nav className="navbar navbar-toggle-md navbar-inverse bg-inverse fixed-top">
      <Link to="/" className="navbar-brand">
        Bookshop
      </Link>
    </nav>
  );
};

const BookshopRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Route exact path="/" component={BookshopHome} />
          <Route path="/book/:id" component={BookDetail} />
          <Route path="/cart" component={Cart} />
        </div>
      </div>
    </Router>
  );
};

ReactDOM.render(<BookshopRouter />, document.getElementById("app"));