import mongoose from "mongoose";

const MONGO = {
    host: 'db',
    port: '27017',
    db: 'park',
    password: '',
    user: '',
    url: `mongodb://db:27017`
}

class MongooseService{
    constructor(){
        mongoose.connect(MONGO.url,{
            auth:{
                password: 'password',
                username: 'admin'
            }
        }).then(()=>console.log('Conectado'))
    }

    closeConnection(){
        mongoose.disconnect();
    }
}

export default MongooseService;