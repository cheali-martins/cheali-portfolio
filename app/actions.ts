"use server"

import { z } from "zod"

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
})

export type ContactFormState = {
  success?: boolean
  message?: string
  errors?: {
    name?: string[]
    email?: string[]
    message?: string[]
  }
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Extract form data
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  }

  // Validate form data
  const validatedFields = contactFormSchema.safeParse(rawFormData)

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name, email, message } = validatedFields.data

  try {
    // Here you would typically send the email using a service like:
    // - Resend (recommended for Next.js)
    // - SendGrid
    // - Nodemailer
    // - AWS SES
    // - Mailgun

    // For demo purposes, we'll simulate sending an email
    console.log("Contact form submission:", { name, email, message })

    // Simulate potential email service error (uncomment to test error handling)
    // if (Math.random() > 0.8) {
    //   throw new Error('Email service temporarily unavailable')
    // }

    // In a real implementation, you might do something like:
    /*
    await resend.emails.send({
      from: 'contact@yourwebsite.com',
      to: 'your-email@example.com',
      subject: `New contact form submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })
    */

    return {
      success: true,
      message: `Thank you ${name}! Your message has been sent successfully. I'll get back to you soon.`,
    }
  } catch (error) {
    console.error("Failed to send email:", error)
    return {
      success: false,
      message: "Sorry, there was an error sending your message. Please try again later or contact me directly.",
    }
  }
}
