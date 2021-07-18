import ApplicationRouter from "./ApplicationRouter";
import multer from "multer";
import OnlyAdminMiddleware from "../middlewares/OnlyAdminMiddleware";
import ISolutionFileRequester from "../business/requesters/ISolutionFileRequester";
import SolutionFileDS from "../business/models/solutionfile/datastores/SolutionFileDS";

export default class SolutionFileCategoryRouter extends ApplicationRouter{
    private solutionFileRequester: ISolutionFileRequester;

    constructor(solutionFileRequester: ISolutionFileRequester) {
        super();
        this.solutionFileRequester = solutionFileRequester;
    }

    initRoutes(): void {
        const upload = multer();
        this.getRouter().post('/admin/solutionFileCategory', new OnlyAdminMiddleware().getRequestHandler(), upload.single('file'), async(req, res) => {
            const iconFile = req.file;
            const categoryName = req.body.categoryName;

            if(!iconFile || !iconFile.buffer || !categoryName){
                res.status(400).send();
            }

            await this.solutionFileRequester.addSolutionFileCategory(categoryName, iconFile.buffer);
            res.send();
        });

        this.getRouter().get('/solutionFileCategory', async(req, res) => {
            const solutionFileCategories = await this.solutionFileRequester.getSolutionFileCategories();
            res.send(solutionFileCategories);
        });

        this.getRouter().delete('/solutionFileCategory/:id', new OnlyAdminMiddleware().getRequestHandler(), async(req, res) => {
            const id = parseInt(req.params.id);
            await this.solutionFileRequester.deleteSolutionFileCategory(id);
            res.send(id.toString());
        });

        this.getRouter().post('/solutionFileCategory/:id/solutionFile', new OnlyAdminMiddleware().getRequestHandler(), upload.single('file'), async(req, res) => {
            const solutionFileCategoryId = parseInt(req.params.id);
            const pdfFile = req.file;
            const title = req.body.title;
            const description = req.body.description;

            const solutionFile = new SolutionFileDS(title, description, null, solutionFileCategoryId, pdfFile.buffer);
            await this.solutionFileRequester.addSolutionFile(solutionFile);
            res.send();
        });
    }

}