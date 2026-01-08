import { useState } from "react";
import ProgressBar from "../ProgressBar";
import ContinueButton from "../ContinueButton";
import SelectableCard from "../SelectableCard";

interface ScreenProps {
  onContinue: () => void;
}

const options = [
  "I push through and keep going",
  "I shut down and withdraw",
  "I spiral into overthinking",
  "I distract myself until it passes",
];

const Screen4StressResponse = ({ onContinue }: ScreenProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="h-full flex flex-col bg-background relative">
      <ProgressBar progress={36} />

      <div className="flex-1 screen-padding pt-12 pb-32 overflow-y-auto">
        <div className="animate-fade-in">
          <h1 className="text-headline mb-2">When stress hits, what do you usually do?</h1>
          <p className="text-body mb-8">No right answers—just patterns.</p>

          <div className="space-y-3">
            {options.map((option) => (
              <SelectableCard
                key={option}
                text={option}
                selected={selected === option}
                onClick={() => setSelected(option)}
              />
            ))}
          </div>
        </div>
      </div>

      <ContinueButton onClick={onContinue} />
    </div>
  );
};

export default Screen4StressResponse;
