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
      <div className="flex-1 flex flex-col items-center px-6 pb-24">
        {/* Text Content - Positioned higher */}
        <div className="text-center animate-fade-in mt-20 mb-16">
          {/* Headline */}
          <h1 className="font-serif text-[28px] leading-[1.2] font-medium text-foreground mb-3">
            We're shaping how your journal responds.
          </h1>
          
          {/* Subheading */}
          <p className="text-muted-foreground text-[15px]">
            Based on how you reflect, write, and respond.
          </p>
        </div>

        {/* Premium Widget Card - Lock Screen Preview */}
        <div 
          className="rounded-3xl px-8 py-7 max-w-[320px] w-full animate-fade-in relative overflow-hidden"
          style={{ 
            background: "linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 239, 231, 0.9) 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: `
              0 0 0 1px rgba(196, 165, 116, 0.15),
              0 4px 16px rgba(196, 165, 116, 0.12),
              0 12px 40px rgba(0, 0, 0, 0.08),
              0 24px 60px rgba(196, 165, 116, 0.08),
              inset 0 1px 0 rgba(255, 255, 255, 0.8)
            `
          }}
        >
          {/* Subtle inner glow overlay */}
          <div 
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.6) 0%, transparent 60%)"
            }}
          />
          
          {/* Content */}
          <div className="relative z-10">
            {/* Whisper label - Refined */}
            <p 
              className="text-[11px] tracking-[0.2em] uppercase text-center mb-4 font-medium"
              style={{ color: "#C4A574" }}
            >
              Whisper
            </p>
            
            {/* Quote - Elegant typography */}
            <p 
              className="font-serif text-[17px] leading-[1.7] text-center font-normal"
              style={{ 
                color: "#2C2C2C",
                fontStyle: "italic",
                letterSpacing: "0.01em"
              }}
            >
              "A year from now, everything you're stressing about won't mean a thing."
            </p>
          </div>
        </div>
      </div>

      <ContinueButton onClick={onContinue} />
    </div>
  );
};

export default Screen7VoiceReveal;
