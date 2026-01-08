import ProgressBar from "../ProgressBar";
import ContinueButton from "../ContinueButton";

interface ScreenProps {
  onContinue: () => void;
}

const Screen10StartJournaling = ({ onContinue }: ScreenProps) => {
  return (
    <div className="h-full flex flex-col bg-background relative">
      <ProgressBar progress={91} />

      <div className="flex-1 flex flex-col items-center justify-center screen-padding pb-32">
        <div className="text-center max-w-sm animate-fade-in">
          <h1 className="text-headline-lg mb-4">
            You're all set.
          </h1>
          <p className="text-body">
            The more you journal, the more personalized your whispers become. Start your first entry and let Whisper learn your voice.
          </p>
        </div>
      </div>

      <ContinueButton onClick={onContinue} label="Start Journaling" />
    </div>
  );
};

export default Screen10StartJournaling;
