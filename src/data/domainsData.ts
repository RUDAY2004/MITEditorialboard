
import { LucideIcon, Code, Newspaper, Camera, Palette, Users, Lightbulb, Share2, MessageCircle } from "lucide-react";

export interface Domain {
  name: string;
  description: string;
  icon?: LucideIcon;
}

export const domains: Domain[] = [
  {
    name: "Arts & Graphics",
    description: "Creating visual identity and artwork for all editorial content and branding materials.",
    icon: Palette
  },
  {
    name: "Writing",
    description: "Crafting and refining written content for publications, articles, and features.",
    icon: Newspaper
  },
  {
    name: "Photo&Video",
    description: "Capturing moments and events across campus to tell visual stories.",
    icon: Camera
  },
  {
    name: "Technical",
    description: "Building and maintaining digital platforms and tools for the editorial team.",
    icon: Code
  },
  {
    name: "Content Creation",
    description: "Planning and developing content direction and editorial calendars.",
    icon: Lightbulb
  },
  {
    name: "Conceptual",
    description: "Connecting with campus organizations and managing events and partnerships.",
    icon: Users
  },
  {
    name: "Social Media",
    description: "Managing online presence and engagement across digital platforms.",
    icon: Share2
  },
  {
    name: "Admin&HR",
    description: "Representing the editorial board and coordinating with external stakeholders.",
    icon: MessageCircle
  },
  
];
