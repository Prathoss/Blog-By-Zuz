import express = require('express');
import * as articlesController from './controllers/articleController';
import * as authController from './controllers/authController';
//import * as adminController from './controllers/adminController';


const app: express.Application = express();
app.set("port", process.env.PORT || 3500);

//Middleware
app.use(express.json());

//Routes
app.get("/api", articlesController.showArticles);
app.post("/api/articles", authController.verifyToken, articlesController.createArticle);

app.post("/api/login", authController.login);

export default app;