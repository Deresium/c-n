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
        });

        this.getRouter().get('/solutionFile/:id/pdfFile/:fileName', async(req, res) => {
            const file = await this.solutionFileRequester.getSolutionFilePdf(parseInt(req.params.id));
            const fileName = req.params.fileName;
            const download = req.query.download === 'true';
            if(file) {
                res.set('Content-Type', 'application/pdf');
                if(download) {
                    res.setHeader('Content-disposition', `attachment;filename=${fileName}.pdf`);
                } else {
                    res.setHeader('Content-disposition', `inline`);
                }
                res.send(file);
            }else{
                res.status(404).send();
            }
        });
    }

}