import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ClipboardList, DollarSign, PenTool, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet"; // ✅ ADDED

const steps = [
  { icon: ClipboardList, step: "01", title: "Submit Your Requirements", desc: "Fill out our simple order form with your assignment details, subject, deadline, word count, and any specific instructions from your university." },
  { icon: DollarSign, step: "02", title: "Receive a Price Quote", desc: "Based on your requirements, we'll provide a competitive price quote. No hidden fees — the price you see is the price you pay." },
  { icon: PenTool, step: "03", title: "Professional Writer Starts Working", desc: "Once confirmed, we assign a subject-specific expert writer who begins researching and writing your assignment to the highest academic standards." },
  { icon: CheckCircle, step: "04", title: "Receive Completed Assignment", desc: "Your completed assignment is delivered before your deadline, fully referenced, plagiarism-checked, and ready for submission." },
];

const HowItWorksPage = () => (
  <Layout>

    {/* ✅ SEO META TAGS */}
    <Helmet>
      <title>How Assignment Hub Works | Simple 4-Step Process</title>
      <meta
        name="description"
        content="Learn how Assignment Hub works. Follow our simple 4-step process to get professional assignment help, essay writing, and dissertation support with guaranteed quality."
      />
      <meta
        name="keywords"
        content="how assignment help works, assignment writing process, essay service steps, dissertation help process, assignment hub guide"
      />
      <meta property="og:title" content="How Assignment Hub Works" />
      <meta
        property="og:description"
        content="Discover the simple process to order high-quality academic assignments and achieve top grades."
      />
    </Helmet>

    <section className="bg-primary section-padding py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/50 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container-tight relative"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-wider dark:text-white">Simple Process</span>
        <h1 className="text-4xl md:text-5xl font-roboto text-primary-foreground mt-2">How It Works</h1>
        <p className="text-primary-foreground/80 mt-4 max-w-2xl font-poppins">
          Getting academic help has never been easier. Follow our simple 4-step process to receive high-quality assignments tailored to your university requirements.
        </p>
      </motion.div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-tight max-w-3xl space-y-8">

        {/* ✅ EXTRA SEO CONTENT (VERY IMPORTANT) */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-roboto text-foreground mb-2">Easy & Reliable Assignment Help Process</h2>
          <p className="text-muted-foreground font-poppins leading-relaxed">
            At Assignment Hub, we simplify the process of getting academic assistance. Our structured approach ensures transparency, quality, and timely delivery. Whether you need help with essays, assignments, or dissertations, our step-by-step process guarantees a smooth and stress-free experience for students worldwide.
          </p>
        </div>

        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="flex gap-6 glass-card rounded-2xl p-6"
          >
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                <s.icon className="h-7 w-7 text-accent" />
              </div>
            </div>
            <div>
              <span className="text-xs font-bold font-poppins text-accent uppercase tracking-widest">Step {s.step}</span>
              <h2 className="text-xl font-poppins text-foreground mt-1 mb-2">{s.title}</h2>
              <p className="text-muted-foreground font-poppins">{s.desc}</p>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center pt-8"
        >
          <Button variant="gold" size="lg" className="glow-accent" asChild>
            <Link className="font-poppins" to="/order">
              Get Started Now <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default HowItWorksPage;