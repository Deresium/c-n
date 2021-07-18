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
const multer_1 = __importDefault(require("multer"));
const OnlyAdminMiddleware_1 = __importDefault(require("../middlewares/OnlyAdminMiddleware"));
const SolutionFileDS_1 = __importDefault(require("../business/models/solutionfile/datastores/SolutionFileDS"));
class SolutionFileCategoryRouter extends ApplicationRouter_1.default {
    constructor(solutionFileRequester) {
        super();
        this.solutionFileRequester = solutionFileRequester;
    }
    initRoutes() {
        const upload = multer_1.default();
        this.getRouter().post('/admin/solutionFileCategory', new OnlyAdminMiddleware_1.default().getRequestHandler(), upload.single('file'), (req, res) => __awaiter(this, void 0, void 0, function* () {
            const iconFile = req.file;
            const categoryName = req.body.categoryName;
            if (!iconFile || !iconFile.buffer || !categoryName) {
                res.status(400).send();
            }
            yield this.solutionFileRequester.addSolutionFileCategory(categoryName, iconFile.buffer);
            res.send();
        }));
        this.getRouter().get('/solutionFileCategory', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const solutionFileCategories = yield this.solutionFileRequester.getSolutionFileCategories();
            res.send(solutionFileCategories);
        }));
        this.getRouter().delete('/solutionFileCategory/:id', new OnlyAdminMiddleware_1.default().getRequestHandler(), (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            yield this.solutionFileRequester.deleteSolutionFileCategory(id);
            res.send(id.toString());
        }));
        this.getRouter().post('/solutionFileCategory/:id/solutionFile', new OnlyAdminMiddleware_1.default().getRequestHandler(), upload.single('file'), (req, res) => __awaiter(this, void 0, void 0, function* () {
            const solutionFileCategoryId = parseInt(req.params.id);
            const pdfFile = req.file;
            const title = req.body.title;
            const description = req.body.description;
            const solutionFile = new SolutionFileDS_1.default(title, description, null, solutionFileCategoryId, pdfFile.buffer);
            yield this.solutionFileRequester.addSolutionFile(solutionFile);
            res.send();
        }));
    }
}
exports.default = SolutionFileCategoryRouter;
//# sourceMappingURL=SolutionFileCategoryRouter.js.map