import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, PenTool, Search, ClipboardList, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet"; // ✅ ADDED

const services = [
  {
    icon: PenTool, title: "Assignment Writing",
    desc: "Professional assignment writing support for subjects such as business, marketing, management, IT, finance, nursing, and engineering.",
    benefits: ["Subject-specific expert writers", "Proper academic formatting", "Thorough research & analysis", "Correct referencing styles"],
  },
  {
    icon: BookOpen, title: "Dissertation Writing",
    desc: "Full dissertation support including topic selection, research proposal, literature review, methodology, data analysis, and final writing.",
    benefits: ["End-to-end dissertation support", "Experienced PhD-level writers", "Primary & secondary research", "Structured methodology chapters"],
  },
  {
    icon: FileText, title: "Essay Writing",
    desc: "High-quality essays with proper research, academic tone, and correct referencing styles tailored to your university requirements.",
    benefits: ["Clear argument development", "Critical analysis & evaluation", "Multiple referencing styles", "Plagiarism-free content"],
  },
  {
    icon: Search, title: "Research Proposal Writing",
    desc: "Professional research proposals for undergraduate and postgraduate students with clear objectives and methodology.",
    benefits: ["Defined research objectives", "Literature gap identification", "Methodological framework", "Ethical considerations"],
  },
  {
    icon: ClipboardList, title: "Case Study Analysis",
    desc: "Detailed academic case study analysis using proper frameworks and critical evaluation techniques.",
    benefits: ["Industry framework application", "Critical evaluation", "Data-driven insights", "Practical recommendations"],
  },
  {
    icon: CheckCircle, title: "Proofreading & Editing",
    desc: "Editing and proofreading services to improve grammar, clarity, and academic quality of your existing work.",
    benefits: ["Grammar & syntax correction", "Academic tone improvement", "Formatting consistency", "Reference verification"],
  },
];

const ServicesPage = () => (
  <Layout>

    {/* ✅ SEO META TAGS */}
    <Helmet>
      <title>Assignment Writing Services | Essay, Dissertation & Academic Help</title>
      <meta
        name="description"
        content="Professional assignment writing services including essays, dissertations, research proposals, and case studies. Get high-quality, plagiarism-free academic help."
      />
      <meta
        name="keywords"
        content="assignment writing service, essay writing help, dissertation writing service, research proposal help, academic writing services, case study analysis"
      />
      <meta property="og:title" content="Assignment Writing Services" />
      <meta
        property="og:description"
        content="Explore our professional academic services including essays, assignments, dissertations, and more."
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
        <span className="dark:text-white text-sm font-semibold text-accent uppercase tracking-wider">What We Offer</span>
        <h1 className="text-4xl md:text-5xl text-primary-foreground mt-2 font-roboto">Our Academic Services</h1>
        <p className="text-primary-foreground/90 mt-4 max-w-2xl font-poppins">
          We provide professional assignment writing services for students worldwide. Our expert writers help you achieve top grades with high-quality, plagiarism-free academic work.
        </p>
      </motion.div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-tight space-y-16">

        {/* ✅ EXTRA SEO CONTENT (VERY IMPORTANT FOR INDEXING) */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-roboto text-foreground mb-3">
            Professional Academic Writing Services for Students
          </h2>
          <p className="text-muted-foreground font-poppins leading-relaxed">
            Our academic writing services are designed to help students succeed in their studies. Whether you need assignment writing, essay help, or full dissertation support, we provide reliable and affordable solutions. Our team ensures proper research, accurate referencing, and high-quality content tailored to university standards.
          </p>
        </div>

        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col lg:flex-row gap-8 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
          >
            <div className="flex-1">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <service.icon className="h-7 w-7 text-accent" />
              </div>
              <h2 className="text-2xl md:text-3xl font-roboto text-foreground mb-3">
                {service.title} Services
              </h2>
              <p className="text-muted-foreground mb-6 font-poppins">
                {service.desc}
              </p>
              <Button className="font-poppins" variant="gold" asChild>
                <Link to="/order">
                  Get Quote <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>

            <div className="flex-1 glass-card rounded-2xl p-6">
              <h3 className="font-semibold font-roboto text-foreground mb-4">
                Key Benefits
              </h3>
              <ul className="space-y-3 font-poppins">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  </Layout>
);

export default ServicesPage;