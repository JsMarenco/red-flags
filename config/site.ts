import appRoutes from "@/constans/routes/app";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "FlagScan",
  description:
    "FlagScan analyzes your WhatsApp conversations to identify potential red flags and green flags, offering insights into communication patterns and relationship dynamics.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Analyze Chat",
      href: appRoutes.chatAnalyze.router,
    },
  ],
  links: {
    github: "https://github.com/jsmarenco",
    twitter: "https://twitter.com/jsmarenco",
    portfolio: "https://jsmarenco.dev",
    linkedin: "https://linkedin.com/in/jsmarenco",
    instagram: "https://instagram.com/jsmarenco",
    coffee: "https://buymeacoffee.com/jsmarenco",
  },
};
