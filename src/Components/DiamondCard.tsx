import type { DiamondCardProps } from "../Data/data";

export default function DiamondCard({
  image,
  productName,
  price,
  sale,
}: DiamondCardProps) {
  return (
    <div className="DiamondCard">
      <img src={image} alt="" width="100px" />
      <h2>{productName}</h2>
      <p>{price}</p>
      <p style={{ color: "red", fontWeight: "bolder" }}>{sale && "SALE"}</p>
    </div>
  );
}
