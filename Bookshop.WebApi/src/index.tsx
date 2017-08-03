import  * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-toggle-md navbar-inverse bg-inverse fixed-top">
      <Link to="/" className="navbar-brand">
        Bookshop
      </Link>
    </nav>
  );
};

interface BookCardProps {
  cardTitle: string,
  cardText: string,
}

const BookCard: React.StatelessComponent<BookCardProps> = ({cardTitle, cardText}) => {
  return (
    <div className="card" style={{maxWidth: "300px"}}>
      <img className="card-img-top" src="..." alt="Card image cap" style={{maxWidth: "100%"}} />
      <div className="card-block">
        <h4 className="card-title">{cardTitle}</h4>
        <p className="card-text">{cardText}</p>
          <Link to="/book/1" className="btn btn-primary">
            Go to Book
          </Link>
      </div>
    </div>
  );
};

interface BookImageProps {
  imageUrl: string,
}

const BookImage: React.StatelessComponent<BookImageProps> = ({ imageUrl }) => {
  return (
    <div>
      This is the book image section.
    </div>
  );
};

interface BookInformationProps {
  id: string,
  title: string,
  description: string,
  price: number,
}

const BookInformation: React.StatelessComponent<BookInformationProps> = ({ id, title, description }) => {
  return (
    <div>
      This is the book detail section.
    </div>
  );
};

const BookDetail = () => {
  const bookimage: BookImageProps = {
    imageUrl: "Test Url",
  };

  const bookInfo: BookInformationProps = {
    id: "some_guid",
    title: "Test Title",
    description: "Test Description",
    price: 12
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <BookImage {...bookimage} />
      </div>
      <div className="col-md-6">
        <BookInformation {...bookInfo} />
      </div>
    </div>
  );
}

export const BookshopHome = () => {
  return (
      <div className="bookshop">
        <h1>Bookshop</h1>
        <div className="row">
          <div className="col-md-4 mt-3">
            <BookCard 
              cardTitle="Test" 
              cardText="Some quick example text to build on the card title and make up the bulk of the card's content." />
          </div>
          <div className="col-md-4 mt-3">
            <BookCard
              cardTitle="Test2"
              cardText="Some quick example text to build on the card title and make up the bulk of the card's content." />
          </div>
          <div className="col-md-4 mt-3">
            <BookCard
              cardTitle="Test2"
              cardText="Some quick example text to build on the card title and make up the bulk of the card's content." />
          </div>
          <div className="col-md-4 mt-3">
            <BookCard
              cardTitle="Test2"
              cardText="Some quick example text to build on the card title and make up the bulk of the card's content." />
          </div>
        </div>
      </div>
  );
}

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