'use client'

import Link from 'next/link'

const ProjectFooter = () => {
    return (
        <section className="py-32 bg-zinc-950 border-t border-white/5">
            <div className="container mx-auto px-4 text-center">
                <span className="text-white/20 uppercase tracking-widest text-xs mb-6 block font-medium"> Ready to start a project? </span>
                <h2 className="text-5xl md:text-8xl font-medium tracking-tight text-white mb-16 leading-tight">
                    Let&lsquo;s create <br />
                    <span className="italic font-serif text-gray-light group-hover:text-white transition-colors">impact</span> together.
                </h2>
                <div className="col-center-center md:row-center-center gap-6">
                    <Link href="/profile"
                        className="px-8 py-4 rounded-full border border-white/10 text-white font-bold hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-widest">
                        Back to All Work
                    </Link>
                    <Link href="/contact-me"
                        className="px-8 py-4 rounded-full bg-red text-white hover:bg-red transition-all duration-300 text-sm uppercase tracking-widest font-bold shadow-lg shadow-red/30">
                        Get in Touch
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ProjectFooter
