import PopularPost from "@/components/popularPost/PopularPost";
import HeroSlider from "@/components/HeroSlider/HeroSlider";
import HomeWave from "@/components/HomeWave";
import FeaturePost from "@/components/featurePost/FeaturePost";

export default function Home() {
  return (
    <div className="font-be-vietnam-pro">
      <div className="absolute top-0 w-full h-screen overflow-hidden -z-1">
        <HomeWave />
      </div>
      <HeroSlider/>
      <PopularPost/>
      <FeaturePost title="Feature Post"/>
    </div>
  );
}
