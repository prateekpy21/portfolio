

"use server";
import React from "react"
import { Resend } from "resend"
import {getErrorMessage, validateIncomingData} from '@/lib/utils'
import ContactFormEmailStyler from '@/email-styling/contact-form-styler'

// Resend instantiated object
const resend = new Resend(process.env.RESEND_API_KEY)


// Validation function moved to utils for cleaner and reusable code


// const validateIncomingData = (value: unknown, maxlength: number) => {
//     if(!value || typeof value !== 'string' || value.length > maxlength) {
//         return false
//     }
//     return true
//     }

// error handling  moved to utiils
// const getErrorMessage = (error: unknown ): string => {

//     let message: string
//     | undefined = error instanceof Error ? error.message : String(error);
//     if (error instanceof Error) {
         // Checking for instance of object is thrown as error by the response
//         message = error.message 
//         }
     // If the function is a string as well then return error needs to be checked and converted accordingly    
//     else if(error && typeof error === 'object' && 'message' in error){
//             message =  String(error.message)
        
//     }
//     else{
//         message = "Something went wrong"
//     }
//     return message
// }

// Sender Emails and message needs to be send to server and this will run on server
// we are going to use RESEND as he third party tool for the same

export const sendEmail = async (formData:FormData) => {
    
    const senderEmail = formData.get('senderEmail')
    const message = formData.get('message')
    console.log(senderEmail)

    // Perform a validation 
    if (!validateIncomingData(senderEmail,500)) {
        console.log("checked and validate email")
        return{
            error: "Invalid Sender Email"
        }
    }
    if (!validateIncomingData(message,2000)) {
        return{
            error: "Invalid Message"
        }
    }
    console.log("running on server")
    console.log(formData)
    console.log(formData.get("senderEmail"))
    console.log(formData.get("senderMessage"))
    // fetch request here
    let data;
    try{

        // atyling the emails that are send to us
    data = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: "pratzpy@gmail.com",
        subject: "Message froom  contact form",
        reply_to: senderEmail as string,
        // This is made only if atsx file type is saved
        // react: <ContactFormEmailStyler message = {senderMsg as string} senderEmail = {senderEmail} />
        react: React.createElement(ContactFormEmailStyler, {message: message as string, senderEmail :senderEmail as string})
    })}
    catch (error: unknown){
        return {data,}
       
    }
}