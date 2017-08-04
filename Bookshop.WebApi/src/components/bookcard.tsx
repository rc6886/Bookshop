import * as React from 'react';
import { Link } from "react-router-dom";

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

export default BookCard;