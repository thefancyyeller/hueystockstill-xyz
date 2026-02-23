export interface App {
  name: string;
  description: string;
  url: string;
}

// ─── Add your apps here ───────────────────────────────────────────────────────
const apps: App[] = [
  {
    name: "Truck Ticket Automation",
    description: "Upload, parse, and manage haul tickets with AI-assisted data extraction.",
    url: "https://tickets.hueystockstill.xyz",
  },
  {
    name: "ChatDOT",
    description: "AI-powered chat with company deep dives, competitor insights, and market intelligence.",
    url: "https://chat.hueystockstill.xyz",
  },
];

export default apps;
