import { Schema } from "mongoose";

export const PictureSchema = new Schema(
    {
        imgUrl: { type: String, required: true, maxlength: 750 },
        description: { type: String, required: false, minlength: 10, maxlength: 1000 },
        projectId: { type: Schema.Types.ObjectId, required: true, ref: 'Project' },
        creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
    },
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
)

PictureSchema.virtual('creator', {
    localField: 'creatorId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true
})