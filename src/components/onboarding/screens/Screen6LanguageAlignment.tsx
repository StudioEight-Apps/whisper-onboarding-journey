import { useState } from "react";
import ProgressBar from "../ProgressBar";
import ContinueButton from "../ContinueButton";
import QuoteCard from "../QuoteCard";

interface ScreenProps {
  onContinue: () => void;
}

const quotes = [
  { text: "You don't have to fix everything today. You just have to show up.", rotation: "card-rotate-1" },
  { text: "Clarity comes from action, not thought.", rotation: "card-rotate-2" },
  { text: "What you resist persists. Let it move through you.", rotation: "card-rotate-3" },
  { text: "Stop performing your healing. Just heal.", rotation: "card-rotate-4" },
];

const Screen6LanguageAlignment = ({ onContinue }: ScreenProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="h-full flex flex-col bg-background relative">
      <ProgressBar progress={55} />

      <div className="flex-1 screen-padding pt-12 pb-32 overflow-y-auto">
        <div className="animate-fade-in">
          <h1 className="text-headline mb-2">Which of these lands best?</h1>
          <p className="text-body mb-8">Pick the one that feels most like something you needed to hear.</p>

          <div className="space-y-3">
            {quotes.map((quote) => (
              <QuoteCard
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

export default Screen6LanguageAlignment;