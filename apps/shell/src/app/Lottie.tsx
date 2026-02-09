import { useLottie, LottieOptions } from 'lottie-react';
import Traveller from '@/assets/travel_easy.json';

const options: LottieOptions = {
  animationData: Traveller,
  autoplay: true,
  loop: true,
};

const Lottie = ({ ...props }) => {
  const { View } = useLottie(options);
  return <div {...props}>{View}</div>;
};

export default Lottie;
