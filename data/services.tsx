import { ServicesType } from "@/types/servicesType";
import { Layers, Layout, MousePointer2, Smartphone, Zap } from "lucide-react";

export const services: ServicesType[] = [
    {
        id: "01",
        title: "Responsive Web Design",
        description: "Transforming Figma/Adobe XD designs into clean, pixel-perfect code that works flawlessly across mobile, tablet, and desktop screens.",
        tags: ["Figma to Code", "Mobile-First", "Fluid Layouts"],
        icon: <Layout />
    },
    {
        id: "02",
        title: "Performance Optimization",
        description: "Lightning-fast loading speeds for better SEO and user retention. I optimize assets, code, and delivery for peak performance.",
        tags: ["Core Web Vitals", "Speed", "SEO Friendly"],
        icon: <Zap />
    },
    {
        id: "03",
        title: "Single Page Applications (SPA)",
        description: "Building smooth, reactive, and highly interactive web applications using the power of React.js and Next.js.",
        tags: ["React", "Next.js", "State Management"],
        icon: <Smartphone />
    },
    {
        id: "04",
        title: "Creative UI/UX Implementation",
        description: "Bringing designs to life with smooth animations (Framer Motion) and micro-interactions that make your site feel 'alive'.",
        tags: ["Framer Motion", "Animations", "Interactivity"],
        icon: <MousePointer2 />
    },
    {
        id: "05",
        title: "Clean Code & Maintenance",
        description: "Writing scalable, well-documented, and modular code that is easy to maintain and grow as your business expands.",
        tags: ["Scalable", "Documanted", "Best Practices"],
        icon: <Layers />
    }
];