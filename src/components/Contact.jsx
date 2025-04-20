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
    <section id="contact" className="py-20 bg-[#F0E0D0]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center text-[#4B2E2E] mb-8">
            Contact <span className="text-[#AF8362]">Me</span>
          </h2>

          <div className="w-full max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label className="block text-[#4B2E2E] mb-2">First Name</label>
                  <input
                    type="text"
                    name="First Name"
                    required
                    className="w-full bg-white text-[#4B2E2E] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B2E2E]"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-[#4B2E2E] mb-2">Last Name</label>
                  <input
                    type="text"
                    name="Last Name"
                    required
                    className="w-full bg-white text-[#4B2E2E] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B2E2E]"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label className="block text-[#4B2E2E] mb-2">Email</label>
                  <input
                    type="email"
                    name="Email"
                    required
                    className="w-full bg-white text-[#4B2E2E] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B2E2E]"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-[#4B2E2E] mb-2">Phone</label>
                  <input
                    type="tel"
                    name="Phone"
                    required
                    className="w-full bg-white text-[#4B2E2E] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B2E2E]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#4B2E2E] mb-2">Message</label>
                <textarea
                  name="Message"
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
                    : 'bg-[#4B2E2E] text-white border-[#4B2E2E] hover:bg-transparent hover:text-[#4B2E2E]'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      <ToastContainer position="bottom-right" theme="dark" />
    </section>
  );
};

export default Contact;
