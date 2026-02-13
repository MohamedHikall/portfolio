import { FeaturesType } from "@/types/featuresType";
import { CheckCircle2, Eye, Search } from "lucide-react";

export const features: FeaturesType[] = [
    {
        id: 1,
        title: "SEO Friendly",
        description: "Structured data and semantic HTML to rank higher on search engines.",
        icon: <Search />
    },
    {
        id: 2,
        title: "Accessibility",
        description: "Ensuring your digital product is usable by everyone, including people with disabilities.",
        icon: <Eye />
    },
    {
        id: 3,
        title: "Pixel Perfect",
        description: "Extreme attention to detail ensures the final product matches the design exactly.",
        icon: <CheckCircle2 />
    }
];