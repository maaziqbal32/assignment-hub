import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const typewriterTexts = [
  "Assignments",
  "Dissertations",
  "Essays",
  "Research Proposals",
  "Case Studies",
];

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = typewriterTexts[textIndex];
    const timeout = deleting ? 40 : 80;

    if (!deleting && charIndex === current.length) {
      setTimeout(() => setDeleting(true), 2000);
      return;
    }
    if (deleting && charIndex === 0) {
      setDeleting(false);
      setTextIndex((prev) => (prev + 1) % typewriterTexts.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (deleting ? -1 : 1));
    }, timeout);
    return () => clearTimeout(timer);
  }, [charIndex, deleting, textIndex]);

  return (
    <section className="relative bg-primary overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-primary to-navy" />
      <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-32 right-[15%] w-16 h-16 border border-accent/20 rounded-2xl rotate-12"
        animate={{ y: [-10, 10, -10], rotate: [12, -5, 12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-[30%] w-8 h-8 bg-accent/20 rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-[60%] left-[10%] w-12 h-12 border border-primary-foreground/10 rounded-xl rotate-45"
        animate={{ y: [0, 15, 0], rotate: [45, 30, 45] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, hsl(190 80% 42%) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="relative container-tight section-padding py-24 lg:py-36">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex items-center gap-1.5 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 rounded-full px-4 py-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-xs text-primary-foreground/70 ml-1">Trusted by 5,000+ students</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif text-primary-foreground leading-[1.1] mb-4"
          >
            Professional Help With Your
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mb-8"
          >
            <span className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif gradient-text leading-[1.1]">
              {typewriterTexts[textIndex].substring(0, charIndex)}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg md:text-xl text-primary-foreground/60 mb-10 max-w-xl leading-relaxed"
          >
            Expert academic writing that helps university students score 70+ marks. Serving UK, Australia, Canada & USA.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-3"
          >
            <Button variant="gold" size="lg" className="glow-accent" asChild>
              <Link to="/order">
                <Sparkles className="h-4 w-4" /> Get Free Quote
              </Link>
            </Button>
            <Button variant="gold-outline" size="lg" asChild>
              <Link to="/order">Order Now <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button variant="glass" size="lg" className="text-primary-foreground border-primary-foreground/10" asChild>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-14 flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/40"
          >
            {["100% Plagiarism-Free", "On-Time Delivery", "Free Revisions", "Confidential"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
