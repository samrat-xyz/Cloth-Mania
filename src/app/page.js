import Collections from "@/components/Collections/Collections";
import Hero from "@/components/Hero/Hero";
import RecentClothes from "@/components/Recent-Clothes/RecentClothes";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Collections></Collections>
      <RecentClothes></RecentClothes>
    </div>
  );
}
