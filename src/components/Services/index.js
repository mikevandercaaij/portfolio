import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ServicesCard, ServicesCardLink, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from "./ServicesElements";

const Services = () => {
    return (
        <ServicesContainer id="socials">
            <ServicesH1>Socials</ServicesH1>
            <ServicesWrapper>
                <ServicesCardLink href="//www.linkedin.com/in/mike-van-der-caaij-7a2b36194/" target="_blank">
                    <ServicesCard>
                        <ServicesIcon>
                            <FaLinkedin />
                        </ServicesIcon>
                        <ServicesH2>LinkedIn</ServicesH2>
                        <ServicesP>Click here to visit my LinkedIn profile.</ServicesP>
                    </ServicesCard>
                </ServicesCardLink>

                <ServicesCardLink href="//www.instagram.com/mike_caaij/" target="_blank">
                    <ServicesCard>
                        <ServicesIcon>
                            <FaInstagram />
                        </ServicesIcon>
                        <ServicesH2>Instagram</ServicesH2>
                        <ServicesP>Click here to visit my Instagram profile.</ServicesP>
                    </ServicesCard>
                </ServicesCardLink>
                <ServicesCardLink href="//www.github.com/mikevandercaaij/" target="_blank">
                    <ServicesCard>
                        <ServicesIcon>
                            <FaGithub />
                        </ServicesIcon>
                        <ServicesH2>GitHub</ServicesH2>
                        <ServicesP>Click here to visit my GitHub profile.</ServicesP>
                    </ServicesCard>
                </ServicesCardLink>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;
