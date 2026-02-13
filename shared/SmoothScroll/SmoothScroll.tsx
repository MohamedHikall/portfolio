'use client'

import ReactLenis from "lenis/react"

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {

    const lenisOpen = { duration: 1.2, lerp: 0.1, smoothWheel: true, wheelMultiplier: 2 }

    return (

        <ReactLenis root options={lenisOpen}>
            {children}
        </ReactLenis>

    )
}

export default SmoothScroll