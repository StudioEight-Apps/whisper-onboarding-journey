import ProgressBar from "../ProgressBar";
import ContinueButton from "../ContinueButton";

interface ScreenProps {
  onContinue: () => void;
}

const Screen8SaveVoice = ({ onContinue }: ScreenProps) => {
  return (
    <div className="h-full flex flex-col bg-background relative">
      <ProgressBar progress={73} />

      <div className="flex-1 flex flex-col items-center justify-center screen-padding pb-32">
        <div className="text-center max-w-sm animate-fade-in">
          {/* Symbol and label */}
          <div className="mb-3">
            <span className="text-primary text-lg">✦</span>
          </div>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Your Whisper Voice
          </p>
          
          {/* Voice name in handwritten font */}
          <h1 className="font-handwritten text-[36px] text-foreground mb-8">
            The Best Friend
          </h1>
          
          {/* Gold divider */}
          <div className="flex justify-center mb-6">
            <div className="gold-divider" />
          </div>
          
          {/* Sample whisper card */}
          <div className="bg-card rounded-2xl p-6 mx-4" style={{ boxShadow: 'var(--shadow-card)' }}>
            <p className="text-whisper-lg text-center italic">
              "Hey, you're doing better than you think. Give yourself some credit."
            </p>
          </div>
          
          {/* Gold divider */}
          <div className="flex justify-center mt-6 mb-8">
            <div className="gold-divider" />
          </div>
          
          <p className="text-body text-sm">
            We've tuned Whisper to match how you think, feel, and process. Now let's make sure you don't lose it.
          </p>
        </div>
      </div>

      <ContinueButton onClick={onContinue} label="Save My Voice" />
    </div>
  );
};

export default Screen8SaveVoice;