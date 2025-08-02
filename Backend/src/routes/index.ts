import { Express, Request, Response } from 'express';
import { AuthController } from '../controllers/AuthController';

const authController = new AuthController();

export function setRoutes(app: Express) {
    app.get('/', (req: Request, res: Response) => {
        res.send('Backend is running!');
    });

    app.post('/login', (req, res) => authController.login(req, res));
    app.post('/signup', (req, res) => authController.signup(req, res)); // <-- Add this line
}