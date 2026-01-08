import ProgressBar from "../ProgressBar";
import ContinueButton from "../ContinueButton";
import widgetMockup from "@/assets/whisper_widgets_mockup.png";

interface ScreenProps {
  onContinue: () => void;
}

const Screen8WidgetExplanation = ({ onContinue }: ScreenProps) => {
  return (
    <div className="h-full flex flex-col bg-background relative">
      <ProgressBar progress={73} />

      <div className="flex-1 flex flex-col">
        {/* Widget Mockup Image */}
        <div className="flex-1 flex items-center justify-center px-8 pt-8">
          <img 
            src={widgetMockup} 
            alt="Whisper widget on lock screen" 
            className="w-full max-w-[320px] h-auto rounded-2xl animate-fade-in"
            style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)" }}
          />
        </div>

        {/* Text Content */}
        <div className="screen-padding pb-32 animate-slide-up">
          <h1 className="text-headline mb-3">No notifications. No interruptions.</h1>
          <p className="text-body">
            Whisper does not ping you. It waits where you already look, ready when you need it.
          </p>
        </div>
      </div>

      <ContinueButton onClick={onContinue} />
    </div>
  );
};

export default Screen8WidgetExplanation;
