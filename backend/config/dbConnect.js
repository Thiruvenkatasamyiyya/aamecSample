import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config({path :'./backend/config/config.env'})
const connectDatabase = async()=>{
    await mongoose.connect(process.env.DBCONNECT)
    .then((con)=>{
        console.log(`Mongodb is conntected successfully in ${con.connection.host}`);
    })
}

export default connectDatabase