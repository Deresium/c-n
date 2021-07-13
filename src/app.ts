import express from "express";
import path from "path";
import redirectHttps from "./middlewares/redirectHttps";
import {connect} from "./mongodb";
import returnIndex from "./middlewares/returnIndex";
import routerCn from "./routers/CnRouter";
import allowLocahostMiddleware from "./middlewares/AllowLocahostMiddleware";
import forceDownloadPDF from "./middlewares/forceDownloadPDF";

//connect();

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');



app.use(forceDownloadPDF);


app.use(express.static(publicDirectoryPath));
app.use(returnIndex);

app.use(express.json());
app.use(routerCn);

export default app;