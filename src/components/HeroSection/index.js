import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import {
    ArrowForward,
    ArrowRight,
    ButtonHero,
    HeroBg,
    HeroBtnWrapper,
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroP,
    VideoBg,
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
                    Here, you can discover more about me, my social media presence, and explore the projects I have
                    worked on.
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
                        About me{hover ? <ArrowForward /> : <ArrowRight />}
                    </ButtonHero>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
