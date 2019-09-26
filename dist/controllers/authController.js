"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin_1 = require("../models/entityModels/admin");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;
exports.login = (req, res) => {
    const loginCandidate = req.body;
    admin_1.default.findOne({ name: loginCandidate.name }, (err, admin) => {
        if (err) {
            res.send({
                message: 'Someting went wrong.',
                error: err
            });
        }
        else {
            if (admin.password !== loginCandidate.password) {
                res.send({ message: "Name or password was incorrect!" });
            }
            else {
                jwt.sign(admin, secret, (err, token) => {
                    if (err) {
                        res.send({
                            message: 'Something went wrong!',
                            error: err
                        });
                    }
                    res.send({ token: token });
                });
            }
        }
    });
};
exports.verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        jwt.verify(bearerToken, secret, (err, authData) => {
            if (err) {
                res.sendStatus(403);
            }
            else {
                next();
            }
        });
    }
    else {
        res.sendStatus(403);
    }
};
//# sourceMappingURL=authController.js.map