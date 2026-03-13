import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "Is the assignment plagiarism-free?", a: "Yes, every assignment is checked through advanced plagiarism detection tools. We guarantee 100% original content with proper citations and references." },
  { q: "Do you follow university guidelines?", a: "Absolutely. Our writers are experienced with international university standards, referencing styles (Harvard, APA, MLA, Chicago), and academic formatting requirements." },
  { q: "Can I request revisions?", a: "Yes, we offer free unlimited revisions to ensure you're completely satisfied with the work. Your satisfaction is our priority." },
  { q: "Do you support UK and Australian universities?", a: "Yes, we specialize in supporting students from UK, Australian, Canadian, and US universities. Our writers are familiar with the academic standards of these institutions." },
  { q: "Is my information confidential?", a: "100%. We maintain strict confidentiality. Your personal information and order details are never shared with any third party." },
  { q: "What subjects do you cover?", a: "We cover business, marketing, management, finance, IT, nursing, engineering, and many more. Contact us if your subject isn't listed." },
];

const FAQSection = () => (
  <section className="section-padding bg-background">
    <div className="container-tight max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">FAQ</span>
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mt-2">Frequently Asked Questions</h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <AccordionItem value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-card hover:border-accent/30 transition-colors">
              <AccordionTrigger className="text-left font-medium text-foreground hover:text-accent">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
