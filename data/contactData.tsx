import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

export const contactData = {
    email: "hikal1545@gmail.com",
    phone: "+10 686 92087",
    location: "Damascus, Syria",
    github: "https://github.com/mohamedhaikall",
    linkedin: "https://linkedin.com/in/mohamedhaikal",
};

export const socialLinks = [
    { id: 1, name: 'Github', icon: Github, href: contactData.github, label: 'mohamedhaikall' },
    { id: 2, name: 'Linkedin', icon: Linkedin, href: contactData.linkedin, label: 'mohamedhaikal' },
    { id: 3, name: 'Email', icon: Mail, href: `mailto:${contactData.email}`, label: contactData.email },
    { id: 4, name: 'Location', icon: MapPin, href: '#', label: contactData.location },
];