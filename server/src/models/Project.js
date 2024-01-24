import { Schema } from "mongoose"
export const ProjectSchema = new Schema({

  title: { type: String, required: true, maxlength: 30 },
  type: {},
  archived: { type: Boolean, required: true, default: false },
  coverImg: { type: String, required: true, maxlength: 500 },
  description: { type: String, required: true, minlength: 20, maxlength: 1000 },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
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

