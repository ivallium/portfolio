import styled, { css } from "styled-components";

export const Content = styled.div`
    display: block;
    text-align: center;
    margin: auto;
    padding: 10rem; 
    
    @media screen and (max-width: 1400px) {
        display: block;
        transition: all 0.5s ease-out;
        opacity: 1;
        padding: 5rem;
        
        ${(props: { open: any; }) => props.open && css`
            opacity: 0;
        `};
    } 
    
    @media screen and (max-width: 960px) {
        display: block;
        transition: all 0.5s ease-out;
        opacity: 1;
        padding: 0;
        
        ${(props: { open: any; }) => props.open && css`
            opacity: 0;
        `};
    } 
`;

export const Heading = styled.h2`
    color: white;
    font-size: 3rem;
    margin: 10px;
`;

export const JobTitle = styled.h2`
    color: white;
    font-size: 2rem;
     margin: 10px;

`;

export const Description = styled.h5`
    color: white;
    font-size: 1.4rem;
    margin: 10px;
    max-width: 900px;
    display: inline-grid;
`;

export const JobLink = styled.a`
    color: white;
    display: contents;
    font-size: 1.4rem;
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: white; 
    
    :hover {
        cursor: pointer;
        text-decoration: underline;
        text-decoration-color: white; 
        text-decoration-thickness: 3px;
    }
`;