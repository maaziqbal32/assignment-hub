import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => (
  <section className="section-padding bg-primary relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-navy-dark to-primary" />
    <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="container-tight text-center relative"
    >
      <h2 className="text-3xl md:text-5xl font-serif text-primary-foreground mb-5">
        Ready to Score <span className="gradient-text">70+ Marks?</span>
      </h2>
      <p className="text-primary-foreground/60 mb-10 max-w-xl mx-auto text-lg">
        Submit your assignment details and get a free quote within minutes. Join thousands of successful students.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="gold" size="lg" className="glow-accent" asChild>
          <Link to="/order">
            <Sparkles className="h-4 w-4" /> Get Free Quote
          </Link>
        </Button>
        <Button variant="glass" size="lg" className="text-primary-foreground border-primary-foreground/20" asChild>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            Chat on WhatsApp <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </motion.div>
  </section>
);

export default CTASection;
