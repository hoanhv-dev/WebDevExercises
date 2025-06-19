import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { DetailsBodyProps } from "../types";

// Base selector
export const selectDetailsData = (
  state: RootState
): DetailsBodyProps | undefined =>
  state.api.queries?.["getDetails(undefined)"]?.data as
    | DetailsBodyProps
    | undefined;

// Individual selectors with proper default values
export const selectHero = createSelector(
  [selectDetailsData],
  (detailsData) =>
    detailsData?.hero || {
      title: "Welcome",
      image: "/default-hero.jpg", // Add a default image path
    }
);

export const selectInvitation = createSelector(
  [selectDetailsData],
  (detailsData) =>
    detailsData?.invitation || {
      text: "Join us for our special day",
      buttonText: "RSVP Now",
      buttonLink: "/rsvp",
    }
);

export const selectGalleryImage = createSelector(
  [selectDetailsData],
  (detailsData) => detailsData?.galleryImage || "/default-gallery.jpg"
);

export const selectEventDetails = createSelector(
  [selectDetailsData],
  (detailsData) =>
    detailsData?.eventDetails || {
      left: {
        date: "Saturday, January 1, 2025",
        venue: "Venue Name, City",
        ceremony: "4:00 PM",
        reception: "6:00 PM",
      },
      right: {
        musicalGuest: "Live Band",
        dinner: "Buffet Dinner",
      },
    }
);

export const selectTravelStay = createSelector(
  [selectDetailsData],
  (detailsData) =>
    detailsData?.travelStay || {
      sectionTitle: "Travel & Stay",
      image: "/default-travel.jpg",
      info1: {
        image: "/default-info1.jpg",
        text: "Information about travel arrangements",
      },
      info2: {
        image: "/default-info2.jpg",
        text: "Information about accommodations",
      },
    }
);

export const selectRegistry = createSelector(
  [selectDetailsData],
  (detailsData) =>
    detailsData?.registry || {
      sectionTitle: "Gift Registry",
      text: "Your presence is the best gift we could ask for.",
      buttonText: "View Registry",
      buttonLink: "/registry",
      image: "/default-registry.jpg",
    }
);
