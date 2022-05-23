import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from "./NavbarElements.js";

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>
                            MVDC
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                                    About me
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="projects" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                                    Projects
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="socials" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                                    Socials
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="cv" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                                    CV
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink href="//github.com/mikevandercaaij" target="_blank">
                                GitHub
                            </NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
