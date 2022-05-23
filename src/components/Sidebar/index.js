import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements.js";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            Over mij
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>
            Projecten
          </SidebarLink>
          <SidebarLink to="socials" onClick={toggle}>
            Mijn socials
          </SidebarLink>
          <SidebarLink to="cv" onClick={toggle}>
            CV
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute
            href="http://github.com/mikevandercaaij"
            target="_blank"
          >
            GitHub
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
