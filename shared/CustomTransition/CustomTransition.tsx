/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { HTMLMotionProps, motion } from 'framer-motion'
import React from 'react'

interface Props extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    type?: keyof typeof motion;
    className?: string;
}

const CustomTransition = ({ children, type = 'div', className = '', initial = { opacity: 0 }, animate = { opacity: 1 }, transition = { duration: 0.5 }, ...props }: Props) => {
    const MotionComponent = motion[type] as any;

    return (
        <MotionComponent
            initial={initial}
            animate={animate}
            transition={transition}
            className={className}
            {...props} >

            {children}

        </MotionComponent>


    )
}

export default CustomTransition