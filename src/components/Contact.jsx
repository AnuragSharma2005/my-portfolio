import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  // Show toast if redirected after form submission
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('submitted') === 'true') {
      toast.success('Email sent successfully!');
      // Clean the URL so ?submitted=true doesn’t stay
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  return (
    <section id="contact" className="py-20 bg-[#F0E0D0]">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-heading mb-10" style={{ color: '#4B2E2E' }}>
            Contact
          </h2>

          <div className="max-w-2xl mx-auto">
            <form
              action="https://formsubmit.co/anuragwork2005@gmail.com"
              method="POST"
              className="space-y-6"
            >
              {/* Required hidden inputs for FormSubmit */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_next"
                value="http://localhost:5173/contact?submitted=true"
              />

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-[#4B2E2E] mb-2">First Name</label>
                  <input
                    type="text"
                    name="First Name"
                    required
                    className="w-full bg-white text-[#4B2E2E] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B2E2E]"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-[#4B2E2E] mb-2">Last Name</label>
                  <input
                    type="text"
                    name="Last Name"
                    required
                    className="w-full bg-white text-[#4B2E2E] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B2E2E]"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-[#4B2E2E] mb-2">Email</label>
                  <input
                    type="email"
                    name="Email"
                    required
                    className="w-full bg-white text-[#4B2E2E] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B2E2E]"
                  />
                </div>
                <div className="w-1/2">
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
                className="w-full px-6 py-3 rounded-lg bg-[#4B2E2E] text-white border-2 border-[#4B2E2E] hover:bg-transparent hover:text-[#4B2E2E] transition duration-300 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* ✅ Toast container */}
      <ToastContainer position="bottom-right" theme="dark" />
    </section>
  );
};

export default Contact;
