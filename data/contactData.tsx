import { Mail, Github, Linkedin, MapPin, FileText } from 'lucide-react';

export const contactData = {
    email: "id.mohamed.dev@gmail.com",
    phone: "+10 686 92087",
    cv: "https://drive.google.com/file/d/1dIpfEKa4eM7y5Vcu045WKRQqCHvTgCgQ/view?usp=sharing",
    github: "https://github.com/MohamedHikall",
    linkedin: "https://www.linkedin.com/in/mohamed-hikal-6927ab27b/",
};

export const socialLinks = [
    { id: 1, name: 'Github', icon: Github, href: contactData.github, label: 'MohamedHikall' },
    { id: 2, name: 'Linkedin', icon: Linkedin, href: contactData.linkedin, label: 'MohamedHikal' },
    { id: 3, name: 'Email', icon: Mail, href: `mailto:${contactData.email}`, label: contactData.email },
    { id: 4, name: 'cv', icon: FileText, href: 'https://drive.google.com/file/d/1dIpfEKa4eM7y5Vcu045WKRQqCHvTgCgQ/view?usp=sharing', label: "Download CV" },
];