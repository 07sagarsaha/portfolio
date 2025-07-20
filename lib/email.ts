// filepath: /E:/web dev/portfolio/lib/email.ts

export const sendEmail = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to send email');
    }

    return await response.json();
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}