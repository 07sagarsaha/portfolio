// filepath: /E:/web dev/portfolio/lib/email.ts
import emailjs from '@emailjs/browser';

export const sendEmail = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );
    return response;
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw error;
  }
}