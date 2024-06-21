import { useTheme } from "@/app/contexts/ThemeContext";

type Props = {
  label: string;
  onClick: () => void;
};

export const ButtonTheme = ({ label, onClick }: Props) => {
  const themeCtx = useTheme();
  return (
    <button
      className={`border px-4 py-3 rounded-r-md
            ${
              themeCtx?.theme === "light"
                ? "bg-black text-white"
                : "bg-white text-black"
            }
            `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
