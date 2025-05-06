import OnboardingTabs from "./Tabs";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Onboarding() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button onClick={() => setOpen(true)}>Sign Up</Button>
            {open && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-2xl z-50">
                    <div className="absolute inset-0" onClick={() => setOpen(false)} />
                    <div className="relative z-10 w-[70vw] h-[80vh] flex items-center justify-center rounded-2xl shadow-2xl bg-[#18181b]/80 backdrop-blur-xl">
                        <OnboardingTabs />
                    </div>
                </div>
            )}
        </>
    )
}
