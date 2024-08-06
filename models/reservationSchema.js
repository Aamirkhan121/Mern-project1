import mongoose from "mongoose";
import validator from "validator";

const reservationSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First name must contain at least 3 charaters!"],
        maxLength:[30,"First name cannot excced 30 charaters!"],
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"last name must contain at least 3 charaters!"],
        maxLength:[30,"last name cannot excced 30 charaters!"],
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Provide a valide email!"]
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"phone numbar must contain only 10 digits!"],
        maxLength:[15,"phone number cannot excced 15 digits"],
    },
    time:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
})

export const Reservation=mongoose.model("Reservation",reservationSchema)