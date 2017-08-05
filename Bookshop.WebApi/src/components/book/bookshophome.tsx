import * as React from 'react';
import BookCard from './bookcard';

const BookshopHome = () => {
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
};

export default BookshopHome;