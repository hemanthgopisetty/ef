import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        // required: [true, "please write your Fullname"],
        // unique : true ,
      },
      email: {
        type: String,
        // required: [true, "please provide a valid Email"],
        // unique: true,
      },
      mobileno: {
        type: String,
        // required: [true, "please provide a valid Mobile Number"],
        // unique: true,
      },
      password: {
        type: String,
      },
});

const Account = mongoose.models.Account || mongoose.model("Account",userSchema);

export default Account ;
