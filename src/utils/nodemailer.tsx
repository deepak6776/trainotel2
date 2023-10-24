import { MailtrapClient } from "mailtrap";
import nodemailer from "nodemailer";

type profile = { name: string; email: string; message: string };

const TOKEN = process.env.MAILTRAP_TOKEN!;
const ENDPOINT = process.env.MAILTRAP_ENDPOINT!;

const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

const sender = {
    email: "mailtrap@pencilhacker.com",
    name: "PencilHacker Trainotel Verification Form",
  };

interface EmailOptions {
    profile: profile;
    subject: "verification" | "forget-password" | "password-changed";
    linkUrl?: string;
}

const generateMailTransporter = () => {

    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "73efceaf4744a2",
        pass: "c9537de3b480e0"
      }
    });
  
    return transport;
};

const sendEmailVerificationLink = async (profile: profile, linkUrl: string) => {
  
    const recipients = [
      {
        email: "rupal@velankanigroup.com",
      },
    ];
   
    // prod
    await client.send({
      from: sender,
      to: recipients,
      template_uuid: "a22a1b87-800b-4cab-9a0c-81a71cea22f3",
      template_variables: {
        "subject": "Contact Form filled by user!",
        "user_name": "Admin",
        "name": profile.name,
        "email_id": profile.email,
        "message": profile.message,
      },
    });
  };
  
  export const sendEmail = (options: EmailOptions) => {
    const { profile, subject, linkUrl } = options;
  
    switch (subject) {
      case "verification":
        return sendEmailVerificationLink(profile, linkUrl!);
    }
  };