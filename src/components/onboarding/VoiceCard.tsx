interface VoiceCardProps {
  title: string;
  example: string;
  selected: boolean;
  onClick: () => void;
}

const VoiceCard = ({ title, example, selected, onClick }: VoiceCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`card-voice w-full text-left ${selected ? "card-voice-selected" : ""}`}
    >
      <h3 className="font-sans-body text-base font-semibold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm italic text-muted-foreground leading-relaxed">
        "{example}"
      </p>
    </button>
  );
};

export default VoiceCard;
