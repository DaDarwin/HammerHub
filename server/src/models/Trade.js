import { Schema } from "mongoose";





export const TradeSchema = new Schema(
    {
        trade: { type: String, enum: ['planning', 'foundation', 'framing', 'electrical', 'plumbing', 'siding', 'roofing', 'drywall', 'landscaping', 'concrete work', 'tile work', 'cabinetry', 'HVAC', 'windows', 'other'], required: true },
        extraInfo: { type: String, minLength: 0, maxLength: 100 },
        isLicensed: { type: Boolean, default: false },
        archived: { type: Boolean, default: false },
        profileId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
)


TradeSchema.virtual('profile', {
    localField: 'profileId',
    foreignField: '_id',
    ref: 'Profile',
    justOne: true,
})

TradeSchema.virtual('projects', {
    localField: '_id',
    foreignField: 'tradeId',
    ref: 'Project',
})

