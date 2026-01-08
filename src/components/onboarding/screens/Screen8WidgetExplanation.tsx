import ProgressBar from "../ProgressBar";
import ContinueButton from "../ContinueButton";

interface ScreenProps {
  onContinue: () => void;
}

const whispers = [
  { text: "Take a breath. You do not have to carry everything at once.", rotate: "-2deg", top: "8%", left: "5%" },
  { text: "You are not behind. You are exactly where you need to be.", rotate: "2deg", top: "18%", left: "15%" },
  { text: "Let it go. Not everything needs your energy today.", rotate: "-1deg", top: "28%", left: "8%" },
  { text: "You have survived every hard day so far.", rotate: "1.5deg", top: "38%", left: "12%" },
];

const Screen8WidgetExplanation = ({ onContinue }: ScreenProps) => {
  return (
    <div className="h-full flex flex-col bg-background relative">
      <ProgressBar progress={73} />

      <div className="flex-1 flex flex-col">
        {/* Floating Whisper Cards */}
        <div className="relative h-[55%] px-4 pt-8">
          {whispers.map((whisper, index) => (
            <div
              key={index}
              className="absolute w-[85%] max-w-[320px] p-4 rounded-2xl animate-fade-in"
              style={{
                backgroundColor: "#EDE6DC",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                transform: `rotate(${whisper.rotate})`,
                top: whisper.top,
                left: whisper.left,
                animationDelay: `${index * 0.1}s`,
                zIndex: whispers.length - index,
              }}
            >
              <p 
                className="text-sm leading-relaxed mb-2"
                style={{ color: "#2C2C2C" }}
              >
                "{whisper.text}"
              </p>
              <p 
                className="text-[10px] font-semibold tracking-widest uppercase"
                style={{ color: "#C4A574" }}
              >
                Whisper
              </p>
            </div>
          ))}
        </div>

        {/* Text Content */}
        <div className="screen-padding pb-32 animate-slide-up">
          <h1 className="text-headline mb-3">Rewire your inner voice</h1>
          <p className="text-body">
            Over 20 whispers sent to your lock and home screen throughout the day with the exact messages you need to see.
          </p>
        </div>
      </div>

      <ContinueButton onClick={onContinue} />
    </div>
  );
};

export default Screen8WidgetExplanation;
