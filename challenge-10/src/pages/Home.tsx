import { useGetHomeQuery } from '../services/api';
import HomeBody from "../components/HomeBody";
import { selectHomeData } from "../storage/home/homeSelectors";
import { useAppSelector } from '../hooks/hooks';
import Hero from '../components/Hero';
import type { WeddingItems } from '../types';

export default function Home() {
  const { isLoading, isError } = useGetHomeQuery(undefined);
  const homeData = useAppSelector(selectHomeData);

  if (isLoading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (isError || !homeData) return <div className="flex items-center justify-center h-screen text-red-500">Error loading data</div>;

  const {
    wedding: {
      backgroundImage = '',
      subtitle = '',
      date = '',
      venue = { name: '', location: '' },
      registry = { img: '', title: '', subtitle: '', link: '' },
      items: weddingItems = {
        item1: '', item2: '', item3: '', item4: '',
        img1: '', img2: '', img3: '', img4: ''
      } as WeddingItems
    } = {} 
  } = homeData;

  const gridItems = [
    { to: "/our-story", imgKey: "img1" as const, itemKey: "item1" as const, alt: "Our Story" },
    { to: "/details", imgKey: "img2" as const, itemKey: "item2" as const, alt: "Wedding Details" },
    { to: "/gallery", imgKey: "img3" as const, itemKey: "item3" as const, alt: "Gallery" },
    { to: "/rsvp", imgKey: "img4" as const, itemKey: "item4" as const, alt: "RSVP" },
  ];

  return (
    <div className="pt-16 md:pt-20">
      <Hero hero={homeData.hero} />
      <HomeBody 
        backgroundImage={backgroundImage}
        subtitle={subtitle}
        date={date}
        venue={venue}
        registry={registry}
        weddingItems={weddingItems}
        gridItems={gridItems}
      />
    </div>
  );
}
