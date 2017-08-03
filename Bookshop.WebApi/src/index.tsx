import  * as React from "react";
import * as ReactDOM from "react-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-toggle-md navbar-inverse bg-inverse fixed-top">
      <a className="navbar-brand" href="#">Bookshop</a>
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
        <a href="#" className="btn btn-primary">Go to Book</a>
      </div>
    </div>
  );
};

export const BookshopApp = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
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
      </div>
    </div>
  );
}

ReactDOM.render(<BookshopApp />, document.getElementById("app"));