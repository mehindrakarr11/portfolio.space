export const PERSON = {
  name: "Rohan Mehindrakar",
  tagline:
    "CSBS Student crafting modern, AI-driven web experiences with scalable technologies.",
  bio: "I’m Rohan Mehindrakar, a Computer Science and Business Systems student at Dr. AIT, Bangalore. I specialize in building modern, responsive web applications using Next.js and cloud technologies like AWS. Passionate about AI-driven interfaces and smooth user experiences, I’m currently focused on securing internships and growing through real-world projects and freelancing.",
  location: "Bangalore, India",
  goal:
    "Looking for internships, learning opportunities, and freelancing work.",
  githubUsername: "mehindrakarr11",
} as const;

export const LINKS = {
  github: "https://github.com/mehindrakarr11",
  linkedin: "https://www.linkedin.com/in/rohan-mehindrakar/",
  instagram: "https://www.instagram.com/mahendrakarr11",
  resume: "#",
} as const;

/** Replace with your address before publishing. */
export const CONTACT_EMAIL = "your.email@example.com";

export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Skills", href: "#skills" },
  { label: "LinkedIn", href: "#linkedin" },
  { label: "Contact", href: "#contact" },
] as const;

export type SkillCategory = {
  title: string;
  items: { name: string; level: number }[];
};

export const SKILL_GROUPS: SkillCategory[] = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", level: 92 },
      { name: "CSS", level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "Next.js", level: 82 },
    ],
  },
  {
    title: "Runtime & backend",
    items: [{ name: "Node.js", level: 78 }],
  },
  {
    title: "Cloud",
    items: [{ name: "AWS (EC2, S3)", level: 72 }],
  },
  {
    title: "Tools & platforms",
    items: [
      { name: "StarUML", level: 70 },
      { name: "iOS fundamentals", level: 55 },
    ],
  },
];
