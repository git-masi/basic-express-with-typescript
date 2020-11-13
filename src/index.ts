import path from 'path';
import express, { Request, Response } from 'express';
import cookieSession from 'cookie-session';
import chalk from 'chalk';
import { router } from './routes/loginRoutes';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieSession({ keys: ['superSecret'] }));

app.use(router);

app.get('/', (req: Request, res: Response) => {
    // console.log(req.session);
    res.render('home/home.ejs', {
        pageTitle: 'home',
        loggedIn: req.session?.loggedIn ?? false,
    });
});

app.use('/', (req: Request, res: Response) => {
    res.send('<h1>404 page not found</h1>');
});

const port = 3333;

app.listen(port, () => {
    console.log(`server running on ${chalk.green(`http://localhost:${port}`)}`);
});
