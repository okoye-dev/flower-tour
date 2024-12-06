import FlowersTour from "@/components/FlowersTour";
import { getFlowersConfig } from "@/utils/flowers";

const flowers = getFlowersConfig();

export default function Home() {
  return <FlowersTour config={flowers} />;
}
