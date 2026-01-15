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

    // Cycle through status messages - slower pace
    let messageIndex = 0;
    const messageTimer = setInterval(() => {
      messageIndex = (messageIndex + 1) % statusMessages.length;
      setStatusText(statusMessages[messageIndex]);
    }, 1500);

    return () => {
      clearInterval(progressTimer);
      clearInterval(messageTimer);
    };
  }, []);

  return (
    <div className="h-full flex flex-col bg-background relative">
      <ProgressBar progress={64} />

      {/* Centered content system - quiet and intentional */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 pb-24">
        {/* Headline - Primary focus */}
        <h1 className="font-serif text-[32px] leading-[1.3] font-medium text-foreground text-center mb-6 animate-fade-in">
          Shaping how your<br />journal responds
        </h1>

        {/* Status Text - Secondary emphasis */}
        <p className="text-muted-foreground text-[15px] text-center mb-12 animate-fade-in">
          {statusText}
        </p>

        {/* Progress Bar - Prominent but refined */}
        <div className="w-[75%] max-w-[320px]">
          <div className="h-[7px] bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%`, backgroundColor: "hsl(var(--foreground) / 0.85)" }}
            />
          </div>
          {/* Percent label */}
          <p className="text-muted-foreground text-[13px] text-center mt-3">
            {Math.round(progress)}%
          </p>
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
