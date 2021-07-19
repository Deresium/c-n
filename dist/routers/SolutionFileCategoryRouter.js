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
const SolutionFileUpdateDS_1 = __importDefault(require("../business/models/solutionfile/datastores/SolutionFileUpdateDS"));
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
        this.getRouter().put('/admin/solutionFileCategory/:id', new OnlyAdminMiddleware_1.default().getRequestHandler(), upload.single('file'), (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const icon = (_a = req.file) === null || _a === void 0 ? void 0 : _a.buffer;
            const categoryName = req.body.categoryName;
            const solutionFileCategoryId = parseInt(req.params.id);
            if (!categoryName) {
                res.send();
                return;
            }
            if (!solutionFileCategoryId) {
                res.status(400).send();
                return;
            }
            yield this.solutionFileRequester.updateSolutionFileCategory(solutionFileCategoryId, categoryName, icon);
            res.send();
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
        this.getRouter().put('/solutionFileCategory/:id/solutionFile/:solutionFileId', new OnlyAdminMiddleware_1.default().getRequestHandler(), upload.single('file'), (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _b;
            const solutionFileCategoryId = parseInt(req.params.id);
            const solutionFileId = parseInt(req.params.solutionFileId);
            const pdfFile = (_b = req.file) === null || _b === void 0 ? void 0 : _b.buffer;
            const title = req.body.title;
            const description = req.body.description;
            const solutionFileUpdate = new SolutionFileUpdateDS_1.default(solutionFileId, title, description, solutionFileCategoryId, pdfFile);
            yield this.solutionFileRequester.updateSolutionFile(solutionFileUpdate);
            res.send();
        }));
        this.getRouter().delete('/solutionFileCategory/:id/solutionFile/:solutionFileId', new OnlyAdminMiddleware_1.default().getRequestHandler(), (req, res) => __awaiter(this, void 0, void 0, function* () {
            const solutionFileId = parseInt(req.params.solutionFileId);
            yield this.solutionFileRequester.deleteSolutionFile(solutionFileId);
            res.send();
        }));
        this.getRouter().put('/reorderSolutionFile', new OnlyAdminMiddleware_1.default().getRequestHandler(), (req, res) => __awaiter(this, void 0, void 0, function* () {
            const solutionFilesIds = req.body.solutionFileIds;
            yield this.solutionFileRequester.reorderSolutionFiles(solutionFilesIds);
            res.send();
        }));
        this.getRouter().put('/reorderSolutionFileCategory', new OnlyAdminMiddleware_1.default().getRequestHandler(), (req, res) => __awaiter(this, void 0, void 0, function* () {
            const solutionFileCategoryIds = req.body.solutionFileCategoryIds;
            yield this.solutionFileRequester.reorderSolutionFileCategories(solutionFileCategoryIds);
            res.send();
        }));
    }
}
exports.default = SolutionFileCategoryRouter;
//# sourceMappingURL=SolutionFileCategoryRouter.js.map