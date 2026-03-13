import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/1234567890?text=Hi%2C%20I%20need%20help%20with%20my%20assignment"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3.5 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
    aria-label="Contact via WhatsApp"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1, type: "spring", bounce: 0.4 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <MessageCircle className="h-5 w-5" />
    <span className="hidden sm:inline text-sm font-semibold">Chat with us</span>
  </motion.a>
);

export default WhatsAppButton;
