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
        this.openConnection();
    }

    closeConnection = () =>{
        mongoose.disconnect();
    }

    openConnection = async() =>{
        await mongoose.connect(MONGO.url,{
            auth:{
                password: 'password',
                username: 'admin'
            }
        });
    }
}

export default MongooseService;