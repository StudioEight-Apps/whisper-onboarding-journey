import { useState } from "react";
import ProgressBar from "../ProgressBar";
import ContinueButton from "../ContinueButton";
import VoiceCard from "../VoiceCard";

interface ScreenProps {
  onContinue: () => void;
}

const quotes = [
  {
    text: "Indecision costs more than the wrong choice. Decide, then adapt.",
    rotation: "card-rotate-1",
  },
  {
    text: "You do not have to decide today. Sit with it a little longer.",
    rotation: "card-rotate-2",
  },
  {
    text: "You already know. Stop waiting for permission.",
    rotation: "card-rotate-3",
  },
  {
    text: "The path reveals itself only to those who begin walking.",
    rotation: "card-rotate-4",
  },
];

const Screen5VoiceSelection = ({ onContinue }: ScreenProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="h-full flex flex-col bg-background relative">
      <ProgressBar progress={45} />

      <div className="flex-1 screen-padding pt-12 pb-32 overflow-y-auto">
        <div className="animate-fade-in">
          <h1 className="text-headline mb-2">You've been stuck on a decision for days.</h1>
          <p className="text-body mb-8">Which response helps most?</p>

          <div className="space-y-3">
            {quotes.map((quote) => (
              <VoiceCard
                key={quote.text}
                quote={quote.text}
                selected={selected === quote.text}
                onClick={() => setSelected(quote.text)}
                rotation={quote.rotation}
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
