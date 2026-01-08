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
      <p className="text-whisper-lg">
        <span className="text-primary font-serif text-2xl leading-none">"</span>
        {quote}
        <span className="text-primary font-serif text-2xl leading-none">"</span>
      </p>
    </button>
  );
};

export default QuoteCard;