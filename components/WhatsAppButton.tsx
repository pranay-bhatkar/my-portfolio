'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const phoneNumber = '918669727126'; 
  const message = encodeURIComponent("Hi! I'm interested in working with you.");
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition">
        <FaWhatsapp size={22} />
      </div>
    </motion.a>
  );
}
