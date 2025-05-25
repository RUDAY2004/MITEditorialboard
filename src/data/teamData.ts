
export interface TeamMember {
  name: string;
  position: string;
  image: string;
  quote?: string;
  department?: string;
}

// Team members data
export const teamMembers: TeamMember[] = [
  {
    name: "Devanshu Pradhan",
    position: "Editor-In-Chief",
    image: "/Team/Dev.png",
    quote: "Do What excites",
    department: "Executive Board"
  },
  {
    name: "Nishit Kashyap",
    position: "Managing Editor",
    image: "/Team/Nishit.png", 
    quote: "Hello, I’m ‘What excites’",
    department: "Executive Board"
  },
  {
    name: "Anoushka Bhattacharya",
    position: "Head of Admin and HR",
    image: "/Team/Anoushka.png",
    quote: "I overthink my overthinking",
    department: "Admin Department"
  },
  {
    name: "Bhavyaa Agarwal",
    position: "Arts and Graphics Head",
    image: "/Team/Bhavya.png",
    quote: "I’d go to a party in pajamas",
    department: "Arts and Graphics"
  },
  {
    name: "Pragati Sakhuja",
    position: "Arts and Graphics Head",
    image: "/Team/Pragati.png",
    quote: "Life is tough, get a helmet",
    department: "Arts and Graphics"
  },
  {
    name: "Vaibhavi Komarraju",
    position: "Conceptual Head",
    image: "/Team/Vaibhavi.png",
    quote: "Powered by delusion and caffeine",
    department: "Conceptual Team"
  },
  {
    name: "Bhavyaa Agarwal",
    position: "Conceptual Head",
    image: "/Team/Bhavyaa.png",
    quote: "Creativity is intelligence having fun.",
    department: "Conceptual Team"
  },
  {
    name: "Diya Nisar",
    position: "Head of Content Creation",
    image: "/Team/Diya.png",
    quote: "Can we skip to the part where we all become millionaires",
    department: "Content Creation"
  },
  {
    name: "Karrunya Rajan",
    position: "Head of Content Creation",
    image: "/Team/Karrunya.png",
    quote: "Can I chatGPT this?",
    department: "Content Creation"
  },
  {
    name: "Kshitij Sohoni",
    position: "Social Media Head",
    image: "/Team/Kshitij.png",
    quote: "Work hard, nap harder",
    department: "Social Media"
  },
  {
    name: "Aditya Karigar",
    position: "Social Media Head",
    image: "/Team/Aditya.png",
    quote: "Somewhere between psychotic and iconic",
    department: "Social Media"
  },
  {
    name: "Atharv Mishra",
    position: "Head of Writing",
    image: "/Team/Atharv.png",
    quote: "imagine sisyphus happy ",
    department: "Writing"
  },
  {
    name: "Sharanya Anumula",
    position: "Head of Writing",
    image: "/Team/Sharanya.png",
    quote: "Einstein clearly never met a mudskipper. Fishes do climb trees.",
    department: "Writing"
  },
  {
    name: "Saptashwa Mondal",
    position: "Photography and Videography Head",
    image: "/Team/Saptashwa.png",
    quote: "I would like to thank Beyonce",
    department: "Photography and Videography"
  },
  {
    name: "Som Jain",
    position: "Photography and Videography Head",
    image: "/Team/Som.png",
    quote: "I support Johnsons baby",
    department: "Photography and Videography"
  },
  {
    name: "Uday Sri Kumar",
    position: "Technical Head",
    image: "/Team/Uday.png",
    quote: "Building dreams from scratch, no excuses",
    department: "Technical"
  }
];

// Group team members by department for easier rendering
export const departments = [
  "Executive Board",
  "Admin Department",
  "Arts and Graphics",
  "Conceptual Team",
  "Content Creation",
  "Social Media",
  "Writing",
  "Photography and Videography",
  "Technical"
];

// Create a grouped object of team members by department
export const teamMembersData = teamMembers.reduce<Record<string, TeamMember[]>>((acc, member) => {
  const department = member.department || "Other";
  if (!acc[department]) {
    acc[department] = [];
  }
  acc[department].push(member);
  return acc;
}, {});
