"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("../db/mongoose");
const mongoose = require("mongoose");
exports.ArticleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    body: { type: String, required: true }
});
const Article = mongoose_1.default.model("Article", exports.ArticleSchema);
exports.default = Article;
//# sourceMappingURL=article.js.map