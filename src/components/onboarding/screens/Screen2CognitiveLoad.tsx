import { useState } from "react";
import ProgressBar from "../ProgressBar";
import ContinueButton from "../ContinueButton";
import SelectableCard from "../SelectableCard";

interface ScreenProps {
  onContinue: () => void;
}

const options = [
  "Calm and clear",
  "Manageable, but busy",
  "Scattered and overstimulated",
  "Heavy and hard to quiet",
];

const Screen2CognitiveLoad = ({ onContinue }: ScreenProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (option: string) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="h-full flex flex-col bg-background relative">
      <ProgressBar progress={18} />

      <div className="flex-1 screen-padding pt-12 pb-32 overflow-y-auto">
        <div className="animate-fade-in">
          <h1 className="text-headline mb-2">How does your mind feel most days?</h1>
          <p className="text-body mb-8">This helps us gauge how much mental space you have.</p>

          <div className="space-y-3">
            {options.map((option) => (
              <SelectableCard
                key={option}
                text={option}
                selected={selected.includes(option)}
                onClick={() => toggleOption(option)}
              />
            ))}
          </div>
        </div>
      </div>

      <ContinueButton onClick={onContinue} />
    </div>
  );
};

export default Screen2CognitiveLoad;
