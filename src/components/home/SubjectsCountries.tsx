import { motion } from "framer-motion";

const subjects = ["Business", "Marketing", "Management", "Finance", "IT", "Nursing", "Engineering", "Law", "Psychology", "Education"];
const countries = [
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "United States", flag: "🇺🇸" },
];

const SubjectsCountries = () => (
  <section className="section-padding bg-secondary/50">
    <div className="container-tight">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Expertise</span>
          <h2 className="text-2xl md:text-3xl font-poppins text-foreground mt-2 mb-6">Subjects We Cover</h2>
          <div className="flex flex-wrap gap-2">
            {subjects.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="font-poppins bg-card border border-border text-foreground text-sm px-4 py-2.5 rounded-xl cursor-default hover:border-accent/40 hover:shadow-md transition-all"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
              initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Global Reach</span>
          <h2 className="text-2xl md:text-3xl font-poppins text-foreground mt-2 mb-6">Countries We Serve</h2>
          <div className="grid grid-cols-2 gap-3">
            {countries.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="glass-card rounded-xl p-5 text-center hover:border-accent/30 transition-all cursor-default"
              >
                <span className="text-3xl mb-2 block">{c.flag}</span>
                <p className="font-semibold text-foreground text-sm">{c.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SubjectsCountries;
