import ApplicationRouter from "./ApplicationRouter";
import IBreakfastRequester from "../business/requesters/IBreakfastRequester";


export default class BreakfastRouter extends ApplicationRouter{
    private readonly breakfastRequester: IBreakfastRequester;

    constructor(breakfastRequester: IBreakfastRequester) {
        super();
        this.breakfastRequester = breakfastRequester;
    }
    initRoutes(): void {
        this.getRouter().get('/breakfast', async(req, res) => {
            const breakfasts = await this.breakfastRequester.getShowBreakfasts();
            res.send(breakfasts);
        });
    }
}