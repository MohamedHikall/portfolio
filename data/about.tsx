import { JourneyItem, PhilosophyItem, FAQItem, SkillCategory } from "@/types/about";
import { Code, Zap, Layout, Cpu, Globe, Terminal, Layers, ShieldCheck, Palette, GitBranch, Component } from "lucide-react";

export const journeyData: JourneyItem[] = [
    {
        year: "The Beginning",
        title: "Web Fundamentals",
        description: "Started the journey by diving deep into HTML5 and CSS3, learning how to structure content and style it with precision. Mastered the art of layouts before moving to logic."
    },
    {
        year: "The Logic Leap",
        title: "JavaScript & Interactivity",
        description: "Transitioned into programming with JavaScript (ES6+). Focused on DOM manipulation, asynchronous operations, and building interactive components that breathe life into static pages."
    },
    {
        year: "The Next.js Leap",
        title: "Next.js & Strategic Development",
        description: "Embraced the power of Next.js to build SEO-friendly and high-performance applications. I now focus on mastering the App Router, Server Actions, and optimizing the user experience through efficient state management and clean, modular architecture."
    },
    {
        year: "Current Stage",
        title: "Building & Refining Project-Driven Mastery",
        description: "Currently dedicated to building full-scale applications independently. I focus on implementing complex features like dynamic routing and state management, ensuring every project follows the best practices of clean code and performance."
    }
];

export const skillCategories: SkillCategory[] = [
    {
        category: "Core Stack",
        skills: [
            { name: "Next.js", icon: <Terminal className="text-white" /> },
            { name: "React.js", icon: <Cpu className="text-cyan-400" /> },
            { name: "TypeScript", icon: <ShieldCheck className="text-blue-600" /> },
            { name: "JavaScript", icon: <Code className="text-yellow-400" /> },
        ]
    },
    {
        category: "Styling & Motion",
        skills: [
            { name: "Tailwind CSS", icon: <Layers className="text-sky-400" /> },
            { name: "shadcn/ui", icon: <Component className="text-white" /> },
            { name: "Framer Motion", icon: <Zap className="text-purple-500" /> },
            { name: "CSS3 / Sass", icon: <Palette className="text-blue-500" /> },
        ]
    },
    {
        category: "Tools & Others",
        skills: [
            { name: "Git", icon: <GitBranch className="text-red-500" /> },
            { name: "Figma", icon: <Layout className="text-pink-500" /> },
            { name: "NPM / Yarn", icon: <Globe className="text-red-400" /> },
        ]
    }
];

export const philosophyData: PhilosophyItem[] = [
    {
        title: "Clean Code",
        description: "I write code that is not just functional, but readable and maintainable. I believe code is written for humans first, and machines second.",
        icon: <Code className="w-6 h-6" />
    },
    {
        title: "Performance First",
        description: "A beautiful site is useless if it's slow. I optimize every asset and line of code to achieve near-perfect lighthouse scores.",
        icon: <Zap className="w-6 h-6" />
    },
    {
        title: "Responsive by Default",
        description: "Every pixel is accounted for across all devices. I ensure a seamless experience from the smallest phone to the largest ultra-wide monitor.",
        icon: <Layout className="w-6 h-6" />
    }
];

export const faqData: FAQItem[] = [
    {
        question: "Do you have a degree in Computer Science?",
        answer: "I am a self-taught developer. I believe the true proof of expertise lies in the code I write and the products I build. My 'degree' is my portfolio and my commitment to continuous learning."
    },
    {
        question: "How do you keep up with the fast-paced web industry?",
        answer: "I focus on mastering the tools I use. By building personal projects, I make sure I understand how to apply web basics and modern frameworks like Next.js effectively. For me, the best way to learn is to solve the practical challenges that come up while coding."
    },
    {
        question: "Can you work effectively within a team?",
        answer: "Absolutely. I use industry-standard tools like Git for version control and follow best practices in modular coding, making my work easy for others to understand and collaborate on."
    }
];
