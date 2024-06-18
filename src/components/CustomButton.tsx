type Props = {
  label: string;
  onClick: () => void;
};

const CustomButton = ({ label, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="p-3 bg-blue-700 rounded-md text-white mr-3"
    >
      {label}
    </button>
  );
};

export default CustomButton;
