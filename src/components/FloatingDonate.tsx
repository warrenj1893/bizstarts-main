// FILE: src/components/FloatingDonate.tsx
import { Heart } from "lucide-react";
import { DONATE_URL } from "@/lib/constants";

const FloatingDonate = () => (
  <a
    href={DONATE_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-[100] flex items-center gap-2 rounded-full bg-teal px-5 py-3 font-barlow font-bold text-primary-foreground shadow-xl animate-pulse-glow hover:bg-teal-dark hover:-translate-y-0.5 transition-all duration-200"
    aria-label="Donate to BizStarts"
  >
    <Heart size={18} fill="currentColor" />
    Donate
  </a>
);

export default FloatingDonate;
