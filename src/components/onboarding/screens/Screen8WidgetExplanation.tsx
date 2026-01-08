import ProgressBar from "../ProgressBar";
import ContinueButton from "../ContinueButton";

interface ScreenProps {
  onContinue: () => void;
}

const Screen8WidgetExplanation = ({ onContinue }: ScreenProps) => {
  return (
    <div className="h-full flex flex-col bg-background relative">
      <ProgressBar progress={73} />

      <div className="flex-1 flex flex-col">
        {/* iPhone Mockup Area */}
        <div className="flex-1 flex items-center justify-center px-8 py-8">
          <div className="relative animate-fade-in">
            {/* iPhone Frame */}
            <div 
              className="relative bg-foreground rounded-[40px] p-2"
              style={{ 
                width: '200px',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)'
              }}
            >
              {/* Screen */}
              <div 
                className="bg-gradient-to-b from-[#1a1a2e] to-[#16213e] rounded-[32px] overflow-hidden"
                style={{ aspectRatio: '9/19.5' }}
              >
                {/* Status bar */}
                <div className="flex justify-between items-center px-6 pt-3 pb-2">
                  <span className="text-white/80 text-[10px] font-medium">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-2 border border-white/80 rounded-sm">
                      <div className="w-3/4 h-full bg-white/80 rounded-sm" />
                    </div>
                  </div>
                </div>
                
                {/* Lock icon and date */}
                <div className="text-center mt-4 mb-6">
                  <div className="text-white/60 text-[10px] mb-1">🔒</div>
                  <p className="text-white/90 text-[10px] font-light">Tuesday, January 7</p>
                </div>
                
                {/* Widget Card */}
                <div className="mx-4">
                  <div 
                    className="bg-card/95 backdrop-blur rounded-2xl p-4"
                    style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
                  >
                    <p className="text-[11px] leading-[1.4] text-foreground mb-2">
                      "Take a breath. You do not have to carry everything at once."
                    </p>
                    <p className="text-[8px] font-medium tracking-wider text-primary uppercase">
                      Whisper
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Dynamic Island */}
              <div 
                className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black rounded-full"
                style={{ width: '80px', height: '24px' }}
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="screen-padding pb-32 animate-slide-up">
          <h1 className="text-headline mb-3">Quiet the noise before it starts</h1>
          <p className="text-body">
            Whisper meets you on your lock screen and home screen, interrupting negative thoughts with words you needed to hear.
          </p>
        </div>
      </div>

      <ContinueButton onClick={onContinue} />
    </div>
  );
};

export default Screen8WidgetExplanation;
