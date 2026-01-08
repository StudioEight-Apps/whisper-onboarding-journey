interface VoiceCardProps {
  title: string;
  example: string;
  selected: boolean;
  onClick: () => void;
  rotation?: string;
}

const VoiceCard = ({ title, example, selected, onClick, rotation = "" }: VoiceCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`card-voice w-full text-left ${rotation} ${selected ? "card-voice-selected" : ""}`}
    >
      <h3 className="font-handwritten text-[22px] text-foreground mb-2">
        {title}
      </h3>
      <p className="text-whisper text-muted-foreground italic">
        "{example}"
      </p>
    </button>
  );
};

export default VoiceCard;