import { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const res = await fetch('https://formsubmit.co/anuragwork2005@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        toast.success('Email sent successfully!');
        e.target.reset();
      } else {
        toast.error('Failed to send email. Please try again.');
      }
    } catch (error) {
      toast.error('Something went wrong!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-800/20 to-indigo-800/20 px-4 sm:px-6">
      <div className="w-full flex justify-center">
        <div className="bg-[#111827] rounded-3xl shadow-2xl px-6 sm:px-10 py-12 w-full max-w-[800px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
           
            <h2 className="text-5xl font-bold text-center mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label className="block text-white mb-2">First Name</label>
                  <input
                    type="text"
                    name="First Name"
                    placeholder='Your First name'
                    required
                    className="w-full bg-white text-[#4B2E2E] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B2E2E]"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-white mb-2">Last Name</label>
                  <input
                    type="text"
                    name="Last Name"
                    placeholder='Your Last Name'
                    required
                    className="w-full bg-white text-[#4B2E2E] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B2E2E]"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    name="Email"
                    placeholder='Your Email'
                    required
                    className="w-full bg-white text-[#4B2E2E] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B2E2E]"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-white mb-2">Phone</label>
                  <input
                    type="tel"
                    name="Phone"
                    placeholder='Your Contact Number'
                    required
                    className="w-full bg-white text-[#4B2E2E] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B2E2E]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-2">Message</label>
                <textarea
                  name="Message"
                  placeholder='Your Message'
                  rows="5"
                  required
                  className="w-full bg-white text-[#4B2E2E] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B2E2E]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-lg font-semibold border-2 transition duration-300 ease-in-out ${
                  isSubmitting
                    ? 'bg-white text-[#4B2E2E] cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-300 text-white border-transparent hover:brightness-110'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

            </form>
          </motion.div>
        </div>
      </div>
      <ToastContainer position="bottom-right" theme="dark" />
    </section>
  );
};

export default Contact;
