import { Request, Response } from 'express';
import { User } from '../models/User';
import bcrypt from 'bcryptjs';

export class AuthController {
    public async login(req: Request, res: Response): Promise<void> {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            res.status(401).send('Invalid credentials');
            return;
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(401).send('Invalid credentials');
            return;
        }
        res.send({ message: 'Login successful', user: { email: user.email, role: user.role } });
    }

    public async signup(req: Request, res: Response): Promise<void> {
        const { email, password, role } = req.body;
        try {
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                res.status(409).send('User already exists');
                return;
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({ email, password: hashedPassword, role });
            await newUser.save();
            res.status(201).send({ message: 'Signup successful', user: { email: newUser.email, role: newUser.role } });
        } catch (error) {
            console.error('Signup error:', error);
            res.status(500).send('Internal server error');
        }
    }
}