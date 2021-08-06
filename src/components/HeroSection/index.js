import React, { useState } from 'react';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowRight,
  ArrowForward,
} from './HeroElements';
import Video from '../../assets/videos/video.mp4';
const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for new account today and recieve $250 in credit towords your
          next payment.
        </HeroP>
        <HeroBtnWrapper>
          <button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
            Get Started
            {hover ? <ArrowForward /> : <ArrowRight />}
          </button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
