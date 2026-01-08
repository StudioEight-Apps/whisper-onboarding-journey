import ProgressBar from "../ProgressBar";
import ContinueButton from "../ContinueButton";
import lockscreenWidget from "@/assets/lockscreen-widget.png";
interface ScreenProps {
  onContinue: () => void;
}
const Screen8WidgetExplanation = ({
  onContinue
}: ScreenProps) => {
  return <div className="h-full flex flex-col bg-background relative">
      <ProgressBar progress={73} />

      <div className="flex-1 flex flex-col">
        {/* iPhone Mockup - Top Half Only */}
        <div className="flex-1 flex items-center justify-center px-6 pt-8">
          {/* Soft rounded container */}
          <div className="rounded-3xl p-4 animate-fade-in" style={{
          backgroundColor: '#EDE6DC',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)'
        }}>
            {/* iPhone frame - top half only */}
            <div className="relative rounded-[2.5rem] overflow-hidden" style={{
            width: '240px',
            height: '260px',
            backgroundColor: '#1a1a1a',
            padding: '4px'
          }}>
              {/* Screen content - clipped to show top half */}
              <div className="w-full h-full rounded-[2.2rem] overflow-hidden" style={{
              backgroundColor: '#fff'
            }}>
                <img src={lockscreenWidget} alt="Whisper widget on lock screen" className="w-full h-auto object-cover object-top" style={{
                marginTop: '-2px',
                transform: 'scale(1.02)'
              }} />
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="screen-padding pb-32 animate-slide-up">
          <h1 className="text-headline mb-3">No notifications. 
 No interruptions.</h1>
          <p className="text-body">
            Whisper waits on your lock screen, ready when you look.
          </p>
        </div>
      </div>

      <ContinueButton onClick={onContinue} />
    </div>;
};
export default Screen8WidgetExplanation;