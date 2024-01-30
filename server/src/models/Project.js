import { Schema } from "mongoose"
export const ProjectSchema = new Schema({
  trade: { type: String, enum: ['planning', 'foundation', 'framing', 'electrical', 'plumbing', 'siding', 'roofing', 'drywall', 'landscaping', 'concrete work', 'tile work', 'cabinetry', 'HVAC', 'windows', 'other'] },
  title: { type: String, required: true, maxlength: 30 },
  archived: { type: Boolean, required: true, default: false },
  coverImg: { type: String, required: true, maxlength: 500 },
  description: { type: String, required: true, minlength: 5, maxlength: 1000 },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },

},
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)

ProjectSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})

ProjectSchema.virtual('pictures', {
  localField: '_id',
  foreignField: 'projectId',
  ref: 'Picture',
})

