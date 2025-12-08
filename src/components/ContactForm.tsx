import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    problem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      zipCode: "",
      problem: "",
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(832) 736-9561",
      href: "tel:+18327369561",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@texasmasterplumber.com",
      href: "mailto:info@texasmasterplumber.com",
    },
    {
      icon: MapPin,
      title: "Service Area",
      content: "League City, Houston, Pearland, Friendswood, and surrounding areas",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Fri: 7AM - 6PM | 24/7 Emergency",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact info */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
              Get In Touch
            </span>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Contact Texas Master Plumber
            </h2>
            <p className="mb-10 text-lg text-muted-foreground leading-relaxed">
              Looking for a reliable plumber in Houston? We're just a call away.
              Get in touch for a free estimate on any plumbing service.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-start gap-5 group">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg">
                    <info.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">{info.title}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="mt-12 p-6 rounded-2xl bg-muted/50 border border-border/50">
              <h4 className="font-bold text-foreground mb-4">Why Contact Us?</h4>
              <ul className="space-y-3">
                {[
                  "Free estimates with no obligation",
                  "Response within 1 hour for emergencies",
                  "Upfront pricing before work begins",
                  "Licensed & insured professionals",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <Card className="border-border/60 shadow-xl">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-bold">Request a Free Estimate</CardTitle>
              <CardDescription className="text-base">
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="font-medium">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="font-medium">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-medium">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-medium">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="address" className="font-medium">Street Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode" className="font-medium">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="problem" className="font-medium">
                    What kind of plumbing problem are you having? *
                  </Label>
                  <Textarea
                    id="problem"
                    name="problem"
                    rows={5}
                    value={formData.problem}
                    onChange={handleChange}
                    placeholder="Examples: Toilet running, garbage disposal leaking, no hot water..."
                    required
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="xl"
                  variant="accent"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
