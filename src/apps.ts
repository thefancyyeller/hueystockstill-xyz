export interface App {
  name: string;
  description: string;
  url: string;
  emoji: string;
  color: string; // Tailwind border/accent color class
}

// ─── Add your apps here ───────────────────────────────────────────────────────
const apps: App[] = [
  {
    name: "Truck Ticket Automation",
    description: "Upload, parse, and manage haul tickets with AI-assisted data extraction.",
    url: "https://tickets.hueystockstill.xyz",
    emoji: "🚛",
    color: "border-blue-500",
  },
  {
    name: "ChatDOT",
    description: "AI-powered chat with company deep dives, competitor insights, and market intelligence.",
    url: "https://chat.hueystockstill.xyz",
    emoji: "💬",
    color: "border-purple-500",
  },
];

export default apps;
