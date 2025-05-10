import GlowButton from "@/components/ui/glowButton";
import { useRef } from "react";
import OnboardingModal, { OnboardingModalRef } from "./OnboardingModal";

export default function SignUpButton() {
  const modalRef = useRef<OnboardingModalRef>(null);

  return (
    <>
      <div
        onClick={() => modalRef.current?.open()}
        style={{ display: "inline-block", marginLeft: 12, minWidth: 220 }}
      >
        <GlowButton variant="orange" className="w-full px-10 text-lg">
          Sign Up
        </GlowButton>
      </div>
      <OnboardingModal ref={modalRef} />
    </>
  );
}
