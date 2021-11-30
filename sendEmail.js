// const cors = require ("cors");


//packages
const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();
const bodyParser= require('body-parser')
const { google } = require('googleapis')

// // const handlebars = require("handlebars");
// // const { info } = require("console");

// // const app=express();
// // app.use(cors({origin: "*" }));
// // app.use(bodyParser.json());

// // app.listen(4200, () =>{
// //     console.log("Server used is 4200");
// // });

// // user tuu from input form
// // app.post("/sendmail", (req,res)=>{
// //     console.log("request email");
// //     let user=req.body;

// //     sendMail(user, info =>{
// //      console.log(`mail has been send to receiver`);
// //      res.send(info);
// //     }) 
// // });

// // async function sendMail(user, callback){
// //     let smtpTransport = nodemailer.createTransport
// //     ({
// //         host:"smtp.gmail.com",
// //         port: 587,
// //         secure: false,
// //         service:'gmail',
// //         auth:{
// //             user:'@gmail.com',
// //             // pass:''
// //         }
// //     });
// // }

// // transport 
// let smtpTransport = nodemailer.createTransport({
//      service:'gmail',
//      auth:{
//          user:'@gmail.com',
//         pass:''
//      }
//  });

// // send mail 
// let mailOptions={
//     from:'@gmail.com',
//     to:'@gmail.com',
//     subject:'hello',
//     text:'happy birthday!!!',
// };

// // //with defined transport object
// // let info= await smtpTransport.sendMail(mailOptions);

// // callback(info);

// //able to send email
// smtpTransport.sendMail(mailOptions,(err)=>{
//     if(err){
//         console.log('error');
//     }
//     else{
//         console.log('email send');
//     }
// });