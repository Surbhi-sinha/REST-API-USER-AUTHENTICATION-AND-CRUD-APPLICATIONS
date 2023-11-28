// it is going to be our user schema

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  authentication: {
    password: { type: String, required: true },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
    // select: false => everytime we use one of our controllers to fetch some user we dont wanna fetch all users with entire API with authentication data.
  },
});

// TURN SCHEMA TO A MODEL
export const UserModel = mongoose.model("User", UserSchema);

//ACTIONS
export const getUsers = () => UserModel.find();
export const getUserByEmail = (email: String) => UserModel.findOne({ email });
//this we do to check whether the user already logged in
export const getUserBySessionToken = (sessionToken: String) =>
  UserModel.findOne({
    "authentication.sessionToken": sessionToken,
  });
export const getUserById = (id: string) => UserModel.findById(id);
export const createUser = (values: Record<string, any>) =>
  new UserModel(values).save().then((user) => user.toObject());
export const deleteUserById = (id: string) =>
  UserModel.findOneAndDelete({ _id: id });
export const updateUserById = (id: string, values: Record<string, any>) =>
  UserModel.findByIdAndUpdate(id, values);
