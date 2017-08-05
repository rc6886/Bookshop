import * as React from 'react';
import BookCard from './bookcard';
var BookshopHome = function () {
    return (React.createElement("div", { className: "bookshop" },
        React.createElement("h1", null, "Bookshop"),
        React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-4 mt-3" },
                React.createElement(BookCard, { cardTitle: "Test", cardText: "Some quick example text to build on the card title and make up the bulk of the card's content." })),
            React.createElement("div", { className: "col-md-4 mt-3" },
                React.createElement(BookCard, { cardTitle: "Test2", cardText: "Some quick example text to build on the card title and make up the bulk of the card's content." })),
            React.createElement("div", { className: "col-md-4 mt-3" },
                React.createElement(BookCard, { cardTitle: "Test2", cardText: "Some quick example text to build on the card title and make up the bulk of the card's content." })),
            React.createElement("div", { className: "col-md-4 mt-3" },
                React.createElement(BookCard, { cardTitle: "Test2", cardText: "Some quick example text to build on the card title and make up the bulk of the card's content." })))));
};
export default BookshopHome;
//# sourceMappingURL=bookshophome.js.map