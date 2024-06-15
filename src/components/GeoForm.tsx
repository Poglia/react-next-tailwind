import { Circle } from "./Circle";
import { Square } from "./Square";

const GeoForm = () => {
  return (
    <div>
      <h3 className="text-2x1 font-bold">Formas Geometricas</h3>
      <div className="p-3 flex gap-2 border-2 border-black">
        <Square />
        <Circle />
      </div>
    </div>
  );
};

export default GeoForm;
