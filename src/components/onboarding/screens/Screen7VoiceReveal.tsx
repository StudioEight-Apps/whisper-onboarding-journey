import { useState, useEffect } from "react";
import ProgressBar from "../ProgressBar";

interface ScreenProps {
  onContinue: () => void;
}

const Screen7VoiceReveal = ({ onContinue }: ScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [canContinue, setCanContinue] = useState(false);
  const [statusText, setStatusText] = useState("Analyzing your responses...");

  const statusMessages = [
    "Analyzing your responses...",
    "Understanding your reflection style...",
    "Calibrating voice tone...",
    "Personalizing your experience...",
    "Almost ready..."
  ];

  useEffect(() => {
    // Animate progress from 0 to 100 over 5 seconds
    const duration = 5000;
    const interval = 50;
    const increment = 100 / (duration / interval);
    
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(progressTimer);
          setCanContinue(true);
          return 100;
        }
        return next;
      });
    }, interval);

    // Cycle through status messages
    let messageIndex = 0;
    const messageTimer = setInterval(() => {
      messageIndex = (messageIndex + 1) % statusMessages.length;
      setStatusText(statusMessages[messageIndex]);
    }, 1000);

    return () => {
      clearInterval(progressTimer);
      clearInterval(messageTimer);
    };
  }, []);

  return (
    <div className="h-full flex flex-col bg-background relative">
      <ProgressBar progress={64} />

      {/* Centered content system */}
      <div className="flex-1 flex flex-col items-center px-6 pb-24">
        {/* Percentage Display */}
        <div className="text-center animate-fade-in mt-16 mb-4">
          <span className="font-serif text-[64px] leading-none font-medium text-foreground">
            {Math.round(progress)}%
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-[28px] leading-[1.2] font-medium text-foreground text-center mb-8 animate-fade-in">
          We're shaping how your journal responds.
        </h1>

        {/* Animated Progress Bar */}
        <div className="w-full max-w-[280px] mb-4">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-100 ease-out"
              style={{ 
                width: `${progress}%`,
                background: "linear-gradient(90deg, #E8B4B8 0%, #C4A574 50%, #A8C5D9 100%)"
              }}
            />
          </div>
        </div>

        {/* Status Text */}
        <p className="text-muted-foreground text-[14px] mb-10 animate-fade-in">
          {statusText}
        </p>

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

      {/* Continue Button with delayed activation */}
      <div className="absolute bottom-0 left-0 right-0 pb-8 px-6 bg-gradient-to-t from-background via-background to-transparent pt-6">
        <button 
          onClick={onContinue}
          disabled={!canContinue}
          className={`w-full py-4 rounded-full font-medium text-[16px] transition-all duration-300 ${
            canContinue 
              ? 'btn-primary' 
              : 'bg-muted text-muted-foreground cursor-not-allowed'
          }`}
        >
          {canContinue ? "Continue" : "Preparing..."}
        </button>
      </div>
    </div>
  );
};

export default Screen7VoiceReveal;
