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
          {/* Symbol and label */}
          <div className="mb-3">
            <span className="text-primary text-lg">✦</span>
          </div>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Your Whisper Voice
          </p>
          
          {/* Voice name */}
          <h1 className="text-headline-lg mb-4">
            The Best Friend
          </h1>
          
          {/* Description */}
          <p className="text-body mb-8">
            Warm and grounding. Like a friend who sees you clearly and says what you need to hear.
          </p>
          
          {/* Gold divider */}
          <div className="flex justify-center mb-6">
            <div className="gold-divider" />
          </div>
          
          {/* Sample whisper card */}
          <div className="bg-card rounded-2xl p-6 mx-4" style={{ boxShadow: 'var(--shadow-card)' }}>
            <p className="text-[15px] leading-[1.5] text-foreground italic text-center">
              "Hey. You are carrying a lot right now. But you do not have to figure it all out today."
            </p>
          </div>
          
          {/* Gold divider */}
          <div className="flex justify-center mt-6 mb-6">
            <div className="gold-divider" />
          </div>
          
          <p className="text-sm text-muted-foreground">
            You can change this anytime in settings
          </p>
        </div>
      </div>

      <ContinueButton onClick={onContinue} />
    </div>
  );
};

export default Screen7VoiceReveal;
