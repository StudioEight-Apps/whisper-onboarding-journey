import { useState } from "react";
import ProgressBar from "../ProgressBar";
import ContinueButton from "../ContinueButton";
import QuoteCard from "../QuoteCard";

interface ScreenProps {
  onContinue: () => void;
}

const quotes = [
  { text: "Their opinion is data, not a verdict. Use what is useful.", rotation: "card-rotate-1" },
  { text: "That pain is real. But their words do not define you.", rotation: "card-rotate-2" },
  { text: "Not everyone deserves access to your peace.", rotation: "card-rotate-3" },
  { text: "The arrow only wounds if you hold it inside.", rotation: "card-rotate-4" },
];

const Screen6LanguageAlignment = ({ onContinue }: ScreenProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="h-full flex flex-col bg-background relative">
      <ProgressBar progress={55} />

      <div className="flex-1 screen-padding pt-12 pb-32 overflow-y-auto">
        <div className="animate-fade-in">
          <h1 className="text-headline mb-2">Someone's words hurt you and you keep replaying them.</h1>
          <p className="text-body mb-8">Which response feels most true?</p>

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
