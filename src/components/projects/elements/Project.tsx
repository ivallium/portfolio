import styled from "styled-components";

export const ProjectContainer = styled.div`
    min-height: 250px;
    text-align: center;
    border-radius: 18px;
    background: white;
    margin: 2rem auto;
    max-width: 70%;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.5);
    display: grid;
    grid-template-rows: 250px 80px 80px;
    background-color: ${(props: { background: string; }) => props.background};

`;
export const ProjectTitle = styled.h2`
    text-align: center;
    color: white;
`;
export const ProjectDescription = styled.h5`
    margin: 1.3rem;
    text-align: center;
`;
export const ProjectImage = styled.img`
    max-width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-size: cover;
    margin: auto;
`;
