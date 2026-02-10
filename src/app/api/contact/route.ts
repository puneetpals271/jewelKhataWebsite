import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, phone, company, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the submission
    console.log('Contact Form Submission:', {
      name,
      email,
      phone,
      company,
      message,
      timestamp: new Date().toISOString(),
    });

    try {
      // Send confirmation email to user
      const userEmailResult = await resend.emails.send({
        from: 'JewelKhata <onboarding@resend.dev>',
        to: email,
        subject: 'We received your message - JewelKhata',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Thank You for Contacting JewelKhata</h2>
            <p>Hi ${name},</p>
            <p>We have received your message and appreciate you reaching out to us. Our team will review your inquiry and get back to you as soon as possible.</p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Your Message:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <p>Best regards,<br><strong>The JewelKhata Team</strong></p>
            <hr style="border: none; border-top: 1px solid #ddd; margin-top: 30px;">
            <p style="color: #999; font-size: 12px;">JewelKhata - Smart Jewelry Management System</p>
          </div>
        `,
      });

      if (userEmailResult.error) {
        console.error('User confirmation email error:', userEmailResult.error);
      }
    } catch (userEmailError) {
      console.error('User email exception:', userEmailError);
    }

    // Send notification email to admin
    try {
      await resend.emails.send({
        from: 'JewelKhata <onboarding@resend.dev>',
        to: 'puneetpal9162@gmail.com',
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Company:</strong> ${company || 'Not provided'}</p>
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
              <p style="color: #999; font-size: 12px; margin-top: 20px;">
                Submitted at: ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        `,
      });
    } catch (adminEmailError) {
      console.error('Admin notification email error:', adminEmailError);
    }

    return NextResponse.json(
      { message: 'Thank you! We will get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
