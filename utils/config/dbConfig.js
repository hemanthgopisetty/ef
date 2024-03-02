import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI) ;
        mongoose.connection.on("connected" , ()=>{
            console.log("Hemanth -> MongoDB connected");
        });
        mongoose.connection.on("error",(err)=>{
            console.log("Hemanth -> MongoDB error" + err);
            process.exit();
        });
    } catch (error) {
        console.log(error);
    }
}