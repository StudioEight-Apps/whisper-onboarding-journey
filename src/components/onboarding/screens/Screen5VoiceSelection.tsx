import { useState } from "react";
import ProgressBar from "../ProgressBar";
import ContinueButton from "../ContinueButton";
import VoiceCard from "../VoiceCard";

interface ScreenProps {
  onContinue: () => void;
}

const voices = [
  {
    title: "The Philosopher",
    example: "Indecision is a decision to stay stuck. Choose, then adapt.",
  },
  {
    title: "The Best Friend",
    example: "Hey, you're doing better than you think. Give yourself some credit.",
  },
  {
    title: "The Realist",
    example: "You already know what to do. Stop waiting for permission.",
  },
  {
    title: "The Sage",
    example: "The river doesn't rush, yet it shapes the stone.",
  },
];

const Screen5VoiceSelection = ({ onContinue }: ScreenProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="h-full flex flex-col bg-background relative">
      <ProgressBar progress={45} />

      <div className="flex-1 screen-padding pt-12 pb-32 overflow-y-auto">
        <div className="animate-fade-in">
          <h1 className="text-headline mb-2">Choose how Whisper speaks to you</h1>
          <p className="text-body mb-8">You can always change this later.</p>

          <div className="space-y-3">
            {voices.map((voice) => (
              <VoiceCard
                key={voice.title}
                title={voice.title}
                example={voice.example}
                selected={selected === voice.title}
                onClick={() => setSelected(voice.title)}
              />
            ))}
          </div>
        </div>
      </div>

      <ContinueButton onClick={onContinue} />
    </div>
  );
};

export default Screen5VoiceSelection;
