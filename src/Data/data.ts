export interface DiamondCardProps {
  id: number;
  image: string;
  price: string;
  productName: string;
  sale?: boolean;
}

const data: DiamondCardProps[] = [
  {
    id: 1,
    image: "src/assets/pexels-the-glorious-studio-10475791.jpg",
    price: "$ 1,350",
    productName: "Princess",
  },
  {
    id: 2,
    image: "src/assets/pexels-the-glorious-studio-10475793.jpg",
    price: "$ 1,420",
    productName: "Swan",
  },
  {
    id: 3,
    image: "src/assets/pexels-the-glorious-studio-10475794.jpg",
    productName: "Ice Lake",
    price: "$ 1,780",
    sale: true,
  },
];

export default data;
