/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: any) {
  try {

   const data = await resend.emails.send({
     from: "Portfolio <onboarding@resend.dev>",
     to: "hikal1545@gmail.com",
     subject: `🚀 مشروع جديد: ${formData.service}`,
     html: `
        <div style="background-color: #f4f4f7; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px;">
            
            <div style="background-color: #000; padding: 20px; text-align: center;">
              <img src="https://your-domain.com/logo.png" alt="Logo" style="width: 120px; height: auto;" />
            </div>

            <div style="padding: 30px;">
              <h2 style="color: #1a1a1a; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Project Request 📬</h2>
              
              <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr>
                  <td style="padding: 10px 0; color: #777; width: 30%;">Client:</td>
                  <td style="padding: 10px 0; color: #1a1a1a; font-weight: bold;">${formData.name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #777;">Service:</td>
                  <td style="padding: 10px 0; color: #1a1a1a;">${formData.service}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #777;">Budget:</td>
                  <td style="padding: 10px 0; color: #2ecc71; font-weight: bold;">${formData.budget}</td>
                </tr>
                 <tr>
                  <td style="padding: 10px 0; color: #777;">Current Website:</td>
                  <td style="padding: 10px 0; color: #3498db;">${formData.website || "N/A"}</td>
                </tr>
              </table>

              <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px; border-right: 4px solid #000;">
                <p style="margin: 0; color: #555; font-style: italic;">"${formData.message}"</p>
              </div>

              <div style="margin-top: 30px; text-align: center;">
                <a href="mailto:${formData.email}" style="background-color: #000; color: #fff; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reply to Client</a>
              </div>
            </div>

            <div style="background-color: #f4f4f7; padding: 15px; text-align: center; color: #999; font-size: 12px;">
              This email was sent automatically from my Portfolio system.
            </div>
          </div>
        </div>
      `,
   });
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}
