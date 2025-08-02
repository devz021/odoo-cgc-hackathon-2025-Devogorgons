import { Request, Response } from 'express';

export class AdminController {
    public getAllUsers(req: Request, res: Response): void {
        res.send('All users data for admin');
    }

    public getAllTickets(req: Request, res: Response): void {
        res.send('All tickets data for admin');
    }
}