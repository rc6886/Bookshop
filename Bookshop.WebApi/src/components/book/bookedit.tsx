import * as React from 'react';

interface IBookEditProps {
  title: string,
  description: string,
  price: number,
  image: string,
}

const BookInputField: React.SFC<IBookEditProps> = (props) => {
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
    const props: IBookEditProps = {
      title: "test1",
      description: "test2",
      image: "test3",
      price: 123
    };

    return (
      <div className="bookshop">
        <BookInputField {...props} />
      </div>
    );
  }
}

export default BookEdit;