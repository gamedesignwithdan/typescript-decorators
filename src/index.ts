import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';
import { AppRouter } from "./AppRouter"
import './controllers/LoginController';

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieSession({keys: ['arstdy']}))
app.use(router);
app.use(AppRouter.getInstance());

app.listen(3000, () => {
    console.log(`Listening! See: http://localhost:3000`)
});