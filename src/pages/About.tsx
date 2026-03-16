import Layout from "@/components/layout/Layout";
import { Award, Users, BookOpen, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 5000, label: "Students Helped", suffix: "+" },
  { value: 70, label: "Average Grade", suffix: "+" },
  { value: 98, label: "Satisfaction Rate", suffix: "%" },
  { value: 4, label: "Countries Served", suffix: "" },
];

const StatCard = ({ value, label, suffix }: { value: number; label: string; suffix: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center glass-card rounded-2xl p-6">
      <p className="text-3xl gradient-text font-poppins">{count}{suffix}</p>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
};

const sections = [
  { icon: Globe, title: "International Experience", text: "Assignment Hub has extensive experience working with international universities, particularly in the United Kingdom, Australia, Canada, and the United States. We understand the academic expectations, grading criteria, and research standards of these institutions." },
  { icon: Users, title: "Expert Academic Writers", text: "Our team consists of experienced academic writers with advanced degrees in their respective fields. They are familiar with international university standards, referencing styles (Harvard, APA, MLA, Chicago), and research methodologies." },
  { icon: Award, title: "Commitment to Quality", text: "Quality is at the core of everything we do. Every piece of work undergoes rigorous quality checks, plagiarism detection, and academic review before delivery." },
  { icon: BookOpen, title: "Proven Success", text: "We have a proven track record of helping students achieve 70+ marks in their assignments and dissertations. Our success is measured by the success of our students." },
];

const AboutPage = () => (
  <Layout>
    <section className="bg-primary section-padding py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/50 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container-tight relative"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-wider dark:text-white">About Us</span>
        <h1 className="text-4xl md:text-5xl font-roboto text-primary-foreground mt-2">About Assignment Hub</h1>
        <p className="text-primary-foreground/80 mt-4 max-w-2xl font-poppins">
          Your trusted academic support partner helping students achieve excellence.
        </p>
      </motion.div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-tight">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 font-poppins">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <s.icon className="h-5 w-5 text-accent" />
                </div>
                <h2 className="text-xl font-roboto text-foreground">{s.title}</h2>
              </div>
              <p className="text-muted-foreground font-poppins leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
