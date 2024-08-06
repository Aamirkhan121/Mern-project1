import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation=async(req,res,next)=>{
    const {firstName,lastName,email,phone,time,date}=req.body;
    if (!firstName||!lastName||!email||!phone||!time||!date) {
        return next(new ErrorHandler("Please fill full reservation form",400))
    }
    try {
       await Reservation.create({firstName,lastName,email,phone,time,date});
       res.status(200).json({
        success:true,
        message:"Reservation send successfully!"
       });
    } catch (error) {
        console.log(error)
        if (error.name==='validationError') {
            const validationErrors=Object.values(error.errors).map(
                (err)=>err.message
            );
            return next(new ErrorHandler(validationErrors.join(', '),400))
        }
        return next(error)
        
    }
}