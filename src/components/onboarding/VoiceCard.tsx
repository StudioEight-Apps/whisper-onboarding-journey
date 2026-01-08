interface VoiceCardProps {
  quote: string;
  selected: boolean;
  onClick: () => void;
  rotation?: string;
}

const VoiceCard = ({ quote, selected, onClick, rotation = "" }: VoiceCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`card-voice w-full text-left ${rotation} ${selected ? "card-voice-selected" : ""}`}
    >
      <p className="text-[15px] leading-[1.5] text-foreground">
        "{quote}"
      </p>
    </button>
  );
};

export default VoiceCard;
