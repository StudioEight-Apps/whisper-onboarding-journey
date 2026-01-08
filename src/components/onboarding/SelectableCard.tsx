import { Check } from "lucide-react";

interface SelectableCardProps {
  text: string;
  selected: boolean;
  onClick: () => void;
  showCheckmark?: boolean;
}

const SelectableCard = ({ text, selected, onClick, showCheckmark = true }: SelectableCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`card-whisper w-full text-left flex items-center justify-between ${
        selected ? "card-whisper-selected" : ""
      }`}
    >
      <span className="text-card pr-4">{text}</span>
      {showCheckmark && selected && (
        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
          <Check className="w-3 h-3 text-primary-foreground" />
        </div>
      )}
    </button>
  );
};

export default SelectableCard;
