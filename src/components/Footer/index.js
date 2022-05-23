import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterLinkScroll,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Navigatie</FooterLinkTitle>
              <FooterLinkScroll
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Over mij
              </FooterLinkScroll>
              <FooterLinkScroll
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Projecten
              </FooterLinkScroll>
              <FooterLinkScroll
                to="socials"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Mijn socials
              </FooterLinkScroll>
              <FooterLinkScroll
                to="cv"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                CV
              </FooterLinkScroll>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Handige links</FooterLinkTitle>
              <FooterLink href="//www.google.com" target="_blank">
                Google
              </FooterLink>
              <FooterLink href="//www.pexels.com" target="_blank">
                Pexels
              </FooterLink>
              <FooterLink href="//undraw.co/illustrations" target="_blank">
                unDraw
              </FooterLink>
              <FooterLink href="//www.freecodecamp.org" target="_blank">
                FreeCodeCamp
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Socials</FooterLinkTitle>
              <FooterLink href="//www.instagram.com/mike_caaij/">
                Instagram
              </FooterLink>
              <FooterLink href="//www.facebook.com/mike.vandercaaij/">
                Facebook
              </FooterLink>
              <FooterLink href="//www.linkedin.com/in/mike-van-der-caaij-7a2b36194/">
                LinkedIn
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              MVDC
            </SocialLogo>
            <WebsiteRights>&copy; 2020 All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//www.instagram.com/mike_caaij/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="//www.facebook.com/mike.vandercaaij/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="//www.youtube.com"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="//www.twitter.com"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="//www.linkedin.com/in/mike-van-der-caaij-7a2b36194/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
