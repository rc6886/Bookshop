import * as React from 'react';

export interface BookImageProps {
  imageUrl: string,
}

const BookImage: React.StatelessComponent<BookImageProps> = ({ imageUrl }) => {
  return (
    <div>
      This is the book image section.
    </div>
  );
};

export default BookImage;
