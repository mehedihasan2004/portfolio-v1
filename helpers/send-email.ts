import emailJs from "@emailjs/browser";

type SendEmail = {
  from_name: string;
  to_name: string;
  from_email: string;
  to_email: string;
  message: string;
};

export async function sendEmail({
  from_name,
  to_name,
  from_email,
  to_email,
  message,
}: SendEmail) {
  await emailJs
    .send(
      "service_lbdt9wa" as string,
      "template_racn3xb" as string,
      {
        from_name,
        to_name,
        from_email,
        to_email,
        message,
      },
      "wlYXkmlY-bkCToUpv" as string
    )
    .then(
      () => {
        alert("Thank you. I will back to you ASAP!");
      },
      (err) => {
        console.log("Error From Contact On Submit --> ", err);
        alert("Something went wrong !!");
      }
    );
}
