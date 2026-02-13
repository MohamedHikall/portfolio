import Link from 'next/link'

export interface ButtonProps {
    type?: 'button' | 'submit';
    title: string;
    variant?: 'primary' | 'outline';
    className?: string;
    onClick?: () => void;
    href?: string;
    disabled?: boolean;
}

const CustomButton = ({ type, title, variant = 'primary', className = '', onClick, href, disabled }: ButtonProps) => {

    const baseStyles = "px-8 py-3 md:px-10 md:py-4 rounded-full font-medium transition cursor-pointer duration-300 text-center row-center-center";

    const variants = {
        primary: "bg-white text-black hover:bg-gray-200 border border-transparent",
        outline: "bg-transparent text-white border border-white/20 hover:bg-white/10"
    };

    if (href) {
        return (
            <Link href={href} onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`} > {title} </Link>
        )
    }

    return (
        <button type={type} onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`} disabled={disabled} > {title} </button>
    )
}
export default CustomButton