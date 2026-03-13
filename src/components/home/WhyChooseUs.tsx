import { ShieldCheck, Clock, RefreshCw, Users, Lock, Award } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  { icon: ShieldCheck, title: "100% Plagiarism-Free", desc: "Every piece is checked through advanced plagiarism detection tools." },
  { icon: Clock, title: "On-Time Delivery", desc: "We guarantee delivery before your deadline, every time." },
  { icon: RefreshCw, title: "Free Revisions", desc: "Unlimited revisions until you're completely satisfied." },
  { icon: Users, title: "Expert Writers", desc: "Experienced academic writers familiar with international standards." },
  { icon: Lock, title: "100% Confidential", desc: "Your information and orders are kept strictly private." },
  { icon: Award, title: "70+ Marks Guarantee", desc: "Our work is designed to help you achieve top academic grades." },
];

const WhyChooseUs = () => (
  <section className="section-padding bg-secondary/50">
    <div className="container-tight">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">Why Choose Us</span>
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mt-2">Trusted by Students Worldwide</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex gap-4 p-5 rounded-xl hover:bg-card/80 transition-colors group"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all">
              <r.icon className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
