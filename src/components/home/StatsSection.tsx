import { useCountUp } from "@/hooks/useCountUp";
import { motion } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Assignments Completed" },
  { value: 200, suffix: "+", label: "International Students" },
  { value: 70, suffix: "+", label: "Average Grade Achieved" },
  { value: 24, suffix: "/7", label: "Academic Support" },
];

const StatItem = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-serif gradient-text mb-2">
        {count}{suffix}
      </p>
      <p className="text-sm text-muted-foreground font-medium">{label}</p>
    </div>
  );
};

const StatsSection = () => (
  <section className="section-padding bg-background relative">
    <div className="container-tight">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-2xl p-8 md:p-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default StatsSection;
