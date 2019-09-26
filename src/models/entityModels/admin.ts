import Mongoose from '../../db/mongoose';
import * as mongoose from 'mongoose';

export interface IAdmin extends mongoose.Document {
    email: string;
    password: string;
    name: string;
}

export const AdminSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true}
});

const Admin = Mongoose.model<IAdmin>("Admin", AdminSchema);

export default Admin