import OurStoryBody from "../components/OurStoryBody";
import { useGetOurStoryQuery } from "../services/api";
import { useSelector } from "react-redux";
import { selectOurStoryData } from "../storage/selectors/ourStorySelector";
import type { OurStoryData } from "../storage/types";

// Default data in case API fails
const defaultOurStoryData: OurStoryData = {
  topImage: '',
  title: 'Our Love Story',
  story1: 'Our journey began when we first met...',
  story2: 'As time passed, our love grew stronger...',
  imageSection: {
    backImage: '',
    frontImage: ''
  },
  quote: {
    text1: 'In all the world, there is no heart for me like yours.',
    text2: 'In all the world, there is no love for you like mine.',
    link: '/gallery'
  }
};

export default function OurStory() {
  const { isLoading, isError } = useGetOurStoryQuery(undefined);
  const ourStoryData = useSelector(selectOurStoryData);

  // Merge default data with fetched data
  const storyData: OurStoryData = {
    ...defaultOurStoryData,
    ...(ourStoryData || {})
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-pulse text-xl">Loading our story...</div>
      </div>
    );
  }


  if (isError) {
    console.error('Error loading our story data');
  }

  return (
    <div className="pt-16 md:pt-20">
      <OurStoryBody {...storyData} />
    </div>
  );
} 
