import { Request, Response } from 'express';
import Article from '../models/entityModels/article';

export let showArticles = (req: Request, res: Response) => {
    let articles = Article.find((err, articles) => {
        if (err) {
            res.statusCode = 404;
            res.send({message: "Error"});
        } else {
            res.send(articles);
        }
    })
};

export let createArticle = (req: Request, res: Response) => {
    let article = new Article(req.body);

    article.save((err) => {
        if (err) {
            res.send({message: err});
        } else {
            res.send(article);
        }
    });
};