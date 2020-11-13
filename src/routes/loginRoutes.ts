import { Router, Request, Response } from 'express';

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined };
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
    res.render('login/login.ejs', { pageTitle: 'Login' });
});

router.post('/login', (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body;

    if (email === 'fake@fake.com' && password === 'testing') {
        req.session = {loggedIn: true};
        res.redirect('/');
    } else {
        res.status(400).send('error');
    }
});

export { router };
