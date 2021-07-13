import express, {Router} from "express";

export default abstract class ApplicationRouter{
    private readonly router: Router;

    protected constructor() {
        this.router = express.Router();
        this.initRoutes();
    }

    getRouter(){
        return this.router;
    }

    abstract initRoutes(): void;
}