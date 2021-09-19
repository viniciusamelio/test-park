import mongoose, { Schema } from "mongoose";
import StayDto from "../../../data/dtos/stay/stayDto";

const StaySchema: Schema = new Schema({
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

export default mongoose.model<StayDto>('Stay', StaySchema);