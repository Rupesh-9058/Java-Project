
import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, Phone } from 'lucide-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`http://localhost:3000/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit message');

      toast.success("Message sent successfully!");
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error('Error submitting message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 shadow-2xl hover:scale-105 transition-all duration-300">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Contact Us</h2>
            <p className="text-cyan-100">We'd love to hear from you</p>
          </div>

          {submitted ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
              <p className="text-emerald-100">Thanks for reaching out. We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                {['name', 'email', 'phone', 'subject'].map((field, idx) => {
                  const icons = [<User />, <Mail />, <Phone />, <MessageSquare />];
                  const placeholders = ['Your Name', 'Your Email', 'Phone Number', 'Subject'];
                  const types = ['text', 'email', 'tel', 'text'];
                  return (
                    <div key={field} className="relative group">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-300">
                        {icons[idx]}
                      </span>
                      <input
                        type={types[idx]}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        placeholder={placeholders[idx]}
                        required={field !== 'phone'}
                        className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-cyan-200 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all hover:bg-white/20 focus:scale-105"
                      />
                    </div>
                  );
                })}

                {/* Message */}
                <div className="relative group">
                  <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-cyan-300" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows="4"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-cyan-200 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all hover:bg-white/20 resize-none focus:scale-105"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] hover:from-[#0EA5E9] hover:to-[#2563EB] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
