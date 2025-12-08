import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "League City, TX",
    rating: 5,
    text: "Called Texas Master Plumber for an emergency leak on a Sunday. They arrived within an hour and fixed the problem quickly. Very professional and fair pricing!",
  },
  {
    name: "Michael Chen",
    location: "Houston, TX",
    rating: 5,
    text: "Ronnie installed a new tankless water heater for us. The work was done efficiently and he explained everything clearly. Highly recommend their services!",
  },
  {
    name: "Patricia Williams",
    location: "Pearland, TX",
    rating: 5,
    text: "Best plumber I've ever used. They fixed issues that two other plumbers couldn't figure out. Now they're the only ones I call. Truly master plumbers!",
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
            Testimonials
          </span>
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Don't just take our word for it. Here's what homeowners across Houston
            have to say about our plumbing services.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden border-border/60 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30"
            >
              <CardContent className="pt-10 pb-8 px-8">
                <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10" />
                
                {/* Stars */}
                <div className="mb-5 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="mb-8 text-foreground/85 leading-relaxed text-base">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Review platforms */}
        <div className="mt-16 text-center">
          <p className="mb-8 text-muted-foreground font-medium">
            See more reviews on these platforms:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 text-foreground">
            {["Google Reviews", "Yelp", "Angie's List"].map((platform) => (
              <div key={platform} className="flex items-center gap-3 font-semibold group cursor-pointer transition-all duration-300 hover:text-primary">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span>{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
