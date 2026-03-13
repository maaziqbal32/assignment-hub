import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, PenTool, Search, ClipboardList, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: PenTool, title: "Assignment Writing", desc: "Professional writing for business, marketing, IT, nursing, and more." },
  { icon: BookOpen, title: "Dissertation Writing", desc: "Full dissertation support from topic selection to final writing." },
  { icon: FileText, title: "Essay Writing", desc: "High-quality essays with proper research and referencing styles." },
  { icon: Search, title: "Research Proposals", desc: "Professional proposals for undergraduate and postgraduate students." },
  { icon: ClipboardList, title: "Case Study Analysis", desc: "Detailed analysis using frameworks and critical evaluation." },
  { icon: CheckCircle, title: "Proofreading & Editing", desc: "Improve grammar, clarity, and academic quality." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const ServicesOverview = () => (
  <section className="section-padding bg-background">
    <div className="container-tight">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Services</span>
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mt-2">Academic Writing Services</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Comprehensive academic support tailored to international university standards.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group glass-card rounded-xl p-6 hover:border-accent/30 hover:shadow-xl transition-shadow cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <service.icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-serif text-foreground mb-2">{service.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
            <Link to="/services" className="text-sm text-accent font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
              Learn More <ArrowRight className="h-3 w-3" />
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-12"
      >
        <Button variant="gold" size="lg" asChild>
          <Link to="/services">View All Services</Link>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default ServicesOverview;
