"use server";

import { sendEmail } from "@/helpers/send-email";
import { myEmail, myName } from "@/lib/constants";
import { ContactFormData } from "@/types/contact";

export async function handleContactFormSubmit({
  name,
  email,
  message,
}: ContactFormData) {
  try {
    //     await sendEmail({
    //       from_name: name,
    //       to_name: myName,
    //       from_email: email,
    //       to_email: myEmail,
    //       message,
    //     });

    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
