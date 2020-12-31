/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response, Application } from 'express';
import * as jwt from 'jsonwebtoken';
import * as randomstring from 'randomstring';

// Middleware for time
import { dateNow } from '../middleware/time';

// Dotenv
import * as dotenv from 'dotenv';
dotenv.config();

// Validations
import {
    loginSchema
} from '../middleware/validation';

// Component
import {
    validateEmail,
    validateUserPassword,
} from '../components/authComponent';

// Token Secret
const tokenSecret: any = process.env.TOKEN_SECRET;

// login User
export const login = async (req: Request, res: Response) => {
    try {
        // Validate form
        await loginSchema.validateAsync(req.body);

        //check email login
        const user: any = await validateEmail(req.body.email);
        if (!user) {
            return res.status(400).json({
                status: 'error',
                message: 'Invalid Email and Password',
            });
        }

        //   Check Password
        const validPassword = await validateUserPassword(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).json({ status: 'error', message: 'Invalid Email and Password' });
        }

        // Json Web Token
        const token = jwt.sign({ _id: user.id, type: user.type, company: user.company }, tokenSecret);

        // return
        res.status(200).json({
            status: 'success', user, token, message: 'Logged in successfully',
        });
    } catch (error) {
        if (error.isJoi) return res.status(400).json({ status: 'error', message: error.details[0].message });
    }
};
