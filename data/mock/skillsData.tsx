import { Skills } from "@/types/skills";
import { Globe, Palette, Layers, Code, ShieldCheck, Cpu, Terminal, Zap, GitBranch } from "lucide-react";

export const skillsData: Skills[] = [
    { id: 1, name: "HTML5", icon: <Globe className="text-orange-500" /> },
    { id: 2, name: "CSS3", icon: <Palette className="text-blue-500" /> },
    { id: 3, name: "Tailwind", icon: <Layers className="text-sky-400" /> },
    { id: 4, name: "JavaScript", icon: <Code className="text-yellow-400" /> },
    { id: 5, name: "TypeScript", icon: <ShieldCheck className="text-blue-600" /> },
    { id: 6, name: "React.js", icon: <Cpu className="text-cyan-400" /> },
    { id: 7, name: "Next.js", icon: <Terminal className="text-white" /> },
    { id: 8, name: "Framer Motion", icon: <Zap className="text-purple-500" /> },
    { id: 9, name: "Git", icon: <GitBranch className="text-red-500" /> },
    { id: 10, name: "Redux", icon: <Layers className="text-purple-600" /> },
];