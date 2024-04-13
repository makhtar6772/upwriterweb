import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import Joi from "joi";
import passwordComplexity from "joi-password-complexity";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  plan: {
    type: String,
    default: null, // Default value to null
  },
  amount: {
    type: Number,
    default: null, // Default value to null
  },
  transactionId: {
    type: String,
    default: null, // Default value to null
  },
  creditsAmount: {
    type: Number,
    default: null, // Default value to null
  },
  credits: {
    type: Number,
    default: 0, // Default value to 0
  },
  creditstransactionId: {
    type: String,
    default: null, // Default value to null
  },
  experience: {
    type: Number,
    default: null,
  },
  country: {
    type: String,
    default: null,
  },
  upwork: {
    type: String,
    default: null,
  },
  fiverr: {
    type: String,
    default: null,
  },
  linkedin: {
    type: String,
    default: null,
  },
  facebook: {
    type: String,
    default: null,
  },
  upworkOverview: {
    type: String,
    default: null,
  },
  workSamples: {
    type: String, // Array of strings to store multiple work samples
    default: null,
  },
  skills: {
    type: [String], // Array of strings to store multiple skills
    default: [],
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, "Akhtar1122", {
    expiresIn: "7d",
  });
  return token;
};

export const usersModel = mongoose.model("users", userSchema);

export const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string().email(),
    password: passwordComplexity(),
  });
  return schema.validate(data);
};
