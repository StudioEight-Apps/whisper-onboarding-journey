import { Check } from "lucide-react";
import ProgressBar from "../ProgressBar";
import ContinueButton from "../ContinueButton";

interface ScreenProps {
  onContinue: () => void;
}

const features = [
  "Unlimited journal entries",
  "Personalized daily whispers",
  "Lock screen + home screen widgets",
  "Voice customization",
  "Full history + insights",
];

const Screen11Paywall = ({ onContinue }: ScreenProps) => {
  return (
    <div className="h-full flex flex-col bg-background relative">
      <ProgressBar progress={100} />

      <div className="flex-1 screen-padding pt-12 pb-40 overflow-y-auto">
        <div className="animate-fade-in">
          <h1 className="text-headline-lg mb-8">Unlock the full Whisper experience</h1>

          {/* Features List */}
          <div className="space-y-4 mb-10">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-body text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {/* Pricing Card */}
          <div className="card-whisper text-center">
            <p className="text-muted-foreground text-sm mb-1">Start with</p>
            <p className="text-headline text-2xl mb-1">3 days free</p>
            <p className="text-muted-foreground text-sm">then $6.99/week</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pb-8 px-6 bg-gradient-to-t from-background via-background to-transparent pt-6">
        <button 
          onClick={onContinue}
          className="btn-primary mb-3"
        >
          Start Free Trial
        </button>
        <p className="text-center text-muted-foreground text-xs">
          Cancel anytime. No commitment.
        </p>
      </div>
    </div>
  );
};

export default Screen11Paywall;
