import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
    senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

    reeceiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    message: {
        type: String,
        required: true,
    },
    // CreatedAt, updatedAt
   }, 
   {timestamps: true}
    
);

const Messsage = mongoose.Schema("Message", messageSchema);

export default Messsage;