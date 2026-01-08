import { useState } from "react";
import ProgressBar from "../ProgressBar";
import ContinueButton from "../ContinueButton";
import SelectableCard from "../SelectableCard";

interface ScreenProps {
  onContinue: () => void;
}

const options = [
  "I'm mostly kind and patient with myself",
  "I try to be, but I slip into criticism",
  "I'm harder on myself than anyone else",
  "I avoid thinking about myself entirely",
];

const Screen3InnerDialogue = ({ onContinue }: ScreenProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="h-full flex flex-col bg-background relative">
      <ProgressBar progress={27} />

      <div className="flex-1 screen-padding pt-12 pb-32 overflow-y-auto">
        <div className="animate-fade-in">
          <h1 className="text-headline mb-2">How do you usually talk to yourself?</h1>
          <p className="text-body mb-8">Be honest. No judgment here.</p>

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

export default Screen3InnerDialogue;
