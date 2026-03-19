import { ContactFormData } from '@/types';
import { motion } from 'framer-motion';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - RACE.AI</title>
        <meta
          name='description'
          content='Get in touch with RACE.AI for your retail analytics needs'
        />
      </Helmet>

      {/* Page Header */}
      <section className='hero py-16'>
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center text-white'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className='mb-3 text-4xl font-bold md:text-5xl'>Contact Us</h1>
            <p className='text-lg text-white/90'>We'd love to hear from you</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='section'>
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid gap-10 lg:grid-cols-12'>
            {/* Contact Info */}
            <motion.div
              className='lg:col-span-4'
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h3 className='mb-4'>Get In Touch</h3>

              <div className='mb-4'>
                <div className='flex items-start gap-3'>
                  <div>
                    <i className='fas fa-map-marker-alt text-3xl text-(--color-primary)'></i>
                  </div>
                  <div>
                    <h5>Office Location</h5>
                    <p className='text-(--color-typography-secondary)'>
                      MAF Carrefour
                      <br />
                      United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>

              <div className='mb-4'>
                <div className='flex items-start gap-3'>
                  <div>
                    <i className='fas fa-envelope text-3xl text-(--color-primary)'></i>
                  </div>
                  <div>
                    <h5>Email Us</h5>
                    <p className='text-(--color-typography-secondary)'>
                      <a
                        href='mailto:race@mafcarrefour.com'
                        className='text-(--color-typography-secondary) hover:text-(--color-primary)'
                      >
                        race@mafcarrefour.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className='mb-4'>
                <div className='flex items-start gap-3'>
                  <div>
                    <i className='fas fa-phone text-3xl text-(--color-primary)'></i>
                  </div>
                  <div>
                    <h5>Call Us</h5>
                    <p className='text-(--color-typography-secondary)'>
                      +971 XXX XXXX
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h5 className='mb-3'>Follow Us</h5>
                <div className='flex gap-2'>
                  <a
                    href='#'
                    className='inline-flex h-10 w-10 items-center justify-center rounded-lg border border-(--color-primary) text-(--color-primary) transition hover:bg-(--color-primary) hover:text-white'
                    aria-label='Facebook'
                  >
                    <i className='fab fa-facebook-f'></i>
                  </a>
                  <a
                    href='#'
                    className='inline-flex h-10 w-10 items-center justify-center rounded-lg border border-(--color-primary) text-(--color-primary) transition hover:bg-(--color-primary) hover:text-white'
                    aria-label='Twitter'
                  >
                    <i className='fab fa-twitter'></i>
                  </a>
                  <a
                    href='#'
                    className='inline-flex h-10 w-10 items-center justify-center rounded-lg border border-(--color-primary) text-(--color-primary) transition hover:bg-(--color-primary) hover:text-white'
                    aria-label='LinkedIn'
                  >
                    <i className='fab fa-linkedin-in'></i>
                  </a>
                  <a
                    href='#'
                    className='inline-flex h-10 w-10 items-center justify-center rounded-lg border border-(--color-primary) text-(--color-primary) transition hover:bg-(--color-primary) hover:text-white'
                    aria-label='Instagram'
                  >
                    <i className='fab fa-instagram'></i>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className='lg:col-span-8'
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className='rounded-xl border border-(--color-primary-20) bg-white p-6 shadow-sm md:p-8'>
                <h3 className='mb-4'>Send Us A Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className='grid gap-4 md:grid-cols-2'>
                    <div>
                      <label
                        htmlFor='name'
                        className='mb-2 block text-sm font-semibold text-(--color-primary)'
                      >
                        Your Name
                      </label>
                      <input
                        type='text'
                        className='w-full rounded-xl border border-(--color-primary-20) px-4 py-3 outline-none transition focus:border-(--color-primary)'
                        id='name'
                        name='name'
                        placeholder='Your Name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='email'
                        className='mb-2 block text-sm font-semibold text-(--color-primary)'
                      >
                        Your Email
                      </label>
                      <input
                        type='email'
                        className='w-full rounded-xl border border-(--color-primary-20) px-4 py-3 outline-none transition focus:border-(--color-primary)'
                        id='email'
                        name='email'
                        placeholder='Your Email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className='md:col-span-2'>
                      <label
                        htmlFor='subject'
                        className='mb-2 block text-sm font-semibold text-(--color-primary)'
                      >
                        Subject
                      </label>
                      <input
                        type='text'
                        className='w-full rounded-xl border border-(--color-primary-20) px-4 py-3 outline-none transition focus:border-(--color-primary)'
                        id='subject'
                        name='subject'
                        placeholder='Subject'
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className='md:col-span-2'>
                      <label
                        htmlFor='message'
                        className='mb-2 block text-sm font-semibold text-(--color-primary)'
                      >
                        Message
                      </label>
                      <textarea
                        className='min-h-40 w-full rounded-xl border border-(--color-primary-20) px-4 py-3 outline-none transition focus:border-(--color-primary)'
                        id='message'
                        name='message'
                        placeholder='Message'
                        style={{ height: '150px' }}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className='md:col-span-2'>
                      <button
                        type='submit'
                        className='inline-flex items-center rounded-xl bg-(--color-primary) px-6 py-3 font-semibold text-white transition hover:bg-(--color-primary-80)'
                      >
                        Send Message <i className='fas fa-paper-plane ml-2'></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
