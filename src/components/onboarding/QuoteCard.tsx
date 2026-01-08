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
      className={`w-full rounded-2xl p-5 min-h-[80px] flex items-center justify-center text-center transition-all duration-200 ${rotation} ${
        selected 
          ? "bg-[#E0D6C8] border-2 border-[#C4A574]" 
          : "bg-[#EDE6DC] border-2 border-transparent"
      }`}
      style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
    >
      <p className="text-[15px] leading-[1.5]" style={{ color: '#2C2C2C' }}>
        "{quote}"
      </p>
    </button>
  );
};

export default QuoteCard;
