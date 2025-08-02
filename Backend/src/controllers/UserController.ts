import { Request, Response } from 'express';

export class UserController {
    public getProfile(req: Request, res: Response): void {
        res.send('User profile data');
    }

    public createTicket(req: Request, res: Response): void {
        res.send('Ticket created by user');
    }
}