import ProgressBar from "../ProgressBar";
import ContinueButton from "../ContinueButton";

interface ScreenProps {
  onContinue: () => void;
}

const Screen7VoiceReveal = ({ onContinue }: ScreenProps) => {
  return (
    <div className="h-full flex flex-col bg-background relative">
      <ProgressBar progress={64} />

      <div className="flex-1 flex flex-col items-center justify-center screen-padding pb-32">
        <div className="text-center max-w-sm animate-fade-in">
          {/* Small caps label */}
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
            Your Whisper Voice
          </p>
          
          {/* Headline */}
          <h1 className="text-headline-lg mb-4">
            We are shaping your journal around you
          </h1>
          
          {/* Subtext */}
          <p className="text-body mb-10">
            Whisper adapts its tone, timing, and language based on how you think and respond.
          </p>
          
          {/* Sample whisper card */}
          <div 
            className="rounded-2xl p-6 mx-4"
            style={{ 
              backgroundColor: "#EDE6DC",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)"
            }}
          >
            <p 
              className="text-[15px] leading-[1.5] italic text-center"
              style={{ color: "#2C2C2C" }}
            >
              "Hey. You are carrying a lot right now. But you do not have to figure it all out today."
            </p>
          </div>
        </div>
      </div>

      <ContinueButton onClick={onContinue} />
    </div>
  );
};

export default Screen7VoiceReveal;
