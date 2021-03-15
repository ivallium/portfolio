import React from 'react';
import {
    FooterContainer,
    FooterLogo,
    FooterLogoContainer, FooterIcon,
    GithubIcon, InstagramIcon,
    LinkedinIcon
} from "./elements/FooterContainer";
import {NavIcon, NavLogo} from "../navigation/elements/Nav";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLogo target={"_blank"} href={"https://github.com/ivallium"}>
                <FooterIcon/>
            </FooterLogo>

            <FooterLogoContainer>
                <FooterLogo target={"_blank"} href={"https://github.com/ivallium"}>
                    <GithubIcon/>
                </FooterLogo>
                <FooterLogo target={"_blank"} href={"https://www.linkedin.com/in/thomasivall/"}>
                    <LinkedinIcon/>
                </FooterLogo>
                <FooterLogo target={"_blank"} href={"https://www.instagram.com/tomivall"}>
                    <InstagramIcon/>
                </FooterLogo>
            </FooterLogoContainer>
        </FooterContainer>
    );
};

export default Footer;
