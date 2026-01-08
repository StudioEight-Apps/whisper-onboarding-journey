interface SelectableCardProps {
  text: string;
  selected: boolean;
  onClick: () => void;
}

const SelectableCard = ({ text, selected, onClick }: SelectableCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left rounded-2xl p-5 transition-all duration-200 ${
        selected 
          ? "bg-[#E0D6C8] border-2 border-[#C4A574]" 
          : "bg-[#EDE6DC] border-2 border-transparent"
      }`}
      style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
    >
      <span className="text-[15px] leading-[1.5]" style={{ color: '#2C2C2C' }}>{text}</span>
    </button>
  );
};

export default SelectableCard;