import { Response, Request, NextFunction } from "express";
import { get, controller, use, post, bodyValidator } from './decorators'

// function logger(req: Request, res: Response, next: NextFunction) {
//     console.log("Request was made");
//     next();
// }

@controller('/auth') // defines the root route
export class LoginController {
    @get('/login')
    // @use(logger)
    getLogin(req: Request, res: Response) {
        res.send(`
            <form method="POST">
                <div>
                    <label>Email</label>
                    <input name="email"/>
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password"/>
                </div>
                <button>Submit</button>
            </form>
        `)
    };

    @post('/login')
    @bodyValidator('email', 'password')
    postLogin(req: Request, res: Response) {
        const { email, password } = req.body;
        if (email && password && email === "hi@hi.com" && password === "password") {
            // mark this person as logged in
            req.session = {loggedIn: true};
            res.redirect('/')
            // redirect them to the root route
        } else {
            res.send('Invalid email or password')
        }
    };

}