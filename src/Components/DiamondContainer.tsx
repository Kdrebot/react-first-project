import DiamondCard from "./DiamondCard";
import type { DiamondCardProps } from "../Data/data"; //Import the interface as a type

//Create a new interface for a array of DiamondCardProps
//the imported interface is an object interface
//and data is an array which needs and array interface
interface DiamondContainerProps {
  data: DiamondCardProps[];
}

export default function DiamondContainer({ data }: DiamondContainerProps) {
  return (
    <div className="DiamondContainer">
      {data.map((listing) => (
        <DiamondCard key={listing.id} {...listing} />
      ))}
    </div>
  );
}
