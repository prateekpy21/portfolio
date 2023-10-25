"use server"

import React from "react";
import { Resend } from "resend";
import { validateIncomingData, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email-styling/contact-form-styler";
import dotenv from 'dotenv';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY)
export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  //console.log(message)

  // simple server-side validation
  if (!validateIncomingData(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateIncomingData(message, 2000)) {
    return {
      error: "Invalid message",
    };
  }
 
  let data
  console.log(data)
  try {
    // React is used for styling the email
    data = await resend.emails.send({
      from: "Contact form <onboarding@resend.dev>",
      to: "pratzpy@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string, 
      react: React.createElement(ContactFormEmail,{
        senderEmail: senderEmail as string, 
        message:message as string
      }),
      })
  } catch (error : unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
