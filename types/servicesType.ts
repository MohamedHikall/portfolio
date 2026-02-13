import { ReactNode } from "react";

export type ServicesType = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    icon: ReactNode;
}