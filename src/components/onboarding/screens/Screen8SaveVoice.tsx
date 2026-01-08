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
          <h1 className="text-headline-lg mb-4">
            Your Whisper voice is ready.
          </h1>
          <p className="text-body">
            We've tuned Whisper to match how you think, feel, and process. Now let's make sure you don't lose it.
          </p>
        </div>
      </div>

      <ContinueButton onClick={onContinue} label="Save My Voice" />
    </div>
  );
};

export default Screen8SaveVoice;
