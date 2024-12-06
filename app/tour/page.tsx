import FlowersTour from "@/components/FlowersTour";

const flowers = [
  {
    id: 1,
    name: "Rose",
    image: "/images/rose.jpg",
    description: <p>The rose is a symbol of love and beauty.</p>,
  },
  {
    id: 2,
    name: "Sunflower",
    image: "/images/sunflower.jpg",
    description: <p>The sunflower represents positivity and strength.</p>,
  },
  {
    id: 3,
    name: "Tulip",
    image: "/images/tulip.jpg",
    description: <p>The tulip symbolizes perfect and deep love.</p>,
  },
];

export default function Home() {
  return <FlowersTour config={flowers} />;
}
