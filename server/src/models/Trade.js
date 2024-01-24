import { Schema } from "mongoose";





export const TradeSchema = new Schema(
    {
        workType: {type: String, enum: ['a', 'b', 'c', 'd']},
        extraInfo: {type: String, minLength: 0, maxLength:100},
        isLicensed: {type: Boolean, default: false},

        profileId: {type: Schema.Types.ObjectId, ref: 'Profile'}
    },
    { timestamps: true, toJSON: { virtuals: true } }
)


TradeSchema.virtual('profile', {
    localField: 'profileId',
    foreignField: '_id',
    ref: 'Profile',
    justOne: true,
})

