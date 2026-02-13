'use client'

import { cn } from "@/utils/cn";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface DropdownWidgetProps {
    label: string;
    placeholder: string;
    options: string[];
    required?: boolean;
    value?: string;
    error?: string;
    onSelect: (value: string) => void;
}

const DropdownWidget = ({ label, placeholder, options, required, value, error, onSelect }: DropdownWidgetProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const selectOption = (option: string) => {
        onSelect(option);
        setIsOpen(false);
    };

    const displayValue = (value && value !== "") ? value : placeholder;

    return (
        <div className="col flex-1 relative" ref={dropdownRef}>

            <label className='text-sm md:text-xl mb-2 font-medium'> {label} {required && <span className="text-red">*</span>} </label>

            <div
                onClick={() => setIsOpen(!isOpen)}
                className='w-full px-3 py-4 md:px-6 border border-gray rounded-xl md:rounded-2xl bg-transparent row-between-center cursor-pointer transition-all' >
                <span className={cn("transition-colors", displayValue ? "text-gray-light" : "text-white")}> {displayValue} </span>
                <ChevronDown size={20} className={cn("transition-transform duration-300 text-gray-light", isOpen ? "rotate-180 text-white" : "")} />
            </div>

            {isOpen && (
                <div className="absolute top-[105%] left-0 w-full bg-gray border border-gray-light/20 p-2 rounded-xl md:rounded-2xl z-50 shadow-2xl">
                    <div className="max-h-60 overflow-y-auto">
                        {options.map((option) => (
                            <div
                                key={option}
                                onClick={(e) => { e.stopPropagation(); selectOption(option); }}
                                className={cn(
                                    "py-3 px-4 rounded-xl cursor-pointer transition-all mb-1 last:mb-0",
                                    value === option ? "bg-white text-black" : "text-white hover:bg-white/10"
                                )} >
                                {option}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {error && <p className='text-red text-sm mt-1'>{error}</p>}
        </div>
    );
};

export default DropdownWidget;