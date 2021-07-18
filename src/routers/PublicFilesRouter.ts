import ApplicationRouter from "./ApplicationRouter";
import ISolutionFileRequester from "../business/requesters/ISolutionFileRequester";

export default class PublicFilesRouter extends ApplicationRouter{
    private solutionFileRequester: ISolutionFileRequester;

    constructor(solutionFileRequester: ISolutionFileRequester) {
        super();
        this.solutionFileRequester = solutionFileRequester;
    }

    initRoutes(): void {
        this.getRouter().get('/solutionFileCategory/:id/icon', async(req, res) => {
            const file = await this.solutionFileRequester.getSolutionFileCategoryIcon(parseInt(req.params.id));
            if(file) {
                res.set('Content-Type', 'image/*');
                res.send(file);
            }else{
                res.status(404).send();
            }
        })
    }

}