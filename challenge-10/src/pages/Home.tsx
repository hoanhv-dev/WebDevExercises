import HomeBody from "../components/HomeBody";
import { selectHomeData } from "../features/Home/storage/selectors/homeSelectors";
import { useAppSelector } from '../hooks/hooks';
import Hero from '../components/Hero';
import type { HomeData } from '../storage/types';

// Default data in case API fails
const defaultHomeData: HomeData = {
  couple: {
    bride: 'Jane',
    groom: 'John',
    initials: 'J&J'
  },
  hero: {
    title: 'Jane & John',
    image: '/images/hero.jpg'
  },
  wedding: {
    backgroundImage: '/images/wedding-bg.jpg',
    subtitle: 'We are getting married!',
    date: 'June 10, 2023',
    time: '4:00 PM',
    venue: {
      name: 'Grand Ballroom',
      location: '123 Main St, San Francisco, CA'
    },
    items: {
      item1: 'Our Story',
      item2: 'Wedding Details',
      item3: 'Gallery',
      item4: 'RSVP',
      img1: '/images/our-story.jpg',
      img2: '/images/details.jpg',
      img3: '/images/gallery.jpg',
      img4: '/images/rsvp.jpg'
    },
    registry: {
      img: '/images/gift.jpg',
      title: 'Our Registry',
      subtitle: 'Your presence is present enough',
      link: '/registry'
    }
  },
  announcement: 'Save the date for our wedding celebration!'
};

export default function Home() {

  const homeData = useAppSelector(selectHomeData);
  
  const data = homeData || defaultHomeData;
  if (!data) return <div className="flex items-center justify-center h-screen">No data available</div>;

  // Extract the data we need for the HomeBody component
  const { wedding, hero } = data;
  const { backgroundImage, subtitle, date, venue, registry, items: weddingItems } = wedding;

  const gridItems = [
    { to: "/our-story", imgKey: "img1" as const, itemKey: "item1" as const, alt: "Our Story" },
    { to: "/details", imgKey: "img2" as const, itemKey: "item2" as const, alt: "Wedding Details" },
    { to: "/gallery", imgKey: "img3" as const, itemKey: "item3" as const, alt: "Gallery" },
    { to: "/rsvp", imgKey: "img4" as const, itemKey: "item4" as const, alt: "RSVP" },
  ];

  return (
    <div className="pt-16 md:pt-20">
      <Hero hero={hero} />
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
