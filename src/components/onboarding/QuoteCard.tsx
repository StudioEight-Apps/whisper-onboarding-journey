interface QuoteCardProps {
  quote: string;
  selected: boolean;
  onClick: () => void;
}

const QuoteCard = ({ quote, selected, onClick }: QuoteCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`card-quote w-full ${selected ? "card-whisper-selected" : ""}`}
    >
      <p className="text-body-lg">
        <span className="text-primary font-serif text-2xl leading-none">"</span>
        {quote}
        <span className="text-primary font-serif text-2xl leading-none">"</span>
      </p>
    </button>
  );
};

export default QuoteCard;
