import { ReactNode } from "react";

type Props = {
  phrase: string;
  author?: string;
};

export const Card = ({ phrase, author }: Props) => {
  return (
    <div className="border-2 border-red-600 p-3 text-3x1 text-center w-96">
      <h3 className="text-3x1 font-bold italic">{phrase}</h3>
      <p className="text-right text-sm">- {author ? author: 'Autor Desconhecido!'}</p>
    </div>
  );
};

export default Card;
