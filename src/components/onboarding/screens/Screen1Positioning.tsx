import ProgressBar from "../ProgressBar";
import ContinueButton from "../ContinueButton";

interface ScreenProps {
  onContinue: () => void;
}

const Screen1Positioning = ({ onContinue }: ScreenProps) => {
  return (
    <div className="h-full flex flex-col bg-background relative">
      <ProgressBar progress={9} />
      
      <div className="flex-1 flex flex-col items-center justify-center screen-padding pb-32">
        <div className="text-center max-w-sm animate-fade-in">
          <h1 className="text-headline-lg mb-6 leading-relaxed">
            Most journals listen.<br />This one responds.
          </h1>
          <p className="text-body mt-8 leading-relaxed">
            As you journal, Whisper learns your tone, pace, and needs—then sends you thoughtful reflections to your home and lock screen when they matter most.
          </p>
        </div>
      </div>

      <ContinueButton onClick={onContinue} />
    </div>
  );
};

export default Screen1Positioning;