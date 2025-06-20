import OurStoryBody from "../components/OurStoryBody";
import { useGetOurStoryQuery } from "../services/api";
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
const { data: ourStoryData} = useGetOurStoryQuery(undefined);
  
  // Use the fetched data if available, otherwise use default data
  const storyData: OurStoryData = ourStoryData || defaultOurStoryData;


  return (
    <div className="pt-16 md:pt-20">
      <OurStoryBody {...storyData} />
    </div>
  );
} 
