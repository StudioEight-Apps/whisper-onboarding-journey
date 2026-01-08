import { useEffect } from "react";
import whisperLogo from "@/assets/whisper-logo.png";

interface ScreenProps {
  onContinue: () => void;
}

const Screen0Splash = ({ onContinue }: ScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onContinue();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onContinue]);

  return (
    <div className="h-full flex flex-col bg-background relative">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="animate-fade-in">
          <img 
            src={whisperLogo} 
            alt="Whisper" 
            className="h-12 w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Screen0Splash;
