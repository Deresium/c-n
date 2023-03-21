"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationRouter_1 = __importDefault(require("./ApplicationRouter"));
class PublicFilesRouter extends ApplicationRouter_1.default {
    constructor(solutionFileRequester) {
        super();
        this.solutionFileRequester = solutionFileRequester;
    }
    initRoutes() {
        this.getRouter().get('/solutionFileCategory/:id/icon', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const file = yield this.solutionFileRequester.getSolutionFileCategoryIcon(parseInt(req.params.id));
            if (file) {
                res.set('Content-Type', 'image/*');
                res.end(file, 'base64');
            }
            else {
                res.status(404).send();
            }
        }));
        this.getRouter().get('/solutionFile/:id/pdfFile/:fileName', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const file = yield this.solutionFileRequester.getSolutionFilePdf(parseInt(req.params.id));
            const fileName = req.params.fileName;
            const download = req.query.download === 'true';
            if (file) {
                res.set('Content-Type', 'application/pdf');
                if (download) {
                    res.setHeader('Content-disposition', `attachment;filename=${fileName}.pdf`);
                }
                else {
                    res.setHeader('Content-disposition', `inline`);
                }
                res.end(file, 'base64');
            }
            else {
                res.status(404).send();
            }
        }));
    }
}
exports.default = PublicFilesRouter;
//# sourceMappingURL=PublicFilesRouter.js.map