import { cn } from '@/utils/cn';
import React, { forwardRef } from 'react'

interface CustomFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label: string;
    placeholder: string;
    required?: boolean;
    type: string;
    className?: string;
    error?: string;
}

const CustomField = forwardRef<HTMLInputElement | HTMLTextAreaElement, CustomFieldProps>(
    ({ label, placeholder, required, type, className, error, ...props }, ref) => {

        const sharedClasses = cn(
            'w-full ps-3 py-4 pe-8 md:px-6 outline-none border border-gray rounded-xl md:rounded-2xl transition-all focus:border-white/50 bg-transparent',
            className
        );

        return (

            <div className="col flex-1">
                {label && (
                    <label className='text-sm md:text-xl mb-2 font-medium'>
                        {label} {required && <span className='text-red'>*</span>}
                    </label>
                )}
                {type === 'textarea' ? (
                    <textarea ref={ref as React.Ref<HTMLTextAreaElement>} placeholder={placeholder} className={sharedClasses} {...props} />
                ) : (
                    <input ref={ref as React.Ref<HTMLInputElement>} type={type} placeholder={placeholder} className={sharedClasses} {...props} />
                )}
                {error && <p className='text-red text-sm mt-1'>{error}</p>}
            </div>

        );
    }
);

CustomField.displayName = "CustomField";

export default CustomField