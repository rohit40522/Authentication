import {MailtrapClient} from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
  testInboxId: 4173422,
});

export const sender = {
  email: "hello@example.com",
  name: "Mailtrap Test",
};




























// import dotenv from 'dotenv';
// import nodemailer from 'nodemailer';

// // Load environment variables from the .env file
// dotenv.config();

// // Create the Nodemailer transporter using environment variables
// const transporter = nodemailer.createTransport({
//     host: 'smtp.mailtrap.io',
//     port: 2525,
//     auth: {
//         user: process.env.MAILTRAP_USER,
//         pass: process.env.MAILTRAP_PASS
//     }
// });

// const sendVerificationEmail = async (userEmail, verificationToken) => {
//     const verificationUrl = `https://your-frontend-url.com/verify/${verificationToken}`;

//     const mailOptions = {
//         from: 'no-reply@yourdomain.com',
//         to: userEmail,
//         subject: 'Please verify your email address',
//         html: `
//             <p>Hi,</p>
//             <p>Thank you for signing up. Please verify your email by clicking the link below:</p>
//             <a href="${verificationUrl}">Verify Email</a>
//         `
//     };

//     try {
//         const info = await transporter.sendMail(mailOptions);
//         console.log('Verification email sent: ', info.response);
//     } catch (error) {
//         console.error('Error sending verification email:', error);
//     }
// };

// // Example usage:
// sendVerificationEmail('user@example.com', 'verification_token_here');

// export default sendVerificationEmail;



// Looking to send emails in production? Check out our Email API/SMTP product!



// import Nodemailer from 'nodemailer'
// import { MailtrapClient } from 'mailtrap'
// import dotenv from 'dotenv'

// dotenv.config();

// const TOKEN = process.env.MAILTRAP_TOKEN;
// const ENDPOINT = process.env.MAILTRAP_ENDPOINT;

// const client = new MailtrapClient({
//     endpoint: ENDPOINT,
//     token: TOKEN
// })
// const sender = {
//   address: "mailtrap@demomailtrap.com",
//   name: "Rohit",
// };

// const recipients = [
//   "rohitoraonr146@gmail.com",
// ];


// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//     sandbox: true
//   })
//   .then(console.log, console.error);



// Looking to send emails in production? Check out our Email API/SMTP product!



// Looking to send emails in production? Check out our Email API/SMTP product!


/*
import nodemailer from 'nodemailer'; 
import dotenv from 'dotenv';         


dotenv.config();


const TOKEN = process.env.TOKEN;    
const ENDPOINT = process.env.ENDPOINT;  


const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',  
  port: 587,                 
    user: process.env.MAILTRAP_USER,  
    pass: process.env.MAILTRAP_PASS 
});


const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Rohit"
};

const recipients = [
  {
    email: "rohitoraonr146@gmail.com"
  }
];


transport.sendMail({
  from: sender,
  to: recipients.map(recipient => recipient.email), 
  subject: "You are awesome!",
  text: "Congrats for sending test email with Mailtrap!",
  category: "Integration Test",
  sandbox: true
})
  .then(console.log) 
  .catch(console.error); 
  */


/*

import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 587, 
  auth: {
    user: 'fab088cb5d1c82', 
    pass: '90abcaaf9df48c'  
  }
});


const mailOptions = {
  from: 'hello@example.com', 
  to: 'rohitoraonr146@gmail.com', 
  subject: 'Test Email from Node.js', 
  html: 'This is a test email sent using Mailtrap in Node.js.', 
  category: "Integrated Test",
};


transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 

*/





/*
export const mailTrapClient = new MailtrapClient({ endPoint: process.env.ENDPOINT, token : process.env.TOKEN});


*/

// export const mailTrapClient = nodemailer.createTransport({
//   host: 'sandbox.smtp.mailtrap.io',
//   port: 587, 
//   auth: {
//     user: 'fab088cb5d1c82', 
//     pass: '90abcaaf9df48c'  
//   }
// });


// import {MailtrapTransport} from "mailtrap";

// const TOKEN = "18ce406769ba7557e1d29b56ba9758b0";

// export const mailtrapClient = Nodemailer.createTransport(
//   MailtrapTransport({
//     token: TOKEN,
//   })
// );

// export const sender = {
//   email:"mailtrap@demomailtrap.com",
//   name: "Rohit"
// };


/*
import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

export const mailtrapClient = new MailtrapClient({
	endpoint: process.env.MAILTRAP_ENDPOINT,
	token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
	email: "mailtrap@demomailtrap.com",
	name: "Burak",
};

*/
