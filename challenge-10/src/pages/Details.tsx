import DetailsBody from "../components/DetailsBody";
import { useAppSelector } from "../hooks/hooks";
import { useGetDetailsQuery } from "../services/api";
import { 
  selectHero,
  selectInvitation,
  selectGalleryImage,
  selectEventDetails,
  selectTravelStay,
  selectRegistry 
} from "../storage/details/detailsSelectors";

export default function Details() {
  // Fetch data
  const { isLoading, error } = useGetDetailsQuery(undefined);
  
  // Get data from Redux store
  const hero = useAppSelector(selectHero);
  const invitation = useAppSelector(selectInvitation);
  const galleryImage = useAppSelector(selectGalleryImage);
  const eventDetails = useAppSelector(selectEventDetails);
  const travelStay = useAppSelector(selectTravelStay);
  const registry = useAppSelector(selectRegistry);

  if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">Error loading data</div>;

  return (
    <div className="pt-16 md:pt-20">
      <DetailsBody 
        hero={hero}
        invitation={invitation}
        galleryImage={galleryImage}
        eventDetails={eventDetails}
        travelStay={travelStay}
        registry={registry}
      />
    </div>
  );
}