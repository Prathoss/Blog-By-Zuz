import { Request, Response } from 'express';
import { IErrorViewModel } from '../models/viewModels/errorViewModel';
import Admin from '../models/entityModels/admin';
import { ILoginViewModel } from '../models/viewModels/loginViewModel';
import { ITokenViewModel } from '../models/viewModels/tokenViewModel';
import * as jwt from 'jsonwebtoken';
import { IAdminViewModel } from '../models/viewModels/adminViewModel';

const secret: string = process.env.SECRET;

export let login = (req: Request, res: Response) => {
    const loginCandidate = <ILoginViewModel> req.body;
    Admin.findOne({name: loginCandidate.name}, (err, admin) => {
        if(err) {
            res.send(<IErrorViewModel> {
                message: 'Someting went wrong.',
                error: err
            })
        } else {
            if(admin.password !== loginCandidate.password) {
                res.send({message: "Name or password was incorrect!"})
            } else {
                jwt.sign(<IAdminViewModel> admin, secret, (err, token) => {
                    if (err) {
                        res.send(<IErrorViewModel> {
                            message: 'Something went wrong!',
                            error: err
                        });
                    }
                    res.send(<ITokenViewModel> {token: token});
                });
            }
        }
    });
};

export let verifyToken = (req: Request, res: Response, next: any) => {
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        jwt.verify(bearerToken, secret, (err, authData) => {
            if(err) {
                res.sendStatus(403);
            } else {
                next();
            }
        });
    } else {
        res.sendStatus(403);
    }
};