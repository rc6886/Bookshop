import * as React from 'react';
import BookImage, { BookImageProps } from './bookimage';
import BookInformation, { BookInformationProps } from './bookinformation';

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
};

export default BookDetail;