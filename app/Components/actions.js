"use server";

import { Resend } from 'resend';

// Get your free API key at resend.com
const resend = new Resend('re_FCsx1eAp_Jzeyk1pDd85sXkKUikZUBFrK');

export async function sendBookingEmail(formData) {
  try {
    const { name, mobile, serviceType, brand, address } = formData;

    const data = await resend.emails.send({
      from: 'Covaihome Booking <onboarding@resend.dev>',
      to: ['covaihometechbookings@gmail.com'], // Change this to your business email
      subject: `New Service Request: ${serviceType}`,
      html: `
        <h1>New Booking Received</h1>
        <p><strong>Customer Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Service Needed:</strong> ${serviceType}</p>
        <p><strong>Appliance Brand:</strong> ${brand}</p>
        <p><strong>Address:</strong> ${address}</p>
      `,
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}