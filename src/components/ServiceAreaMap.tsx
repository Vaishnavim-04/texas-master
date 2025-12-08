import { MapPin } from "lucide-react";

const serviceAreas = [
  "League City",
  "Houston",
  "Pearland",
  "Friendswood",
  "Clear Lake",
  "Webster",
  "Pasadena",
  "Kemah",
  "Seabrook",
  "Dickinson",
  "Texas City",
  "La Marque",
];

export function ServiceAreaMap() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Service Area
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Serving the Greater Houston Area
          </h2>
          <p className="text-lg text-muted-foreground">
            We proudly provide professional plumbing services to League City and
            surrounding communities in the Houston metropolitan area.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Map placeholder */}
          <div className="aspect-video rounded-2xl bg-secondary overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221707.2543315927!2d-95.23251869999999!3d29.499868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86409ebce34d2f95%3A0x90b05f9d8f58e267!2sLeague%20City%2C%20TX!5e0!3m2!1sen!2sus!4v1702000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[30%]"
              title="Texas Master Plumber Service Area Map"
            />
          </div>

          {/* Service areas list */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-foreground">
              Cities We Serve
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 text-foreground"
                >
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm">{area}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Don't see your city listed? Give us a call — we may still be able to
              help! We're always expanding our service area to meet customer needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
