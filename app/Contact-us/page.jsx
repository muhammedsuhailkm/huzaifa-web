"use client";
import React from 'react';
import { MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const service = e.target.service.options[e.target.service.selectedIndex].text;
    const message = e.target.message.value;

    const whatsappMessage = `*New Inquiry from Website*\n\n*Name:* ${firstName} ${lastName}\n*Email:* ${email}\n*Service:* ${service}\n\n*Message:*\n${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/97451977707?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 md:py-12 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-[#0f172a] z-0">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-6">
        
        <div className="text-center mb-10">
          <p className="text-[#D4AF37] font-bold tracking-wider text-xs uppercase mb-2 drop-shadow-md">Contact Us</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
            Get in Touch with Us
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
          
          {/* Left Side: Contact Information */}
          <div className="w-full lg:w-[40%] bg-[#0f172a] p-8 md:p-10 text-white relative overflow-hidden">
            {/* Abstract Background Accents inside the card */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#D4AF37] rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#005a8c] rounded-full opacity-30 blur-3xl"></div>
            
            <h3 className="text-2xl font-medium mb-8 relative z-10 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
              Contact Details
            </h3>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 p-2 rounded-full flex-shrink-0">
                  <MapPinIcon className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-white mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>Our Address</h4>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">
                    Doha Al Jadeed, Building No:71,<br />
                    5th floor, Office 09,<br />
                    DOHA, QATAR
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 p-2 rounded-full flex-shrink-0">
                  <PhoneIcon className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-white mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>Contact Info</h4>
                  <p className="text-gray-300 text-sm mb-1 font-light"><span className="text-gray-400">Mobile:</span> +974 51977707</p>
                  <p className="text-gray-300 text-sm font-light"><span className="text-gray-400">Email:</span> huzaifabrothers.qar@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 p-2 rounded-full flex-shrink-0">
                  <ClockIcon className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-white mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>Hours of Operation</h4>
                  <p className="text-gray-300 text-sm mb-1 font-light"><span className="text-gray-400">Sat-Thu:</span> 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-300 text-sm font-light"><span className="text-gray-400">Friday:</span> Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-[60%] p-8 md:p-10 bg-white relative">
            <h3 className="text-2xl font-medium text-[#0f172a] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Send us a Message
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-600 mb-1">First Name</label>
                  <input type="text" id="firstName" className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-600 mb-1">Last Name</label>
                  <input type="text" id="lastName" className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
                <input type="email" id="email" className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-600 mb-1">Select Service</label>
                <select id="service" className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all text-gray-700 appearance-none">
                  <option value="">-- Select Service --</option>
                  <option value="construction">Construction</option>
                  <option value="trading">Trading</option>
                  <option value="facility">Cleaning and Facility Management</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">Write Message</label>
                <textarea id="message" rows="4" className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#b59228] text-white text-sm font-semibold tracking-wide py-2.5 px-8 rounded-lg transition-all duration-300 shadow-md shadow-[#D4AF37]/30 hover:-translate-y-0.5">
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
