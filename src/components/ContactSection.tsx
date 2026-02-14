import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { EMAIL_CONFIG } from "@/lib/emailConfig";

const ContactSection = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("CONFIG:", EMAIL_CONFIG);
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // SEND EMAIL HERE
    emailjs
      .send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: "Portfolio Contact",
        },
        {
          publicKey: EMAIL_CONFIG.PUBLIC_KEY,
        },
      )
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Your message has been sent successfully!",
        });

        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Failed to send message. Try again later.",
          variant: "destructive",
        });
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "poojachippa04@gmail.com",
      link: "mailto:poojachippa04@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/pooja-chippa",
      link: "https://linkedin.com/in/pooja-chippa-246a402a0",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/PoojaChippa",
      link: "https://github.com/PoojaChippa",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss how we can work together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card className="p-8 animate-fade-in border-0 shadow-card">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Your Name"
              />
              <Input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Your Email"
              />
              <Textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Your Message..."
                className="min-h-[150px]"
              />
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-6 animate-fade-in">
            <Card className="p-8 border-0 shadow-card">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Contact Information
              </h3>
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50"
                >
                  <item.icon className="text-secondary" size={24} />
                  <div>
                    <p className="font-semibold text-primary">{item.label}</p>
                    <p className="text-muted-foreground text-sm">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
