import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
    FooterContainer,
    FooterLink,
    FooterLinkItems,
    FooterLinksContainer,
    FooterLinkScroll,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterWrap,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
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
                            <FooterLinkTitle>Navigation</FooterLinkTitle>
                            <FooterLinkScroll
                                to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                About me
                            </FooterLinkScroll>
                            <FooterLinkScroll
                                to="projects"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                Projects
                            </FooterLinkScroll>
                            <FooterLinkScroll
                                to="socials"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                Socials
                            </FooterLinkScroll>
                            <FooterLinkScroll to="cv" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                                CV
                            </FooterLinkScroll>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Socials</FooterLinkTitle>
                            <FooterLink href="//www.linkedin.com/in/mike-van-der-caaij-7a2b36194/">LinkedIn</FooterLink>
                            <FooterLink href="//www.instagram.com/mike_caaij/">Instagram</FooterLink>
                            <FooterLink href="//www.github.com/mikevandercaaij/">GitHub</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            MVDC
                        </SocialLogo>
                        <WebsiteRights>&copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
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
                            <SocialIconLink href="//www.youtube.com" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter">
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
