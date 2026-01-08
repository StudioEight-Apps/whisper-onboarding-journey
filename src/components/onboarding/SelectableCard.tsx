interface SelectableCardProps {
  text: string;
  selected: boolean;
  onClick: () => void;
}

const SelectableCard = ({ text, selected, onClick }: SelectableCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`card-whisper w-full text-left ${
        selected ? "card-whisper-selected" : ""
      }`}
    >
      <span className="text-card">{text}</span>
    </button>
  );
};

export default SelectableCard;