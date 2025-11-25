import Collections from "@/components/Collections/Collections";
import Hero from "@/components/Hero/Hero";
import NewsLatter from "@/components/NewsLatter/NewsLatter";
import RecentClothes from "@/components/Recent-Clothes/RecentClothes";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Collections></Collections>
      <RecentClothes></RecentClothes>
      <NewsLatter></NewsLatter>
    </div>
  );
}
