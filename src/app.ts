import express from "express";
import path from "path";

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

// redirect https if production
// returnIndex

app.use(express.json());

// routers

app.use(express.static(publicDirectoryPath));

export default app;