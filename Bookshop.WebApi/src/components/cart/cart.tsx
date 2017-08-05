import * as React from 'react';

interface ICartProps {

}

interface ICartItemRow {
  title: string,
  description: string,
  price: number,
}

const cartImageStyle = {
  textAlign: "Center",
  paddingTop: "30px",
  height: "80px",
  width: "80px",
  backgroundColor: "grey",
};

const CartItemRow: React.SFC<ICartItemRow> = (item) => {
  return (
    <tr>
      <td style={{width: "90px"}}>
        <div style={cartImageStyle}>
        </div>
      </td>
      <td className="desc">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </td>
      <td className="small" style={{width: "65px"}}>
        ${item.price}
      </td>
      <td>
        <input style={{width: "65px"}} type="text" name="price" value="1" />
      </td>
      <td>
        $100.00
      </td>
    </tr>
  );
};

class Cart extends React.Component<ICartProps, {}> {
  render() {
    const itemRow1: ICartItemRow = {
      title: "Product 1",
      description: "This is a description for Product 1.",
      price: 100.00,
    };

    const itemRow2: ICartItemRow = {
      title: "Product 2",
      description: "This is a description for Product 2.",
      price: 110.00,
    };

    return (
      <div className="row">
        <table className="table table-md">
          <tbody>
            <CartItemRow {...itemRow1} />
            <CartItemRow {...itemRow2} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Cart;