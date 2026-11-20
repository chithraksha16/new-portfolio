
import Link from "next/link";
import Container from "@/components/Container";
import Form from "@/components/Form";

import {
  Mail,
  MapPin,
  ArrowUpRight,
  Clock,
  Phone,
  MessageCircle,
} from "lucide-react";
import {
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "chithrakshakharvi@gmail.com",
    href: "mailto:chithrakshakharvi@gmail.com",
    description: "Send me an email anytime",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+91 81052 80460",
    href: "https://wa.me/918105280460",
    description: "Available for calls and messages",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: null,
    description: "Available for remote opportunities",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "24–48 Hours",
    href: null,
    description: "Usually respond within a day",
  },
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/chithraksha16",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/chithraksha.",
    icon: FaLinkedin,
  },
];

export default function ContactPage() {
  return (
    <main className="w-full">
      <Container className="py-10">
        <div className="mx-auto max-w-4xl">

          {/* Heading */}
          <div className="mb-12 text-center sm:mb-16">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Available for opportunities
            </span>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s start a conversation.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              Have a project in mind, an opportunity to discuss, or just want
              to connect? I&apos;d love to hear from you.
            </p>
          </div>

          {/* Single Column Layout */}
          <div className="flex flex-col gap-12 sm:gap-16 ">

            {/* Contact Information */}
            <section className="px-10">
              <div className="mb-7">
                <h2 className="text-xl font-semibold sm:text-2xl">
                  Get in touch
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Feel free to reach out through any of the following channels.
                </p>
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 rounded-2xl border bg-card p-5 transition-colors hover:bg-muted/40 sm:p-6"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border bg-background">
                        <Icon className="h-5 w-5 text-foreground" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs font-medium text-muted-foreground">
                          {item.label}
                        </p>

                        {item.href ? (
                          <Link
                            href={item.href}
                            target={
                              item.href.startsWith("http") ? "_blank" : undefined
                            }
                            rel={
                              item.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="mt-1 inline-flex max-w-full items-center gap-1 break-all text-sm font-medium transition-colors hover:text-muted-foreground"
                          >
                            {item.value}
                            <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                          </Link>
                        ) : (
                          <p className="mt-1 text-sm font-medium">
                            {item.value}
                          </p>
                        )}

                        <p className="mt-1 text-xs leading-5 text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <p className="mb-4 text-sm font-medium">Find me on</p>

                <div className="flex flex-wrap gap-3">
                  {socials.map((social) => {
                    const Icon = social.icon;

                    return (
                      <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-colors hover:bg-muted"
                      >
                        <Icon className="h-4 w-4" />
                        {social.name}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Availability Card */}
              <div className="mt-8 flex items-start gap-4 rounded-2xl border bg-muted/30 p-5 sm:p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border bg-background">
                  <MessageCircle className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold">
                    Open to new opportunities
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Currently open to full-time roles, freelance projects,
                    and meaningful collaborations. Let&apos;s build something
                    great together.
                  </p>
                </div>
              </div>
            </section>
<div
            className="
              h-8
              w-full
              border-y
              border-gray-200
              text-gray-300
              dark:border-white/10
              dark:text-white/10
            "
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 8px)",
            }}
          />
            {/* Contact Form */}
            
            <section className="w-full px-10">
              <div className="mb-7">
                <h2 className="text-xl font-semibold sm:text-2xl">
                  Send me a message
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Tell me a little about what you have in mind. I&apos;ll get
                  back to you as soon as possible.
                </p>
              </div>
              
              <div className="w-full rounded-2xl border bg-card p-5 sm:p-8">
                <Form />
              </div>
            </section>

          </div>
        </div>
      </Container>
    </main>
  );
}
