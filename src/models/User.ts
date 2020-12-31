import mongoose, { Schema, Document } from "mongoose";

const userSchema: Schema = new Schema({
  fullname: {
    type: String, required: true, max: 255, min: 6,
  },
  email: {
    type: String, required: true, max: 255, min: 6,
  },
  phone: { type: Number, required: true, min: 6 },
  password: {
    type: String, required: false, max: 1024, min: 6,
  },
  created_at: { type: Number },
  dateOfBirth: { type: String, required: false, default: '' },
  gender: { type: String, required: false },
  address: { type: String, required: false, default: '' },
  type: { type: String, required: false },
  country: { type: String, required: false, default: 'Nigeria' },
  city: { type: String, required: false, default: '' },
  verification: {
    status: { type: Boolean, required: false, default: false },
    token: { type: String, required: false, default: '' },
    dateSent: { type: Number, required: false, default: '' },
  },
  card: {
    authcode: { type: String, required: false, default: '' },
    cardNumber: { type: Number, required: false, default: '' },
    type: { type: String, required: false, default: '' },
    user: { type: String, required: false, default: '' },
    date: { type: Number, required: false, default: '' },
  },
  status: { type: Boolean, required: false, default: true },
  role: { type: String, required: false, default: 'admin' },
  company: { type: String, required: false, default: '' },
  loginCount: { type: Number, required: false, default: 0 },
  lastLogin: { type: Number },
  created_by: { type: String, required: false, default: 'self' },
  updated_at: { type: Number },
});
const User = mongoose.model("User", userSchema);
export default User;
