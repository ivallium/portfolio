import styled from "styled-components";
import { Container } from "../../../globalStyles";
import { Link } from "react-router-dom";
import { FaChessKing } from "react-icons/fa";

export const Nav = styled.div`
    background-image: url('./main.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 90vh;
    width: inherit;
    display: block;
    justify-content: center;
    align-items: top;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavContainer = styled.div`
    max-width: 100%
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;
    
    
    ${Container}
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;

export const NavIcon = styled(FaChessKing)`
    margin-right: 0.5rem;
    margin-top: 0.2rem;
`;

export const MenuIcon = styled.div`
    display: none;
    @media screen and (max-width: 1400px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    } 
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    
    @media screen and (max-width: 1400px) {
        left: ${(props: { open: any; }) => props.open ? '0' : '-100%'};
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 95vh;
        position: absolute;
        top: 80px;
        opacity: 1;
        transition: all 0.8s ease;
    } 
`;

export const NavItem = styled.div`
    height: 80px;
    border-bottom: 2px solid transparent;
    display: flex;
    
    &:hover {
        border-bottom: 2px solid white;
    }
    
    @media screen and (max-width: 1400px) {
        width: 100%;
        
        &:hover {
            border: none;
        }
    } 
`;

export const NavLink = styled(Link)`
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0.5rem 1.5rem;
    
    @media screen and (max-width: 1400px) {
        text-align: center;
        display: table;
        width: 100%;
        
        &:hover {
            font-size: 1.4rem;
            transition: all 0.3s ease;
        }
    } 
`;