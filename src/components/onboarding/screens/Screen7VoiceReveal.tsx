import ProgressBar from "../ProgressBar";
import ContinueButton from "../ContinueButton";

interface ScreenProps {
  onContinue: () => void;
}

const Screen7VoiceReveal = ({ onContinue }: ScreenProps) => {
  return (
    <div className="h-full flex flex-col bg-background relative">
      <ProgressBar progress={64} />

      {/* Centered content system */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-24">
        {/* Text Content - Positioned closer to widget */}
        <div className="text-center animate-fade-in mb-8">
          {/* Headline */}
          <h1 className="font-serif text-[28px] leading-[1.2] font-medium text-foreground mb-3">
            We're shaping how your journal responds.
          </h1>
          
          {/* Subheading */}
          <p className="text-muted-foreground text-[15px]">
            Based on how you reflect, write, and respond.
          </p>
        </div>

        {/* Widget Card */}
        <div 
          className="rounded-2xl px-6 py-5 max-w-[300px] w-full animate-fade-in"
          style={{ 
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)"
          }}
        >
          {/* Whisper label - Now at top */}
          <p 
            className="text-[10px] tracking-[0.15em] uppercase text-center mb-3"
            style={{ color: "#C4A574" }}
          >
            Whisper
          </p>
          <p 
            className="text-[15px] leading-[1.6] italic text-center"
            style={{ color: "#2C2C2C" }}
          >
            "A year from now, everything you're stressing about won't mean a thing."
          </p>
        </div>
      </div>

      <ContinueButton onClick={onContinue} />
    </div>
  );
};

export default Screen7VoiceReveal;
