import DetailsBody from "../components/DetailsBody";
import type {
  HeroType,
  Invitation,
  EventDetails,
  TravelStay,
  RegistryDetails,
} from "../storage/types";
import { useGetDetailsQuery } from "../services/api";
// Default data in case API fails
const defaultDetailsData: {
  hero: HeroType;
  invitation: Invitation;
  galleryImage: string;
  eventDetails: EventDetails;
  travelStay: TravelStay;
  registry: RegistryDetails;
} = {
  hero: {
    title: "Our Wedding",
    image: "/images/hero.jpg",
  },
  invitation: {
    text: "We invite you to celebrate our wedding",
    buttonText: "RSVP Now",
    buttonLink: "/rsvp",
  },
  galleryImage: "/images/gallery-preview.jpg",
  eventDetails: {
    left: {
      date: "SATURDAY, JUNE 10, 2023",
      venue: "GRAND BALLROOM",
      ceremony: "CEREMONY: 4:00 PM",
      reception: "RECEPTION: 6:00 PM",
    },
    right: {
      musicalGuest: "Musical Guest: The Jazz Trio",
      dinner: "Dinner will be served at 7:00 PM",
    },
  },
  travelStay: {
    sectionTitle: "Travel & Stay",
    image: "/images/travel-stay.jpg",
    info1: {
      image: "/images/airport.png",
      text: "15 min from SFO Airport",
    },
    info2: {
      image: "/images/hotel.png",
      text: "Hotel blocks available",
    },
  },
  registry: {
    sectionTitle: "Our Registry",
    text: "Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we've created registries at the following stores:",
    buttonText: "View Registry",
    buttonLink: "/registry",
    image: "/images/gifts.jpg",
  },
};

export default function Details() {
  const { data: detailsData = defaultDetailsData } =
    useGetDetailsQuery(undefined);
  return (
    <div className="pt-16 md:pt-20">
      <DetailsBody
        hero={detailsData.hero}
        invitation={detailsData.invitation}
        galleryImage={detailsData.galleryImage}
        eventDetails={detailsData.eventDetails}
        travelStay={detailsData.travelStay}
        registry={detailsData.registry}
      />
    </div>
  );
}
