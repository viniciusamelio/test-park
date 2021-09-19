import mongoose, { Schema } from "mongoose";
import UserDto from "../../../data/dtos/user/userDto";

const StaySchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
        default: true,
    },
    totalAmount: {
        type: Number,
    },
    licensePlate: {
        type: String,
        required: true
    },
    user :{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},
    {
        timestamps: true
    }
);

export default mongoose.model<UserDto>('Stay', StaySchema);