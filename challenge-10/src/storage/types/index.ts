// ===== COMMON TYPES =====
export type Couple = {
  bride: string;
  groom: string;
  initials: string;
}

export type HeroType = {
  title: string;
  image: string;
}

// ===== HOME FEATURE =====
export type Venue = {
  name: string;
  location: string;
}

export type WeddingItems = {
  item1: string;
  item2: string;
  item3: string;
  item4: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
}

export type Registry = {
  img: string;
  title: string;
  subtitle: string;
  link: string;
}

export type WeddingData = {
  backgroundImage: string;
  subtitle: string;
  date: string;
  venue: Venue;
  time: string;
  items: WeddingItems;
  registry: Registry;
}

export type HomeData = {
  couple: Couple;
  hero: HeroType;
  wedding: WeddingData;
  announcement: string;
}

export type HomeState = {
  data: HomeData | null;
  loading: boolean;
  error: string | null;
}

// ===== OUR STORY FEATURE =====
export type ImageSection = {
  backImage: string;
  frontImage: string;
}

export type Quote = {
  text1: string;
  text2: string;
  link: string;
}

export type OurStoryData = {
  topImage: string;
  title: string;
  story1: string;
  story2: string;
  imageSection: ImageSection;
  quote: Quote;
}

export type OurStoryState = {
  data: OurStoryData | null;
  loading: boolean;
  error: string | null;
}

// ===== DETAILS FEATURE =====
export type Invitation = {
  text: string;
  buttonText: string;
  buttonLink: string;
}

export type EventDetails = {
  left: {
    date: string;
    venue: string;
    ceremony: string;
    reception: string;
  };
  right: {
    musicalGuest: string;
    dinner: string;
  };
}

export type Info1 = {
  image: string;
  text: string;
}

export type Info2 = {
  image: string;
  text: string;
}

export type TravelStay = {
  sectionTitle: string;
  image: string;
  info1: Info1;
  info2: Info2;
}

export type RegistryDetails = {
  sectionTitle: string;
  text: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}


export type DetailsBodyProps = {
  hero: HeroType;
  invitation: Invitation;
  galleryImage: string;
  eventDetails: EventDetails;
  travelStay: TravelStay;
  registry: RegistryDetails;
}

export type DetailsState = {
  data: {
    hero: HeroType;
    invitation: Invitation;
    galleryImage: string;
    eventDetails: EventDetails;
    travelStay: TravelStay;
    registry: RegistryDetails;
  } | null;
  loading: boolean;
  error: string | null;
}

// ===== RSVP FEATURE =====
// Base guest type for API and storage
export type Guest = {
  id: string;
  name: string;
  attending: boolean;
}

// Extended type for form state management
export type FormGuest = {
  id: number; // Temporary ID for React keys
  name: string;
  attending: boolean | null; // Null means not selected yet
}

export type RSVPData = {
  id?: string;
  name: string;
  email: string;
  guests: Guest[];
  message: string;
  submittedAt?: string;
}

export type RSVPState = {
  data: RSVPData | null;
  loading: boolean;
  error: string | null;
  success: boolean;
}


