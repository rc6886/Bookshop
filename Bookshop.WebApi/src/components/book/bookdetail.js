var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
import BookImage from './bookimage';
import BookInformation from './bookinformation';
var BookDetail = function () {
    var bookimage = {
        imageUrl: "Test Url",
    };
    var bookInfo = {
        id: "some_guid",
        title: "Test Title",
        description: "Test Description",
        price: 12
    };
    return (React.createElement("div", { className: "row" },
        React.createElement("div", { className: "col-md-6" },
            React.createElement(BookImage, __assign({}, bookimage))),
        React.createElement("div", { className: "col-md-6" },
            React.createElement(BookInformation, __assign({}, bookInfo)))));
};
export default BookDetail;
//# sourceMappingURL=bookdetail.js.map