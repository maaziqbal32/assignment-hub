import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Calculator, ArrowRight } from "lucide-react";

const deadlineOptions = [
  { label: "24 Hours", multiplier: 2 },
  { label: "7 Days", multiplier: 1 },
  { label: "1 Month", multiplier: 1 },
];

const levelOptions = [
  { label: "Undergraduate", multiplier: 1 },
  { label: "Masters", multiplier: 1 },
  { label: "PhD / Doctoral", multiplier: 1.5 },
];

const PRICE_PER_1000_WORDS = 15;

const PriceCalculator = () => {
  const [wordCount, setWordCount] = useState(2000);
  const [deadline, setDeadline] = useState("7 Days");
  const [level, setLevel] = useState("Undergraduate");

  const deadlineMult = deadlineOptions.find((d) => d.label === deadline)?.multiplier ?? 1;
  const levelMult = levelOptions.find((l) => l.label === level)?.multiplier ?? 1;

  // $15 per 1000 words
  const basePrice = (wordCount / 1000) * PRICE_PER_1000_WORDS;
  const price = Math.round(basePrice * deadlineMult * levelMult);

  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mt-2">Estimate Your Price</h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Get an instant estimate. Final price may vary based on specific requirements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto glass-card rounded-2xl p-8 md:p-10"
        >
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-foreground">Word Count</label>
                <span className="text-sm font-bold text-accent">{wordCount.toLocaleString()} words</span>
              </div>
              <Slider
                value={[wordCount]}
                onValueChange={(v) => setWordCount(v[0])}
                min={500}
                max={15000}
                step={500}
                className="[&_[role=slider]]:bg-accent [&_[role=slider]]:border-accent [&_[data-orientation=horizontal]>.bg-primary]:bg-accent"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>500</span>
                <span>15,000</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Deadline</label>
                <Select value={deadline} onValueChange={setDeadline}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {deadlineOptions.map((d) => (
                      <SelectItem key={d.label} value={d.label}>{d.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Academic Level</label>
                <Select value={level} onValueChange={setLevel}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {levelOptions.map((l) => (
                      <SelectItem key={l.label} value={l.label}>{l.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Calculator className="h-6 w-6 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground">Estimated Price</p>
                  <p className="text-3xl font-serif gradient-text">${price}</p>
                </div>
              </div>
              <Button variant="gold" size="lg" className="glow-accent" asChild>
                <Link to="/order">
                  Get Exact Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PriceCalculator;