import { Check, Award, Users, ThumbsUp, DollarSign } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Licensed & Certified",
    description:
      "Licensed by the Texas State Board of Plumbing Examiners with over 3x the required insurance.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Our master plumbers bring 15+ years of experience to every job, large or small.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description:
      "We stand behind our work with a 100% satisfaction guarantee on all services.",
  },
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    description:
      "No hidden fees or surprises. Get a free estimate before any work begins.",
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "5,000+", label: "Happy Customers" },
  { value: "24/7", label: "Emergency Service" },
  { value: "100%", label: "Satisfaction Rate" },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
              Why Choose Us
            </span>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Houston's Most Trusted Plumbing Professionals
            </h2>
            <p className="mb-10 text-lg text-muted-foreground leading-relaxed">
              When you choose Texas Master Plumber, you're choosing quality,
              reliability, and peace of mind. We treat every home like it's our own.
            </p>

            <div className="grid gap-8 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4 group">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg">
                    <feature.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right stats */}
          <div className="rounded-3xl bg-secondary p-10 lg:p-14 shadow-2xl">
            <h3 className="mb-10 text-2xl font-bold text-secondary-foreground">
              By The Numbers
            </h3>
            <div className="grid grid-cols-2 gap-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-5xl font-extrabold text-accent">{stat.value}</p>
                  <p className="mt-2 text-sm font-medium text-secondary-foreground/80">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-secondary-foreground/15 pt-10">
              <h4 className="mb-5 font-bold text-secondary-foreground text-lg">
                We're Proud To Offer:
              </h4>
              <ul className="space-y-4">
                {[
                  "Free estimates on all services",
                  "No service fee or trip charge",
                  "Same-day service available",
                  "Senior & military discounts",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-secondary-foreground/85"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20">
                      <Check className="h-4 w-4 text-accent" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
