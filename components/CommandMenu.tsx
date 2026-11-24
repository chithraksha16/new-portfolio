
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

import {
  Search,
  X,
  Home,
  User,
  Code2,
  BriefcaseBusiness,
  FolderKanban,
  WrenchOff,
  GraduationCap,
  Mail,
  ArrowUpRight,
  Check,
} from "lucide-react";

import {
  FaLinkedin,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";

import { FaSquareXTwitter } from "react-icons/fa6";

// Menu Items
const menuItems = [
  {
    label: "Portfolio",
    href: "/",
    icon: Home,
    group: "Menu",
    keywords: ["home", "main", "portfolio"],
  },
  {
    label: "Services",
    href: "/services",
    icon: WrenchOff,
    group: "Menu",
    keywords: [
      "services",
      "web development",
      "website development",
      "frontend",
      "backend",
      "full stack",
      "UI UX design",
      "web design",
      "development",
      "solutions",
      "freelancing",
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Mail,
    group: "Menu",
    keywords: [
      "contact",
      "get in touch",
      "email",
      "message",
      "connect",
      "hire me",
      "work together",
      "collaboration",
      "inquiry",
      "business",
      "project discussion",
    ],
  },
];

// Portfolio Sections
const portfolioItems = [
  {
    label: "About",
    href: "/#about",
    icon: User,
    keywords: ["profile", "introduction", "me"],
  },
  {
    label: "Tech Stack",
    href: "/#skills",
    icon: Code2,
    keywords: ["skills", "technologies", "tools"],
  },
  {
    label: "Experience",
    href: "/#experience",
    icon: BriefcaseBusiness,
    keywords: ["work", "internship", "career"],
  },
  {
    label: "Projects",
    href: "/#projects",
    icon: FolderKanban,
    keywords: ["work", "portfolio", "development"],
  },
  {
    label: "Education",
    href: "/#education",
    icon: GraduationCap,
    keywords: ["school", "college", "degree"],
  },
];

// Social Links
const socialItems = [
  {
    label: "LinkedIn",
    handle: "chithraksha",
    href: "https://linkedin.com/in/chithraksha",
    icon: FaLinkedin,
    keywords: ["linkedin", "professional", "network"],
  },
  {
    label: "GitHub",
    handle: "chithraksha16",
    href: "https://github.com/chithraksha16",
    icon: FaGithub,
    keywords: ["github", "repositories", "code"],
  },
  {
    label: "X (Twitter)",
    handle: "chithraksha_",
    href: "https://x.com/chithraksha_",
    icon: FaSquareXTwitter,
    keywords: ["twitter", "x", "social"],
  },
  {
    label: "Discord",
    handle: "chithraksha_16",
    copy: true,
    icon: FaDiscord,
    keywords: ["discord", "username", "chat"],
  },
];

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const router = useRouter();

  // Keyboard Shortcut
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key.toLowerCase() === "k" &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Navigate
  const navigate = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  // Copy Discord Username
  const copyDiscord = async () => {
    try {
      await navigator.clipboard.writeText("chithraksha_16");

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      console.error("Unable to copy Discord username");
    }
  };

  // Handle Social Links
  const handleSocialClick = (item: (typeof socialItems)[number]) => {
    if (item.copy) {
      copyDiscord();
      return;
    }

    if (item.href) {
      window.open(item.href, "_blank", "noopener,noreferrer");
      setOpen(false);
    }
  };

  return (
    <>
      {/* Search Trigger */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-2 text-muted-foreground transition-colors hover:bg-muted"
        aria-label="Open search"
      >
        <Search size={17} />

        <span className="hidden text-sm sm:inline">
          Search
        </span>

        <kbd className="hidden rounded border bg-background px-1.5 py-0.5 text-xs sm:inline">
          Ctrl K
        </kbd>
      </button>

      {/* Command Dialog */}
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        
      >
        {/* Search Input */}
        <div className="relative">
          <CommandInput
            placeholder="Type a command or search..."
            className="h-14 border-0 text-sm"
          />

          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-sm p-1 text-muted-foreground transition-colors hover:bg-muted"
            aria-label="Close search"
          >
            <X size={17} />
          </button>
        </div>

        <CommandList className="max-h-[420px] min-h-[250px] border-t px-2 py-3">
          <CommandEmpty className="py-10 text-center text-sm text-muted-foreground">
            No results found.
          </CommandEmpty>

          {/* Main Menu */}
          <CommandGroup heading="Menu">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <CommandItem
                  key={item.href}
                  value={item.label}
                  keywords={item.keywords}
                  onSelect={() => navigate(item.href)}
                  className="flex h-11 cursor-pointer items-center gap-3 rounded-lg px-3"
                >
                  <Icon className="size-[18px] text-muted-foreground" />

                  <span>{item.label}</span>

                  {item.href === "/" && (
                    <span className="ml-auto text-xs text-muted-foreground">
                      Home
                    </span>
                  )}
                </CommandItem>
              );
            })}
          </CommandGroup>

          <CommandSeparator className="my-3" />

          {/* Portfolio Sections */}
          <CommandGroup heading="Portfolio">
            {portfolioItems.map((item) => {
              const Icon = item.icon;

              return (
                <CommandItem
                  key={item.href}
                  value={item.label}
                  keywords={item.keywords}
                  onSelect={() => navigate(item.href)}
                  className="flex h-11 cursor-pointer items-center gap-3 rounded-lg px-3"
                >
                  <Icon className="size-[18px] text-muted-foreground" />

                  <span>{item.label}</span>
                </CommandItem>
              );
            })}
          </CommandGroup>

          <CommandSeparator className="my-3" />

          {/* Social Links */}
          <CommandGroup heading="Social Links">
            {socialItems.map((item) => {
              const Icon = item.icon;

              return (
                <CommandItem
                  key={item.label}
                  value={item.label}
                  keywords={item.keywords}
                  onSelect={() => handleSocialClick(item)}
                  className="flex  h-11 cursor-pointer items-center gap-3 rounded-lg px-3"
                >
                  <Icon className="size-[18px] text-muted-foreground" />

                  <span>{item.label}</span>

                  {item.copy ? (
                    <span className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
                      {copied ? (
                        <>
                          <Check className="size-3 text-green-500" />
                          Copied!
                        </>
                      ) : (
                        "Copy username"
                      )}
                    </span>
                  ) : (
                    <ArrowUpRight className="ml-auto size-4 text-muted-foreground" />
                  )}
                </CommandItem>
              );
            })}
          </CommandGroup>
        </CommandList>

        {/* Footer */}
        <div className="flex items-center justify-between border-t bg-muted/30 px-4 py-3 text-xs text-muted-foreground">
          <span className="font-semibold tracking-wide">
            Your Portfolio
          </span>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              Go to Page
              <kbd className="rounded border bg-background px-1.5 py-1">
                ↵
              </kbd>
            </span>

            <span className="flex items-center gap-1.5">
              Exit
              <kbd className="rounded border bg-background px-1.5 py-1">
                Esc
              </kbd>
            </span>
          </div>
        </div>
      </CommandDialog>
    </>
  );
}
