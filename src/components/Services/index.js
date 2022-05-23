import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesCardLink,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
import { IconContext } from "react-icons/lib";

const Services = () => {
  return (
    <ServicesContainer id="socials">
      <ServicesH1>Mijn socials</ServicesH1>
      <ServicesWrapper>
        <ServicesCardLink
          href="//www.linkedin.com/in/mike-van-der-caaij-7a2b36194/"
          target="_blank"
        >
          <ServicesCard>
            <ServicesIcon>
              <FaLinkedin />
            </ServicesIcon>
            <ServicesH2>LinkedIn</ServicesH2>
            <ServicesP>
              Klik hier om mijn LinkedIn profiel te bekijken.
            </ServicesP>
          </ServicesCard>
        </ServicesCardLink>
        <ServicesCardLink
          href="//www.facebook.com/mike.vandercaaij/"
          target="_blank"
        >
          <ServicesCard>
            <ServicesIcon>
              <FaFacebook />
            </ServicesIcon>
            <ServicesH2>Facebook</ServicesH2>
            <ServicesP>
              Klik hier om mijn Facebook profiel te bekijken.
            </ServicesP>
          </ServicesCard>
        </ServicesCardLink>
        <ServicesCardLink
          href="//www.instagram.com/mike_caaij/"
          target="_blank"
        >
          <ServicesCard>
            <ServicesIcon>
              <FaInstagram />
            </ServicesIcon>
            <ServicesH2>Instagram</ServicesH2>
            <ServicesP>
              Klik hier om mijn Instagram profiel te bekijken.
            </ServicesP>
          </ServicesCard>
        </ServicesCardLink>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
