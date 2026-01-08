interface QuoteCardProps {
  quote: string;
  selected: boolean;
  onClick: () => void;
  rotation?: string;
}

const QuoteCard = ({ quote, selected, onClick, rotation = "" }: QuoteCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`card-quote w-full ${rotation} ${selected ? "card-whisper-selected" : ""}`}
    >
      <p className="text-[15px] leading-[1.5] text-foreground">
        "{quote}"
      </p>
    </button>
  );
};

export default QuoteCard;
