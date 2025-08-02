import { Request, Response } from 'express';

export class AgentController {
    public getAssignedTickets(req: Request, res: Response): void {
        res.send('Tickets assigned to support agent');
    }

    public updateTicketStatus(req: Request, res: Response): void {
        res.send('Ticket status updated by agent');
    }
}