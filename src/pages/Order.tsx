import Layout from "@/components/layout/Layout";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ShieldCheck, Clock, RefreshCw, Lock } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

// Mapping for readable country names
const countryMap: Record<string, string> = {
  uk: "United Kingdom",
  australia: "Australia",
  canada: "Canada",
  usa: "United States",
  other: "Other",
};

// Mapping for readable subject names
const subjectMap: Record<string, string> = {
  business: "Business",
  marketing: "Marketing",
  management: "Management",
  finance: "Finance",
  it: "IT / Computer Science",
  nursing: "Nursing",
  engineering: "Engineering",
  law: "Law",
  other: "Other",
};

const OrderPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    subject: "",
    deadline: "",
    wordCount: "",
    details: "",
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.country ||
      !formData.subject ||
      !formData.deadline
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Get the selected file name (if any)
    const file = fileInputRef.current?.files?.[0];
    const fileName = file ? file.name : "No file attached";

    // Construct the message to send via WhatsApp
    const message = `
*New Assignment Quote Request*
*Name:* ${formData.name}
*Email:* ${formData.email}
*Country:* ${countryMap[formData.country] || formData.country}
*Subject:* ${subjectMap[formData.subject] || formData.subject}
*Deadline:* ${formData.deadline}
*Word Count:* ${formData.wordCount || "Not specified"}
*Details:* ${formData.details || "Not provided"}
*File:* ${fileName}
    `.trim();

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp number (convert to international format: 03054206105 -> 923054206105)
    const phoneNumber = "923054206105";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");

    // Optional success toast
    toast.success("Redirecting to WhatsApp with your details...");

    // Reset form (optional, you may choose not to reset to allow corrections)
    // setFormData({ name: "", email: "", country: "", subject: "", deadline: "", wordCount: "", details: "" });
    // if (fileInputRef.current) fileInputRef.current.value = ""; // Reset file input
  };

  return (
    <Layout>
      <section className="bg-primary section-padding py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/50 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container-tight relative"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Get Started
          </span>
          <h1 className="text-4xl md:text-5xl font-roboto text-primary-foreground mt-2">
            Get Your Free Quote
          </h1>
          <p className="text-primary-foreground/80 mt-4 max-w-2xl font-poppins">
            Submit your assignment details and receive a competitive quote
            within 2 hours.
          </p>
        </motion.div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-2xl p-6 md:p-8 space-y-6 font-poppins"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Country *</Label>
                    <Select
                      value={formData.country}
                      onValueChange={(v) =>
                        setFormData({ ...formData, country: v })
                      }
                    >
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="australia">Australia</SelectItem>
                        <SelectItem value="canada">Canada</SelectItem>
                        <SelectItem value="usa">United States</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Subject *</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={(v) =>
                        setFormData({ ...formData, subject: v })
                      }
                    >
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="management">Management</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="it">
                          IT / Computer Science
                        </SelectItem>
                        <SelectItem value="nursing">Nursing</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="law">Law</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="deadline">Deadline *</Label>
                    <Input
                      id="deadline"
                      type="date"
                      value={formData.deadline}
                      onChange={(e) =>
                        setFormData({ ...formData, deadline: e.target.value })
                      }
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="wordCount">Word Count</Label>
                    <Input
                      id="wordCount"
                      type="number"
                      placeholder="e.g., 2000"
                      value={formData.wordCount}
                      onChange={(e) =>
                        setFormData({ ...formData, wordCount: e.target.value })
                      }
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details">Assignment Details</Label>
                  <Textarea
                    id="details"
                    placeholder="Describe your assignment requirements..."
                    rows={5}
                    value={formData.details}
                    onChange={(e) =>
                      setFormData({ ...formData, details: e.target.value })
                    }
                    className="rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file">Upload File (Optional)</Label>
                  <Input
                    id="file"
                    type="file"
                    ref={fileInputRef}
                    className="cursor-pointer rounded-xl"
                  />
                </div>

                <Button
                  variant="gold"
                  size="lg"
                  type="submit"
                  className="w-full glow-accent"
                >
                  Submit & Get Free Quote
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-roboto text-lg text-foreground mb-4">
                  Our Guarantees
                </h3>
                <ul className="space-y-4">
                  {[
                    { icon: ShieldCheck, text: "100% Plagiarism-Free Work" },
                    { icon: Clock, text: "On-Time Delivery Guarantee" },
                    { icon: RefreshCw, text: "Free Unlimited Revisions" },
                    { icon: Lock, text: "Confidential & Secure" },
                  ].map((g) => (
                    <li
                      key={g.text}
                      className="flex font-poppins items-center gap-3 text-sm text-muted-foreground"
                    >
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <g.icon className="h-4 w-4 text-accent" />
                      </div>
                      {g.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 text-center">
                <p className="font-roboto text-lg text-foreground mb-2">
                  Need Urgent Help?
                </p>
                <p className="text-sm text-muted-foreground font-roboto mb-4">
                  Chat with us on WhatsApp for instant support
                </p>
                <Button variant="gold" className="w-full font-poppins" asChild>
                  <a
                    href="https://wa.me/923054206105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OrderPage;
