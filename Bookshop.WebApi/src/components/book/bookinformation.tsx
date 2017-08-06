import * as React from 'react';
import { Link } from 'react-router-dom';

export interface BookInformationProps {
  id: string,
  title: string,
  description: string,
  price: number,
}

const BookInformation: React.StatelessComponent<BookInformationProps> = ({ id, title, description, price }) => {
  return (
    <div>
      <div className="row">
        <h2>{title}</h2>
      </div>
      <div className="row">
          <p>{description}</p>
      </div>
      <div className="row">
          <p>${price}</p>
      </div>
      <div className="row">
        <Link to="/cart" className="btn btn-primary">
          Add to Cart
        </Link>
      </div>
      <div className="row">
        <Link to="/edit">Edit</Link>
      </div>
    </div>
  );
};

export default BookInformation;