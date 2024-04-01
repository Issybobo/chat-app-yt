import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: true
    },

    username : {
        type: String,
        require: true,
        unique: true
    }, 

    password: {
        type: String,
        require: true,
        minlenght: 6
    },

    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },

    profilePic :{
        type: String,
        default: "",

    },
    // Created At  Updated at
},  {timestamps: true});

const User = mongoose.model("ChatUser", userSchema);

export default User;