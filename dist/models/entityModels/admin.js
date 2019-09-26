"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("../../db/mongoose");
const mongoose = require("mongoose");
exports.AdminSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true }
});
const Admin = mongoose_1.default.model("Admin", exports.AdminSchema);
exports.default = Admin;
//# sourceMappingURL=admin.js.map