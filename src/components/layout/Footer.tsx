import { Link } from "react-router-dom";
import { GraduationCap, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-10"
      >
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-accent-foreground" />
            </div>
            <span className="font-roboto text-lg">Assignment Hub</span>
          </div>
          <p className="dark:text-black text-sm font-poppins text-primary-foreground/50 leading-relaxed">
            Professional academic writing support for university students worldwide.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 font-roboto text-accent dark:text-black">Services</h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/50 font-poppins">
            <li><Link to="/services" className="hover:text-accent transition-colors dark:hover:text-black">Assignment Writing</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors dark:hover:text-black">Dissertation Writing</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors dark:hover:text-black">Essay Writing</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors dark:hover:text-black">Research Proposals</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors dark:hover:text-black">Proofreading</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-accent font-roboto dark:text-black">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/50 font-poppins">
            <li><Link to="/about" className="hover:text-accent transition-colors dark:hover:text-black">About Us</Link></li>
            <li><Link to="/how-it-works" className="hover:text-accent transition-colors dark:hover:text-black">How It Works</Link></li>
            <li><Link to="/testimonials" className="hover:text-accent transition-colors dark:hover:text-black">Testimonials</Link></li>
            <li><Link to="/order" className="hover:text-accent transition-colors dark:hover:text-black">Get Quote</Link></li>
          </ul>
        </div>

        <div>
  <h4 className="text-sm font-semibold mb-4 text-accent font-roboto dark:text-black">
    Contact
  </h4>

  <ul className="space-y-3 text-sm text-primary-foreground/50">

    <li className="flex items-center gap-2">
      <Mail className="h-4 w-4 text-accent dark:text-black" />

      <a
        href="mailto:support@assignmenthub.com"
        className="hover:text-accent transition-colors dark:hover:text-black"
      >
        assignmenthub.info@gmail.com
      </a>
    </li>

    <li className="flex items-center gap-2 font-poppins">
      <MessageCircle className="h-4 w-4 text-accent dark:text-black" />

      <a
        href="https://wa.me/+447347631564?text=Hello%20AssignmentHub%2C%20I%20need%20help%20with%20my%20assignment."
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-colors dark:hover:text-black"
      >
        WhatsApp Support
      </a>
    </li>

  </ul>
</div>
      </motion.div>

      <div className="dark:text-black font-poppins border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs sm:text-sm text-primary-foreground/30">
        © {new Date().getFullYear()} Assignment Hub. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
