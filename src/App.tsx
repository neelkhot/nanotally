import logoImage from './img/logo.png';
import nameImage from './img/nanotallywhilte-removebg-preview.png';

const features = [
  {
    title: 'TallyPrime Sales & Licensing',
    description:
      'Authorized sales and licensing of Tally products with expert guidance for businesses of all sizes.',
  },
  {
    title: 'Tally Installation & Setup',
    description:
      'Complete deployment and configuration assistance with seamless migration and custom workflows.',
  },
  {
    title: 'Tally AMC & Support',
    description:
      'On-site and remote technical support, regular maintenance, and proactive system monitoring.',
  },
  {
    title: 'GST & Compliance Solutions',
    description:
      'GST-ready accounting, compliance assistance, and audit-ready reporting with precision.',
  },
  {
    title: 'Tally Customization',
    description:
      'Customized tools and modules tailored to your specific business requirements and workflows.',
  },
  {
    title: 'Training & Consultation',
    description:
      'Hands-on user training and business process consulting to maximize your Tally investment.',
  },
];

const testimonials = [
  {
    quote:
      'Nano Tally provided seamless Tally implementation and continues to support our operations without any interruption.',
    name: 'Medical Store Owner',
    role: 'Healthcare Retail',
  },
  {
    quote:
      'Their expertise in Tally customization and GST compliance has streamlined our entire accounting process.',
    name: 'Business Manager',
    role: 'Trading Firm',
  },
  {
    quote:
      'Fast, reliable support from the Nano Tally team has reduced our system downtime significantly.',
    name: 'Finance Head',
    role: 'SME Manufacturing',
  },
  {
    quote:
      'The training and support provided by Nano Tally made our entire team confident with TallyPrime.',
    name: 'Operations Director',
    role: 'Educational Institution',
  },
];


export default function App() {
  return (
    <div className="min-h-screen w-full bg-black relative text-white">
      {/* Midnight Mist */}
      <div
        className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 100%, rgba(70, 85, 110, 0.5) 0%, transparent 60%),
            radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
            radial-gradient(circle at 50% 100%, rgba(181, 184, 208, 0.3) 0%, transparent 80%)
          `,
        }}
      />

      <header className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img src={logoImage} alt="Nano Tally logo" className="brand-logo" />
            <div className="flex flex-col">
              <img src={nameImage} alt="Nano Tally wordmark" className="brand-name" />
              <p className="text-sm text-white/80">Tally Channel Partner & ERP Solutions</p>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-5 text-sm font-medium text-white/90">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#process" className="transition hover:text-white">
              Process
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 bg-white/6 px-4 py-2 text-white transition hover:bg-white/10"
            >
              Get Started
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-12 relative z-10">
        <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 xl:gap-24">
          <div className="space-y-8">
            <div className="max-w-xl space-y-4">
              <p className="text-sm uppercase tracking-[0.32em] text-white/80">3-Star Certified Tally Partner since 2008</p>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Tally ERP solutions built with <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent font-extrabold">expertise</span>, compliance, and trusted support.
              </h1>
              <p className="text-lg leading-8 text-white/80 sm:text-xl">
                Nano Tally brings 18+ years of Tally expertise to help businesses streamline accounting, inventory, GST compliance, and operations through TallyPrime and customized solutions across India.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/20 backdrop-blur border border-white/10"
              >
                Contact us today
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-6 py-3 text-base font-semibold text-white transition hover:border-white/20"
              >
                Explore our services
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-white/5 p-5 shadow-soft ring-1 ring-white/10 backdrop-blur">
                <p className="text-3xl font-semibold text-white">18+</p>
                <p className="mt-3 text-sm text-white/70">Years of Experience</p>
              </div>
              <div className="rounded-3xl bg-white/5 p-5 shadow-soft ring-1 ring-white/10 backdrop-blur">
                <p className="text-3xl font-semibold text-white">300+</p>
                <p className="mt-3 text-sm text-white/70">Happy Clients</p>
              </div>
              <div className="rounded-3xl bg-white/5 p-5 shadow-soft ring-1 ring-white/10 backdrop-blur">
                <p className="text-3xl font-semibold text-white">3-Star</p>
                <p className="mt-3 text-sm text-white/70">Certified Partner</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft ring-1 ring-white/10 backdrop-blur sm:p-10">
            <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle,_rgba(0,0,0,0.04),_transparent_60%)]" />
            <div className="relative space-y-8">
              <div className="flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-white backdrop-blur">
                <div className="flex items-center gap-4">
                  <img src={logoImage} alt="Nano Tally logo" className="brand-logo" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-white/80">Since 2008</p>
                    <p className="text-xl font-semibold text-white">Nano Tally</p>
                  </div>
                </div>
                <p className="text-sm leading-6 text-white/70">A trusted Tally Channel Partner delivering reliable solutions, business automation tools, and dedicated customer support across India.</p>
              </div>

              <div className="space-y-3">
                <span className="inline-flex rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">Tally Solutions & Support</span>
                <h2 className="text-3xl font-semibold text-white">Sales, implementation, customization, and ongoing Tally support.</h2>
                <p className="text-white/80">Our team handles your Tally environment end to end so your business can focus on growth without software complications.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur">
                  <p className="text-sm uppercase tracking-[0.24em] text-white/80">Implementation Services</p>
                  <p className="mt-3 text-sm text-white/80">TallyPrime deployment, customization, and configuration tailored to your business needs.</p>
                </div>
                <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur">
                  <p className="text-sm uppercase tracking-[0.24em] text-white/80">On-Site & Remote Support</p>
                  <p className="mt-3 text-sm text-white/80">GST compliance, AMC support, and expert consultation available throughout India.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mt-24 space-y-10">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-white/80">What we offer</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Comprehensive Tally ERP services for modern business growth.</h2>
            <p className="mt-4 text-white/70">From TallyPrime licensing and implementation to customization and ongoing support, we deliver solutions that are stable, secure, and built around your success.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:border-white/20">
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="mt-24 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft ring-1 ring-white/10 backdrop-blur">
            <h2 className="text-3xl font-semibold text-white">A trusted partnership with clarity at every step.</h2>
            <p className="mt-4 text-white/80">We combine disciplined Tally implementation practices with responsive, professional support so your team stays productive from day one.</p>
            <ol className="mt-8 space-y-6 text-white/80">
              {['Discovery & Assessment', 'Implementation & Training', 'Ongoing Support & AMC'].map((step, index) => (
                <li key={step} className="flex gap-4 text-sm leading-7">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">{index + 1}</span>
                  <div>
                    <strong className="block text-white">{step}</strong>
                    {index === 0 && 'Analyze your business processes and design a Tally solution tailored to your needs.'}
                    {index === 1 && 'Deploy TallyPrime with customizations, configurations, and comprehensive team training.'}
                    {index === 2 && 'Provide regular updates, maintenance, compliance support, and responsive technical assistance.'}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft ring-1 ring-white/10 backdrop-blur sm:p-10">
            <div className="rounded-3xl bg-white/5 p-6 text-white ring-1 ring-white/10 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-white/80">Why Nano Tally</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Professional support that's dependable and responsive.</h3>
              <p className="mt-3 text-white/80">We manage the Tally technical details while your team focuses on operations, growth, and business development.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur">
                <p className="text-xl font-semibold text-white">Fast Support</p>
                <p className="mt-3 text-sm text-white/80">Quick response during business hours for critical issues and operational needs.</p>
              </div>
              <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur">
                <p className="text-xl font-semibold text-white">Expert Team</p>
                <p className="mt-3 text-sm text-white/80">Certified professionals with 18+ years of Tally expertise across multiple industries.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="mt-24 space-y-10">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-white/80">What our clients say</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Trusted by businesses that depend on Tally for smooth operations.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 shadow-soft ring-1 ring-white/10 backdrop-blur transition hover:-translate-y-1">
                <p className="text-lg leading-8 text-white/80">“{item.quote}”</p>
                <div className="mt-6">
                  <p className="text-base font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-white/70">{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-24 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-soft ring-1 ring-white/10 backdrop-blur sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/80">Get in touch</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Let's discuss your Tally and ERP requirements today.</h2>
              <p className="mt-4 text-white/80">Contact our team in Sangli to learn how Nano Tally can help your business streamline operations, compliance, and growth.</p>
            </div>
            <div className="space-y-4 rounded-[1.75rem] bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur">
              <div className="space-y-3 border-b border-white/10 pb-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">📞 Phone</p>
                <div className="space-y-2">
                  <a href="tel:+918087288402" className="block text-base text-purple-400 hover:text-purple-300 transition">
                    +91 8087288402
                  </a>
                </div>
              </div>

              <div className="space-y-3 border-b border-white/10 pb-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">✉️ Email</p>
                <a href="mailto:blackwings_uk@yahoo.com" className="block text-base text-purple-400 hover:text-purple-300 transition">
                  blackwings_uk@yahoo.com
                </a>
              </div>

              <div className="space-y-3 border-b border-white/10 pb-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">💬 WhatsApp</p>
                <a href="https://wa.me/919370771728" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512">
                    <path
                      d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </a>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">📍 Location</p>
                <p className="text-sm text-white/80">Sangli, Maharashtra, India</p>
                <p className="text-sm text-white/70">Mon-Fri, 9 AM - 6 PM IST</p>
              </div>

              <div className="grid gap-3 pt-4 sm:grid-cols-3">
                <a href="tel:+918087288402" className="inline-flex items-center justify-center rounded-full border border-purple-400/50 bg-purple-400/10 px-4 py-2 text-sm font-semibold text-purple-400 transition hover:bg-purple-400/20">
                  📞 Call
                </a>
                <a href="mailto:blackwings_uk@yahoo.com" className="inline-flex items-center justify-center rounded-full border border-blue-400/50 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-400 transition hover:bg-blue-400/20">
                  ✉️ Email
                </a>
                <a href="https://wa.me/919370771728" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-green-500/80 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-500">
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
