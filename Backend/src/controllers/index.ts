class IndexController {
    public getIndex(req: Request, res: Response): void {
        res.send('Welcome to the API!');
    }
}

export default IndexController;