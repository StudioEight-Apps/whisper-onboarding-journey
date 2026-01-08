import ProgressBar from "../ProgressBar";
import ContinueButton from "../ContinueButton";

interface ScreenProps {
  onContinue: () => void;
}

const Screen7WidgetExplanation = ({ onContinue }: ScreenProps) => {
  return (
    <div className="h-full flex flex-col bg-background relative">
      <ProgressBar progress={64} />

      <div className="flex-1 flex flex-col">
        {/* Widget Mockup Area */}
        <div className="flex-1 flex items-center justify-center px-8 py-12">
          <div className="relative w-full max-w-xs animate-fade-in">
            {/* Back widget card (home screen) */}
            <div 
              className="absolute inset-0 bg-card rounded-3xl p-6 transform rotate-2 blur-[1px] opacity-70"
              style={{ 
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.08)',
                top: '-10px',
                left: '10px'
              }}
            >
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Remember: you're not behind. You're on your own path."
                </p>
                <p className="text-xs font-medium tracking-wider text-primary uppercase">
                  WHISPER
                </p>
              </div>
            </div>

            {/* Front widget card (lock screen) */}
            <div 
              className="relative bg-card rounded-3xl p-6 transform -rotate-2"
              style={{ 
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="space-y-3">
                <p className="text-base text-foreground leading-relaxed">
                  "Take a moment to breathe. You're exactly where you need to be."
                </p>
                <p className="text-xs font-medium tracking-wider text-primary uppercase">
                  WHISPER
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="screen-padding pb-32 animate-slide-up">
          <h1 className="text-headline mb-3">Quiet the noise before it starts</h1>
          <p className="text-body">
            Whisper meets you on your lock screen and home screen—interrupting negative thought loops with a word you actually needed to hear.
          </p>
        </div>
      </div>

      <ContinueButton onClick={onContinue} />
    </div>
  );
};

export default Screen7WidgetExplanation;
