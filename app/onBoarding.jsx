import { useRouter } from 'expo-router';
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import onBoarding from "../assets/images/onBoarding.png";
import onBoarding2 from "../assets/images/onBoarding2.png";
import onBoarding3 from "../assets/images/onBoarding3.png";


const onBoardingScreen = () => {
  const router = useRouter();

  return (
<Onboarding
  onSkip={() => router.replace("/signup")}
  onDone={() => router.replace("/signup")}
  subTitleStyles={{paddingHorizontal: 15}}
  pages={[
    {
      backgroundColor: '#5352ED',
      image: <Image source={onBoarding} 
      style = {{width: 300, height: 300}} />,
      title: 'Express Yourself.',
      subtitle: 'Express your thoughts and connect anonymously in the world of utopia.',
    },
    {
      backgroundColor: '#8b5cf6',
      image: <Image source={onBoarding2} 
      style = {{width: 300, height: 300}} />,
      title: 'Anonymously.',
      subtitle: 'Be yourself without any fear of judgement and connect with like-minded people.',
    },
    {
      backgroundColor: '#161622',
      image: <Image source={onBoarding3} 
      style = {{width: 400, height: 400}} />,
      title: 'Share Quotes.',
      subtitle: "Make your thoughts to quotes and easily share it on Instagram stories, Twitter (X), etc.",
    },
  ]}
/>
  )
}

export default onBoardingScreen