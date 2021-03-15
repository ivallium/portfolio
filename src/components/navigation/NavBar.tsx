import React, {useState} from 'react';
import {MenuIcon, Nav, NavbarContainer, NavContainer, NavIcon, NavItem, NavLink, NavLogo, NavMenu} from "./elements/Nav";
import {FaBars, FaTimes} from "react-icons/all";
import { IconContext } from "react-icons/lib";
import {Content, Description, Heading, JobLink, JobTitle} from "./elements/Content";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <IconContext.Provider value={{ color: "#fff"}}>
            <NavContainer>
                <Nav>

                    <NavbarContainer>
                        <NavLogo to={"/#"}>
                            <NavIcon/>
                        </NavLogo>
                        <MenuIcon onClick={handleOpen}> {open ? <FaTimes/> : <FaBars/>} </MenuIcon>

                        <NavMenu open={open} onClick={handleOpen}>
                            <NavItem>
                                <NavLink to={"/"}>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={"/projects"}>Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={"/about"}>About</NavLink>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>

                    <Content open={open}>
                        <Heading>Thomas Ivall</Heading>
                        <JobTitle>Software Engineer</JobTitle>
                        <Description>
                            A tech-head, versed in React, TypeScript & Java, also enjoys cycling, skateboarding & snowboarding.
                            An adventurous and sporty guy living in Reading.
                            Currently a Front Office Metals Developer at <JobLink href={"https://www.stonex.com/"}>StoneX</JobLink>
                        </Description>
                    </Content>

                </Nav>
            </NavContainer>
        </IconContext.Provider>
    );
};

export default NavBar;