interface ContinueButtonProps {
  onClick: () => void;
  label?: string;
}

const ContinueButton = ({ onClick, label = "Continue" }: ContinueButtonProps) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 pb-8 px-6 bg-gradient-to-t from-background via-background to-transparent pt-6">
      <button 
        onClick={onClick}
        className="btn-primary"
      >
        {label}
      </button>
    </div>
  );
};

export default ContinueButton;
