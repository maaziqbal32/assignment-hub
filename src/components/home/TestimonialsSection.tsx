import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const testimonials = [
  { name: "Sarah M.", country: "🇬🇧 UK", grade: "72%", text: "Scored 72% in my marketing assignment. Highly recommended!", course: "MSc Marketing" },
  { name: "James L.", country: "🇦🇺 Australia", grade: "75%", text: "Great dissertation support and delivered before deadline.", course: "MBA" },
  { name: "Priya K.", country: "🇬🇧 UK", grade: "68%", text: "Professional service and excellent academic writing.", course: "BSc Nursing" },
  { name: "David R.", country: "🇨🇦 Canada", grade: "74%", text: "Amazing research quality. Will definitely use again.", course: "MSc Finance" },
  { name: "Emily W.", country: "🇺🇸 USA", grade: "71%", text: "Well-structured essays with perfect referencing. Helped improve my GPA.", course: "BA English Literature" },
  { name: "Ahmed H.", country: "🇬🇧 UK", grade: "76%", text: "Outstanding case study analysis. Very impressed with the quality.", course: "MSc Strategic Management" },
];

const TestimonialsSection = () => {
  const [page, setPage] = useState(0);
  const perPage = 2;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/50 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="container-tight relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-poppins text-primary-foreground mt-2">Student Success Stories</h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {visible.map((t) => (
                <div
                  key={t.name}
                  className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-7"
                >
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-primary-foreground/80 mb-5 italic text-lg leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-primary-foreground text-sm">{t.name}</p>
                      <p className="text-xs text-primary-foreground/50">{t.course} · {t.country}</p>
                    </div>
                    <span className="bg-accent/20 text-accent text-xs font-bold px-3 py-1.5 rounded-full">
                      Scored {t.grade}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)}
              className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === page ? "bg-accent w-6" : "bg-primary-foreground/20"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setPage((p) => (p + 1) % totalPages)}
              className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
