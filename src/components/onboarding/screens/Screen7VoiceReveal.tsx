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

      {/* Centered content system - vertically centered like Cal AI */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-24">
        {/* Percentage Display */}
        <div className="text-center animate-fade-in mb-4">
          <span className="font-serif text-[72px] leading-none font-medium text-foreground">
            {Math.round(progress)}%
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-[28px] leading-[1.2] font-medium text-foreground text-center mb-10 animate-fade-in">
          We're shaping how your journal responds.
        </h1>

        {/* Animated Progress Bar */}
        <div className="w-full max-w-[300px] mb-4">
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
        <p className="text-muted-foreground text-[14px] animate-fade-in">
          {statusText}
        </p>
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
