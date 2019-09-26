"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const url = 'mongodb://localhost:27017';
const dbName = 'blog-by-zuz';
const Mongoose = mongoose;
Mongoose.connect(url, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log('Database connected!');
    }
});
exports.default = Mongoose;
//# sourceMappingURL=mongo.js.map