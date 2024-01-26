import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AccountSchema = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true, minlength: 2, maxlength: 40 },
    phone: { type: String, unique: true, minlength: 7, maxlength: 15 },
    name: { type: String, required: true, minlength: 2, maxlength: 50 },
    picture: { type: String, required: true },
    location: { type: String, required: true, minlength: 2, maxlength: 500 },
    aboutMe: { type: String, required: true, minlength: 2, maxlength: 2000 },
    instagram: { type: String, required: false, minlength: 2, maxlength: 500 },
    facebook: { type: String, required: false, minlength: 2, maxlength: 500 },
    twitter: { type: String, required: false, minlength: 2, maxlength: 500 },
    userName: { type: String, required: false, minlength: 2, maxlength: 30 },
    resume: { type: String, required: false },
    testimonials: { type: String, required: false, minlength: 2, maxlength: 1000 }

    // NOTE If you wish to add additional properties do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

