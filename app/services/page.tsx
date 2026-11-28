
"use client";

import Container from "@/components/Container";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Layers3,
  Monitor,
  Palette,
  Database,
  Zap,
  Search,
  Globe,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Full Stack Development",
    description:
      "End-to-end web application development, from intuitive frontends to scalable backend systems. I build complete digital solutions tailored to your business needs.",
    icon: Code2,
    features: [
      "Frontend Development",
      "Backend & API Development",
      "Database Integration",
      "Authentication & Security",
      "Third-party Integrations",
    ],
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
  },
  {
    number: "02",
    title: "Static Website Development",
    description:
      "Fast, responsive, and SEO-friendly websites designed to establish your online presence and showcase your brand with a professional look.",
    icon: Monitor,
    features: [
      "Business & Portfolio Websites",
      "Landing Pages",
      "Responsive Design",
      "SEO Optimization",
      "Performance Optimization",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
  },
  {
    number: "03",
    title: "Dynamic Website Development",
    description:
      "Interactive, database-driven websites with powerful functionality, allowing you to manage content, users, and business operations efficiently.",
    icon: Database,
    features: [
      "Admin Dashboards",
      "Content Management Systems",
      "User Authentication",
      "Booking & Contact Systems",
      "Database-driven Features",
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "Prisma", "REST APIs"],
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "User-centered interfaces that combine thoughtful layouts, intuitive navigation, and visual consistency to create engaging digital experiences.",
    icon: Palette,
    features: [
      "Wireframing & Prototyping",
      "Website UI Design",
      "Responsive Layouts",
      "Design Systems",
      "User Experience Improvements",
    ],
    technologies: ["Figma", "UI Design", "Prototyping", "Design Systems"],
  },
];

const approach = [
  {
    number: "01",
    title: "Discover",
    description: "Understanding your goals, requirements, and target audience.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    description: "Planning the structure and designing a clear user experience.",
    icon: Palette,
  },
  {
    number: "03",
    title: "Develop",
    description: "Building, testing, and refining your digital solution.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Deliver",
    description: "Launching your project with performance and quality in mind.",
    icon: Zap,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const page = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.15 },
      };

  return (
    <Container className="min-h-screen">
      <main className="w-full">
        {/* Header */}
        <section className="mt-3 w-full">
          <div className="flex items-center justify-between border-b border-border px-4 py-2 sm:px-5 md:px-6">
            <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Services
            </h1>

            <span className="hidden font-sans text-[11px] text-muted-foreground sm:block">
              ~/services
            </span>
          </div>
        </section>

        {/* Hero */}
        <motion.section
          className="px-4 py-8 sm:px-5 sm:py-10 md:px-6 md:py-12"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="max-w-3xl">
            <motion.p
              className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              What I can do for you
            </motion.p>

            <motion.h2
              className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              Turning ideas into
              <span className="text-muted-foreground">
                {" "}digital experiences.
              </span>
            </motion.h2>

            <motion.p
              className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              I&apos;m a Full Stack Developer and UI/UX Designer focused on
              creating modern websites and web applications that look great,
              work smoothly, and help businesses grow.
            </motion.p>
          </div>
        </motion.section>

        {/* Services */}
        <section className="px-4 pb-10 sm:px-5 md:px-6">
          <motion.div
            className="mb-5 flex items-center justify-between border-b border-border pb-3"
            {...reveal}
            variants={itemVariants}
          >
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              What I offer
            </h2>

            <span className="text-xs text-muted-foreground">
              04 Services
            </span>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-3 md:grid-cols-2"
            variants={containerVariants}
            {...reveal}
          >
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.number}
                  variants={itemVariants}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -6,
                          transition: { duration: 0.25 },
                        }
                  }
                  className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-colors duration-300 hover:border-foreground/30 sm:p-6"
                >
                  {/* Hover background glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-foreground/[0.04] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between">
                    <motion.div
                      className="flex size-10 items-center justify-center rounded-lg border border-border bg-muted/50"
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : { rotate: -8, scale: 1.1 }
                      }
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="size-5 text-foreground" />
                    </motion.div>

                    <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                      /{service.number}
                    </span>
                  </div>

                  <h3 className="relative mt-5 text-lg font-semibold tracking-tight sm:text-xl">
                    {service.title}
                  </h3>

                  <p className="relative mt-2 text-[13px] leading-6 text-muted-foreground sm:text-sm">
                    {service.description}
                  </p>

                  <div className="relative mt-5">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      What&apos;s included
                    </p>

                    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {service.features.map((feature, index) => (
                        <motion.li
                          key={feature}
                          initial={
                            shouldReduceMotion ? false : { opacity: 0, x: -8 }
                          }
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.06,
                            duration: 0.3,
                          }}
                          className="flex items-center gap-2 text-xs text-muted-foreground sm:text-[13px]"
                        >
                          <span className="size-1.5 shrink-0 rounded-full bg-foreground/60" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                    {service.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-border bg-muted/40 px-2 py-1 text-[10px] text-muted-foreground transition-colors duration-300 group-hover:border-foreground/20 sm:text-[11px]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        {/* Process */}
        <section className="px-4 py-8 sm:px-5 md:px-6">
          <motion.div
            className="mb-6 border-b border-border pb-3"
            {...reveal}
            variants={itemVariants}
          >
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              My approach
            </h2>

            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              A simple process from concept to launch.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            {...reveal}
          >
            {approach.map((step) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { y: -5, transition: { duration: 0.2 } }
                  }
                  className="group rounded-xl border border-border p-4 transition-colors duration-300 hover:border-foreground/30"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="size-5 text-muted-foreground transition-transform duration-300 group-hover:scale-110 group-hover:text-foreground" />

                    <span className="font-mono text-xs text-muted-foreground">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-4 text-sm font-semibold">{step.title}</h3>

                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* CTA */}
        <section className="px-4 py-10 sm:px-5 md:px-6">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="group relative isolate overflow-hidden rounded-xl border border-border bg-muted/30 p-6 sm:p-8"
          >
            {/* Animated background glow */}
            {!shouldReduceMotion && (
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-24 -z-10 size-72 rounded-full bg-foreground/[0.07] blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}

            <div className="relative z-10 max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Have a project in mind?
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Let&apos;s build something great together.
              </h2>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Whether you need a simple website, a complete web application,
                or a thoughtful UI design, let&apos;s discuss your idea.
              </p>

              <Link
                href="/contact"
                className="group/button mt-6 inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-all duration-300 hover:gap-3 hover:opacity-85"
              >
                Let&apos;s talk
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
              </Link>
            </div>

            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -right-8"
              animate={
                shouldReduceMotion
                  ? undefined
                  : { rotate: [0, 8, 0], y: [0, -8, 0] }
              }
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Globe className="size-48 text-muted-foreground/[0.06] sm:size-60" />
            </motion.div>
          </motion.div>
        </section>
      </main>
    </Container>
  );
};

export default page;
