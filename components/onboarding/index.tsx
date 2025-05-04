import OnboardingTabs from "./Tabs";
export default function Onboarding() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-2xl z-50">
            <div className="w-[70vw] h-[80vh] flex items-center justify-center rounded-2xl shadow-2xl bg-[#18181b]/80 backdrop-blur-xl">
                <OnboardingTabs />
            </div>
        </div>
    )
}
