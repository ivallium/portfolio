import styled from "styled-components";
import { Link } from "react-router-dom";
import {FaGithub, FaInstagram, FaLinkedin, FaChessKing} from "react-icons/fa";

export const FooterIcon = styled(FaChessKing)`
    margin-left: 1rem;
    margin-top: 0.2rem;
`;


export const FooterText = styled.h2`
    color: white;
    font-size: 1.6rem;
    margin-left: 1.4rem;
`;

export const FooterContainer = styled.div`
    height: 80px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const FooterLogoContainer = styled.div`
    display: flex;
`;

export const FooterLogo = styled.a`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;

export const GithubIcon = styled(FaGithub)`
    margin-right: 0.5rem;
    margin-top: 0.2rem;
`;
export const LinkedinIcon = styled(FaLinkedin)`
    margin-right: 0.5rem;
    margin-top: 0.2rem;
`;

export const InstagramIcon = styled(FaInstagram)`
    margin-right: 0.5rem;
    margin-top: 0.2rem;
`;

