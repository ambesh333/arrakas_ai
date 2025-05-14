import { cn } from '@/lib/utils'
import { Notebook } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

enum VaraintColor {
    orange = 'orange',
    blue = 'blue',
    green = 'green',
    red = 'red',
    white = 'white',
}

const GlowButton = ({
    children,
    variant = VaraintColor.orange,
    className,
    isSigned = false,
    isConnected = false,
    ...props
}: {
    children: React.ReactNode,
    variant?: string,
    className?: string,
    isSigned?: boolean,
    isConnected?: boolean,
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    if (isSigned && isConnected) {
        // Show Explore App button (white)
        return (
            <Link href="/chat" passHref legacyBehavior>
                <a
                    className={cn(
                        "hover:opacity-[0.95] rounded-[1.1rem] border font-extralight relative overflow-hidden after:absolute after:content-[''] after:inset-0 after:[box-shadow:0_0_15px_-1px_#ffffff90_inset] after:rounded-[1rem] before:absolute before:content-[''] before:inset-0 before:rounded-[1rem] flex items-center before:z-20 after:z-10 bg-white border-white text-black transition-all shadow-lg",
                        className
                    )}
                    style={{ minWidth: 180 }}
                >
                    <div className="flex items-center gap-2 border-r border-black/20 px-4 py-3 z-0 ">
                        <Notebook className='w-5 text-black' />
                        <p>Explore App</p>
                    </div>
                </a>
            </Link>
        );
    }
    return (
        <button
            className={cn(
                "hover:opacity-[0.90] rounded-[1.1rem] border font-extralight  relative overflow-hidden after:absolute after:content-[''] after:inset-0 after:[box-shadow:0_0_15px_-1px_#ffffff90_inset] after:rounded-[1rem] before:absolute before:content-[''] before:inset-0  before:rounded-[1rem] flex items-center before:z-20 after:z-10",
                variant === VaraintColor.orange
                    ? "[box-shadow:0_0_100px_-10px_#DE732C] before:[box-shadow:0_0_4px_-1px_#fff_inset] bg-[#DE732C]  border-[#f8d4b3]/80 "
                    : variant === VaraintColor.blue
                    ? "[box-shadow:0_0_100px_-10px_#0165FF] before:[box-shadow:0_0_7px_-1px_#d5e5ff_inset] bg-[#126fff]  border-[#9ec4ff]/90"
                    : variant === VaraintColor.green
                    ? "[box-shadow:0_0_100px_-10px_#21924c] before:[box-shadow:0_0_7px_-1px_#91e6b2_inset] bg-[#176635]  border-[#c0f1d3]/70"
                    : variant === VaraintColor.red
                    ? "[box-shadow:0_0_100px_-10px_#e11d48] before:[box-shadow:0_0_7px_-1px_#fecaca_inset] bg-[#e11d48] border-[#fecaca]/80"
                    : variant === VaraintColor.white
                    ? "[box-shadow:0_0_100px_-10px_#fff] before:[box-shadow:0_0_7px_-1px_#fff_inset] bg-white border-white text-black"
                    : '',
                className
            )}
            {...props}
        >
            <div className="flex items-center gap-2 border-r border-[#fff]/40 px-4 py-3 z-0 ">
                <Notebook className='w-5' />
                <p>{children}</p>
            </div>
        </button>
    )
}

export default GlowButton