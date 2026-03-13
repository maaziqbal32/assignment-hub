import { ClipboardList, DollarSign, PenTool, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: ClipboardList, step: "01", title: "Submit Requirements", desc: "Share your assignment details, deadline, and instructions." },
  { icon: DollarSign, step: "02", title: "Receive a Quote", desc: "Get a competitive price based on your requirements." },
  { icon: PenTool, step: "03", title: "Writer Starts Working", desc: "A professional academic writer begins your assignment." },
  { icon: CheckCircle, step: "04", title: "Receive Your Work", desc: "Get your completed assignment before the deadline." },
];

const HowItWorksSection = () => (
  <section className="section-padding bg-background">
    <div className="container-tight">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">Process</span>
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mt-2">How It Works</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative text-center group"
          >
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-accent/30 to-transparent" />
            )}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors"
            >
              <s.icon className="h-8 w-8 text-accent" />
            </motion.div>
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Step {s.step}</span>
            <h3 className="font-serif text-lg text-foreground mt-1 mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
