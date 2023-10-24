import { NextRequest, NextResponse } from "next/server"
import { render } from "@react-email/components"

import { sendEmail } from "@/utils/nodemailer"

export const POST = async (req: NextRequest, res: NextResponse) => {
    try {
    console.log("Post method email!")
    // console.log(req)
    const body = await req.json();
    const {name, email, message} = body;

    await sendEmail({
        profile: { name: body.name, email: body.email, message: body.message },
        subject: "verification",
        linkUrl: "none",
      });
    return NextResponse.json({ message: "Please check your email." });
        
    } catch (error) {
        return NextResponse.json(
            {
              error: "could not verify email, something went wrong!",
            },
            { status: 500 }
          );
        
    }
    
     
  };