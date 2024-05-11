import nodemailer from 'nodemailer';
import dotenv from "dotenv";
import otpTemplate from "./mailTemplate.js";

dotenv.config();

const mailSender = async (email,title,body) => {
    try{
        let tansporter = nodemailer.createTransport({
            host : process.env.MAIL_HOST,
            auth : {
                user : process.env.MAIL_USER,
                pass : process.env.MAIL_PASS,
            }
        })

        let info = await tansporter.sendMail({
            from : '"Lets Chat Application" <${process.env.MAIL_USER}>',
            to : `${email}`,
            subject : `${title}`,
            html : `${otpTemplate(123)}`,
        })
        console.log(info);
        return info;
    }
    catch(error)
    {
        console.log("error occures in sending mail : ", error);
    }
}

export default mailSender;
