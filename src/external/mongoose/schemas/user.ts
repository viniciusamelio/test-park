import mongoose, { Schema } from "mongoose";
import UserDto from "../../../data/dtos/user/userDto";

const UserSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: true,
    }
},
    {
        timestamps: true
    }
);

export default mongoose.model<UserDto>('User', UserSchema);