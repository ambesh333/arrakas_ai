import { cn } from '@/lib/utils';
import React, { CSSProperties } from 'react';

const dotBgColor = '#101010'; // Dark background
const dotVisibleColor = '#1a1a1a'; // A contrasting color for the dots
const dotActualSize = '2px'; // Diameter of each dot
const dotGridSpacing = '10px'; // Spacing of the grid on which dots are placed

const dottedBackgroundStyle: CSSProperties = {
    backgroundColor: dotBgColor,
    backgroundImage: `radial-gradient(${dotVisibleColor} calc(${dotActualSize} / 2), ${dotBgColor} calc(${dotActualSize} / 2))`,
    backgroundSize: `${dotGridSpacing} ${dotGridSpacing}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
};

const LightMorphWrapper = (
    {
        children,
        gardient1 = 'bg-[#86efac]',
        gradient2 = 'bg-[#f87171]',
        containerClass,
        inerContainerClass,
        blurOnGradients = 'blur-[25px]',
        switchGrad = false
    }: {
        children: React.ReactNode,
        gardient1?: string,
        gradient2?: string,
        containerClass?: string,
        inerContainerClass?: string,
        blurOnGradients?: string,
        switchGrad?: boolean
    }) => {
    return (
        <div className={cn("border h-max w-max p-1 rounded-[2rem]", containerClass)}>
            <div
                style={dottedBackgroundStyle}
                className={cn("border rounded-[1.7rem] overflow-hidden relative flex items-center justify-center group", inerContainerClass)}
            >
                <div className={cn("absolute w-full h-full z-10 pointer-events-none ", switchGrad && 'rotate-90' )}>
                    <div className={cn("opacity-75 z-10 w-[50%] h-[50%] rounded-full -bottom-[13%] absolute -left-[13%] group-hover:opacity-100 transition-opacity duration-300", gardient1, blurOnGradients)}></div>

                    <div className={cn("opacity-75 z-10 w-[50%] h-[50%] rounded-full -top-[13%] absolute -right-[13%] group-hover:opacity-100 transition-opacity duration-300", gradient2, blurOnGradients)}></div>
                </div>
                {children}
                <Noise />
            </div>
        </div>
    );
};

export default LightMorphWrapper;

const Noise = () => {
    return (
        <svg
            className="pointer-events-none absolute isolate z-50 opacity-[0.05] size-full inset-0"
            width="100%"
            height="100%"
        >
            <filter id="noise">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.9"
                    numOctaves="0.8"
                    stitchTiles="stitch"
                ></feTurbulence>
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)"></rect>
        </svg>
    );
};
