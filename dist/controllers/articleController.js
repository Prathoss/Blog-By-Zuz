"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const article_1 = require("../models/entityModels/article");
exports.showArticles = (req, res) => {
    let articles = article_1.default.find((err, articles) => {
        if (err) {
            res.statusCode = 404;
            res.send({ message: "Error" });
        }
        else {
            res.send(articles);
        }
    });
};
exports.createArticle = (req, res) => {
    let article = new article_1.default(req.body);
    article.save((err) => {
        if (err) {
            res.send({ message: err });
        }
        else {
            res.send(article);
        }
    });
};
//# sourceMappingURL=articleController.js.map