import SignUpButton from "../onboarding/SignUp";
import SignInButton from "../SignInButton";
import { useEffect, useRef } from "react";

interface UnicornStudioType {
    isInitialized?: boolean;
    init?: () => void;
}

declare global {
    interface Window {
        UnicornStudio: UnicornStudioType;
    }
}

const Hero = () => {
    const unicornRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!window.UnicornStudio) {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.20/dist/unicornStudio.umd.js";
            script.onload = () => {
                if (!window.UnicornStudio.isInitialized) {
                    window.UnicornStudio.init?.();
                    window.UnicornStudio.isInitialized = true;
                }
            };
            (document.head || document.body).appendChild(script);
        } else if (!window.UnicornStudio.isInitialized) {
            window.UnicornStudio.init?.();
            window.UnicornStudio.isInitialized = true;
        }
    }, []);

    return (
        <section id="#Hero">
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-20 md:shadow-xl">
                {/* Black background layer */}
                <div className="absolute inset-0 w-full h-full bg-black z-0" />
                {/* UnicornStudio background */}
                <div
                    ref={unicornRef}
                    data-us-project="HsVxq4R61GjYM7Iniym2"
                    className="absolute inset-0 w-full h-full z-0"
                />
                <div className="flex justify-center relative my-20 z-10">
                    <div className="max-w-4xl w-full flex flex-col items-center justify-center px-4 py-12 bg-black/60 rounded-2xl shadow-2xl">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white mb-6 drop-shadow-lg">
                            Unleash Web3 with <br />
                            <span className="text-white">Arrakas AI</span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed mb-8 px-4 sm:px-0 text-center drop-shadow">
                            Arrakas AI is your ultimate Web3 super app — simplifying on-chain interactions with seamless abstraction. From DeFi to NFTs, manage everything in one intuitive, powerful platform.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
                            <SignInButton />
                            <SignUpButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;