import mongoose from "mongoose";

let db: typeof mongoose;
const connect = () => {
    mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true, replicaSet: 'rs'})
        .then((result) => {
            console.log('connection ok', result);
            db = result;
        })
        .catch((error: any) => {
            console.log('connection failed', error);
        })
}

export{
    connect,
    db
}