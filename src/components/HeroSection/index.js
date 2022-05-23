import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { animateScroll as scroll } from "react-scroll";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  ButtonHero,
} from "./HeroElements.js";

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
        <HeroH1>Mike van der Caaij</HeroH1>
        <HeroP>
          Welkom op mijn site! Hier vind je vooral wat informatie over mij en
          wat handige links (zoals socials, github etc).
        </HeroP>
        <HeroBtnWrapper>
          <ButtonHero
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Lees hier wat over mij {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonHero>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
