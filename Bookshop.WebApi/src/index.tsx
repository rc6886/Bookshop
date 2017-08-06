import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { 
  Collapse
  ,Navbar
  ,NavbarToggler
  ,NavbarBrand
  ,Nav
  ,NavItem
  ,NavLink
  ,Container
 } from 'reactstrap';

import BookDetail from './components/book/bookdetail';
import BookshopHome from './components/book/bookshophome';
import Cart from './components/cart/cart';
import Login from './components/login/login';
import BookEdit from './components/book/bookedit'


interface IBookshopNavbarState {
  isOpen: boolean,
}

class BookshopNavbar extends React.Component<{}, IBookshopNavbarState> {
  constructor(props: {}) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    }
  }

  toggle() : void {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Navbar className="navbar-color" toggleable>
        <NavbarToggler right onClick={this.toggle} />
        <div className="navbar-brand">
          <Link to="/">Bookshop</Link>
        </div>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/login">Login</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

const BookshopRouter = () => {
  return (
    <Router>
      <Container>
        <BookshopNavbar />
        <Route exact path="/" component={BookshopHome} />
        <Route path="/book/:id" component={BookDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/edit" component={BookEdit} />
      </Container>
    </Router>
  );
};

ReactDOM.render(<BookshopRouter />, document.getElementById("app"));