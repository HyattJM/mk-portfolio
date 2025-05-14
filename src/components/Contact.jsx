import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const form = useRef()
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        form.current,
        "your_public_key" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text)
          setSent(true)
          form.current.reset()
        },
        (error) => {
          console.error(error.text)
          setError(true)
        }
      )
  }

  return (
    <section id='contact' className='bg-slate-900 py-20 px-6 text-white'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-4xl font-bold mb-10 text-center'>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className='space-y-6'>
          <div className='grid md:grid-cols-2 gap-6'>
            <input
              type='text'
              name='user_name'
              placeholder='Your Name'
              required
              className='w-full p-3 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500'
            />
            <input
              type='email'
              name='user_email'
              placeholder='Your Email'
              required
              className='w-full p-3 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500'
            />
          </div>
          <input
            type='text'
            name='subject'
            placeholder='Subject'
            className='w-full p-3 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500'
          />
          <textarea
            name='message'
            rows='6'
            placeholder='Your Message'
            required
            className='w-full p-3 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500'
          ></textarea>
          <button
            type='submit'
            className='bg-sky-600 hover:bg-sky-700 transition px-6 py-3 rounded text-white font-semibold'
          >
            Send Message
          </button>
        </form>

        {sent && (
          <p className='text-green-400 mt-6 text-center'>
            Message sent successfully!
          </p>
        )}
        {error && (
          <p className='text-red-500 mt-6 text-center'>
            Failed to send message. Try again later.
          </p>
        )}
      </div>
    </section>
  )
}
