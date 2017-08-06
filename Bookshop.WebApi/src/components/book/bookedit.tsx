import * as React from 'react';

interface IBookEditProps {
  title: string,
  description: string,
  price: number,
  image: string,
}

const BookInputField = () => {
  return (
    <div className="form-group row">
      <label className="col-md-2 col-form-label">Title</label>
      <div className="col-md-6">
        <input className="form-control" type="text" />
      </div>
    </div>
  );
}

class BookEdit extends React.Component {
  render() {
    return (
      <div className="bookshop">
        <BookInputField />
      </div>
    );
  }
}

export default BookEdit;