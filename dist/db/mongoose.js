"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const url = process.env.DB_CONNECTION;
const dbName = 'blog-by-zuz';
const Mongoose = mongoose;
const options = {
    dbName: dbName,
    useNewUrlParser: true,
    useUnifiedTopology: true
};
Mongoose.connect(url, options, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log('Database connected!');
    }
});
exports.default = Mongoose;
//# sourceMappingURL=mongoose.js.map