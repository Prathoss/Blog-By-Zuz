import Mongoose from '../../db/mongoose';
import * as mongoose from 'mongoose';

export interface IArticle extends mongoose.Document {
    name: string;
    body: string;
    timestamp: Date;
    tags: string[];
}

export const ArticleSchema = new mongoose.Schema({
    name: {type: String, required: true},
    body: {type: String, required: true},
    timestamp: {type: Date, default: Date.now, required: true},
    tags: {type: Array, required: false}
});


const Article = Mongoose.model<IArticle>("Article", ArticleSchema);

export default Article;