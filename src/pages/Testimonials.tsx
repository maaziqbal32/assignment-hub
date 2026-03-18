import Layout from "@/components/layout/Layout";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet"; // ✅ ADDED

const testimonials = [
  { name: "Sarah M.", country: "🇬🇧 United Kingdom", grade: "72%", text: "Scored 72% in my marketing assignment. The research quality was exceptional and the writer followed all university guidelines perfectly. Highly recommended!", course: "MSc Marketing, University of Manchester" },
  { name: "James L.", country: "🇦🇺 Australia", grade: "75%", text: "Great dissertation support and delivered before deadline. The literature review was thorough and the methodology chapter was exactly what my supervisor wanted.", course: "MBA, University of Melbourne" },
  { name: "Priya K.", country: "🇬🇧 United Kingdom", grade: "68%", text: "Professional service and excellent academic writing. They understood the NHS case study requirements perfectly and provided critical analysis.", course: "BSc Nursing, King's College London" },
  { name: "David R.", country: "🇨🇦 Canada", grade: "74%", text: "Amazing research quality. The financial analysis was thorough and well-referenced. Will definitely use again for my remaining modules.", course: "MSc Finance, University of Toronto" },
  { name: "Emily W.", country: "🇺🇸 United States", grade: "71%", text: "Excellent essay writing service. The arguments were well-structured and the referencing was perfect. Helped me improve my overall GPA significantly.", course: "BA English Literature, NYU" },
  { name: "Ahmed H.", country: "🇬🇧 United Kingdom", grade: "76%", text: "Outstanding case study analysis. The use of Porter's Five Forces and SWOT analysis was exactly what the module required. Very impressed.", course: "MSc Strategic Management, LSE" },
  { name: "Lisa T.", country: "🇦🇺 Australia", grade: "73%", text: "The research proposal was so well-written that my supervisor approved it on the first attempt. Saved me weeks of revisions. Thank you!", course: "PhD Education, University of Sydney" },
  { name: "Michael C.", country: "🇨🇦 Canada", grade: "69%", text: "Good quality IT assignment with proper technical documentation and code explanations. Met all the requirements and delivered on time.", course: "BSc Computer Science, McGill University" },
];

const TestimonialsPage = () => (
  <Layout>

    {/* ✅ SEO META TAGS */}
    <Helmet>
      <title>Student Reviews & Testimonials | Assignment Hub</title>
      <meta
        name="description"
        content="Read real student reviews and testimonials from Assignment Hub clients. Discover how students in the UK, USA, Canada & Australia achieved 70+ grades with our help."
      />
      <meta
        name="keywords"
        content="assignment hub reviews, student testimonials, assignment help reviews UK, essay writing service feedback, dissertation help reviews"
      />
      <meta property="og:title" content="Assignment Hub Reviews & Testimonials" />
      <meta
        property="og:description"
        content="Explore real success stories from students who improved their grades with Assignment Hub."
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
        <span className="text-sm font-semibold text-accent uppercase tracking-wider dark:text-white">Student Reviews</span>
        <h1 className="text-4xl md:text-5xl font-roboto text-primary-foreground mt-2">Student Success Stories</h1>
        <p className="text-primary-foreground/80 mt-4 max-w-2xl">
          Read what students from top universities around the world have to say about our services and how they achieved high grades with expert academic support.
        </p>
      </motion.div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-tight">

        {/* ✅ EXTRA SEO CONTENT (IMPORTANT FOR GOOGLE) */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-roboto text-foreground mb-3">Trusted by Students Worldwide</h2>
          <p className="text-muted-foreground font-poppins leading-relaxed">
            Assignment Hub has helped thousands of students across the UK, USA, Canada, and Australia achieve their academic goals. Our professional writers deliver high-quality assignments, essays, and dissertations tailored to university standards. These testimonials reflect real experiences and the consistent results our clients achieve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-6 hover:border-accent/30 transition-all"
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 mb-4 italic leading-relaxed">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.course}</p>
                  <p className="text-xs text-muted-foreground">{t.country}</p>
                </div>
                <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1.5 rounded-full">
                  Scored {t.grade}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground font-poppins mb-4">Ready to achieve similar results?</p>
          <Button className="font-poppins" variant="gold" size="lg" asChild>
            <Link to="/order">Get Your Free Quote</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default TestimonialsPage;