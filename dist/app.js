"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const jwt = require('jsonwebtoken');
const articlesController = require("./controllers/articleController");
const authController = require("./controllers/authController");
//import * as adminController from './controllers/adminController';
const app = express();
app.set("port", process.env.PORT || 3500);
//Middleware
app.use(express.json());
//Routes
app.get("/api", articlesController.showArticles);
app.post("/api/articles", authController.verifyToken, articlesController.createArticle);
app.post("/api/login", authController.login);
exports.default = app;
//# sourceMappingURL=app.js.map