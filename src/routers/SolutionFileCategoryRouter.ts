import ApplicationRouter from "./ApplicationRouter";
import multer from "multer";
import OnlyAdminMiddleware from "../middlewares/OnlyAdminMiddleware";
import ISolutionFileRequester from "../business/requesters/ISolutionFileRequester";
import SolutionFileDS from "../business/models/solutionfile/datastores/SolutionFileDS";
import SolutionFileUpdateDS from "../business/models/solutionfile/datastores/SolutionFileUpdateDS";

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

        this.getRouter().put('/admin/solutionFileCategory/:id', new OnlyAdminMiddleware().getRequestHandler(), upload.single('file'), async(req, res) => {
            const icon = req.file?.buffer;
            const categoryName = req.body.categoryName;
            const solutionFileCategoryId = parseInt(req.params.id);
            if(!categoryName){
                res.send();
                return;
            }
            if(!solutionFileCategoryId){
                res.status(400).send();
                return;
            }
            await this.solutionFileRequester.updateSolutionFileCategory(solutionFileCategoryId, categoryName, icon);
            res.send();
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

        this.getRouter().put('/solutionFileCategory/:id/solutionFile/:solutionFileId', new OnlyAdminMiddleware().getRequestHandler(), upload.single('file'), async(req, res) => {
            const solutionFileCategoryId = parseInt(req.params.id);
            const solutionFileId = parseInt(req.params.solutionFileId);
            const pdfFile = req.file?.buffer;
            const title = req.body.title;
            const description = req.body.description;

            const solutionFileUpdate = new SolutionFileUpdateDS(solutionFileId, title, description, solutionFileCategoryId, pdfFile);
            await this.solutionFileRequester.updateSolutionFile(solutionFileUpdate);
            res.send();
        });

        this.getRouter().delete('/solutionFileCategory/:id/solutionFile/:solutionFileId', new OnlyAdminMiddleware().getRequestHandler(),  async(req, res) => {
            const solutionFileId = parseInt(req.params.solutionFileId);
            await this.solutionFileRequester.deleteSolutionFile(solutionFileId);
            res.send();
        });

        this.getRouter().put('/reorderSolutionFile', new OnlyAdminMiddleware().getRequestHandler(), async(req, res) => {
            const solutionFilesIds = req.body.solutionFileIds;
            await this.solutionFileRequester.reorderSolutionFiles(solutionFilesIds);
            res.send();
        });

        this.getRouter().put('/reorderSolutionFileCategory', new OnlyAdminMiddleware().getRequestHandler(), async(req, res) => {
            const solutionFileCategoryIds = req.body.solutionFileCategoryIds;
            await this.solutionFileRequester.reorderSolutionFileCategories(solutionFileCategoryIds);
            res.send();
        });
    }

}