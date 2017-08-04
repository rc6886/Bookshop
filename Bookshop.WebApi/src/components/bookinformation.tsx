import * as React from 'react';

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
        <a href="#" className="btn btn-primary">Buy Now</a>
      </div>
    </div>
  );
};

export default BookInformation;