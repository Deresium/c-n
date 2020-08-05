import express from "express";
import path from "path";
import redirectHttps from "./middlewares/redirectHttps";
import {connect} from "./mongodb";
import returnIndex from "./middlewares/returnIndex";
import routerCn from "./routers/CnRouter";
import allowLocalhost from "./middlewares/allowLocalhost";

connect();

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

if(process.env.NODE_ENV === 'production') {
    app.use(redirectHttps);
}
else{
    app.use(allowLocalhost);
}

app.use(returnIndex);

app.use(express.json());
app.use(routerCn);

app.use(express.static(publicDirectoryPath));

export default app;