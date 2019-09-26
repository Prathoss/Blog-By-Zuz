import * as mongoose from "mongoose";
const url: string = process.env.DB_CONNECTION;
const dbName: string = 'blog-by-zuz';

const Mongoose = mongoose;

const options: mongoose.ConnectionOptions = {
    dbName: dbName,
    useNewUrlParser: true,
    useUnifiedTopology: true
}

Mongoose.connect(url, options, (err: any) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log('Database connected!');
    }
});

export default Mongoose;